import { useEffect, useState } from "react";
import CardPoke from "./cardPoke";
import fetchApi from "./Services/pokeApi";
import "./TourApp.scss";
import { Col, Row } from "antd";
const style = {
  background: "#0092ff",
  padding: "8px 0",
};

function PokeDex() {
  const [data, setData] = useState([]);
  async function getPokeDex() {
    try {
      const response = await fetchApi.get("pokedex");
      console.log("pokedex", response);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getPokeDex();
  }, []);
  return (
    <div className="wrapper__poke">
      <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
        {data.map((o, i) => {
          return (
            <Col
              key={i}
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 6 }}
              lg={{ span: 4 }}
              span={4}
            >
              <CardPoke data={o} key={i} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default PokeDex;
