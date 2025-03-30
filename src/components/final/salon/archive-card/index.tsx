import styles from "./index.module.scss";
export const ArchiveCard: React.FC = () => {

return (
  <>
    <div className={styles["visit-card"]}>
        <div className={styles["visit-image"]}>
            <span className={styles["favorite-badge"]}>♥</span>
        </div>
        <div className={styles["visit-info"]}>
        <h2>Hair Salon TOKYO</h2>
            <p className={styles["visit-location"]}><i className={styles["location-icon"]}>📍</i> 東京都渋谷区</p>
            <p className={styles["visit-date"]}><i className={styles["date-icon"]}>🗓️</i> 2025年3月15日</p>
            <p className={styles["visit-rating"]}>★★★★★</p>
            <p className={styles["visit-menu"]}><span>メニュー:</span> カット+カラー+トリートメント</p>
            <a href="/{}" className={styles["detail-button"]}>詳細を見る</a>
        </div>
    </div>
  </>
);
};
