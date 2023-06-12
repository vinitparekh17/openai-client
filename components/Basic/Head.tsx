import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Data from "../../data/metas.json";
import type { MetaDataProps } from "../../types/head";

export default function MyHead() {
    const data = Data as { [key: string]: MetaDataProps };
    const [metaData, setMetaData] = useState<MetaDataProps>({ title: '', description: '' })
    const router = useRouter()
    const path = router.pathname;

    useEffect(() => {
        if (path in data) {
            setMetaData(data[path])
        }
    }, [path, data])

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