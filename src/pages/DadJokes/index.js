import { useEffect, useState } from "react";
import "./DadJokes.scss";
import fetchApi from "./Services/Api";
function DadJokes() {
  const [data, setData] = useState("");
  async function getDadJokes() {
    try {
      const response = await fetchApi.get("slack");
      console.log("dadjokes", response);
      setData(response.data.attachments[0].text);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getDadJokes();
  }, []);
  const handleUpdate = async (event) => {
    console.log(event, "da vao day");
    getDadJokes();
  };

  return (
    <div className="wrapper__card">
      <div className="wrapper__card-one">
        <h3>Don't Laugh Challenge</h3>
        <h2>{data}</h2>
        <div className="card__content">
          <button className="random__btn" onClick={handleUpdate}>
            Get Another Joke
          </button>
        </div>
      </div>
    </div>
  );
}

export default DadJokes;
