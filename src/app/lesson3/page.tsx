import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageTitle, SectionTitle, Text, DefinitionList, List, Contents } from "@/components/lesson3";

export const metadata: Metadata = {
    title: "Lesson3 コンポーネントの作成と管理",
    description: "Lesson3 コンポーネントの作成と管理",
};

export default function Page() {
    const fullName: string = "澤田結子";
    const hometown: string = "神奈川県";
    const age: number | null = 26;
    const hobbiesSkills: { hobbies: string; skills: string } = {
        hobbies: "ゲーム、バスケ観戦",
        skills: "ボールを指で回す",
    };
    const favoriteFoods: string[] = ["寿司", "カレー", "焼肉"];
    const favoriteManga: string[] = ["スラムダンク", "ワンピース", "コナン"];
    return (
        <Contents>
            <PageTitle>自己紹介</PageTitle>
            <Text>
                私の名前は{fullName}です。
                <br />
                出身は{hometown}です。
                <br />
                年齢は{age !== null ? `${age}歳` : "非公開"}です。
            </Text>
            <SectionTitle>趣味・特技</SectionTitle>
            <DefinitionList dt="趣味" dd={hobbiesSkills.hobbies} />
            <DefinitionList dt="特技" dd={hobbiesSkills.skills} />
            <SectionTitle>好きな食べ物</SectionTitle>
            <List list={favoriteFoods} />
            <SectionTitle>好きな漫画ランキング</SectionTitle>
            <List listType="ol" list={favoriteManga} />
            <SectionTitle>画像の練習</SectionTitle>
            <Image src="/dummy.png" width={150} height={150} alt="" priority />
            <SectionTitle>リンクの練習</SectionTitle>
            <Link href="/">トップページ</Link>
        </Contents>
    );
}