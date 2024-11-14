import React, { useState } from "react";
import data from "./data";
import "./style.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleMultiselection(getCurrentId) {
    let copyMutilpe = [...multiple];
    const findIndexOfCurrentID = copyMutilpe.indexOf(getCurrentId);
    console.log(findIndexOfCurrentID);
    if (findIndexOfCurrentID === -1) copyMutilpe.push(getCurrentId);
    else copyMutilpe.splice(findIndexOfCurrentID, 1);
    setMultiple(copyMutilpe);
  }

  function singleSelection(getCurrentId) {
    console.log(getCurrentId, "this is current ID");
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  console.log(selected, multiple);
  return (
    <div className="acc-wrapper">
      <button onClick={() => setMultiSelection(!multiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((mapItem) => (
            <div className="item">
              <div className="title1">
                <div
                  onClick={
                    multiSelection
                      ? () => handleMultiselection(mapItem.id)
                      : () => singleSelection(mapItem.id)
                  }
                  className="title"
                >
                  <h3>{mapItem.question}</h3>
                  <span>➕</span>
                </div>
                {
                  multiSelection ? multiple.indexOf(mapItem.id)!== -1  && (
                  <div className="content">{mapItem.answer}</div>):
                 ( selected === mapItem.id && <div className="acc-content ">{mapItem.answer}</div>
                  )


                }
                {selected === mapItem.id ||
                multiple.indexOf(mapItem.id) !== -1 ? (
                  <div className="content">{mapItem.answer}</div>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <h3>no data is present</h3>
        )}
      </div>
    </div>
  );
};

export default Accordian;
