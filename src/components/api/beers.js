import React, { Component } from 'react';

class Beers extends Component {
  constructor() {
    super()
    this.state = { 
      beers: []
     }
  }

  componentDidMount() {

    fetch('https://ironbeer-api.herokuapp.com/beers/all')
      .then(results => {
        return results.json()
      }).then(data => {
        let beers = data.results.map((beer) => {
          return(
            <article key={beer._id}>
              <img src={beer.image_url} />
              <p>{beer.name}</p>
              <p>{beer.tagline}</p>
              <hr />
            </article>
          )
        })
        console.log(this.state.beers)
        this.setState({ beers: beers })
      })
  }
}
 
export default Beers;