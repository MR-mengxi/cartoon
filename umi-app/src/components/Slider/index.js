import React, { Component } from 'react'
import './index.css'

export default class Slider extends Component {

    render() {
        const sliders = this.props.slider.map((item, i) => (<li key={item.id} className="slider-list">
            <a href="">{item.sliderList}</a>
        </li>))
        return (
            <ul className="slider-container">
                {sliders}
            </ul>
        )
    }
}
