var params = new URLSearchParams(location.search);
var groupName = params.get("name");
var initiatives = details[groupName];

document.title = groupName + " - Digital India";
document.getElementById("pageTitle").innerHTML = groupName;

for (var i of initiatives) {
  var a = document.createElement("a");
  var card = document.createElement("div");
  var img = document.createElement("img");
  var span = document.createElement("span");
  var btn = document.createElement("button");
  a.href = "./initiative.html?name=" + i.name + "&group=" + groupName;
  card.className =
    "md:w-[20vw] w-[60vw] p-4 inline-flex flex-col items-center shadow-lg rounded-lg mr-4 mb-4 hover:bg-gray-200 transition cursor-pointer";
  img.src = inits[i.name].logo;
  img.className = "h-24";
  span.className = "md:text-xl text-base font-bold text-center";
  span.innerHTML = i.name;
  btn.className =
    "bg-blue-600 hover:bg-blue-800 text-white py-2 px-6 rounded-full cursor-pointer transition mt-4";
  btn.innerHTML = "Explore";
  document.getElementById("initiatives").appendChild(a);
  a.appendChild(card);
  card.appendChild(img);
  card.appendChild(span);
  card.appendChild(btn);
}
