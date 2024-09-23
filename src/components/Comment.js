export const Comment = ({comment}) => {   
   return (
      <>
         {comment.body && comment.body.length > 0 && (
            <div className="comment-item" style={{ marginLeft: 20 + 'px', borderLeft: '1px solid #cccccc22', paddingLeft: '10px' }}>
               <p>{comment.body} <span>({comment.author})</span></p>
            
               {comment.replies.length > 0 && (
                  <div>
                     {comment.replies.map(reply => (
                        <Comment key={reply.id} comment={reply} />
                     ))}
                  </div>
               )}
            </div>
         )}
      </>
   );
}