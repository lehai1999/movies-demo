import { Row, Col, Input, Select } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardWorld from "./cardWorld";
import axiosApi from "./Services/nameWorldApi";
import fetchApi from "./Services/theWorldApi";
import "./TheWorld.scss";

const { Option } = Select;

function WhereInTheWorld() {
  const navigate = useNavigate();
  const [region, setRegion] = useState("");
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [dataDefault, setDataDefault] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  async function getWhereInTheWorld() {
    try {
      const response = await fetchApi.get("all");
      setData(response.data);
      setDataDefault(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getNameCountry() {
    try {
      const result = await axiosApi.get("vn");
      console.log("namecountry", result);
      // setName(result.data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = (event) => {
    if (name.trim() === "") {
      event.preventDefault();
      return setData(dataDefault);
    }

    const fount =
      region.length > 0
        ? dataDefault
            .filter((element) => element.region === region)
            .find((element) => element.name.common === name)
        : dataDefault.find((element) => element.name.common === name);

    setData(fount?.name ? [fount] : []);

    event.preventDefault();
  };
  const handleChange = (event) => {
    // if (name.trim() === "") {
    //   return getWhereInTheWorld();
    // }
    setRegion(event.value);
    const fount = dataDefault.filter(
      (element) => element.region === event.value
    );
    console.log(fount);
    setData(fount);
    event.preventDefault();
  };
  useEffect(() => {
    getWhereInTheWorld();
    getNameCountry();
  }, []);

  const handleDetail = (name) => {
    navigate(`/whereInTheWorld/detail/${name}`);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <div className="theWorld">
        <div className="header__theWorld">
          <div className="header__all">
            <div className="header__one">
              <h2>Where In The World?</h2>
            </div>
            <div className="header__two">
              <i className="fa-solid fa-moon" style={{ color: "white" }}></i>
              <h2 onClick={() => setIsDarkMode(!isDarkMode)}>Dark Mode</h2>
            </div>
          </div>
        </div>
        <div className="flex__input">
          <div>
            <form onSubmit={handleSubmit}>
              <Input
                value={name}
                className="input"
                placeholder="Search for a country..."
                style={{
                  width: "200px",
                  borderRadius: "12px",
                  margin: "10px 20px",
                }}
                onChange={(e) => setName(e.target.value)}
              />
            </form>
          </div>
          <div className="Select">
            <Select
              className="select-color"
              labelInValue
              defaultValue="Filter by Region"
              style={{
                width: "150px",
                borderRadius: "10px",
                margin: "10px 20px ",
              }}
              onChange={handleChange}
            >
              <Option value="Africa">Africa</Option>
              <Option value="America">America</Option>
              <Option value="Asia">Asia</Option>
              <Option value="Europe">Europe</Option>
              <Option value="Oceania">Oceania</Option>
            </Select>
          </div>
        </div>

        <div className="card__country">
          <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 12]}>
            {data.map((o, i) => {
              return (
                <Col
                  key={i}
                  xs={{ span: 24 }}
                  sm={{ span: 12 }}
                  md={{ span: 6 }}
                  lg={{ span: 4 }}
                  style={{ marginTop: "10px" }}
                  span={4}
                >
                  <CardWorld
                    data={o}
                    key={i}
                    handleDetail={() => handleDetail(o.name.common)}
                  />
                  ;
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default WhereInTheWorld;
