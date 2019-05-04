import React, {Component} from 'react';

class ArrowFunAsClassPro extends Component{
    constructor(){
        super()
        this.state = {
            message: 'Hello'
        }
    }

    clickHandler = () => {
        this.setState({
            message:'Good Bye'
        })
    }


    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick ={ this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default ArrowFunAsClassPro;