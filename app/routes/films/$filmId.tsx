import {
  ActionFunction,
  Form,
  LoaderFunction,
  MetaFunction,
  Outlet,
  redirect,
  useActionData,
  useCatch,
  useLoaderData,
  useParams,
} from 'remix';
import { addComment, CommentEntry } from '~/api/comment';
import { getDetailData } from '~/api/detail';
import CommentsList from '~/components/common/CommentList';

export const loader: LoaderFunction = async ({ params }) => {
  const film: any = params.filmId;
  return getDetailData(film);
};
// action submit form
export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData();
  const timeNow = Date.now();
  const time = new Date(timeNow);
  const comment: CommentEntry = {
    name: body.get('name') as string,
    messenger: body.get('messenger') as string,
    filmId: body.get('id') as string,
    time: ` ${time.getHours()}:${time.getMinutes()}`,
    date: `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`,
  };
  const errors = { name: '', messenger: '' };
  if (!comment.name) {
    errors.name = 'Làm ơn không được để trống tên 😖😖😖!!!';
  }
  if (!comment.messenger) {
    errors.messenger = 'Làm ơn không được để trống nội dung 😖😖😖!!!';
  }

  if (errors.name || errors.messenger) {
    const values = Object.fromEntries(body);
    return { errors: errors, values: values };
  }

  await addComment(comment);

  return redirect(`/films/${comment.filmId}`);
};

export const meta: MetaFunction = ({ data }) => {
  return { title: data.results.name, description: data.results.introduction };
};
export default function Detail() {
  const film = useLoaderData();
  return (
    <div className="container-fluid detail">
      <div className="detail_banner">
        <img
          src={film.results.coverHorizontalUrl}
          alt={film.results.aliasName}
        />
      </div>

      <div className="contents">
        <div className="row">
          <div className="col-9 contents_view-content">
            <div className="contents_content">
              <div className="contents_content__badge">
                <div className="badge_item">
                  <p>NEW RELEASE</p>
                </div>
                <div className="badge_item">
                  <p>SHOWN IN 35MM</p>
                </div>
              </div>
              <div className="contents_content__title">{film.results.name}</div>
              <div className="container contents_content__description ">
                <p className="description_first mt-5 mb-5">
                  {film.results.introduction}
                </p>
                <p className="description_second">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis minima reprehenderit quidem eveniet architecto
                  dolores molestiae perspiciatis blanditiis rerum numquam soluta
                  repellendus animi perferendis, expedita laudantium impedit
                  repellat enim quis! Et recusandae rerum fugiat doloribus
                  consectetur deserunt provident laudantium tempore ab expedita
                  earum repellendus eveniet, molestias, doloremque quas
                  distinctio similique molestiae quis sed enim minus odit
                  reiciendis. Nisi, voluptates autem?
                </p>
                <div className="contents_content__auth">
                  <div className="row justify-content-around mt-5">
                    <div className="col-6">
                      <b>Director: ipsum dolor sit amet consectetur</b>
                      <b>Screenplay: psum dolor sit amet consectetur</b>
                      <b>Cinematography: ipsum dolor sit amet consectetur</b>
                      <b>Budget: ipsum dolor sit amet consectetur</b>
                    </div>
                    <div className="col-6">
                      <b>Director: ipsum dolor sit amet consectetur</b>
                      <b>Screenplay: ipsum dolor sit amet consectetur</b>
                      <b>Cinematography: ipsum dolor sit amet consectetur</b>
                      <b>Budget: ipsum dolor sit amet consectetur</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 contents_category">
            <button className="btn">GET TICKETS</button>
            <div className="contents_category__hour">
              <p className="text1">Showtimes</p>
              <p className="text2">Monday, January 15</p>
              <p className="text2">{film.results.name}</p>
              <span className="text2 time-first">1:00 pm</span>
              <span className="text2 time-second">4:00 pm</span>
            </div>
          </div>
        </div>
        <div className="contents_review mt-5">
          <video
            src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4"
            autoPlay
            controls
            crossOrigin="anonymous"
            width="100%"
          ></video>
        </div>
        {/* view img */}
        <div className="contents_view">
          <div className="row">
            <div className="col-6 col-md-6 col-xs-6 col-sm-6 col-lg-6 contents_view__img-first">
              <img src={film.results.coverVerticalUrl} alt="" />
            </div>
            <div className="col-6 col-md-6 col-xs-6 col-sm-6 col-lg-6 contents_view__img-second">
              <p className="contents_view__session">10/10</p>
              <p className="contents_view__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                incidunt qui alias sit itaque voluptate atque beatae rerum
                aliquam totam quisquam fugit, excepturi sequi aperiam
                accusantium ad, eligendi perferendis. Sunt! Aliquam dignissimos
                in sunt aspernatur rem, culpa veritatis nulla animi cumque ipsa
                molestiae velit. Soluta quidem sapiente nesciunt, adipisci
                magnam qui ea ratione, cumque, vero libero nemo atque in
                tenetur. Dicta, ducimus. Ullam, quis obcaecati corporis
                distinctio, possimus perspiciatis, rem atque doloribus sequi
                blanditiis error quisquam hic consequatur? Nesciunt quam ipsum
                asperiores officia impedit soluta assumenda enim sit
                perspiciatis a!
              </p>
              <p className="contents_view__auth">___Danny Ho</p>
            </div>
          </div>
        </div>
        {/* sử dụng outlet để sử dụng layout đang có  */}
        <Outlet />
        <CommentsList filmId={film.results.id} comments={film.comments} />
      </div>
    </div>
  );
}

export function ErrorBoundary({ error }: any) {
  return (
    <div
      className="error"
      style={{
        padding: '2rem',
        background: '#e57373',
        color: 'white',
        textAlign: 'center',
        height: '90vh',
      }}
    >
      <h3>Rất lấy làm tiếc là có một số lỗi đã xảy ra 👻👻👻👻 </h3>
      <p>{error?.message}</p>
    </div>
  );
}
