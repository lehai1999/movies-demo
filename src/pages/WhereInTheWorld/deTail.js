import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardDeTail from "./cardDeTail";
import "./DeTail.scss";
import axiosApi from "./Services/nameWorldApi";

function DeTail() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  let { name } = useParams();
  async function getDeTail() {
    try {
      const response = await axiosApi.get(name);
      console.log("detail", response);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  const handleReturn = () => {
    navigate("/whereInTheWorld");
  };

  useEffect(() => {
    getDeTail();
  }, []);
  console.log(name);
  return (
    <div className={isDarkMode ? "dark__mode" : "light__mode"}>
      <div className="theWorld">
        <div className="header__theWorld">
          <div className="header__all">
            <div className="header__one">
              <h2>Where In The World?</h2>
            </div>
            <div className="header__two">
              <i className="fa-solid fa-moon" style={{ color: "white" }}></i>
              <h2
                onClick={() => {
                  setIsDarkMode(!isDarkMode);
                }}
              >
                Dark Mode
              </h2>
            </div>
          </div>
        </div>
        <button className="return__back" onClick={handleReturn}>
          <i className="fa-solid fa-arrow-left"></i>
          Back
        </button>
        <div className="detail__country">
          {data.map((o, i) => {
            return <CardDeTail data={o} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default DeTail;
