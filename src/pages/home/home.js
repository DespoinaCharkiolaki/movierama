import React from 'react';
import Sidebar from '../../components/sidebar/sidebar'
import MovieList from '../../components/movies/movielist';

const Home = () => (
    <div className="row justify-content-start">
        <div className="col-lg-3 col-md-12">
            <Sidebar />
        </div>
        <div className="col-lg-6 col-md-12">
            <MovieList />
        </div>
    </div>
);

export default Home;
