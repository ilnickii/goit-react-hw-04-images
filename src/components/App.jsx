import React, { useEffect, useState } from 'react';
import CSS from './App.module.css';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchImages } from 'api';
import { Loader } from './Loader';

export const App = () => {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [totalHits, setTotalHits] = useState(0);

    const handleSearchSubmit = (query) => {
        setQuery(query);
        setImages([]);
        setPage(1);
        setIsLoading(true);
        setError(false);
    };

    useEffect(() => {
        if (query.trim() === '') return;

        const loadImages = async () => {

            try {
                setIsLoading(true)
                const data = await fetchImages(query, page);
                if (data.hits.length === 0) {
                    return;
                };

                setImages(prevImages => [...prevImages, ...data.hits]);
                setTotalHits(data.totalHits);
            } catch (error) {
                setError(true);
                console.error('Error loading images:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadImages();

    }, [query, page]);

    const loadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
      <div className={CSS.App}>
        <SearchBar onSubmit={handleSearchSubmit} />
        {error && (
          <b>Oops! Something went wrong! Please try reloading this page!</b>
        )}
        <ImageGallery images={images} />
        {isLoading && <Loader />}
        {images.length > 0 &&
          !isLoading &&
           page < Math.ceil(totalHits / 12) &&
          (<Button onClick={loadMore} />
          )}
        
      </div>
    );
};