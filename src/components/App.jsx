import React, { Component } from 'react';
import CSS from './App.module.css';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchImages } from 'api';
import { Loader } from './Loader';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    error: false,
    totalHits: 0,
  };

  componentDidUpdate(props, prevState) {
    if (this.state.query !== prevState.query || this.state.page !== prevState.page) {
      this.loadImages();
    }
  }

  handleSearchSubmit = (query) => {
    this.setState({ query, images: [], page: 1, isLoading: true, error: null });
  };

  loadImages = async () => {
    const { query, page } = this.state;

    try {
      this.setState({ isLoading: true })
      const data = await fetchImages(query, page);
      if (data.hits.length === 0) {
        return;
      }

      this.setState((prevState) => ({
        images: [...prevState.images, ...data.hits],
        totalHits: data.totalHits,
      }));
    } catch (error) {
      this.setState({ error: true });
      console.error('Error loading images:', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };



  render() {
    const { images, error, isLoading } = this.state;

    return (
      <div className={CSS.App}>
        <SearchBar onSubmit={this.handleSearchSubmit} />
        {error && (
          <b>Oops! Something went wrong! Please try reloading this page!</b>
        )}
        <ImageGallery images={images} />
        {isLoading && <Loader />}
        {images.length > 0 &&
          !isLoading &&
           this.state.page < Math.ceil(this.state.totalHits / 12) &&
          (<Button onClick={this.loadMore} />
          )}
        
      </div>
    );
  }
}

