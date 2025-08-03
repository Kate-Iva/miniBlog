import styles from './Post.module.css';

// hooks
import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';

const Post = () => {
    const {id} = useParams();
    const {document: post} = useFetchDocument("posts", id);

    return (
        <div className={styles.postContainer}>
          {post && (
            <>
              <h1>{post.title}</h1>
              <img src={post.image} alt={post.title} />
              <p>{post.body}</p>
              
              <div className={styles.tags}>
              </div>
            </>
          )}
        </div>
      );
    };
    
    export default Post;