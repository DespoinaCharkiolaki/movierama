import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/sidebar'
import MovieList from '../../components/movies/movielist';
import Loader from '../../components/loader';
import Alert from '../../components/alert';

class Home extends Component {

  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    const { user,
            setVote,
            revoke,
            movies,
            isLoaded,
            error,
            lastPageNumber,
            pageNumber,
            filterByUsername,
            loadMore,
            setSorting } = this.props;

    return (
      <div className="row justify-content-start">
        <div className="col-lg-3 col-md-12">
          <Sidebar setSorting={setSorting} />
        </div>
        <div className="col-lg-7 col-md-12">
          {!isLoaded ?
            <Loader label="Loading..."/>
            : error ?
              <Alert error={error} />
              :
              <React.Fragment>
                <MovieList
                    user={user ? user : null}
                    movies={movies}
                    filterByUsername={filterByUsername}
                    setVote={setVote}
                    revoke={revoke}
                 />
                  {!(lastPageNumber === (pageNumber + 1)) ?
                  <div className="row">
                    <div className="col-12">
                      <button
                        className="btn btn-primary m-4"
                        type="button"
                        onClick={loadMore}
                      >
                        Load More
                      </button>
                    </div>
                  </div> : null
                  }
              </React.Fragment>
          }
        </div>
      </div>
    );
  }
}

export default Home;
