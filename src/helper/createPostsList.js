export const createPostsList = ({posts}) => {
   return posts.map(p => {
      return {
         id: p.data.id,
         comments: p.data.num_comments,
         title: p.data.title,
      };
   });
}