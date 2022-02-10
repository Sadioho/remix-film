import {
  ActionFunction,
  Form,
  LoaderFunction,
  MetaFunction,
  redirect,
  useLoaderData,
} from 'remix';
import { addComment, CommentEntry } from '~/api/comment';
import { getDetailData } from '~/api/detail';
import CommentList from '~/components/common/CommentList';

export const loader: LoaderFunction = async ({ request }) => {
  let url = new URL(request.url);
  let filmID: string | null = url.searchParams.get('id');
  let id: number = Number(filmID);
  return getDetailData(id);
};
export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData();
  const comment: CommentEntry = {
    name: body.get('name') as string,
    message: body.get('messege') as string,
    filmId: body.get('id') as string,
  };
  await addComment(comment);

  return redirect(`/detail?id=${comment.filmId}`);
};
export const meta: MetaFunction = ({ data }) => {
  return { title: data.data.name, description: data.data.introduction };
};

export default function Index() {
  const film = useLoaderData().data;
  console.log('🚀 ~ Index ~ film', film)
  return (
    <div className="container-fluid detail">
     
    </div>
  );
}
