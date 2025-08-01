import styles from "./Home.module.css"

import React from "react";

//hooks
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

// components
import PostDetail from "../../components/PostDetail/PostDetail"

const Home = () => {
const [query, setQuery] = useState("");
const { documents: posts, loading } = useFetchDocuments("posts");

const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();

  if (query) {
    return navigate(`/search?q=${query}`);
  }
};

    return (
      <div className={styles.home}>
        <h1>Veja os nossos posts mais recentes</h1>
        <form onSubmit={handleSubmit} className={styles.searchForm}>
          <input type="text" placeholder="Ou busque tags..."  onChange={(e) => setQuery(e.target.value)}/>
          <button className={`${styles.btn} && ${styles.btnDark}`}>Pesquisar</button>
        </form>
        {loading && <p>Carregando...</p>}
        {posts && posts.map((post) => (
            <PostDetail key={post.id} post={post}/>
          
        ))}
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