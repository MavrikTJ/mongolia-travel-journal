const photos = [
  ["IMG_0013.jpg", "city", "乌兰巴托的城市入口"],
  ["IMG_0179.jpg", "city", "蓝天下的建筑轮廓"],
  ["IMG_0182.jpg", "city", "城市街区的晴朗片段"],
  ["IMG_0194.jpg", "steppe", "离开城市后的第一段开阔地"],
  ["IMG_0195.jpg", "steppe", "草原边缘的光线"],
  ["IMG_0197.jpg", "steppe", "路边视野慢慢打开"],
  ["IMG_0198.jpg", "steppe", "起伏山坡与远处云影"],
  ["IMG_0200.jpg", "steppe", "行进中的草原色带"],
  ["IMG_0201.jpg", "steppe", "草地、山丘和远方道路"],
  ["IMG_0204.jpg", "steppe", "柔和坡地上的风"],
  ["IMG_0206.jpg", "river", "河谷开始出现"],
  ["IMG_0210.jpg", "river", "水面把草地切成弧线"],
  ["IMG_0213.jpg", "river", "浅滩与绿色河岸"],
  ["IMG_0219.jpg", "river", "高处俯看蜿蜒河流"],
  ["IMG_0224.jpg", "river", "山脚下的湿地纹理"],
  ["IMG_0227.jpg", "steppe", "远山前的草原层次"],
  ["IMG_0229.jpg", "steppe", "云影经过低缓丘陵"],
  ["IMG_0234.jpg", "detail", "途中短暂停靠的细节"],
  ["IMG_0241.jpg", "steppe", "大片绿色向远处延伸"],
  ["IMG_0243.jpg", "steppe", "草原上的道路感"],
  ["IMG_0247.jpg", "detail", "旅途中靠近观看的一刻"],
  ["IMG_0249.jpg", "steppe", "山坡与草地交界"],
  ["IMG_0250.jpg", "steppe", "辽阔平地上的云"],
  ["IMG_0256.jpg", "steppe", "浅色山体和绿色草甸"],
  ["IMG_0268.jpg", "detail", "路边风景的近景"],
  ["IMG_0272.jpg", "steppe", "草原深处的停留"],
  ["IMG_0274.jpg", "river", "河道与沙洲"],
  ["IMG_0277.jpg", "river", "水边低处的景色"],
  ["IMG_0280.jpg", "steppe", "开阔地貌的安静层次"],
  ["IMG_0288.jpg", "detail", "草地上的小片刻"],
  ["IMG_0291.jpg", "steppe", "山脊线下的草场"],
  ["IMG_0293.jpg", "steppe", "远处山影与低云"],
  ["IMG_0315.jpg", "detail", "草原细部与路上观察"],
  ["IMG_0316.jpg", "detail", "贴近地面的纹理"],
  ["IMG_0335.jpg", "detail", "草丛里的小生命"],
  ["IMG_0336.jpg", "detail", "草地上的安静瞬间"],
  ["IMG_0337.jpg", "detail", "微小动静被风盖住"],
  ["IMG_0339.jpg", "detail", "草原生态的一角"],
  ["IMG_0355.jpg", "detail", "镜头里的小型野生动物"],
  ["IMG_0378.jpg", "steppe", "云层压过辽阔平原"],
];

const grid = document.querySelector("#photoGrid");
const buttons = [...document.querySelectorAll(".filter")];
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxCaption = document.querySelector("#lightboxCaption");
const closeButton = document.querySelector(".close");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let visiblePhotos = [...photos];
let activeIndex = 0;

function ratioFor(index) {
  const pattern = ["3 / 2", "4 / 3", "16 / 10", "5 / 4", "3 / 2", "6 / 5"];
  return pattern[index % pattern.length];
}

function layoutClass(index) {
  if ([0, 9, 21, 32].includes(index)) return "is-featured";
  if ([5, 16, 27, 36].includes(index)) return "is-wide";
  if ([3, 13, 24, 34].includes(index)) return "is-tall";
  return "";
}

function categoryLabel(category) {
  const labels = {
    city: "城市",
    steppe: "草原",
    river: "河谷",
    detail: "细节",
  };
  return labels[category] || "旅途";
}

function render(filter = "all") {
  visiblePhotos = filter === "all" ? [...photos] : photos.filter((photo) => photo[1] === filter);

  grid.innerHTML = visiblePhotos
    .map(([file, category, caption], index) => {
      return `
        <button class="photo-card ${layoutClass(index)}" type="button" data-index="${index}" data-category="${category}" style="--ratio: ${ratioFor(index)}">
          <span class="photo-frame">
            <img src="./assets/thumbs/${file}" alt="${caption}" loading="lazy">
          </span>
          <span class="photo-meta">
            <span class="photo-tag">${categoryLabel(category)}</span>
            <span class="photo-caption">${caption}</span>
          </span>
        </button>
      `;
    })
    .join("");
}

function openLightbox(index) {
  const [file, , caption] = visiblePhotos[index];
  activeIndex = index;
  lightboxImage.src = `./assets/large/${file}`;
  lightboxImage.alt = caption;
  lightboxCaption.textContent = caption;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.removeAttribute("src");
  document.body.style.overflow = "";
}

function showAdjacent(direction) {
  const nextIndex = (activeIndex + direction + visiblePhotos.length) % visiblePhotos.length;
  openLightbox(nextIndex);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    render(button.dataset.filter);
  });
});

grid.addEventListener("click", (event) => {
  const card = event.target.closest(".photo-card");
  if (!card) return;
  openLightbox(Number(card.dataset.index));
});

closeButton.addEventListener("click", closeLightbox);
prevButton.addEventListener("click", () => showAdjacent(-1));
nextButton.addEventListener("click", () => showAdjacent(1));

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("open")) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") showAdjacent(-1);
  if (event.key === "ArrowRight") showAdjacent(1);
});

render();
