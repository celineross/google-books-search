import React from "react";

function BookCard(props) {
    return (
        <div className="card" style={{ margin: "5px" }}>
            <div className="img-container">
                <img alt={props.title} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Title:</strong> {props.title}
                    </li>
                    <li>
                        <strong>Author:</strong> {props.author}
                    </li>
                    <li>
                        <strong>Synopsis:</strong> {props.synopsis}
                    </li>
                    <li>
                        <strong>Title:</strong> {props.title}
                    </li>
                </ul>
            </div>
            <button
                type="button"
                className="btn btn-dark"
                onClick={props.handleClick}
                key={props.id}
            > {props.toggle}
            </button>
        </div>
    )
}

export default BookCard;