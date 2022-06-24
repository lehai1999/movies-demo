import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import DataMovies from "./DataMovies";
import "./Movie.scss";
import fetchApi from "./Services/MovieListApi";
function Movie() {
  const [data, setData] = useState([]);
  async function getMovie() {
    try {
      const response = await fetchApi.get("movies");
      console.log("movie", response);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className="page__movies">
      <div className="header-page">
        <input type="text" placeholder="Search" />
      </div>
      <div className="list__movies">
        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
          {data.map((o, i) => {
            return (
              <Col
                key={i}
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 8 }}
                lg={{ span: 4 }}
                span={12}
                style={{ margin: "10px 20px" }}
              >
                <DataMovies data={o} key={i} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Movie;
