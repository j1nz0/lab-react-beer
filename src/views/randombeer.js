import React, { Component } from 'react';

class RandomBeer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      beerList: JSON.parse(localStorage.getItem('beers')),
      randomBeer: {},
    }   

    this.getRandomBeer = this.getRandomBeer.bind(this)
  }

  getRandomBeer () {
    const random = Math.floor(Math.random() * this.state.beerList.length - 1)
    const beer = this.state.beerList[random]
    console.log(this.state, beer)
    this.setState({
      randomBeer: beer
    })
  }

  componentDidMount() {
    this.getRandomBeer()
  }


  renderBeer() {
    const { randomBeer } = this.state
    return (
      <article>
        <div key={randomBeer._id} className="card">
          <img style={{width: '15%', height: '15%'}} className="card-img-top" src={randomBeer.image_url} alt={randomBeer.name} />
        <div>
          <nav>
          <span className="card-text">{randomBeer.name}</span>
          <span>{randomBeer.attenuation_level}</span>
          </nav>
        </div>
        </div>
      </article>
    )
  }

  render() {
    return (
      <div>  
        {this.renderBeer()}
      </div>
    )
  }
}

export default RandomBeer;