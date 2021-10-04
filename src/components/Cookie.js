import React from 'react'
import '../App.css'


export default function Cookie(props){
    return (
              <div className="card">
                <img alt={props.details.name} src={props.details.image} />
                <p>{props.details.name}</p>
                <p className="price">{props.details.price} KD</p>
                <p className="button"><button>Add to Cart</button></p>
              </div>
    )
}
