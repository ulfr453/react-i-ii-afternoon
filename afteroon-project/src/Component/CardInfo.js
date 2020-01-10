import React, {Component} from 'react'


class CardInfo extends Component{
    constructor(){
        super();
        this.class= {

        }
    }

    render(){
        let list = this.props.card.favoriteMovies.map((element,index) => {
            return (
                <li className = 'li-1' key= {index}>{element}</li>
            )
        })
        return (
            <div className= 'maintext'>
                <header className= 'page-number'>{this.props.card.id}/25</header>
                
                <p className= 'Name'> {this.props.card.name.first} {this.props.card.name.last}</p>
                <p> 
                    <span className= 'From'> From: </span>
                         <span className= 'fromtxt'>{this.props.card.city} {this.props.card.country}</span>
                    
                </p>
                <p>
                    <span className= 'Job-Title'> Job Title: </span>
                        <span className= 'jobtxt'>{this.props.card.title}</span>
                </p>
                <p>
                    <span className= 'Employer'> Employer:</span>
                        <span className= 'emptxt'> {this.props.card.employer}</span>
                </p>
                    <p className= 'movies'> Favorite Movies: </p>
                <ol className= 'Movies'>
                    <span>{list}</span>
                    
                </ol>



            </div>
        )
    }




}

export default CardInfo