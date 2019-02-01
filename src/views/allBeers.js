import React, {Component } from 'react'
import { Link } from 'react-router-dom'

class AllBeer extends Component {
  
  render() { 
    
    const { beer } = this.props
    
    return ( 
      <div style={{marginTop: '3rem'}} key={beer._id} 
      style={{width: '100%', textAlign: 'center', marginTop: '2rem'}}>

      <Link to={`/beer/${beer._id}`}><img 
        style={{width: '15%', height: '15%'}} 
        src={beer.image_url} 
        alt={beer.name} /></Link>

      <p style={{marginBottom: '0.5rem', marginTop: '1rem', fontSize: '1.5rem'}}>{beer.name}</p>
      <p style={{marginBottom: '1rem', fontWeight: 'bold', opacity: '0.5'}}>{beer.tagline}</p>
      <p style={{fontWeight: 'bold', fontSize: '0.8rem', lineHeight: '0.4rem', marginBottom: '2rem'}}>created by: {beer.contributed_by}</p>
      <hr style={{width: '95%', border: '0.8px solid grey', opacity: '0.5'}} />
      </div>
      )
    }
  }
  
  export default AllBeer;
  