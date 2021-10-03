import React from "react";
import Movies from "./movies";
import Reviews from "./reviews";

class MovieList extends React.Component {
  render() {
    let movieOne = {
      image:
        "https://www.themoviedb.org/t/p/w780/xKz6YaOvmnIJQ3MYIpnaa7FBaAB.jpg",
      title: "Men in Black",
      about:
        "After a government agency makes first contact with aliens in 1961, alien refugees live in secret on Earth by disguising themselves as humans. Men in Black (MIB) is a secret agency that polices these aliens, protects Earth from extraterrestrial threats, and uses memory-erasing neuralyzers to keep alien activity a secret. - Wikipedia",
      year: "1997",
      rating: "PG-13",
      length: "1h 38min",
    };

    let movieTwo = {
      image:
        "https://images.mubicdn.net/images/film/8801/cache-25593-1501017123/image-w1280.jpg",
      title: "Signs",
      about:
        "Everything that farmer Graham Hess (Mel Gibson) assumed about the world is changed when he discovers a message - an intricate pattern of circles and lines - carved into his crops. As he investigates the unfolding mystery, what he finds will forever alter the lives of his brother (Joaquin Phoenix) and children (Rory Culkin), (Abigail Breslin). A unique story that explores the mysterious real-life phenomena of crop signs and the effects they have on one man and his family.",
      year: "2002",
      rating: "PG-13",
      length: "1h 46min",
    };
    return (
      <div>
        <Movies {...movieOne} />
        <Reviews />
        <Movies {...movieTwo} />
        <Reviews />
      </div>
    );
  }
}

export default MovieList;
