import Footer from "../Footer/Footer";
import SeconderyHeader from "../Header/SecondaryHeader/secondaryheader";
import TopHeader from "../Header/TopHeader/topheader";

function Layout({ children }) {
  return (
    <div className="layout">
      <TopHeader />
      <SeconderyHeader />
      {children}
      {/* <Footer /> */}
    </div>
  );
}
export default Layout;
