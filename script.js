class Carousel {
  constructor(container, options = {}) {
    this.container = container;
    this.wrapper = container.querySelector(".slides");
    this.slides = container.querySelectorAll(".slide");
    this.dotsContainer = container.querySelector(".dots");
    this.current = 0;

    this.prevBtn = options.prevBtn || null;
    this.nextBtn = options.nextBtn || null;

    this.createDots();
    this.attachEvents();
    this.update();
  }

  createDots() {
    this.dots = [];
    this.slides.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.className =
        "w-3 h-3 rounded-full bg-blue-500 hover:bg-blue-800 transition-all";
      dot.addEventListener("click", () => {
        this.current = index;
        this.update();
      });
      this.dotsContainer.appendChild(dot);
      this.dots.push(dot);
    });
  }

  attachEvents() {
    if (this.nextBtn) {
      this.nextBtn.addEventListener("click", () => {
        this.current = (this.current + 1) % this.slides.length;
        this.update();
      });
    }

    if (this.prevBtn) {
      this.prevBtn.addEventListener("click", () => {
        this.current =
          (this.current - 1 + this.slides.length) % this.slides.length;
        this.update();
      });
    }
  }

  update() {
    this.wrapper.style.transform = `translateX(-${this.current * 100}%)`;

    this.dots.forEach((dot, i) => {
      dot.classList.toggle("bg-black", i === this.current);
      dot.classList.toggle("bg-blue-500", i !== this.current);
      dot.classList.toggle("scale-125", i === this.current);
    });
  }
}

function impactCarouselSetup() {
  var slide;
  var wrapper;
  var impactColors = ["yellow-300", "blue-300", "purple-300", "green-300"];
  for (var i in impactData) {
    if (i % 4 == 0) {
      slide = document.createElement("div");
      slide.className =
        "slide min-w-full flex-shrink-0 h-120 flex items-center justify-center text-xl font-bold";
      document.getElementById("impact-slides").appendChild(slide);
      wrapper = document.createElement("div");
      wrapper.className =
        "w-full h-full grid grid-cols-2 grid-rows-2 gap-4 p-4";
      slide.appendChild(wrapper);
    }
    var gridBox = document.createElement("div");
    var logoImg = document.createElement("img");
    var text = document.createElement("span");
    var sideImg = document.createElement("img");

    gridBox.className =
      "rounded-xl relative bg-linear-to-t from-" +
      impactColors[i % impactColors.length] +
      " to-white";
    logoImg.className = "absolute left-6 top-6 md:max-h-16 max-h-4";
    logoImg.src = inits[impactData[i].name].logo;
    text.className = "absolute left-6 md:top-26 top-14";
    text.innerHTML = `<h2 class="md:text-4xl text-sm font-bold leading-3">${impactData[i].no}</h2><span class="md:text-base text-xs leading-3 inline-block">${impactData[i].kind}</span>`;
    sideImg.className = "absolute right-0 bottom-0 md:max-h-32 max-h-20";
    sideImg.src = impactData[i].sp;
    wrapper.appendChild(gridBox);
    gridBox.appendChild(logoImg);
    gridBox.appendChild(text);
    gridBox.appendChild(sideImg);
  }

  const homeCarouselEl = document.getElementById("impact-carousel");
  new Carousel(homeCarouselEl, {
    prevBtn: document.getElementById("impact-prev"),
    nextBtn: document.getElementById("impact-next"),
  });
}

function initsCarouselSetup() {
  var slide;
  var wrapper;
  var tr;
  var objectValues = Object.values(details);
  var c = 0;
  for (var i in objectValues) {
    for (realInit in objectValues[i]) {
      if (c % 4 == 0) {
        slide = document.createElement("div");
        slide.className =
          "slide min-w-full flex-shrink-0 h-120 flex items-center justify-center text-xl font-bold";
        document.getElementById("inits-slides").appendChild(slide);
        wrapper = document.createElement("table");
        wrapper.className = "w-full h-full gap-4 p-4";
        slide.appendChild(wrapper);
      }
      if (c % 2 == 0) {
        tr = document.createElement("tr");
        wrapper.appendChild(tr);
      }
      var gridBox = document.createElement("td");
      var gridInner = document.createElement("div");
      var logoImg = document.createElement("img");

      gridBox.className = "rounded-xl";
      gridInner.className =
        "inits-gi w-full h-full flex justify-center items-center";
      logoImg.src = inits[objectValues[i][realInit].name].logo;

      tr.appendChild(gridBox);
      gridBox.appendChild(gridInner);
      gridInner.appendChild(logoImg);
      c++;
    }
  }

  setTimeout(() => {
    document.querySelectorAll(".inits-gi").forEach((gridBox) => {
      const w = Math.floor(gridBox.getBoundingClientRect().width);
      const h = Math.floor(gridBox.getBoundingClientRect().height);
      const img = gridBox.querySelector("img");
      img.className = `max-w-[${w}px] lg:h-36 h-[6vw] object-contain aspect-auto`;
    });
  }, 50);

  const homeCarouselEl = document.getElementById("inits-carousel");
  new Carousel(homeCarouselEl, {
    prevBtn: document.getElementById("inits-prev"),
    nextBtn: document.getElementById("inits-next"),
  });
}

impactCarouselSetup();
initsCarouselSetup();

var headerToggle = document.getElementById("header-toggle-mobile");
var headerShadow = document.getElementById("header-shadow-mobile");
var headerLinks = document.getElementById("header-links-mobile");

headerToggle.addEventListener("click", function () {
  if (headerShadow.classList.contains("hidden")) {
    headerShadow.classList.remove("hidden");
    headerShadow.classList.add("fixed");
    headerLinks.classList.remove("hidden");
    headerLinks.classList.add("fixed");
  }
});
headerShadow.addEventListener("click", function () {
  if (headerShadow.classList.contains("fixed")) {
    headerShadow.classList.remove("fixed");
    headerShadow.classList.add("hidden");
    headerLinks.classList.remove("fixed");
    headerLinks.classList.add("hidden");
  }
});

// Task: ChatGPT
