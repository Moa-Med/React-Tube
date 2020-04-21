import React , {Component} from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Header from './Components/Header';
import Data from './Components/Data';
import Video from './Components/Video';
import data from './data/information.json';
import './App.css';

class App extends Component {

  constructor(propos){
    super(propos);

    this.state = {
      allData : data,
      idVideo : 1,
    }
  } 

 // change the idVideo variable to the id of video selected 
  getId=(id)=>{
    this.setState({
      idVideo : id,
    })
  }
 
  render(){

  return (
   <Router>
      <Route path ='/video' render = {props => (
            <React.Fragment>
                  <Video allData={this.state.allData} idVideo={this.state.idVideo}/> 
              </React.Fragment>
            )
       } />
      <div className ='App'>
      <Route exact path='/' render = {props => (
            <React.Fragment>
              <header>
                <Header checkColor={true}/>
              </header> 
              <h3>Recommended</h3>
              <section>
                  <Data allData={this.state.allData} getId={this.getId}/> 
              </section> 
              </React.Fragment>
            ) 
      }/> 
       </div>
    </Router> 
  );
}
}

export default App;