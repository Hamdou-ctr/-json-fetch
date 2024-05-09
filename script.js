async function fetchDataJson() {
  let response = await fetch("db.json");
  let responseAsJson = await response.json();
  console.log(responseAsJson);
}

async function fetchDataText() {
  let response = await fetch("h1.txt");
  let responseAstext = await response.text();
  console.log(responseAstext);

  document.getElementById("content").innerHTML = responseAstext;

  fetchDataJson();
}
