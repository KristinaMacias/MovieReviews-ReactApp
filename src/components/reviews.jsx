import React from "react";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addReview: "", reviews: [{ name: "" }] };
    this.addValue = this.addValue.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  addValue(evt) {
    evt.preventDefault();

    let reviews = this.state.reviews;
    let addReview = this.state.addReview;
    reviews.push({ name: addReview });
    this.setState({ reviews: reviews });
    console.log(reviews);
  }
  updateInput(evt) {
    this.setState({ addReview: evt.target.value });
  }

  render() {
    return (
      <div class="container mt-5 mb-5" id="review-box">
        <div class="row">
          <div class="col-sm">
            <h1 id="leave-review-head">Leave a Review:</h1>
            <textarea
              id="tex-box"
              type="text"
              rows="4"
              cols="50"
              placeholder=" Enter review here!"
              onChange={this.updateInput}
            />
            <br />
            <br />
            <button
              className="btn btn-primary"
              value="Submit Review"
              onClick={this.addValue}
            >
              Submit Review
            </button>
          </div>
          <div class="col-sm">
            <h1 id="reviews-head">Reviews:</h1>
            <h1>{this.state.value}</h1>

            <p>
              {
                //map array data
                this.state.reviews.map(function (val) {
                  return <p key={val.name}>{val.name}</p>;
                })
              }
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Reviews;
