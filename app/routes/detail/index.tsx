import {
  ActionFunction,
  Form,
  LoaderFunction,
  MetaFunction,
  redirect,
  useLoaderData,
  useSearchParams,
} from 'remix';
import { addComment, CommentEntry } from '~/api/comment';
import { getDetailData } from '~/api/detail';

export const loader: LoaderFunction = async ({ request }) => {
  let url = new URL(request.url);
  let filmID: string | null = url.searchParams.get('id');
  let id: number = Number(filmID);
  return getDetailData(id);
};
export const action: ActionFunction = async ({ request, params }) => {
  let url = new URL(request.url);
  let filmID: string | null = url.searchParams.get('id');
  console.log('🚀 ~ constaction:ActionFunction= ~ filmID', filmID);

  const body = await request.formData();
  const comment: CommentEntry = {
    name: body.get('name') as string,
    message: body.get('message') as string,
    filmId: params.id as string,
  };
  await addComment(comment);

  return redirect(`?id=10999`);
};
export const meta: MetaFunction = ({ data }) => {
  return { title: data.data.name, description: data.data.introduction };
};

export default function Index() {
  const film = useLoaderData().data;
  // console.log('data', film);

  return (
    <div className="container-fluid detail">
      <div className="detail_banner">
        <img src={film.coverHorizontalUrl} alt={film.aliasName} />
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
              <div className="contents_content__title">{film.name}</div>
              <div className="container contents_content__description ">
                <p className="description_first mt-5 mb-5">
                  {film.introduction}
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
              <p className="text2">{film.name}</p>
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
              <img src={film.coverVerticalUrl} alt="" />
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
        <div className="list-img">
          {film.likeList.map((item: any) => (
            <img
              key={item.id}
              width={250}
              height={250}
              src={item.coverHorizontalUrl}
              alt=""
            />
          ))}
        </div>
        <Form method="post">
          <fieldset>
            <label>Name:</label>
            <input type="text" name="name" />
            <label>Messeger:</label>
            <input type="text" name="messeger" />
            <button type="submit">Add Comment</button>
          </fieldset>
        </Form>
      </div>
    </div>
  );
}
