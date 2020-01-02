import React from 'react';

import CardNumber from './cardnumber';

class Card extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <h1>{this.props.name}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <CardNumber icon={"fa fa-clock-o"} />
                        <CardNumber number={this.props.num4} />
                        <CardNumber number={this.props.num3} />
                        <CardNumber number={this.props.num2} />
                        <CardNumber number={this.props.num1} />
                    </div>
                </div>
            </div>
        )
    }
}
export default Card;