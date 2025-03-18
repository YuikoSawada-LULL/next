import { Metadata } from "next";
import {Contents, PageTitle} from '@/components/lesson3';
import {LoginForm} from '@/features/lesson5/Lesson5-3/login-form';

export const metadata: Metadata = {
    title: "Lesson5 フォームとユーザー入力",
    description: "Lesson5 フォームとユーザー入力",
};

export default function Page() {
  return (
    <Contents>
        <PageTitle>入力Formの実装</PageTitle>
        <LoginForm />
    </Contents>
  )
}

