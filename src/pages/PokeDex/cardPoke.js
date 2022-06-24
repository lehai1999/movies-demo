function CardPoke({ data }) {
  return (
    <div>
      <div className="card__poke">
        <div className="card__poke-one">
          <img src={data.image} />
        </div>
        <div className="card__poke-two">
          <h2>{data.id}</h2>
        </div>
        <div className="content">
          <h2>Blusama</h2>
          <p>{data.type}</p>
        </div>
      </div>
    </div>
  );
}

export default CardPoke;
