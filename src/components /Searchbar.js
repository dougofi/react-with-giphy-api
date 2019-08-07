import React from 'react';
import '../App.css';



class Searchbar extends React.Component{
    render(){
        return(
            <div className="input-div">
                <input type="text" placeholder="search🔍" value={this.props.fieldValue} onChange={this.props.onChangeHandler}/>
            </div>
        )
    }
}

export default Searchbar;