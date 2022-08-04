import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    // The router will automatically route files named index to the root of the directory.
    // pages/index.js → /
    // pages/blog/index.js → /blog

    <div className={styles.container}>
      {/* HOMEPAGE || LANDING PAGE || CONTROL CENTER */}
    </div>
  );
};

export default Home;
