import React from 'react';

class Searchbutton extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.handleClick}>Search</button>
            </div>
        )
    }
}

export default Searchbutton;
