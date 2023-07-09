import { getAll, getById } from "../services/read";

export async function userLoader(
  postsUrl: string,
  usersUrl: string,
  todosUrl: string,
  signal: RequestInit,
  params: user,
) {
  const currentUser: user = await getById(
    usersUrl,
    params?.id,

    signal,
  );

  const posts: post[] = await getAll(postsUrl, signal);
  const currentUserPosts = posts.filter(
    (post) => post.userId === currentUser.id,
  );
  const todos: todo[] = await getAll(todosUrl, signal);
  const currentUserTodos = todos.filter(
    (todo) => todo.userId === currentUser.id,
  );

  const data = [currentUser, currentUserPosts, currentUserTodos];
  return data;
}

// should have : post title,post body,the userName , all related comments (by postId) with their email and body
export async function postLoader(
  postsUrl: string,
  usersUrl: string,
  commentsUrl: string,
  params: post,
  signal: RequestInit,
) {
  const currentPost: post = await getById(postsUrl, params?.id, signal);
  const currentUser: user = await getById(usersUrl, currentPost.userId, signal);
  const allComments: comment[] = await getAll(commentsUrl, signal);
  const currentPostComments = allComments.filter(
    (comment) => comment.postId == currentPost.id,
  );

  return [currentUser, currentPost, currentPostComments];
}
