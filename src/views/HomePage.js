import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import '../index.css'
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
        <img src={AllBeersImg} class="card-img-top" />
        </div>
        <div className="card-body">
        <h1 style={headerStyle}>All Beers</h1>
          <p className="card-text" style={{marginBottom: '2rem'}}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <button style={{width: '100%'}} className="btn btn-primary"><Link to="/beers"><img src={arrow}/></Link> Show all Beers</button>
        </div>
      <div className="card" style={{width: '100%', marginTop: '1rem'}}>
        <img src={RandomBeerImg} className="card-img-top"/>
        </div>
        <div className="card-body">
        <h1 style={headerStyle}>Random Beers</h1>
          <p className="card-text" style={{marginBottom: '2rem'}}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <button style={{width: '100%'}} className="btn btn-primary"><Link to="/random-beer"><img src={arrow}/></Link> Show random beer</button>
        </div>
      <div className="card" style={{width: '100%', marginTop: '2rem'}}>
        <img src={NewBeerImg} class="card-img-top"/>
        </div>
        <div className="card-body">
        <h1 style={headerStyle}>New Beer</h1>
          <p className="card-text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <button style={{width: '100%'}} className="btn btn-primary"><Link to="/new-beer"><img src={arrow}/></Link> Create new beer</button>
        </div>
      </div>
    )
  }
}
 
export default HomePage
