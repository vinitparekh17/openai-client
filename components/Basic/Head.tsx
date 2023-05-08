import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import type { MetaDataProps } from "@/types/head";

export default function MyHead() {
    const [metaData, setMetaData] = useState<MetaDataProps>({ title: '', description: '' })
    const [key, setKey] = useState<string>('')
    const router = useRouter()
    const path = router.pathname
    if (key !== path) {
        fetch('/data/metas.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json()).then(data => {
                setKey(Object.keys(data).find(k => k === path) || '')
                setMetaData(data[path])
            })
            .catch(err => console.log(err))
        }

    if (metaData.title === '' || metaData.description === '') {
        return null
    }

    return (
        <Head>
            <title key={'/'}>{metaData.title}</title>
            <meta name="description" content={metaData.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet='utf-8' />
        </Head>
    )
}