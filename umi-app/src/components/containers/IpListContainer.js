import React, { useState, useEffect } from 'react'
import List from '../List'
import { getList } from '../../services/list'

export default function IpListContainer(props) {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    useEffect(() => {
        (async function () {
            const resp = await getList(page, limit);
            setData(resp);
        })()
    }, [page, limit])
    return (
        <List data={data} />
    )
}