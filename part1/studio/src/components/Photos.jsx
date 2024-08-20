import styles from "./Description.module.css";

export default function RecipePhoto() {
  return (
    <img
      src="https://www.allrecipes.com/thmb/sh8-c6CRrij7LXIpw6C05E7cszA=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/228553-moist-chocolate-muffins-DDMFS-4x3-a9f73a46938547c99d921613dc167741.jpg"
      alt="recipe photo"
      className={styles.imageUpdates}
    />
  );
}
