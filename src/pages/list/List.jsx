import { Navbar, Sidebar } from "../../components";
import { Datatable } from "../../components/datatable/Datatable";
import "./list.scss";
export const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};
