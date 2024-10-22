const content = [
  React.createElement("h1", { key: "h1" }, "Heading 1"),
  React.createElement("h2", { key: "h2" }, "Heading 2"),
];
const child = React.createElement("div", { id: "child" }, content);
const parent = React.createElement("div", { id: "parent" }, child);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
