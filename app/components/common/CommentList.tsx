import { LoaderFunction, useActionData, useLoaderData } from 'remix';
import { CommentEntry, getComments } from '~/api/comment';

type CommentsListProps = {
  filmId: string;
  comments: CommentEntry[];
};
export const loader: LoaderFunction = async ({ request }) => {
  let url = new URL(request.url);
  let filmID: string | null = url.searchParams.get('id');
  let id: number = Number(filmID);
  return getComments(id);
};
const CommentList = () => {
  const comment = useLoaderData();
  console.log('🚀 ~ CommentList ~ actionData', comment);

  return <div>hahahahahahahah</div>;
};

export default CommentList;
