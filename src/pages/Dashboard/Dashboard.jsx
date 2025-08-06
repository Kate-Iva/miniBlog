import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents: posts, loading, error } = useFetchDocuments("posts", null, uid);

  const deleteDocument = (id) => {

    if (loading) {
        return <p>Carregando...</p>;
    }
  }


  console.log(uid);
  console.log(posts);

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className={styles.btn}>Sriar primeiro post</Link>
        </div>
      ) : (
        <div className={styles.postHeader}>

        </div>
      )}

{posts && posts.map((post) => 

<div key={post.id}>
<p>{post.title}</p>
<div>
    <Link to={`/posts/${post.id}`} className={`${styles.btn} && ${styles.btnoutLined}`}>Ver</Link>
    <Link to={`/posts/edit/${post.id}`} className={`${styles.btn} && ${styles.btnoutLined}`}>Editar</Link>
    <button onClick={() => deleteDocument(post.id)} className={`${styles.btn} && ${styles.btnDanger} && ${styles.btnoutLined}`}>
        Excluir
    </button>
</div>

</div>)}
    </div>
  );
};

export default Dashboard;