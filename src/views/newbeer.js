import React, { Component } from 'react'
import ReactDOM from 'react-dom';


class NewBeer extends Component {
  constructor(props) {
    super(props)
    this.state = { 
     }
     this.handleClearForm = this.handleClearForm.bind(this)
  }

  handleClearForm () {
    this.setState({
      newBeer: {
        name: '', 
        tagline: '', 
        description: '', 
        first_brewed: '', 
        brewere_tips: '', 
        attenuation_level: '', 
        contributed_by: ''
      }
    })
  }
      
  onFormchange(e) {
    const { target: { name, value }} = e
    this.setState({
      [name] : value
    })
  }

  handleFormSubmit (e) {
    e.preventDefault()
    this.setState({
      ...this.state 
    })

    fetch('https://ironbeer-api.herokuapp.com/beers/new', {
      method: 'POST', 
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...this.state })
    })
      .then(res => {
        ReactDOM.findDOMNode(this.messageForm).reset()
        return res.json()
      })
      .then((res) => 
        console.log(res))
          .catch(error => console.log(error))
  }

  render() { 
    
    return (  
      <div style={{marginTop: '6rem'}}>
        <form 
          onSubmit={this.handleFormSubmit.bind(this)} 
          ref={ form => this.messageForm = form }
          style={{marginLeft: '1rem', marginRight: '1rem'}}
          className="form">
        
        <div className="form-group">
          <label>Name</label>
          <input 
            onChange={this.onFormchange.bind(this)} 
            name="name" type="text" 
            className="form-control"
            required />
        </div>
        <div className="form-group">
          <label>Tagline</label>
          <input  
            onChange={this.onFormchange.bind(this)} 
            name="tagline" 
            type="text" 
            className="form-control" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea  
            onChange={this.onFormchange.bind(this)} 
            name="description" 
            style={{height: '20vh'}} 
            type="text" 
            className="form-control"
            required />
        </div>
        <div className="form-group">
          <label>First Brewed</label>
          <input 
            onChange={this.onFormchange.bind(this)} 
            name="first_brewed" 
            type="text" 
            className="form-control"
            required />
        </div>
        <div className="form-group">
          <label>Brewere Tips</label>
          <input 
            onChange={this.onFormchange.bind(this)} 
            name="brewers_tips" 
            type="text" 
            className="form-control"
            required />
        </div>
        <div className="form-group">
          <label>Attenuation Level</label>
          <input 
            onChange={this.onFormchange.bind(this)} 
            name="attenuation_level" 
            type="number" 
            className="form-control"
            required />
        </div>
        <div className="form-group">
          <label>Contributed By</label>
          <input 
            onChange={this.onFormchange.bind(this)} 
            name="contributed_by" 
            type="text" 
            className="form-control"
            required />
        </div>
        <button 
          style={{borderRadius: '20px', width: '100%', marginTop: '2rem', marginBottom: '2rem'}} 
          className="btn btn-danger"
          >ADD NEW</button>
      </form>
      </div>
    )
  }
}

export default NewBeer;