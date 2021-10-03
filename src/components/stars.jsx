import React from "react";

class Stars extends React.Component {
  render() {
    return (
      <div class="wrapper">
        <h3 id="rating-head">Rating:</h3>
        <input class="form-check-input" type="radio" id="submit"></input>
        <input class="form-check-input" type="radio" id="star"></input>
        <input class="form-check-input" type="radio" id="star"></input>
        <input class="form-check-input" type="radio" id="star"></input>
        <input class="form-check-input" type="radio" id="star"></input>
      </div>
    );
  }
}
export default Stars;
