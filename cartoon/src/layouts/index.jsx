import React, { Component } from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer'
export default class index extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}
