// import cx from 'classnames';
import React, { Component } from 'react';

export default class LikeDislike extends Component () {
  state = {
    clickLike: false,
    clickDislike: false,
    like: 100,
    dislike: 25,
    likeClass: "like-button",
    dislikeClass: "dislike-button"
  }

  componentDidUpdate(){
    
  }

  likeClick = () => {
    if (!this.state.clickLike) {
      this.setState(state => ({
        clickLike: !state.clickLike,
        like: state.like += 1,
        likeClass: "liked"
      }))
    } else {
      this.setState(state => ({
        clickLike: !state.clickLike,
        like: state.like -= 1,
        likeClass: "like-button"
      }))
    }
  }

  dislikeClick = () => {
    if (!this.state.clickDislike) {
      this.setState(state => ({
        clickLike: !state.clickDisLike,
        like: state.dislike += 1,
        likeClass: "disliked"
      }))
    } else {
      this.setState(state => ({
        clickLike: !state.clickDisLike,
        like: state.dislike -= 1,
        likeClass: "dislike-button"
      }))
    }
  }

  render() {


    return (
      <>
        <div>
          <h2>Like/Dislike</h2>
        </div>
        <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>

        <button className={this.state.likeClass}
          onClick={this.likeClick()}>
          Like | {this.state.like}
        </button>
        <button className={this.state.dislikeClass}
          onClick={this.dislikeClick()}>
          Dislike | {this.state.dislike}
        </button>
      </>
    );
  }
}
