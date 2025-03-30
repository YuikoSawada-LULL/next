import { Metadata } from "next";
import styles from "./style.module.scss";
import { ArchiveCard } from "@/components/final/salon";

export const metadata: Metadata = {
  title: "美容室履歴ページ",
  description: "美容室履歴ページ",
};

export default function Page() {
  return (
      <>
          <div className={styles["container"]}>
        <header>
            <h1>美容室履歴一覧</h1>
            <div className={styles["header-buttons"]}>
                <a href="./register" className={styles["add-button"]}>新規登録</a>
            </div>
        </header>

        <div className={styles["filter-sort-container"]}>
            <div className={styles["filter-group"]}>
                <label className={styles["checkbox-container"]}>
                    {/* <input type="checkbox" id="favorite-filter">  */}
                    お気に入りのみ表示
                </label>
            </div>

            <div className={styles["sort-group"]}>
                {/* <label for="sort">並び替え:</label> */}
                <select id="sort">
                    <option value="date-desc">日付（新しい順）</option>
                    <option value="date-asc">日付（古い順）</option>
                    <option value="rating-desc">評価（高い順）</option>
                    <option value="rating-asc">評価（低い順）</option>
                </select>
            </div>
        </div>

        <div className={styles["visits-grid"]}>
            {/* <div className={styles["visit-card"]}>
                <div className={styles["visit-image"]}>
                    <span className={styles["favorite-badge"]}>♥</span>
                </div>
                <div className={styles["visit-info"]}>
                    <h2>Hair Salon TOKYO</h2>
                    <p className={styles["visit-location"]}><i className={styles["location-icon"]}>📍</i> 東京都渋谷区</p>
                    <p className={styles["visit-date"]}><i className={styles["date-icon"]}>🗓️</i> 2025年3月15日</p>
                    <p className={styles["visit-rating"]}>★★★★★</p>
                    <p className={styles["visit-menu"]}><span>メニュー:</span> カット+カラー+トリートメント</p>
                    <a href="#" className={styles["detail-button"]}>詳細を見る</a>
                </div>
            </div> */}
            <ArchiveCard />
            
            <div className={styles["visit-card"]}>
                <div className={styles["visit-image"]}>
                </div>
                <div className={styles["visit-info"]}>
                    <h2>Style Hub</h2>
                    <p className={styles["visit-location"]}><i className="location-icon">📍</i> 東京都新宿区</p>
                    <p className={styles["visit-date"]}><i className="date-icon">🗓️</i> 2025年2月20日</p>
                    <p className={styles["visit-rating"]}>★★★★☆</p>
                    <p className={styles["visit-menu"]}><span>メニュー:</span> カット+パーマ</p>
                    <a href="#" className={styles["detail-button"]}>詳細を見る</a>
                </div>
            </div>
            
            <div className={styles["visit-card"]}>
                <div className={styles["visit-image"]}>
                    <span className={styles["favorite-badge"]}>♥</span>
                </div>
                <div className={styles["visit-info"]}>
                    <h2>Chic & Sleek</h2>
                    <p className={styles["visit-location"]}><i className={styles["location-icon"]}>📍</i> 東京都目黒区</p>
                    <p className={styles["visit-date"]}><i className={styles["date-icon"]}>🗓️</i> 2025年1月10日</p>
                    <p className={styles["visit-rating"]}>★★★☆☆</p>
                    <p className={styles["visit-menu"]}><span>メニュー:</span> カラーリング</p>
                    <a href="#" className={styles["detail-button"]}>詳細を見る</a>
                </div>
            </div>
            
            <div className={styles["visit-card"]}>
                <div className={styles["visit-image"]}>
                    <span className={styles["favorite-badge"]}>♥</span>
                </div>
                <div className={styles["visit-info"]}>
                    <h2>HAIR DESIGN Lab</h2>
                    <p className={styles["visit-location"]}><i className={styles["location-icon"]}>📍</i> 神奈川県横浜市</p>
                    <p className={styles["visit-date"]}><i className={styles["date-icon"]}>🗓️</i> 2024年12月5日</p>
                    <p className={styles["visit-rating"]}>★★★★★</p>
                    <p className={styles["visit-menu"]}><span>メニュー:</span> カット+ヘッドスパ</p>
                    <a href="#" className={styles["detail-button"]}>詳細を見る</a>
                </div>
            </div>
            
            {/* <!-- 履歴カード5 --> */}
            <div className={styles["visit-card"]}>
                <div className={styles["visit-image"]}>
                    {/* <!-- お気に入りバッジなし --> */}
                </div>
                <div className={styles["visit-info"]}>
                    <h2>Beauty Craft</h2>
                    <p className={styles["visit-location"]}><i className={styles["location-icon"]}>📍</i> 東京都品川区</p>
                    <p className={styles["visit-date"]}><i className={styles["date-icon"]}>🗓️</i> 2024年11月22日</p>
                    <p className={styles["visit-rating"]}>★★☆☆☆</p>
                    <p className={styles["visit-menu"]}><span>メニュー:</span> カット</p>
                    <a href="#" className={styles["detail-button"]}>詳細を見る</a>
                </div>
            </div>
        </div>
    </div>
      </>
  );
};