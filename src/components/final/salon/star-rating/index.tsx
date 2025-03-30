"use client"

import { useState } from "react"
import styles from "./index.module.scss";

type StarRatingProps = {
    rating: number;
}

export const StarRating: React.FC = () => {
  const [rating, setRating] = useState(0);
  const handleClick = (starValue: number) => {
      setRating(starValue);
  };
  const stars = [1, 2, 3, 4, 5]

return (
  <>
    <div className={styles["form-set"]}>
      <label>自分の評価</label>
      <div className={styles["rating-stars"]}>
        <input type="radio" id="star5" name="rating" value="5" />
        <label htmlFor="star5"></label>
        <input type="radio" id="star4" name="rating" value="4" />
        <label htmlFor="star4"></label>
        <input type="radio" id="star3" name="rating" value="3" />
        <label htmlFor="star3"></label>
        <input type="radio" id="star2" name="rating" value="2" />
        <label htmlFor="star2"></label>
        <input type="radio" id="star1" name="rating" value="1" />
        <label htmlFor="star1"></label>
      </div>
    </div>
  </>
);
};
