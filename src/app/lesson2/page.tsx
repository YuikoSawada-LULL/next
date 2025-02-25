import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";

export const metadata: Metadata = {
    title: "Lesson2 簡易的なページ作成",
    description: "Lesson2 簡易的なページ作成",
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
        <div className={styles.contents}>
            <h1 className={styles["h1-title"]}>自己紹介</h1>
            <p>
                私の名前は{fullName}です。
                <br />
                出身は{hometown}です。
                <br />
                年齢は{age !== null ? `${age}歳` : "非公開"}です。
            </p>
            <h2 className={styles["h2-title"]}>趣味・特技</h2>
            <dl className={styles.dl}>
                <dt className={styles.dt}>趣味</dt>
                <dd className={styles.dd}>{hobbiesSkills.hobbies}</dd>
            </dl>
            <dl className={styles.dl}>
                <dt className={styles.dt}>特技</dt>
                <dd className={styles.dd}>{hobbiesSkills.skills}</dd>
            </dl>
            <h2 className={styles["h2-title"]}>好きな食べ物</h2>
            <ul>
                {favoriteFoods.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <h2 className={styles["h2-title"]}>好きな漫画ランキング</h2>
            <ol>
                {favoriteManga.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ol>
            <h2 className={styles["h2-title"]}>画像の練習</h2>
            <Image src="/dummy.png" width={150} height={150} alt="" priority />
            <h2 className={styles["h2-title"]}>リンクの練習</h2>
            <Link href="/">トップページ</Link>
        </div>
    );
}