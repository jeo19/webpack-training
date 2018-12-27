import "./another.css";
function bar() {
  const contents = document.createElement("h3");
  contents.innerHTML = "Image Element!";
  contents.className = "another";
  return contents;
}
export default bar;
