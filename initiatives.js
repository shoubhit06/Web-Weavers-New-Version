var detailsEntries = Object.entries(details);
var typeContainer;
var logoContainer;
var c = 0;

for (var [key, value] of detailsEntries) {
  typeContainer = document.createElement("div");
  var textContainer = document.createElement("div");
  var h1 = document.createElement("h1");
  var btn = document.createElement("button");
  logoContainer = document.createElement("div");
  typeContainer.className = "flex items-center p-4";
  textContainer.className = "flex flex-col p-4 border-slate-500";
  h1.className = "md:text-3xl text-1xl font-bold mb-8 text-center";
  h1.innerHTML = key;
  btn.className =
    "bg-blue-600 hover:bg-blue-800 text-white py-2 px-6 rounded-full cursor-pointer transition mb-14";
  btn.innerHTML = "Explore";
  btnEvent(btn, key);
  logoContainer.className = "p-4";
  document.getElementById("initiatives").appendChild(typeContainer);
  textContainer.appendChild(h1);
  textContainer.appendChild(btn);
  typeContainer.appendChild(textContainer);
  typeContainer.appendChild(logoContainer);
  if (c % 2 == 0) {
    textContainer.classList.add("border-r");
  } else {
    textContainer.classList.add("border-l");
    typeContainer.classList.add("bg-blue-300");
    typeContainer.classList.remove("flex-col");
    typeContainer.classList.add("flex-row-reverse");
  }
  for (var i of value) {
    var img = document.createElement("img");
    img.className = "md:w-40 w-25 inline mr-4 mb-4";
    img.src = inits[i.name].logo;
    logoContainer.appendChild(img);
  }
  c++;
}

function btnEvent(b, n) {
  b.onclick = function () {
    location.href = "./group.html?name=" + n;
  };
}
