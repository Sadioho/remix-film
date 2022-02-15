import { Link } from 'remix';
import imgDefault from '../../image/imagesDefault.jpg';
import CardFilm from '../common/CardFilm';

export default function ListFilm(props: any) {
  const { data } = props;
  console.log('🚀 ~ ListFilm ~ data', data);

  return (
    <div className="container">
      <div
        className="row"
        style={{ color: 'white', height: '80vh', width: '100%' }}
      >
        {data.length > 0 ? (
          data.map((item: any) => {
            return (
              <CardFilm
                key={item.id}
                src={item.coverVerticalUrl || imgDefault}
                title={item.name}
                id={item.id}
              />
            );
          })
        ) : (
          <div className="flex-between-center" style={{ alignItems: 'center' }}>
            <h1>👻👻👻</h1>
          </div>
        )}
      </div>
    </div>
  );
}
