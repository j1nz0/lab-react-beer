import React, { Component } from 'react';
import { Route, NavLink, Switch} from 'react-router-dom'
import HomePage from '../views/HomePage'
import home from '../assets/home.png'
import Beers from '../views/beers'
import SingleBeer from '../views/singlebeer'
import RandomBeer from '../views/randombeer'
import NewBeer from '../views/newbeer'

class App extends Component {

  render() {
    return (
      <div style={{width: '100%'}}>
        <nav style={{position: 'fixed', width: '100%', zIndex: 200, top: 0}} >
          <NavLink exact to="/"><button 
            style={{width: '100%', borderRadius: '0px', borderBottom: 'solid 2px white'}}
            className="btn btn-primary"><img src={home} alt="home"/>
          </button>
          </NavLink>
        </nav>
    
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/beers" component={Beers}/>
          <Route path="/beer/:beerId" component={SingleBeer}/>
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
        </Switch>
      </div>
    )
  }
}

export default App;
