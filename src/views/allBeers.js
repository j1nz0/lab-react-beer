import React, {Component } from 'react'

class AllBeer extends Component {
  
  render() { 
    
    const { beer } = this.props
    
    return ( 
      <div key={beer._id} className="card" style={{width: '100%', marginTop: '1rem'}}>
      <div style={{float: 'left'}}>
      <img className="card-img-top" style={{width: '15%', height: '15%', marginTop: 'auto', marginLeft: '3rem', marginBottom: 'auto'}} src={beer.image_url} alt={beer.name} />
      </div>
      <p className="card-text" style={{marginBottom: '2rem', textAlign: 'center'}}>{beer.name}</p>
      <p className="card-text" style={{marginBottom: '2rem', textAlign: 'center'}}>{beer.tagline}</p>
      </div>
      )
    }
  }
  
  export default AllBeer;
  