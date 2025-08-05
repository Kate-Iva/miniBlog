import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents: posts, loading, error } = useFetchDocuments("posts", null, uid);



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
        <div className={styles.post_header}>

        </div>
      )}

{posts && posts.map((post) => <h3>{post.title}</h3>)}
    </div>
  );
};

export default Dashboard;