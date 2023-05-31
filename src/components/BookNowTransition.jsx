import { useState } from "react";

const BookNowTransition = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="theInputs">
      <button className="btn" onClick={() => setToggle(!toggle)}>
        {" "}
        Book Now to receive an estimate
      </button>
      {toggle && <Item />}
    </div>
  );
};

const Item = () => {
  return (
    <div className="column">
      <a href="https://quikstop-diesel-bay-area.bookafy.com/schedule/?type=iframe&custom_embed=true&locale=en">
        {" "}
        <h1 className="transition1"> Book Now </h1>{" "}
      </a>
      ;
    </div>
  );
};

export default BookNowTransition;
