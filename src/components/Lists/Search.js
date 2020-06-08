import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';
import LazyLoad from 'react-lazyload';
import { push } from 'connected-react-router';

import { getSearch } from '../../actions';
import Header from './Header';
import Pagination from './Pagination';
import Spinner from './Spinner';
import MoviesList from './MoviesList';

export class Search extends Component {
	componentDidUpdate() {
		window.onpopstate = () => {
			// On browsers back button click, rerender a movies list
			this.props.getSearch(this.props.search, this.props.location.query.page);
		};
	}

	backClick = () => {
		// Move a user to a new page location and rerender new page of movies list
		const newPage = this.props.page - 1;
		this.props.push(`/search/${this.props.search}?page=${newPage}`);
		scroll.scrollToTop({ smooth: 'easeOutQuint' });
		this.props.getSearch(this.props.search, newPage);
	};

	nextClick = () => {
		// Move a user to a new page location and rerender new page of movies list
		const newPage = this.props.page + 1;
		this.props.push(`/search/${this.props.search}?page=${newPage}`);
		scroll.scrollToTop({ smooth: 'easeOutQuint' });
		this.props.getSearch(this.props.search, newPage);
	};

	render() {
		return (
			<Wrapper>
				<Header name={this.props.selected} />
				<LazyLoad height={100} offset={100} placeholder={<Spinner />}>
					<MoviesList />
				</LazyLoad>
				<Pagination
					onClickPrevious={this.backClick}
					onClickNext={this.nextClick}
				/>
			</Wrapper>
		);
	}
}

const mapStateToProps = state => {
	return {
		selected: state.config.selected,
		page: state.movies.page,
		search: state.config.search,
		location: state.router.location,
	};
};

export default connect(mapStateToProps, { push, getSearch })(Search);

const Wrapper = styled.div`
	width: 100%;
	min-height: 230rem;
`;
