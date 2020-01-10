import React, {Component} from 'react'


class Button extends Component{
    constructor(){
        super();
        this.state= {

        }
    }
    render(){
        return(
            <div className= 'butt-div'>
                <button className= 'previous' onClick={()=> this.props.handlePrevious()}> Previous </button>
                <div className= 'mid-butt'>
                    <button className= 'edit'> Edit </button>
                    <button className= 'delete'> Delete </button>
                    <button className= 'new'> New </button>
                </div>
                <button className= 'next' onClick={()=> this.props.handleNext()} > Next </button>
            </div>
        )
    }



}

export default Button