import styles from "./Description.module.css";
import React from "react";

function RecipeAuthor() {
  let authorLink = "";
  let authorPhoto = "";
  let authorName = "";

  return (
    <div className={styles.recipeAuthorBlock}>
      <img
        src={authorPhoto}
        alt="Reasonable alt text"
        className={styles.imageUpdates}
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>Recipe Blog</a>
      </div>
    </div>
  );
}

function RecipeDescription() {
  return (
    <div>
      <div>
        <h1>Double Chocolate Chip Muffins</h1>
        <p>
          A recipe for your favorite bakery-style chocolate chip muffins. Soft,
          fluffy, and bursting with chocolate chips and perfect tall muffin
          tops.
        </p>
      </div>
      <RecipeAuthor />
    </div>
  );
}

export default RecipeDescription;
