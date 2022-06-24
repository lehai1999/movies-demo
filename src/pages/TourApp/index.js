import { Col, Row, Slider, Radio, index } from "antd";
import { useEffect, useState } from "react";
import CardTour from "./cardTour";
import axiosApi from "./Services/TourApi";
import "./TourApp.scss";
import { StarFilled } from "@ant-design/icons";

function TourApp() {
  const [data, setData] = useState([]);
  const [dataCurrent, setDataCurrent] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  // const [isAmerica, setIsAmerica] = useState(false);

  async function getTourApp() {
    try {
      const response = await axiosApi.get("tour");
      console.log("tour app", response);
      setData(response.data);
      setDataCurrent(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  const handlePlaces = (e) => {
    const dataPlaces = dataCurrent.filter((o) => o.category === "place");
    setData(dataPlaces);
  };
  const handleDishes = (e) => {
    const dataDishes = dataCurrent.filter((o) => o.category === "dish");
    setData(dataDishes);
  };

  const handleOneStar = (e) => {
    const dataOneStar = dataCurrent.filter((o) => o.rating === 1);
    setData(dataOneStar);
  };
  const handleTwoStar = (e) => {
    const dataTwoStar = dataCurrent.filter((o) => o.rating === 2);
    setData(dataTwoStar);
  };
  const handleThreeStar = (e) => {
    const dataThreeStar = dataCurrent.filter((o) => o.rating === 3);
    setData(dataThreeStar);
  };
  const handleFourStar = (e) => {
    const dataFourStar = dataCurrent.filter((o) => o.rating === 4);
    setData(dataFourStar);
  };
  const handleFiveStar = (e) => {
    const dataFiveStar = dataCurrent.filter((o) => o.rating === 5);
    setData(dataFiveStar);
  };
  const handleAmerican = (e) => {
    console.log(e.target.checked);
    // const abc = dataCurrent.filter(o => checkgroupValues.includes(o.cuisine))
    const dataFilter = dataCurrent.filter((o) => o.cuisine === "american");
    setData(dataFilter);
  };
  const handleChinese = (e) => {
    console.log(e.target.checked);
    const dataFile = dataCurrent.filter((o) => o.cuisine === "chinese");
    setData(dataFile);
  };
  const handleItalian = (e) => {
    const dataNew = dataCurrent.filter((o) => o.cuisine === "italian");
    setData(dataNew);
  };
  useEffect(() => {
    getTourApp();
  }, []);
  useEffect(() => {
    console.log(searchInput);
    const dataNew = dataCurrent.filter((o) => o.title.includes(searchInput));
    setData(dataNew);
  }, [searchInput]);
  return (
    <div className="wrapper__app">
      <div className="header__tour">
        <input
          type="text"
          placeholder="Woodland Hills"
          onChange={(e) =>
            setTimeout(() => {
              setSearchInput(e.target.value);
            }, 1000)
          }
        />
      </div>
      <div className="tour__content">
        <div className="sidebar">
          <div className="category">
            <h2>Category</h2>
          </div>

          <Radio.Group className="radius" buttonStyle="solid">
            <div className="flex-category">
              <div className="places">
                <Radio.Button
                  value="places"
                  style={{ borderRadius: "15px" }}
                  onClick={handlePlaces}
                >
                  PLACES
                </Radio.Button>
              </div>
              <div className="dishes">
                <Radio.Button
                  value="dishes"
                  style={{ borderRadius: "15px" }}
                  onClick={handleDishes}
                >
                  DISHES
                </Radio.Button>
              </div>
            </div>
          </Radio.Group>

          <div className="cuisine">
            <h2>Cuisine</h2>
          </div>
          <div className="american__flex">
            <div className="american__flex-children">
              <p>American</p>
            </div>
            <div className="amer__checkbox">
              <input
                type="checkbox"
                style={{ color: "#000" }}
                onClick={handleAmerican}
              />
            </div>
          </div>
          <div className="chinese__flex">
            <div className="chinese__flex-children">
              <p>Chinese</p>
            </div>
            <div className="chine__checkbox">
              <input type="checkbox" onClick={handleChinese} />
            </div>
          </div>
          <div className="italian__flex">
            <div className="italian__flex-children">
              <p>Italian</p>
            </div>
            <div className="ita__checkbox">
              <input type="checkbox" onClick={handleItalian} />
            </div>
          </div>
          <div className="price-range">
            <h2>Price Range</h2>
            <div className="range">
              <Slider range defaultValue={[20, 50]} />
            </div>
          </div>
          <div className="star__rating">
            <h2>Star Rating</h2>
            <div>
              <Radio.Group buttonStyle="solid" className="all-start">
                <Radio.Button
                  value="1"
                  style={{ color: "#ccc" }}
                  onClick={handleOneStar}
                >
                  1
                  <StarFilled style={{ color: "yellow" }} />
                </Radio.Button>
                <Radio.Button
                  value="2"
                  style={{ color: "#ccc" }}
                  onClick={handleTwoStar}
                >
                  2
                  <StarFilled style={{ color: "yellow" }} />
                </Radio.Button>
                <Radio.Button
                  value="3"
                  style={{ color: "#ccc" }}
                  onClick={handleThreeStar}
                >
                  3<StarFilled style={{ color: "yellow" }} />
                </Radio.Button>
                <Radio.Button
                  style={{ color: "#ccc" }}
                  value="4"
                  onClick={handleFourStar}
                >
                  4<StarFilled style={{ color: "yellow" }} />
                </Radio.Button>
                <Radio.Button
                  style={{ color: "#ccc" }}
                  value="5"
                  onClick={handleFiveStar}
                >
                  5
                  <StarFilled style={{ color: "yellow" }} />
                </Radio.Button>
              </Radio.Group>
            </div>
          </div>
        </div>

        <div className="home__page">
          <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
            {data.map((o, i) => {
              return (
                <Col
                  key={i}
                  xs={{ span: 24 }}
                  sm={{ span: 12 }}
                  md={{ span: 8 }}
                  lg={{ span: 6 }}
                  span={6}
                  style={{ marginTop: "10px" }}
                >
                  <CardTour data={o} key={i} />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default TourApp;
