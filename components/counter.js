import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { decr, incr} from '../actions/index';

class Counter extends Component {
    constructor(){
        super();
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    increase(){
        this.props.dispatch(incr());
    }

    decrease(){
        this.props.dispatch(decr());
    }
    render(){
        return (
            <div className="container">
                <div className="counter_header">
                    <h1>Counter App</h1>
                </div>
                <div className="counter_block">
                    <div className="counter_button">
                        <button className="btn btn-success" onClick={() => this.increase()}>Add</button>
                    </div>
                    <h1 className="counter_value">{this.props.count}</h1>
                    <div className="counter_button">
                        <button className="btn btn-success" onClick={() => this.decrease()}>Minus</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.count)
    return {count: state.count.start}
}

export default connect(mapStateToProps)(Counter);