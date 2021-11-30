import React, { Component } from 'react'
import DataForm from './DataForm'
import DataList from './DataList'

export default class MessageArea extends Component {

    render() {
        return (
            <div>
                <DataForm onValueChange={this.props.onValueChange} />
                <DataList datas={this.props.datas} />
            </div>
        )
    }
}
