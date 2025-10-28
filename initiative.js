var params = new URLSearchParams(location.search);
var initName = params.get("name");
var groupName = params.get("group");
var group = details[groupName];

var initObject = group.find((o) => o.name == initName);
if (initObject != undefined) {
  document.title = initObject.name + " - Digital India";
  document.getElementById("pageTitle").innerHTML = initObject.name;
  document.getElementById("initTitle").innerHTML = initObject.name;
  document.getElementById("pageOfficialWebsite").onclick = function () {
    window.open(initObject.url);
  };
  document.getElementById("initDescription").innerHTML = initObject.desc;
  document.getElementById("initSideImg").src = initObject.sidePicture;
} else {
  document.getElementById("pageTitle").classList.add("text-red-500");
  document.getElementById("pageTitle").innerHTML = "Initiative not found!";
}
