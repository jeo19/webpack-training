import "./style.css";
function app() {
  const division = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.innerHTML = "Hello webpack";
  h1.className = "hello";
  division.appendChild(h1);
  return division;
}
document.body.appendChild(app());
