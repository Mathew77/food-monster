import React , { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {

  constructor(){
    super();

    this.state = {
        foods : [],
        searchField : ''
        
       
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then( users => this.setState({ foods: users}))

  }
  render(){
      const { foods, searchField } = this.state;
      const filteredFoods = foods.filter(monster => 
          monster.name.toLowerCase().includes(searchField.toLowerCase())
        )
      return (
            <div className="App">
              <br/>
              <h1>My Precious Food Monster</h1>
             <SearchBox 
              placeholder="search for Food" 
              handleChange ={e => 
                this.setState({ searchField: e.target.value } )}
              
              />
               <CardList foods = {filteredFoods} />
            </div>
      )
  }
}

export default App;
