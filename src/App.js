import React from 'react';
import './App.css';
import Searchbar from './components /Searchbar';
import Gif from './components /Gif';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      keyword: null,
      imglink1: null,
      imglink2: null,
      imglink3: null
    }
  }

onChangeHandler = (e) => {
    const current = e.target.value;
    this.setState({
      keyword: current
    })
  }

onSearchButtonClick  = () => {
    const api_key='dc6zaTOxFJmzC';
    const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.keyword}&api_key=${api_key}`;
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({
      imglink: data.data[0].images.fixed_height.url,
      imglink2: data.data[1].images.fixed_height.url,
      imglink3: data.data[2].images.fixed_height.url,
      imglink4: data.data[3].images.fixed_height.url,
    }) ) 
    .catch(e => console.log('error', e));

    this.setState({
      keyword:''
    })
  }


  render(){
    return(
      <div className="App">
          <div className="header">
            <Searchbar  onChangeHandler={this.onChangeHandler}  handleClick={this.onSearchButtonClick} fieldValue={this.state.keyword}/>
          </div>
          <div >
              <hr />
              <h1>Matches</h1>
              <hr />
          </div>
          <div className="Gifarea">
            <Gif imglink={this.state.imglink} keyword={this.state.keyword}></Gif>
            <Gif imglink={this.state.imglink2} keyword={this.state.keyword}></Gif>
            <Gif imglink={this.state.imglink3} keyword={this.state.keyword}></Gif>
            <Gif imglink={this.state.imglink4} keyword={this.state.keyword}></Gif>
          </div>
      </div>
      
    )
  }
} 

export default App;
