import "./home.scss";
import { Sidebar } from "../components";
export const Home = () => {
  return (
    <div className="home">
      {/* <span className="title">My Title</span> */}
      <Sidebar />
      <div className="homeContainer">container</div>
    </div>
  );
};
