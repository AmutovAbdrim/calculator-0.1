import "./Buttons.module.scss";

function Buttons(props) {
  const calcButtons = [
    "AC",
    "+/-",
    "%",
    "/",
    7,
    8,
    9,
    "x",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ",",
    "=",
  ];

  return (
    <>
      <div className="buttons">
        {calcButtons.map((el) => (
          <button>{el}</button>
        ))}
      </div>
    </>
  );
}

export default Buttons;
