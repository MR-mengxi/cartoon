import React, { useState, useEffect } from 'react'
import Banner from '../common/Banner'
import src1 from '@/assets/img/1.jpg';
import src2 from '@/assets/img/2.jpg';
import src3 from '@/assets/img/3.jpg';
import src4 from '@/assets/img/4.jpg';
import src5 from '@/assets/img/5.jpg';
// import { getBanners } from '../../services/banner'

export default function BannerContainer(props) {
    // const [imgSrcs, setimgSrcs] = useState([]);
    // useEffect(() => {
    //     (async function () {
    //         const resp = await getBanners();
    //         setimgSrcs(resp);
    //     })()
    // }, [])
    const imgSrcs = [src1,src2,src3,src4,src5];
    return (
        <Banner width={+props.width} height={312} imgSrcs={imgSrcs} />
    )
}
