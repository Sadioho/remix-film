import React from 'react';
import { Col, Row, Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;
const { Meta } = Card;
// import { useLoaderData } from 'remix';
// export const loader = async () => {
//   console.log('AHIHIHI');
//   return null;
// };
export default function Detail() {
  // const data = useLoaderData();
  // console.log('data', data);
  const [ellipsis, setEllipsis] = React.useState(true);
  return (
    <div>
      <Row>
        <Col xl={24}>
          <img
            width="100%"
            height="400px"
            src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/01/greatest-SM-movie-moments-feature-img.jpg"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={2} sm={4} md={6} lg={8} xl={4}>
          Col
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={16}>
          <Title level={2}>h2. Ant Design</Title>
          <Paragraph>
            Ant Design, a design language for background applications, is
            refined by Ant UED Team. Ant Design, a design language for
          </Paragraph>
          <div>
            <Card
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
              <div>
                <Title level={3}>Ant Design</Title>
                <Paragraph>
                  Ant Design, a design language for background applications, is
                  refined by Ant UED Team. Ant Design, a design language for
                </Paragraph>
              </div>
            </Card>
          </div>
        </Col>

        <Col xs={2} sm={4} md={6} lg={8} xl={4}>
          Col
        </Col>
      </Row>
    </div>
  );
}
