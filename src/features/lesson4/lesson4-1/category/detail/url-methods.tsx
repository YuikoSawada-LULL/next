'use client';

import React from "react";
import { SectionTitle } from '@/components/lesson3';
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useParams } from 'next/navigation'


export const UrlMethods: React.FC = () => {
    const router = useRouter();
    // useRouterはこのように何かの判定をしてから条件にあわせて遷移先を変える時に使用する
    // const handle = () => {
    //     if () {
    //         router.push('/');
    //     } else {
    //         router.push('/hoge');
    //     }
    // }
    const pathname = usePathname();
    // usePathnameはカレントページのタブの色を変えたりする時に使用する
    const params = useParams();

    return (
    <>
        <SectionTitle>useRouter</SectionTitle>
        {/* <button type="button" onClick={handle}>TOPページ</button> */}
        <button type="button" onClick={() => router.push('/')}>TOPページ</button>

        <SectionTitle>usePathname</SectionTitle>
        <p>{pathname}</p>

        <SectionTitle>useParams</SectionTitle>
        {/* {params}はjsonデータ（オブジェクト）が出力される */}
        <p>{JSON.stringify(params)}</p>

    </>
    );
};