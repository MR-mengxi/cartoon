import React, { Component } from 'react'
import Pager from '.'

export default class PagerTest extends Component {
    state = {
        current: 1,
        total: 120,
        limit: 10,
        panelNumber: 10,
    }

    handlePageChange = (newPage) => {
        this.setState({
            current: newPage
        })
    }
    render() {
        return (
            <div>
                <Pager {...this.state} onPageChange={this.handlePageChange} />
            </div>
        )
    }
}
