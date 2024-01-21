import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text="70%" strokeWidth={4} />
        </div>
        <p className="title">Total Sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">Lorem ipsum dolor sit amet.</p>

        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <ArrowDropUpOutlinedIcon fontSize="small" />
              <div className="resAmount">$12.3K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <ArrowDropUpOutlinedIcon fontSize="small" />
              <div className="resAmount">$12.3K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult negative">
              <ArrowDropDownOutlinedIcon fontSize="small" />
              <div className="resAmount">$12.3K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
