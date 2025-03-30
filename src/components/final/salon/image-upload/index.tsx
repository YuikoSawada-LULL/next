import styles from "./index.module.scss";

export const ImageUploader: React.FC = () => {

return (
  <>
    <div className={styles["form-set"]}>
      <label htmlFor="salon-image">画像</label>
      <div 
        className={styles["img-preview"]} 
        id="img-preview" 
      >
      </div>
      <input 
        type="file" 
        id="salon-image" 
        accept="image/*" 
      />
    </div>
  </>
);
};
