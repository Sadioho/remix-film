import { Col, Row, Typography } from 'antd';
import { LinksFunction } from 'remix';
import styles from './detail.css';
const { Title, Paragraph, Text } = Typography;
export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};
export default function Detail() {
  return (
    <div className="container-detail">
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <img
            width="100%"
            height={400}
            src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/01/greatest-SM-movie-moments-feature-img.jpg"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={22} sm={22} md={22} lg={22} xl={22} className="description">
          <div className="badge">
            <div className="badge_red">PHANTOM THREAD</div>
            <div className="badge_yellow">SHOWN IN 25MM</div>
          </div>
          <Title style={{ color: 'white', fontSize: '80px', margin: '0' }}>
            ROCKMAN
          </Title>
          <Paragraph strong style={{ color: 'white', fontSize: '20px' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            quibusdam minima ut repellat necessitatibus dignissimos at nulla
            ipsa soluta. Iste deserunt dolore maiores. Quaerat, quibusdam? Nisi,
            aspernatur autem. Est, at. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Labore, quibusdam minima ut repellat
            necessitatibus dignissimos at nulla ipsa soluta. Iste deserunt
            dolore maiores. Quaerat, quibusdam? Nisi, aspernatur autem. Est, at.
          </Paragraph>
          <Paragraph style={{ color: 'white' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            quibusdam minima ut repellat necessitatibus dignissimos at nulla
            ipsa soluta. Iste deserunt dolore maiores. Quaerat, quibusdam? Nisi,
            aspernatur autem. Est, at. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Labore, quibusdam minima ut repellat
            necessitatibus dignissimos at nulla ipsa soluta. Iste deserunt
            dolore maiores. Quaerat, quibusdam? Nisi, aspernatur autem. Est, at.
          </Paragraph>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
          <h1>CATEGORY</h1>
        </Col>
      </Row>
      <Row>
        <Col
          style={{ display: 'flex', flexWrap: 'wrap' }}
          xs={{ span: 5, offset: 1 }}
          lg={{ span: 6, offset: 2 }}
        >
          <Text style={{ color: 'white' }} strong>
            Director: Paul Thomas Anderson
          </Text>
          <Text style={{ color: 'white' }} strong>
            Director: Paul Thomas Anderson
          </Text>
          <Text style={{ color: 'white' }} strong>
            Director: Paul Thomas Anderson
          </Text>
          <Text style={{ color: 'white' }} strong>
            Director: Paul Thomas Anderson
          </Text>
          <Text style={{ color: 'white' }} strong>
            Director: Paul Thomas Anderson
          </Text>
        </Col>
        <Col
          style={{ color: 'white' }}
          xs={{ span: 11, offset: 1 }}
          lg={{ span: 6, offset: 2 }}
        >
          Col
        </Col>
        <Col
          style={{ color: 'white' }}
          xs={{ span: 5, offset: 1 }}
          lg={{ span: 6, offset: 2 }}
        >
          Col
        </Col>
      </Row>
    </div>
  );
}
