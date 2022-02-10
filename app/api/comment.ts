export type CommentEntry = {
  name: string;
  message: string;
  filmId: string;
};

export async function getComments(filmId: number) {
  const response = await fetch(
    `http://localhost:3002/comments?filmId=${filmId}`
  );
  const comments = await response.json();
  return comments;
}

export async function addComment(comment: CommentEntry) {
  const response = await fetch('http://localhost:3002/comments', {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
  // return null;
}
