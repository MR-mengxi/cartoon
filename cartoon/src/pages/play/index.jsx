import React, { Component } from 'react'
import AuthorTest from '@/components/Author/AuthorTest'
import '@/assets/css/main.css'

export default class index extends Component {
    render() {
        return (
            <div className='play-main main'>
                <AuthorTest />
            </div>
        )
    }
}
