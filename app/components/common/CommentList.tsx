import { Form, useActionData, useTransition } from 'remix';
import { CommentEntry } from '~/api/comment';
type CommentsListProps = {
  filmId: string;
  comments: CommentEntry[];
};
export default function CommentsList({ filmId, comments }: CommentsListProps) {
  const transition = useTransition();
  const actionData = useActionData();

  return (
    <>
      <div className="comment_block">
        <h1>Comments</h1>
        {comments.map((item: any, index) => (
          <div key={index} className="new_comment">
            <ul className="user_comment">
              <div className="user_avatar">
                <img src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png" />
              </div>
              <div className="comment_body">
                <p>
                  <span className="replied_to">{item.name} : </span>
                  {item.messenger}
                </p>
              </div>
              <div className="comment_toolbar">
                <div className="comment_details">
                  <ul>
                    <li>
                      <i className="fa fa-clock-o"></i> {item.time}
                    </li>
                    <li>
                      <i className="fa fa-calendar"></i> {item.date}
                    </li>
                    <li>
                      <i className="fa fa-pencil"></i>
                      <span className="user">{item.name}</span>
                    </li>
                  </ul>
                </div>
                <div className="comment_tools">
                  <ul>
                    <li>
                      <i className="fa fa-share-alt"></i>
                    </li>
                    <li>
                      <i className="fa fa-reply"></i>
                    </li>
                    <li>
                      <i className="fa fa-heart love"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
        ))}
      </div>
      <div className="form">
        {/* fỏm */}
        <Form method="post" className="decor" action={`/films/${filmId}`}>
          <div className="form-left-decoration"></div>
          <div className="form-right-decoration"></div>
          <div className="circle"></div>
          <div className="form-inner">
            <input
              style={{ display: 'none' }}
              type="text"
              name="id"
              defaultValue={filmId}
            />
            <input type="text" name="name" placeholder="UserName" />
            {actionData?.errors.name && (
              <p
                style={{
                  color: 'red',
                  fontSize: '1.6rem',
                  marginBottom: '1rem',
                }}
              >
                {actionData.errors.name}
              </p>
            )}
            <textarea name="messenger" placeholder="Messenger"></textarea>
            {actionData?.errors.messenger && (
              <p style={{ color: 'red', fontSize: '1.6rem' }}>
                {actionData.errors.messenger}
              </p>
            )}
            <button type="submit">
              {transition.state === 'submitting' ? 'Adding...' : 'Add comment'}
            </button>
          </div>
        </Form>
        {/* end fỏm */}
      </div>
    </>
  );
}
