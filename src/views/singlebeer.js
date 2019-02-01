import React, { Component } from 'react';

class SingleBeer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      SingleBeer: JSON.parse(localStorage.getItem('beers')), 
      beer: {}
    }    
  }

  componentDidMount () {
   const beer =  this.state.SingleBeer.find((elm) => {
     return elm._id === this.props.match.params.beerId
    })  
    this.setState({
      beer
    })
  }

  render() { 
    const { beer } = this.state

    return (
      <article style={{marginTop: '6rem', textAlign: 'center'}}>
        <div key={beer._id}>
          <img style={{width: '15%', height: '15%', marginBottom: '1rem'}} className="card-img-top" src={beer.image_url} alt={beer.name} />
        <div className="card-body">
          <nav style={{display: 'flex', justifyContent: 'space-between'}}>
          <p style={{textAlign: 'left', fontSize: '1.5rem'}}>{beer.name}</p>
          <p style={{fontSize: '1.5rem', fontWeight: 'bold', opacity: '0.5'}}>{beer.attenuation_level}</p>
          </nav>
          <nav style={{display: 'flex', justifyContent: 'space-between'}}>
            <p style={{opacity: '0.5'}}>{beer.tagline}</p>
            <p style={{fontWeight: 'bold'}}>{beer.first_brewed}</p>
          </nav>
          <p style={{textAlign: 'justify'}}>{beer.description}</p>
          <p style={{textAlign: 'left', fontWeight: 'bold', opacity: '0.5'}}>{beer.contributed_by}</p>
        </div>
        </div>
      </article>
    )
  }
}
 
export default SingleBeer