import React, { Component } from "react";
import { movies } from "./getMovies";
import axios from 'axios'
export default class List extends Component {
  constructor() {
    super();
    this.state = {
      hover: "",
      parr:[1],
    };
  }

    handleEnter = (id) => {
        this.setState({
          hover:id
      })
  };

  handleLeave = () => {
      this.setState({
        hover: '',
      });
  };
  async componentDidMount()
  {
    let res= await axios.get("https://api.themoviedb.org/3/movie/550?api_key=4cb4c44433f75c721fa2b130d2e1c438&language=en-US&page=1");
    console.log(res.data);

  }
  render() {
    let movie = movies.results; //fetch
    return (
      <>
        {movie.length == 0 ? (
          <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div>
            <h3 className="text-center">
              <strong>Trending</strong>
            </h3>
            <div className="movies-list">
              {movie.map((movieObj) => (
                <div
                  className="card movie-card"
                  onMouseEnter={() => this.handleEnter(movieObj.id)}
                  onMouseLeave={this.handleLeave}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                    className="card-img-top banner-img"
                    alt="..."
                    style={{ height: "40vh" }}
                  />
                  {/* <div className="card-body "> */}
                  <h5 className="card-title movie-title">
                    {movieObj.original_title}
                  </h5>
                  {/* <p className="card-text movie-text">
                        {movieObj.overview}
                      </p> */}
                  <div className="button-wrapper">
                    {this.state.hover == movieObj.id && 
                      <a href="#" class="btn btn-danger movie-button">
                        Add to Favourites
                      </a>
                    }
                  </div>
                </div>
              ))}
            </div>
            <div className="pagination">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className ="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  {
                    this.state.parr.map((pageNum)=>(
                      <li>
                        <a className="page-item">
                          <a className="page-link" href="#"></a>
                        </a>
                      </li>
                    ))
                    }
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </>
    );
  }
}
