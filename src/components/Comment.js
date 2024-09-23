export const Comment = ({comment, level}) => {   
   return (
      <>
         {comment.body && comment.body.length > 0 && (
            <div className="comment-item" style={{ marginLeft: level * 20 + 'px', borderLeft: '1px solid #ccc', paddingLeft: '10px' }}>
               <p>{comment.body} ({comment.id})</p>
            
               {comment.replies.length > 0 && (
                  <div>
                     {comment.replies.map(reply => (
                        <Comment key={reply.id} comment={reply} level={level + 1} />
                     ))}
                  </div>
               )}
            </div>
         )}
      </>
   );
}