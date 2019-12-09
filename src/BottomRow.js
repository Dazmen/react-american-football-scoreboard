import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {
  const [qtr, setQtr] = useState(1);
  const [down, setDown] = useState(1);
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <button className="button" onClick={() => setDown(down + 1)}>Change Down</button>
        <button className="button" onClick={() => setDown(down - 1)}>Reset Down</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{qtr}</div>
        <button className="button" onClick={() => setQtr(qtr + 1)}>Change Quarter</button>
      </div>
    </div>
  );
};

export default BottomRow;
