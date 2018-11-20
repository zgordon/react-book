import moment from "moment";

const today = moment().format("MM/DD/YYYY");

const container = document.getElementById("root");
container.innerHTML = `
  <h1>Title</h1>
  <p>Posted ${today}</p>
`;
