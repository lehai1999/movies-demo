/* eslint-disable jsx-a11y/alt-text */
import "./TheWorld.scss";

function CardWorld(props) {
  const { data, handleDetail } = props;
  return (
    <div className="card__country-one">
      <div className="name__country">
        <img className="country__world" src={data.flags.svg} />
      </div>
      <div className="margin__information" onClick={handleDetail}>
        <div className="information__country">
          <h2>{data.name.common}</h2>
        </div>
        <div className="information_pop">
          <b>Population</b>: {data.population}
        </div>
        <div className="information__region">
          <b>Region</b>: {data.region}
        </div>
        <div className="information__capital">
          <b>Capital</b>: {data.capital}
        </div>
      </div>
    </div>
  );
}

export default CardWorld;
