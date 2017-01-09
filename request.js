var req = new XMLHttpRequest();
req.open("GET", "data.json", false);
req.overrideMimeType("application/json");
req.send();
var items = JSON.parse(req.responseText);

for(var item in items){
  console.log(items[item]);
}
