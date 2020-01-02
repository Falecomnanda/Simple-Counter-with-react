
import React from 'react';

const CardNumber = (props) => {
    const salida = props.number >=0 ? props.number : <i className={props.icon} />;
    return (
        <div className="card">
            <div className="card-body">
                {salida}
            </div>
        </div>
    )
}
export default CardNumber;

