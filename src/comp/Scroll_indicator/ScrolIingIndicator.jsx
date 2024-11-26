import React, { useEffect, useState } from "react";
import "./Style.css";

const ScrolIingIndicator = () => {
  const url = "https://dummyjson.com/products?limit=100";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const res = await fetch(getUrl);
      const data = await res.json();
      console.log(data);
      setData(data.products);
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
    document.body.scrollTop || document.documentElement.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  setScrollPercentage((howMuchScrolled / height) * 100);
  }

  

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div>
      <div className="top-container">
        <h1> Custom Scroll Indicator</h1>

        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <center>
        <div className="data-container">
          {data && data.length > 0
            ? data.map((item) => <p>{item.title} </p>)
            : null}
        </div>
      </center>
    </div>
  );
};

export default ScrolIingIndicator;
