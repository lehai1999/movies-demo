import "./Movie.scss";
function DataMovies(props) {
  const { data } = props;
  return (
    <div>
      <div className="card__header">
        <img src={data.poster} />
        <div className="flex-title">
          <h1>{data.title}</h1>
          <h2>{data.imdb}</h2>
        </div>

        <div className="contents">
          <div className="inner">
            Professor Albus Dumbledore knows the powerful, dark wizard Gellert
            Grindelwald is moving to seize control of the wizarding world.
            Unable to stop him alone, he entrusts magizoologist
          </div>
        </div>
      </div>
      <div className="card__header">
        <img src={data.poster} />
        <div className="flex-title">
          <h1>{data.title}</h1>
          <h2>{data.imdb}</h2>
        </div>
        <div className="contents">
          <div className="inner">
            Professor Albus Dumbledore knows the powerful, dark wizard Gellert
            Grindelwald is moving to seize control of the wizarding world.
            Unable to stop him alone, he entrusts magizoologist
          </div>
        </div>
      </div>
      <div className="card__header">
        <img src={data.poster} />
        <div className="flex-title">
          <h1>{data.title}</h1>
          <h2>{data.imdb}</h2>
        </div>
        <div className="contents">
          <div className="inner">
            Professor Albus Dumbledore knows the powerful, dark wizard Gellert
            Grindelwald is moving to seize control of the wizarding world.
            Unable to stop him alone, he entrusts magizoologist
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataMovies;
