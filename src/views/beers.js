import React, { Component } from 'react';
import { unifyString } from '../helper/search-transform'
import AllBeer from './allBeers'

class Beers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      beers: localStorage.getItem('beers') ? JSON.parse(localStorage.getItem('beers')) : [],
      error: null, 
      _isMounted: false, 
      filter: ''
    }    
  }

  get filteredBeers () {
    const { filter, beers } = this.state 
    if (!filter) {
      return beers
    } else {
      console.log(beers.filter(f => unifyString(f.name).indexOf(unifyString(filter)) > -1))
    return beers.filter(f => unifyString(f.name).indexOf(unifyString(filter)) > -1)
    }
  }

  get showLoading () {
    return this.state.isLoading === true && this.state.beers.length === 0
  }
  
  getBeers = () => {
    this.setState({isLoading: true})
    fetch('https://ironbeer-api.herokuapp.com/beers/all')
      .then(results => results.json())
      .then(data => {
        this.setState({ 
          beers: data, 
          isLoading: false, 
          _isMounted: true
        })
        localStorage.setItem('beers', JSON.stringify(data) )
      }).catch(error => this.setState({ error, isLoading: false}))
  }

  componentDidMount = async () => {
    await this.getBeers()
  }

  render() {
    const { error, filter } = this.state

    return (
      <div style={{paddingTop: '4rem'}}>
      <div style={{marginLeft: '1rem', marginRight: '1rem'}}>
        <input 
          className="form-control ds-input"
          id="search-input"
          style={{marginTop: '1rem'}}
          type="search"
          placeholder="Search..."
          value={filter}
          onChange={({ target }) => this.setState({ filter: target.value })}
          />
      </div>
      <article>
        { 
          error ? <p>{error.message}</p> : null 
        }
    
        {
          !this.showLoading ? (
            this.filteredBeers.map(beer => (
                <AllBeer 
                key={beer._id}
                beer={beer}
                />
            ))
          ) : (
            <div class="text-center" style={{marginTop: '2rem'}}>
            <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
            </div>
            </div>
          )}
        </article>
      </div>
          )
        }
      }
        
export default Beers;
        