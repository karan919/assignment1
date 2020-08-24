import React, { useEffect, useState } from "react";

const Data1 = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://run.mocky.io/v3/49fb6949-e84d-4dac-88fc-6d8435afd4d1")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  if (!data.title) {
    return <p>Loading..</p>;
  }
  return (
    <div className="box">
      <div className="left-box">
        <h2>{data.title}</h2>
        <h4>{data.space}</h4>
        <p>{data.description}</p>
      </div>
      <div className="right-box">
        <h2>{data.title}</h2>
        <ul>
          {data.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        <h2>Learning</h2>
        <p>{data.learning}</p>
      </div>
    </div>
  );
};

export default Data1;
