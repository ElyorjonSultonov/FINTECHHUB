import React from "react";
import "./Easier.css";
import { Vector } from "../../../assets/Svgs";

function Easier() {
  return (
    <div className="easier">
      <div className="container">
        <div className="row">
          <div className="easierText">
            <h1>Endi o‘rganish</h1>
            <div className="slider">
              <div>Tezroq</div>
              <div>Osonroq</div>
              <div>Qulayroq</div>
            </div>
          </div>
          <div className="line">{Vector}</div>
          <div className="easierBtn">
            <button>
              O‘RGANISHNI <br /> BOSHLASH
            </button>
          </div>
        </div>
        <div className="bodyImg">
          <div className="rows">
            {/* <div className="roww"> */}
              <div className="onOffBtn">
                <button>ONLINE</button>
                <button>OFFLINE</button>
              </div>
              <div className="coursesBtn">
                <button className="mb">Front-end dasturlash</button>
                <button className="mb">Back-end dasturlash</button>
                <button className="mb">UX/UI design</button>
                <button className="mb">.DevOps</button> <br />
                <button>Marketing</button>
                <button>SMM</button>
                <button>Mobile dasturlash</button>
                <button>Python</button>
                <button>.Net develpoment</button>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Easier;
