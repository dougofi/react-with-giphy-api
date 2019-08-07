import React from 'react';
import './App.css';
import Searchbar from './components /Searchbar';
import Gif from './components /Gif';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      keyword: '',
      imgs: [
        {}
      ]
    }
  }

  onChangeHandler = (e) => {
    const current = e.target.value;
    this.setState({
      keyword: current
    })
    
      const api_key='dc6zaTOxFJmzC';
      const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.keyword}&api_key=${api_key}`;
      fetch(url)
      .then(response => response.json())
      .then(data => data.forEach(data => {
        console.log(data.element.images.fixed_height.url)
      })
    
    )
      .catch(e => console.log('error',e ))
    
    
   
  
  }

   
  
  
  
  render(){
    return(
      <div className="App">
          <div className="header">
            <Searchbar  onChangeHandler={this.onChangeHandler} fieldValue={this.state.keyword} />
          </div>
          <div >
              <hr />
              <h1>Matches</h1>
              <hr />
          </div>
          <div className="Gifarea">
             <Gif imglink={this.state.imglink}/>
          </div>
      </div>
      
    )
  }
} 

export default App;
