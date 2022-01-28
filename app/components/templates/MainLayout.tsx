import { Outlet } from "remix";
import Footer from "../common/Footer";
import Header from "../common/Header";

export default function MainLayout() {
  return (
    <div className="container-fluid main">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
