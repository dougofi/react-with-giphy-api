import React from 'react';
import '../App.css';
import Searchbutton from './Searchbutton';



class Searchbar extends React.Component{
    render(){
        return(
            <div className="input-div">
                <input type="text" placeholder="search🔍" value={this.props.fieldValue} onChange={this.props.onChangeHandler}/>
                <Searchbutton handleClick={this.props.handleClick}/>
            </div>
        )
    }
}

export default Searchbar;