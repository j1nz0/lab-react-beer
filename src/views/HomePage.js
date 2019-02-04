import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AllBeersImg from '../assets/allbeers.png'
import RandomBeerImg from '../assets/randombeer.png'
import NewBeerImg from '../assets/newbeer.png'
import arrow from '../assets/arrow-white.png'
import plus from '../assets/plus.png'

const headerStyle = {
  fontSize: '1.5rem'
}

class HomePage extends Component {

  render() { 
    
    return (
      <div>
      <div 
        className="card" 
        style={{width: '100%', marginTop: '1rem'}}>
        <img 
          src={AllBeersImg} 
          className="card-img-top" 
          alt="AllBeers" />
        </div>
        <div className="card-body">
        <h1 style={headerStyle}>All Beers</h1>
          <p 
            className="card-text" 
            style={{marginBottom: '2rem'}}>
          Beer is one of the oldest and most widely consumed alcoholic drinks in the world, and the third most popular drink overall after water and tea. Beer is brewed from cereal grains—most commonly from malted barley, though wheat, maize , and rice are also used. During the brewing process, fermentation of the starch sugars in the wort produces ethanol and carbonation in the resulting beer. Most modern beer is brewed with hops, which add bitterness and other flavours and act as a natural preservative and stabilizing agent. Other flavouring agents such as gruit, herbs, or fruits may be included or used instead of hops. In commercial brewing, the natural carbonation effect is often removed during processing and replaced with forced carbonation.          </p>
          <Link 
            to="/beers">
            <button style={{width: '100%', fontWeight: 'bold'}} className="btn btn-danger">
            <img style={{height: '25px', float: 'left'}} src={arrow} alt="arrow"/> Show all Beers
            </button>
          </Link>
        </div>
      <div 
        className="card" 
        style={{width: '100%', marginTop: '1rem'}}>
        <img 
          src={RandomBeerImg} 
          className="card-img-top" 
          alt="randomBeer"/>
        </div>
        <div className="card-body">
        <h1 style={headerStyle}>Random Beers</h1>
          <p 
            className="card-text" 
            style={{marginBottom: '2rem'}}>
          Beer is distributed in bottles and cans and is also commonly available on draught, particularly in pubs and bars. The brewing industry is a global business, consisting of several dominant multinational companies and many thousands of smaller producers ranging from brewpubs to regional breweries. The strength of modern beer is usually around 4% to 6% alcohol by volume (ABV), although it may vary between 0.5% and 20%, with some breweries creating examples of 40% ABV and above.
          Beer forms part of the culture of many nations and is associated with social traditions such as beer festivals, as well as a rich pub culture involving activities like pub crawling and pub games.          </p>
          <Link 
            to="/random-beer">
            <button style={{width: '100%', fontWeight: 'bold'}} className="btn btn-danger">
            <img style={{height: '25px', float: 'left'}}src={arrow} alt="arrow"/> Show random beer
            </button>
          </Link>
        </div>
      <div 
        className="card" 
        style={{width: '100%', marginTop: '2rem'}}>
        <img 
          src={NewBeerImg} 
          className="card-img-top" alt="newBeer"/>
        </div>
        <div className="card-body">
        <h1 style={headerStyle}>New Beer</h1>
          <p 
            className="card-text"
            style={{marginBottom: '2rem'}}>
          Around the world, there are many traditional and ancient starch-based drinks classed as beer. In Africa, there are various ethnic beers made from sorghum or millet, such as Oshikundu in Namibia and Tella in Ethiopia. Kyrgyzstan also has a beer made from millet; it is a low alcohol, somewhat porridge-like drink called "Bozo". Bhutan, Nepal, Tibet and Sikkim also use millet in Chhaang, a popular semi-fermented rice/millet drink in the eastern Himalayas. Further east in China are found Huangjiu and Choujiu—traditional rice-based drinks related to beer.
          The Andes in South America has Chicha, made from germinated maize (corn); while the indigenous peoples in Brazil have Cauim, a traditional drink made since pre-Columbian times by chewing manioc so that an enzyme (amylase) present in human saliva can break down the starch into fermentable sugars this is similar to Masato in Peru.
          Some beers which are made from bread, which is linked to the earliest forms of beer, are Sahti in Finland, Kvass in Russia and Ukraine, and Bouza in Sudan.          </p>
          <Link 
            to="/new-beer">
            <button style={{fontWeight: 'bold', width: '100%'}} className="btn btn-danger">
            <img style={{height: '22px', float: 'left'}} src={plus} alt="arrow"/> Create new beer</button>
          </Link>
        </div>
      </div>
    )
  }
}
 
export default HomePage
