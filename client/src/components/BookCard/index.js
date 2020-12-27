import React from "react";

function BookCard(props) {
    return (
        <div className="card" style={{ margin: "5px" }}>
            <div style={{ textAlign: "center", margin: "5px" }} className="img-container">
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
                </ul>
            </div>
        </div>
    )
}

export default BookCard;