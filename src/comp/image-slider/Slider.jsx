import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Style.css";

const Slider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (err) {
      setErrorMsg(err.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);
  console.log(images, "this is images teseting");
  if (loading) {
    return <div>loading data ! please Wait</div>;
  }
  if (errorMsg !== null) {
    return <div> Error Occurd !{errorMsg}</div>;
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <center><div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((item, index) => (
            <img
              key={item.id}
              alt={item.download_url}
              src={item.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div></center>
  );
};

export default Slider;
