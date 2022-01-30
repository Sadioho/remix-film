import { Outlet } from "remix";
import Footer from "../common/Footer";
import Header from "../common/Header";

export default function MainLayout() {
  return (
    <div className="container-fluid main p-0">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
