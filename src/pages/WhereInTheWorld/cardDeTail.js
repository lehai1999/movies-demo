import "./DeTail.scss";
function CardDeTail(props) {
  const { data } = props;
  console.log(data);
  return (
    <div className="flex">
      <div className="flex__detail">
        <div className="detail__flag">
          <img src={data.flags.svg} />
        </div>
        <div className="detail__content">
          <h2>{data.name.common}</h2>
          <div className="level">
            <p>
              <span>Native Name:</span> {data.name.common}
            </p>
            <p>
              <span>Top Level Domain:</span> {data.tld}
            </p>
          </div>
          <div className="currencies">
            <p>Population: {data.population}</p>
            <p>Currencies: </p>
          </div>
          <div className="languages">
            <p>Region: {data.region}</p>
            <p>Languages: </p>
          </div>
          <p>Sub Region: {data.subregion}</p>
          <p>Capital:{data.capital}</p>
        </div>
      </div>
    </div>
  );
}

export default CardDeTail;
