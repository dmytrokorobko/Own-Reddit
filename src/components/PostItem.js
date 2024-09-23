import { useNavigate } from "react-router-dom";
import { IoDocumentTextOutline } from "react-icons/io5";

export const PostItem = ({post}) => {
   const navigate = useNavigate();
   const handlePostItemClick = () => {
      navigate(`/pages/${post.id}`);
   }
   return (
      <div className="post-item" onClick={handlePostItemClick}>
         <h2>{post.title}</h2>
         <div className="comments">
            <IoDocumentTextOutline />
            <p>{post.comments}</p>    
         </div>
      </div>
   )
}