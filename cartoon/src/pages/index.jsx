import React, { Component } from 'react'
import BannerTest from '@/components/common/Banner/BannerTest'
import SubTest from '@/components/SubMenu/SubTest'
import GuideTest from '@/components/Guide/GuideTest'
import PlayTest from '@/components/Play/PlayTest'
import './index.css'

export default class index extends Component {
    render() {
        return (
            <div className='main-container'>
               <BannerTest />
                <SubTest />
                <GuideTest />
                <PlayTest />
                {/* <div>创意时光</div>
                <div>小小互动秀</div> */}
            </div>
        )
    }
}
