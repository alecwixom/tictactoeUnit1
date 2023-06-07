import './square.css'
import React from "react";

const Square = (props) => {
    console.log(props.squares, props.player);
    return (
        <div className="square">
            {props.squares}
            {props.player}
        </div>
    )
}
export default Square;