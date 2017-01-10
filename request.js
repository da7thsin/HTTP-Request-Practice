var helper = (function(){

  function getURL(url, callback){
    var req = new XMLHttpRequest();

    function loadAction(){
      if(req.status == 200){
        callback(req.responseText);
      }
    }

    if(/json/i.test(url)){
      req.overrideMimeType("application/json");
    }

    req.open("GET", url);
    req.addEventListener("load", loadAction);
    req.send();
  }


  function createItem(value, className){
    var li = document.createElement("li");
    var text = document.createTextNode(value);
    li.setAttribute('class', className);
    li.append(text);

    return li;
  }

  return {
    createItem: createItem,
    getURL: getURL
  }
})();


(function(){
  var btn = document.querySelector("button");
  var input = document.querySelector("input[type=text]");
  var ul = document.querySelector(".list-box");

  helper.getURL("data.json", function(data){
    var data = JSON.parse(data);

    data.forEach(function(item){
      var string = item["name"] + " " + item["age"]
      ul.append(helper.createItem(string, "item default"));
    })
  });

  btn.addEventListener("click", function(){
    if(input.value){
      ul.append(helper.createItem(input.value, "item"));
      input.value = "";
    }
  });

  input.addEventListener("keydown", function(event){
    if(event.which === 13 && input.value){
      ul.append(helper.createItem(input.value, "item"));
      input.value = "";
    }
  });
})();
