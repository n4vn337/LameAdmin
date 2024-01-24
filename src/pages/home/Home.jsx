import "./home.scss";
import {
  Sidebar,
  Navbar,
  Widget,
  Featured,
  Charts,
  ItemTable,
} from "../../components";
// import { Widget } from "../components/widget/Widget";
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
        <div className="chartz">
          <Featured />
          <Charts />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <ItemTable />
        </div>
      </div>
    </div>
  );
};
