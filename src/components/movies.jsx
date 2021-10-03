import React from "react";
import MovieList from "./movieList";
import Stars from "./stars";

class Movies extends React.Component {
  render() {
    return (
      <div>
        <section class="container">
          <ul class="list-unstyled">
            <li class="media">
              <img
                src={this.props.image}
                id="movie-image"
                className="img-fluid"
              ></img>
              <div class="media-body">
                <h5 class="mt-0 mb-1" id="title">
                  {this.props.title}
                </h5>
                <p id="about">{this.props.about}</p>
              </div>
            </li>

            <div class="row" id="data">
              <div class="col-sm">
                <Stars />
              </div>
              <div class="col-sm">{this.props.rating}</div>
              <div class="col-sm">{this.props.length}</div>
              <div class="col-sm">{this.props.year}</div>
            </div>
          </ul>
        </section>
      </div>
    );
  }
}

export default Movies;
