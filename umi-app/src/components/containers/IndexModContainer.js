import React, { useState, useEffect } from 'react'
import Mod from '../common/Mod'
import { getMods } from '../../services/mod'

export default function IndexModContainer() {
    const [mod1, setMod1] = useState({
        modTitle: "动漫剧本",
        router:"/play/detail",
        data: []
    });
    const [mod2, setMod2] = useState({
        modTitle: "漫画",
        router:"/cartoon/detail",
        data: []
    });
    const [mod3, setMod3] = useState({
        modTitle: "协同制作",
        router:"/with/detail",
        data: []
    });
    const [mod4, setMod4] = useState({
        modTitle: "最佳改编",
        router:"/best/detail",
        data: []
    });
    useEffect(() => {
        (async function () {
            const resp = await getMods();
            setMod1({ ...mod1, data: resp.datas });
        })()
    }, [])
    useEffect(() => {
        (async function () {
            const resp = await getMods();
            setMod2({ ...mod2, data: resp.datas });
        })()
    }, [])
    useEffect(() => {
        (async function () {
            const resp = await getMods();
            setMod3({ ...mod3, data: resp.datas });
        })()
    }, [])
    useEffect(() => {
        (async function () {
            const resp = await getMods();
            setMod4({ ...mod4, data: resp.datas });
        })()
    }, [])
    return (
        <>
            <Mod isShow={true} mod={mod1} style={{
                margin: "0 18px 40px 0"
            }} />
             <Mod isShow={true} mod={mod2} style={{
                margin: "0 18px 40px 0"
            }} />
             <Mod isShow={true} mod={mod3} style={{
                margin: "0 18px 40px 0"
            }} />
             <Mod isShow={true} mod={mod4} style={{
                margin: "0 18px 40px 0"
            }} />
        </>
    )
}
