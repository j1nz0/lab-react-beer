import React, { Component } from 'react';
import AllBeer from './allBeers'

class Beers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      beers: localStorage.getItem('beers') ? JSON.parse(localStorage.getItem('beers')) : [],
      error: null
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
          isLoading: false
        })
        localStorage.setItem('beers', JSON.stringify(data) )
      }).catch(error => this.setState({ error, isLoading: false}))
  }

  componentDidMount = () => {
    this.getBeers()
  }

  render() {
    const { error, beers } = this.state

    return (

      <article style={{paddingTop: '4rem'}}>
        { 
          error ? <p>{error.message}</p> : null 
        }
    
        {
          !this.showLoading ? (
            beers.map(beer => (
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
          )
        }
      }
        
export default Beers;
        