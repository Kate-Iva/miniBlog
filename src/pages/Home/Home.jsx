import styles from "./Home.module.css"

import React from "react";

//hooks
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

// components

const Home = () => {
const [query, setQuery] = useState("");
const [posts] = useState([]);

const handleSubmit = (e) => {
  e.preventDefault();
};

    return (
      <div className={styles.home}>
        <h1>Veja os nossos posts mais recentes</h1>
        <form onSubmit={handleSubmit} className={styles.searchForm}>
          <input type="text" placeholder="Ou busque tags..." />
          <button className={`${styles.btn} && ${styles.btnDark}`}>Pesquisar</button>
        </form>
        <div>Posts...</div>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}> 
          <p>Não foram encondrados posts</p>
          <Link to="/posts/create" className={styles.btn}>Sriar primeiro post</Link>
          </div>
        )}
      </div>
    )
  }
  
  export default Home;