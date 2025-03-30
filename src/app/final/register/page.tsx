import { Metadata } from "next";
import styles from "./style.module.scss";
import { StarRating, ImageUploader, TextInput } from "@/components/final/salon"

export const metadata: Metadata = {
  title: "美容室履歴ページ",
  description: "美容室履歴ページ",
};

export default function Page() {
  return (
    <div className={styles["body"]}>

      <div className={styles["container"]}>
        <header>
          <h1>美容室履歴記録</h1>
        </header>
        
        <div className={styles["form-container"]}>
          <form id="salon-form" action="./submit.html">

            <TextInput inputId={"salon-name"} placeHolder={"美容室名を入力してください"}>美容室名</TextInput>

            <TextInput inputId={"salon-location"} placeHolder={"美容室所在地を入力してください"}>美容室所在地</TextInput>
            
            <ImageUploader />
            
            <StarRating />
            
            <div className={styles["form-set"]}>
              <div className={styles["checkbox-group"]}>
                <input type="checkbox" id="favorite" />
                <label htmlFor="favorite">お気に入りに追加</label>
              </div>
            </div>
            
            <div className={styles["form-set"]}>
              <label htmlFor="menu">メニュー名</label>
              <input type="text" id="menu" placeholder="例: カット+カラー" />
            </div>
            
            <button type="submit" >保存する</button>
          </form>
        </div>
      </div>
    </div>
  );
};