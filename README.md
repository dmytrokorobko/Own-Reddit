# Simple Own Reddit Client

This project is a simple Reddit client that allows users to lazy load posts, search for specific content, and display each post along with its comments. It uses a recursive function to retrieve and render comments, including nested replies, from a complex JSON structure.

## Features

- **Lazy Loading**: Posts are lazy-loaded as the user scrolls to the bottom of the page, ensuring efficient data loading and a smooth user experience.
- **Search**: Users can search for posts within the `reactjs` subreddit.
- **Comment Display**: Posts are displayed with their comments, including nested replies. The recursive function is used to handle and render deeply nested replies.

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For state management, handling posts, search queries, and comments.
- **Thunk**: For handling asynchronous API requests.
- **Reddit JSON API**: Used to fetch posts, search results, and comments.
- **Lazy Load**: Posts are fetched dynamically when the user scrolls to the bottom of the page.
- **Recursion**: Used to traverse and render nested comments and replies.

## Functionality

### Lazy Loading

Lazy loading is implemented by listening to the scroll event. When the user scrolls to the bottom of the page, the application triggers an API request to fetch more posts. The Redux store manages the state of the posts and the `after` parameter to handle pagination.

```js
const handleScroll = useCallback(() => {
   if (
   window.innerHeight + document.documentElement.scrollTop ===
   document.documentElement.offsetHeight
   ) {
   if (search.length > 0)
      dispatch(getSearchThunk({search, after}));
   else 
      dispatch(getPopularThunk({after}));
   }
}, [after]);

### Searching Posts

Search functionality allows users to look for specific posts in the reactjs subreddit. The search results are fetched via the Reddit JSON API and displayed in a list.

### Recursive Comment Rendering

The comments for each post are retrieved and displayed using a recursive function. This is necessary to handle the complex structure of nested replies within the Reddit API.

```js
function getComments(comments) {
   if (comments.length === 0) return [];
   
   return comments.map(c => {
      const comment = {
         id: c.data.id,
         body: c.data.body, 
         author: c.data.author,
         replies: []
      }

      if (c.data.replies && c.data.replies.data && c.data.replies.data.children.length > 0) {
         comment.replies = getComments(c.data.replies.data.children);
      }
      
      return comment;            
   })
}

