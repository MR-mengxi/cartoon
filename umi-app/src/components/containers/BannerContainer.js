import React, { useState, useEffect } from 'react'
import Banner from '../common/Banner'
import { getBanners } from '../../services/banner'

export default function BannerContainer(props) {
    const [imgSrcs, setimgSrcs] = useState([]);
    useEffect(() => {
        (async function () {
            const resp = await getBanners();
            setimgSrcs(resp);
        })()
    }, [])
    return (
        <Banner width={668} height={352} imgSrcs={imgSrcs} style={{ margin: "0 0 0 auto" }} />
    )
}
