import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';
import { animateScroll as scroll } from 'react-scroll';
import { push } from 'connected-react-router';

import { getGenres } from '../../actions';
import Header from './Header';
import Pagination from './Pagination';
import Spinner from './Spinner';
import MoviesList from './MoviesList';
import SortBy from './SortBy';

export class Genres extends Component {
	componentDidUpdate = () => {
		// Identify selected genre's Id
		let genreId = null;
		try {
			genreId = this.props.genres.find(
				item => item.name.toLowerCase() === this.props.selected
			).id;
		} catch {
			return false;
		}

		window.onpopstate = () => {
			// When user uses back button in a browser rerender a movies list
			scroll.scrollToTop({ smooth: 'easeOutQuint' });
			this.props.getGenres(
				genreId,
				this.props.location.query.page,
				this.props.sortBy
			);
		};
	};

	backClick = () => {
		// Move a user to a new page location, identify clicked genre's Id and rerender new page of movies list
		const newPage = this.props.page - 1;
		const genreId = this.props.genres.find(item =>
			item.name.toLowerCase().includes(this.props.selected)
		).id;
		this.props.push(
			`/genres/${this.props.selected.toLowerCase()}?page=${newPage}`
		);
		scroll.scrollToTop({ smooth: 'easeOutQuint' });
		this.props.getGenres(genreId, newPage, this.props.sortBy);
	};

	nextClick = () => {
		// Move a user to a new page location, identify clicked genre's Id and rerender new page of movies list
		const newPage = this.props.page + 1;
		const genreId = this.props.genres.find(item =>
			item.name.toLowerCase().includes(this.props.selected)
		).id;
		this.props.push(
			`/genres/${this.props.selected.toLowerCase()}?page=${newPage}`
		);
		scroll.scrollToTop({ smooth: 'easeOutQuint' });
		this.props.getGenres(genreId, newPage, this.props.sortBy);
	};

	render() {
		return (
			<Wrapper>
				<Header name={this.props.selected} />
				<SortBy />
				<LazyLoad overflow height={100} offset={100} placeholder={<Spinner />}>
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
		location: state.router.location,
		selected: state.config.selected,
		page: state.movies.page,
		genres: state.config.genres,
		sortBy: state.config.sortBy.value,
	};
};

export default connect(mapStateToProps, { push, getGenres })(Genres);

const Wrapper = styled.div`
	width: 100%;
	min-height: 230rem;
`;
