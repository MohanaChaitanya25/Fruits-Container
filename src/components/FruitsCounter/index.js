/* eslint-disable react/button-has-type */
// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {bananaCount: 0, mangoesCount: 0}

  eatMango = () => {
    this.setState(prevCount => ({mangoesCount: prevCount.mangoesCount + 1}))
  }

  eatBanana = () => {
    this.setState(prevCount => ({bananaCount: prevCount.bananaCount + 1}))
  }

  render() {
    const {mangoesCount, bananaCount} = this.state
    return (
      <div className="fruitsCounter-bg-container">
        <div className="fruitsCounter">
          <h1 className="fruitsCounter-heading">
            Bob ate <span className="fruitCount">{mangoesCount} </span> mangoes
            <span className="fruitCount"> {bananaCount} </span> bananas
          </h1>
          <div className="fruitsContainer">
            <div className="fruitContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-image"
              />

              <button className="fruit-btn" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>

            <div className="fruitContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-image"
              />

              <button className="fruit-btn" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
