import React, { Component } from 'react'
import Header from '@/components/Header';
export default class index extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        )
    }
}
