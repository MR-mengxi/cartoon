import React, { useState, useEffect } from 'react'
import Recomment from '../common/Recomment'
import { getAuthor } from '../../services/author'

export default function CartoonAuthorContainer() {
    const [author, setAuthor] = useState([]);
    useEffect(() => {
        (async () => {
            const resp = await getAuthor();
            setAuthor(resp);
        })()
    }, [])
    return (
        <>
            <Recomment author={author} />
        </>
    )
}
