import React, { useState, useEffect, useRef } from "react";
import "./Dropdown.css";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      // console.log("You clicked in the body");
      // console.log(event.target);
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          // console.log("You clicked in an item");
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  // console.log(ref.current);
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <div className="label">Select a Color</div>
        <div
          onClick={() => {
            // console.log("You clicked in the dropdown");
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
      <span>
        The selected color is{" "}
        <span className={selected.value}>{selected.value}</span>.
      </span>
    </div>
  );
};

export default Dropdown;
