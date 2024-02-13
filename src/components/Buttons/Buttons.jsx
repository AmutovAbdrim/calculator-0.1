import styles from "./Buttons.module.scss";

function Buttons(props) {
  return (
    <>
      <div className={styles.buttonsWrapper}>
        <button onClick={() => props.onButtonClick("AC")}>AC</button>
        <button onClick={() => props.onButtonClick("+/-")}>+/-</button>
        <button onClick={() => props.onButtonClick("%")}>%</button>
        <button className={styles.yel} onClick={() => props.onButtonClick("/")}>
          /
        </button>

        <button onClick={() => props.onButtonClick("7")}>7</button>
        <button onClick={() => props.onButtonClick("8")}>8</button>
        <button onClick={() => props.onButtonClick("9")}>9</button>
        <button className={styles.yel} onClick={() => props.onButtonClick("*")}>
          *
        </button>

        <button onClick={() => props.onButtonClick("4")}>4</button>
        <button onClick={() => props.onButtonClick("5")}>5</button>
        <button onClick={() => props.onButtonClick("6")}>6</button>
        <button className={styles.yel} onClick={() => props.onButtonClick("-")}>
          -
        </button>

        <button onClick={() => props.onButtonClick("1")}>1</button>
        <button onClick={() => props.onButtonClick("2")}>2</button>
        <button onClick={() => props.onButtonClick("3")}>3</button>
        <button className={styles.yel} onClick={() => props.onButtonClick("+")}>
          +
        </button>

        <button
          className={styles.zero}
          onClick={() => props.onButtonClick("0")}
        >
          0
        </button>
        <button onClick={() => props.onButtonClick(".")}>.</button>
        <button className={styles.yel} onClick={() => props.onButtonClick("=")}>
          =
        </button>
      </div>
    </>
  );
}

export default Buttons;
