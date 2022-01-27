import { Layout } from "antd";
import { Outlet } from "remix";
import Foot from "~/components/common/Footer";
import Head from "~/components/common/Header";
const { Header, Content, Footer } = Layout;
export default function MainLayout() {
  return (
    <Layout className="mainLayout">
      <Header>
        <Head />
      </Header>
      <div style={{ marginTop: "65px" }}>
        <Outlet />
      </div>
      <Footer style={{ textAlign: "center" }}>
        <Foot />
      </Footer>
    </Layout>
  );
}
