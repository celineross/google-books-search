import React from "react";

function FavBtn(props) {
    return (
      <button className="save-btn btn btn-dark" tabIndex="0" onClick={() => props.handleFavorite(props.bookData)}>
        Favorite
      </button>
    );
  }
  
  export default FavBtn;