import "./home.scss";
import { Sidebar, Navbar } from "../components";
import { Widget } from "../components/widget/Widget";
export const Home = () => {
  return (
    <div className="home">
      {/* <span className="title">My Title</span> */}
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
      </div>
    </div>
  );
};
