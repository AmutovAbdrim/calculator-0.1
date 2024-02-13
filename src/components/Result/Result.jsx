import styles from "./Result.module.scss";
import "../../App.jsx";

function Result(props) {
  return (
    <>
      <span className={styles.result}>{props.resultValue}</span>
    </>
  );
}

export default Result;
