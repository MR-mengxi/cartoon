import React, { useState, useEffect } from 'react'
import Mod from '../common/Mod'
// import { getMods } from '../../services/mod'
import src1 from "@/assets/img/6.jpg";
import src2 from "@/assets/img/7.jpg";
import src3 from "@/assets/img/8.jpg";
import src4 from "@/assets/img/9.jpg";

export default function IndexModContainer() {
    // const [mod1, setMod1] = useState({
    //     modTitle: "动漫剧本",
    //     router:"/play/detail",
    //     data: []
    // });
    // const [mod2, setMod2] = useState({
    //     modTitle: "漫画",
    //     router:"/cartoon/detail",
    //     data: []
    // });
    // const [mod3, setMod3] = useState({
    //     modTitle: "协同制作",
    //     router:"/with/detail",
    //     data: []
    // });
    // const [mod4, setMod4] = useState({
    //     modTitle: "最佳改编",
    //     router:"/best/detail",
    //     data: []
    // });
    // useEffect(() => {
    //     (async function () {
    //         const resp = await getMods();
    //         setMod1({ ...mod1, data: resp.datas });
    //     })()
    // }, [])
    // useEffect(() => {
    //     (async function () {
    //         const resp = await getMods();
    //         setMod2({ ...mod2, data: resp.datas });
    //     })()
    // }, [])
    // useEffect(() => {
    //     (async function () {
    //         const resp = await getMods();
    //         setMod3({ ...mod3, data: resp.datas });
    //     })()
    // }, [])
    // useEffect(() => {
    //     (async function () {
    //         const resp = await getMods();
    //         setMod4({ ...mod4, data: resp.datas });
    //     })()
    // }, [])
    const mod1 = {
        modTitle: "动漫剧本",
        router: "/play/detail",
        data: [
            { id: 1, modName: "二十四时", color: "#f1707d", desc: "", macaron: 44, thumb: src1, title: "筱筱" },
            { id: 2, modName: "", color: "#f1707d", desc: "", macaron: 44, thumb: src2, title: "筱筱" },
            { id: 3, modName: "卡哇伊", color: "#f1707d", desc: "", macaron: 44, thumb: src3, title: "筱筱" },
            { id: 4, modName: "筱筱", color: "#f1707d", desc: "", macaron: 44, thumb: src4, title: "筱筱" },
            { id: 5, modName: "二十四时", color: "#f1707d", desc: "", macaron: 44, thumb: src1, title: "筱筱" },
            { id: 6, modName: "二十四时", color: "#f1707d", desc: "", macaron: 44, thumb: src2, title: "筱筱" },
            { id: 7, modName: "二十四时", color: "#f1707d", desc: "", macaron: 44, thumb: src3, title: "筱筱" },
            { id: 8, modName: "二十四时", color: "#f1707d", desc: "", macaron: 44, thumb: src4, title: "筱筱" },
        ]
    }
    return (
        <>
            <Mod isShow={true} mod={mod1} style={{
                margin: "0 18px 40px 0"
            }} />
            <Mod isShow={true} mod={mod1} style={{
                margin: "0 18px 40px 0"
            }} />
            <Mod isShow={true} mod={mod1} style={{
                margin: "0 18px 40px 0"
            }} />
            <Mod isShow={true} mod={mod1} style={{
                margin: "0 18px 40px 0"
            }} />
        </>
    )
}
