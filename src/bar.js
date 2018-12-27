import styles from "./another.css";
function bar() {
  const contents = document.createElement("h3");
  contents.innerHTML = "Image Element!";
  contents.className = styles.another;
  return contents;
}
export default bar;
