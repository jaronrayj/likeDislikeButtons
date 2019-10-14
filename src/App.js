// import cx from 'classnames';
import React, { useState } from 'react';

const LikeDislike = () => {
  const [clickLike, setClickLike] = useState(false);
  const [clickDislike, setClickDislike] = useState(false);
  const [like, setLike] = useState(100);
  const [dislike, setDislike] = useState(25);
  const [likeClass, setLikeClass] = useState('like-button');
  const [dislikeClass, setDislikeClass] = useState('dislike-button');



  function likeClick() {
    if (!clickLike) {
      setClickLike(!clickLike)
      setLike(like + 1)
      setLikeClass('liked')
    } else {
      setClickLike(!clickLike)
      setLike(like - 1)
      setLikeClass('like-button')
    }
  }

  function dislikeClick() {
    if (!clickDislike) {
      setClickDislike(!clickDislike)
      setDislike(dislike + 1)
      setDislikeClass('disliked')
    } else {
      setClickDislike(!clickDislike)
      setDislike(dislike - 1)
      setDislikeClass('dislike-button')
    }
  }

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
                        font-size: 1rem;
                        padding: 5px 10px;
                        color: #1565c0;
                    }
                `}</style>

      <button className={likeClass}
        onClick={() => likeClick()}>
        Like | {like}
      </button>
      <button className={dislikeClass}
        onClick={() => dislikeClick()}>
        Dislike | {dislike}
      </button>
    </>
  );
}

export default LikeDislike;