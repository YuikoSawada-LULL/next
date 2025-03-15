import { Metadata } from "next";
import {Contents, PageTitle, SectionTitle} from '@/components/lesson3';
import {FilterExample} from '@/features/lesson5/Lesson5-2/filter-example';
import {TodoListExample} from "@/features/lesson5/Lesson5-2/todolist-example";

export const metadata: Metadata = {
    title: "Lesson5 フォームとユーザー入力",
    description: "Lesson5 フォームとユーザー入力",
};

export default function Page() {
  return (
    <Contents>
        <PageTitle>入力要素の機能実装</PageTitle>
        <SectionTitle>フィルター</SectionTitle>
        <FilterExample />

        <SectionTitle>Todoリスト</SectionTitle>
        <TodoListExample />
    </Contents>
  )
}

