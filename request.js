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

function createItem(value){
  var li = document.createElement("li");
  var text = document.createTextNode(value);
  li.setAttribute('class', 'item');
  li.append(text);

  return li;
}


var app = (function(){
  var btn = document.querySelector("button");
  var input = document.querySelector("input[type=text]");
  var ul = document.querySelector(".list-box");

  btn.addEventListener("click", function(){
    if(input.value){
      ul.append(createItem(input.value));
      input.value = "";
    }
  });
})();
