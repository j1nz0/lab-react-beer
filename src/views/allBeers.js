import React, {Component } from 'react'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';

class AllBeer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favorite: false,
      beer: props.beer
    }
  }

  addToFavorite = () => {
    if (this.state.favorite === false) {
      this.setState({
        favorite: true 
      })
    } else {
      this.setState({
        favorite: false
      })
    }
  }
  
  render() { 
    const { beer } = this.props
    const colors = {
      grey: 'rgba(0, 0, 0, 0.54)', 
      red: '#dc3545'
    }

    let btn_class = !this.state.favorite ? colors.grey : colors.red
    
    return ( 
      <div key={beer._id} 
      style={{width: '100%', textAlign: 'center', marginTop: '3rem'}}>

      <IconButton style={{color: btn_class}} aria-label="Add to favorites" onClick={this.addToFavorite.bind(this)}>
        <FavoriteIcon />
      </IconButton>

      <Link to={`/beer/${beer._id}`}><img 
        style={{width: '15%', height: '15%', paddingLeft: '1rem', marginRight: '4rem'}} 
        src={beer.image_url} 
        alt={beer.name} /> 
      </Link>
   

      <p style={{marginBottom: '0.5rem', marginTop: '1rem', fontSize: '1.5rem'}}>{beer.name}</p>
      <p style={{marginBottom: '1rem', fontWeight: 'bold', opacity: '0.5'}}>{beer.tagline}</p>
      <p style={{fontWeight: 'bold', fontSize: '0.8rem', lineHeight: '0.4rem', marginBottom: '2rem'}}>created by: {beer.contributed_by}</p>
      <hr style={{width: '95%', border: '0.8px solid grey', opacity: '0.5'}} />
      </div>
      )
    }
  }
  
  export default AllBeer;
  