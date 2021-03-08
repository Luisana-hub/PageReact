import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <p className="card-text">{props.cardDescription}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    );
}
export default Card;