import React from "react";
import styles from "./Search.module.css"

//hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";

//components
import PostDetail from "../../components/PostDetail/PostDetail"
import { Link } from "react-router-dom";


const Search = () => {
    const query = useQuery();
    const search = query.get("q");

    const { documents: posts } = useFetchDocuments("posts", search);
    
    return (

    <div className={styles.searchContainer}>
        <h2>Search</h2>
        <div>
            {posts && posts.length === 0 && (
                <>
                   <p>Não foram encontrados posts a psrtir da sua busca...</p>
                   <Link to="/" className={`${styles.btn} && ${styles.btnDark}`}>
                   Voltar
                  </Link>
                </>
            )}
            {posts && posts.map((post) => (
                <PostDetail key={post.id} post={post}/>
            ))}
        </div>
    </div>

    )
        
    
};

export default Search;
