import React from 'react';

class Gif extends React.Component{
    render(){
        return(
        <div className="Card">
        {this.props.imglink ? 
            <img src={this.props.imglink} alt={this.props.keyword}/> : ''
        }
        </div>
        )
    }
       
} 
    

export default Gif;