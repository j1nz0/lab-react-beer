import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AllBeersImg from '../assets/allbeers.png'
import RandomBeerImg from '../assets/randombeer.png'
import NewBeerImg from '../assets/newbeer.png'
import arrow from '../assets/arrow-white.png'

const headerStyle = {
  fontSize: '1.5rem'
}

class HomePage extends Component {

  render() { 
    
    return (
      <div>
      <div className="card" style={{width: '100%', marginTop: '1rem'}}>
        <img src={AllBeersImg} className="card-img-top" alt="AllBeers" />
        </div>
        <div className="card-body">
        <h1 style={headerStyle}>All Beers</h1>
          <p className="card-text" style={{marginBottom: '2rem'}}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <Link to="/beers"><button style={{width: '100%'}} className="btn btn-primary"><img src={arrow} alt="arrow"/> Show all Beers</button></Link>
        </div>
      <div className="card" style={{width: '100%', marginTop: '1rem'}}>
        <img src={RandomBeerImg} className="card-img-top" alt="randomBeer"/>
        </div>
        <div className="card-body">
        <h1 style={headerStyle}>Random Beers</h1>
          <p className="card-text" style={{marginBottom: '2rem'}}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <Link to="/random-beer"><button style={{width: '100%'}} className="btn btn-primary"><img src={arrow} alt="arrow"/> Show random beer</button></Link>
        </div>
      <div className="card" style={{width: '100%', marginTop: '2rem'}}>
        <img src={NewBeerImg} className="card-img-top" alt="newBeer"/>
        </div>
        <div className="card-body">
        <h1 style={headerStyle}>New Beer</h1>
          <p className="card-text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <Link to="/new-beer"><button style={{width: '100%'}} className="btn btn-primary"><img src={arrow} alt="arrow"/> Create new beer</button></Link>
        </div>
      </div>
    )
  }
}
 
export default HomePage
