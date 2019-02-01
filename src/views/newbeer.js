import React, { Component } from 'react'

class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
     }

     //this.handleFormSubmit = this.handleFormSubmit.bind(this)
     //this.handleClearForm = this.handleClearForm.bind(this)
  }

  handleClearForm (e) {
    e.preventDefault() 
    this.setState({
      newBeer: {
        name: '', 
        tagline: '', 
        description: '', 
        first_brewed: '', 
        brewere_tips: '', 
        attenuation_level: Number, 
        contributed_by: ''
      }
    })
  }
      onFormchange(e) {
        this.setState({
          [e.target.name] : e.target.value
        })
      }

  handleFormSubmit (e) {
    e.preventDefault()
    this.setState({
      ...this.state, 
      attenuation_level: Number(this.state.attenuation_level)
    })

    console.log(this.state.attenuation_level)
    const { name } = this.state
    fetch('https://ironbeer-api.herokuapp.com/beers/new', {
      method: 'POST', 
      body: name
    }).then(res => {
      return res.json()
    }).then((res) => console.log(res)).catch(error => console.log(error))
  }

  render() { 
    
    return (  
      <div style={{marginTop: '6rem'}}>
        <form onSubmit={this.handleFormSubmit.bind(this)} style={{marginLeft: '1rem', marginRight: '1rem'}}>
        
        <div className="form-group">
          <label>Name</label>
          <input onChange={this.onFormchange.bind(this)} name='name' type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Tagline</label>
          <input  onChange={this.onFormchange.bind(this)} name='tagline' type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea  onChange={this.onFormchange.bind(this)} name='description' style={{height: '20vh'}} type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>First Brewed</label>
          <input  onChange={this.onFormchange.bind(this)} name='first_brewed' type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Brewere Tips</label>
          <input  onChange={this.onFormchange.bind(this)} name='brewers_tips' type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Attenuation Level</label>
          <input  onChange={this.onFormchange.bind(this)} name='attenuation_level' type="number" className="form-control" />
        </div>
        <div className="form-group">
          <label>Contributed By</label>
          <input  onChange={this.onFormchange.bind(this)} name='contributed_by' type="text" className="form-control" />
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