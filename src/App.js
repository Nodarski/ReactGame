import React, { Component } from 'react';
import car1 from './img/car1.jpg';
import car2 from './img/car2.jpg';
import car3 from './img/car3.jpg';
import car4 from './img/car4.jpg';
import car5 from './img/car5.jpg';
import car6 from './img/car6.jpg';
import car7 from './img/car7.jpg';
import car8 from './img/car8.jpg';
import car9 from './img/car9.jpg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'',
      score:0,
      highScore:0,
      imgArr:[car1, car2, car3, car4, car5, car6, car7, car8, car9],
      clickedArr:[],
      message: 'Click on any Picture to begin.. Dont forget it!'
    }

    this.shuffle = this.shuffle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.includes = this.includes.bind(this);


  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }


  includes(k) {
    for(var i=0; i < this.state.clickedArr.length; i++){
      if( this.state.clickedArr[i] === k || ( this.state.clickedArr[i] !== this.state.clickedArr[i] && k !== k ) ){
        return true;
      }
    }
    return false;
  }

  handleClick(event) {
    var selected = event.target.src;

    this.setState({ clickedArr: [...this.state.clickedArr, event.target.src] },()=> {
      console.log(this.state.clickedArr)
    })

    if(this.includes(selected) === true){
      setTimeout(()=> {
        this.setState({score:0, clickedArr:[], message:'Click on any Picture to begin.. Dont forget it!'});
        this.shuffle(this.state.imgArr);
        this.forceUpdate();
      }, 4000);
      this.setState({score:0, clickedArr:[], message:'WRONG!! YOULOOOSE'})
    
      
     
    
    }else{
      
      this.setState({score: this.state.score +1, message: 'Such a strong memory, oh my!'},()=>{
        if(this.state.highScore<this.state.score){
          this.setState({highScore:this.state.score});
        }
        if(this.state.score === 9){
          this.setState({message: 'CONGRATS, YOU HAVE WON!! play again.'})

          setTimeout(()=> {
            this.setState({score:0, clickedArr:[], message:'Click on any Picture to begin.. Dont forget it!'});
           
          }, 4000);
        }
        this.shuffle(this.state.imgArr)
        this.forceUpdate()
      });

    };
    
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Picture Memory Game</h1>
          <h2> Score:{this.state.score} Highscore:{this.state.highScore}</h2>
        </header>
        <p className="App-intro">
          {this.state.message}
        </p>
        <img src={this.state.imgArr[1]}  alt='car' onClick={this.handleClick}/>
        <img src={this.state.imgArr[2]}  alt='car' onClick={this.handleClick}/>
        <img src={this.state.imgArr[3]}  alt='car' onClick={this.handleClick}/>
        <br/>
        <img src={this.state.imgArr[4]}  alt='car' onClick={this.handleClick}/>
        <img src={this.state.imgArr[5]}  alt='car' onClick={this.handleClick}/>
        <img src={this.state.imgArr[6]}  alt='car' onClick={this.handleClick}/>
        <br/>

        <img src={this.state.imgArr[7]}  alt='car' onClick={this.handleClick} />
        <img src={this.state.imgArr[8]}  alt='car' onClick={this.handleClick}/>
        <img src={this.state.imgArr[0]}  alt='car' onClick={this.handleClick}/>

      </div>
    );
  }
}

export default App;
