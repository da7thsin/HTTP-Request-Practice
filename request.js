function getURL(url, callback){
  var req = new XMLHttpRequest();

  function loadAction(){
    if(req.status == 200){
      callback(req.responseText);
    }
  }

  if(/json/gi.test(url)){
    req.overrideMimeType("application/json");
  }

  req.open("GET", url);
  req.addEventListener("load", loadAction);
  req.send();
}

getURL("data.json", function(data){
  console.log(data);
})
