import React, {Component} from 'react';

class BindInClass extends Component{
    constructor(){
        super()
        this.state = {
            message: 'Hello'
        }

        this.clickHandler=this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message:'Good Bye'
        })
        console.log(this)
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

export default BindInClass;