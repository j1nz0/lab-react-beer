import React, { Component } from 'react';

class RandomBeer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      beerList: JSON.parse(localStorage.getItem('beers')),
      randomBeer: {},
    }   
  }

  getRandomBeer () {
    const random = Math.floor(Math.random() * this.state.beerList.length - 1)
    const beer = this.state.beerList[random]
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
      <article style={{marginTop: '6rem', textAlign: 'center'}}>
        <div key={randomBeer._id}>
          <img style={{width: '15%', height: '15%', marginBottom: '1rem'}} className="card-img-top" src={randomBeer.image_url} alt={randomBeer.name} />
        <div className="card-body">
          <nav style={{display: 'flex', justifyContent: 'space-between'}}>
          <p style={{textAlign: 'left', fontSize: '1.5rem'}}>{randomBeer.name}</p>
          <p style={{fontSize: '1.5rem', fontWeight: 'bold', opacity: '0.5'}}>{randomBeer.attenuation_level}</p>
          </nav>
          <nav style={{display: 'flex', justifyContent: 'space-between'}}>
            <p style={{opacity: '0.5'}}>{randomBeer.tagline}</p>
            <p style={{fontWeight: 'bold'}}>{randomBeer.first_brewed}</p>
          </nav>
          <p style={{textAlign: 'justify'}}>{randomBeer.description}</p>
          <p style={{textAlign: 'left', fontWeight: 'bold', opacity: '0.5'}}>{randomBeer.contributed_by}</p>
        </div>
        </div>
      </article>
    )
  }

  render() {
    return (
      <div style={{marginTop: '2rem', textAlign: 'center'}}>  
        {this.renderBeer()}
        <button 
          onClick={() => this.getRandomBeer()}
          style={{height: '5rem', fontSize: '1.2rem', fontWeight: 'bold', width: '5rem', marginTop: '1rem', marginBottom: '1rem', borderRadius: '50%'}} className="btn btn-danger">New</button>
      </div>
    )
  }
}

export default RandomBeer;