var req = new XMLHttpRequest();
req.open("GET", "data.json");
req.addEventListener("load", function(){
  console.log("Done", req.status);
  console.log(JSON.parse(req.responseText));
});
req.send();
