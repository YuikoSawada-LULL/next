import { Metadata } from "next";
import {Contents, PageTitle, SectionTitle} from '@/components/lesson3';
import { ServerFetch } from "@/features/lesson6/lesson6-1/server-fetch";
import { ClientFetch } from "@/features/lesson6/lesson6-1/client-fetch";

export const metadata: Metadata = {
    title: "Lesson6 APIとの連携",
    description: "Lesson6 APIとの連携",
};

export default function Page() {
  return (
    <Contents>
        <PageTitle>fetch関数の実装</PageTitle>
        <SectionTitle>サーバーサイドのfetch</SectionTitle>
        <ServerFetch />
        <SectionTitle>クライアントサイドのfetch</SectionTitle>
        <ClientFetch />

    </Contents>
  )
}

