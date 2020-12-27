import React from "react";

function BookCard({ book }) {
    return (
        <div className="card" style={{ margin: "5px" }}>
            <div style={{ textAlign: "center", margin: "5px" }} className="img-container">
                <img alt={book.title} src={book.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Title:</strong> {book.title}
                    </li>
                    <li>
                        <strong>Author:</strong> {book.author}
                    </li>
                    <li>
                        <strong>Synopsis:</strong> {book.synopsis}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BookCard;