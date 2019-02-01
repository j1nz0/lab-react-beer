import React, { Component } from 'react';
import { Route, NavLink, Switch} from 'react-router-dom'
import HomePage from '../views/HomePage'
import home from '../assets/home.png'
import Beers from '../views/beers'
// import NewBeers from '../components/api/newbeer'
import RandomBeer from '../views/randombeer'

class App extends Component {

  render() {

    return (
    <div>
      <button 
        style={{width: '100%'}}
        className="btn btn-primary">
        <NavLink exact to="/" ><img src={home} alt="home"/></NavLink>
      </button>
    
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/beers" component={Beers}/>
        {/* <Route path="/beer/:beerId" component={BeerSingle}/> */}
        <Route path="/random-beer" component={RandomBeer} />
        {/* <Route path="/new-beer" component={NewBeer} /> */}
      </Switch>

   </div>
    )
  }
}

export default App;
