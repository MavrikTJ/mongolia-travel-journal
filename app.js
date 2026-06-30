const photos = [
  ["June17_苏赫巴托广场.jpg", "ulaanbaatar", "6月17日，苏赫巴托广场。蒙古国旗在城市中心的蓝天下展开，旅程从这里开始。"],
  ["June17_苏赫巴托广场_1.jpg", "ulaanbaatar", "苏赫巴托广场的另一侧。城市建筑、广场尺度和晴朗天空一起构成乌兰巴托的第一印象。"],
  ["June17_苏赫巴托广场_2.jpg", "ulaanbaatar", "广场上的竖向视角。纪念性建筑被天空拉高，城市中心显得更庄重。"],
  ["June17_苏赫巴托广场_3.jpg", "ulaanbaatar", "从广场继续观察城市肌理，现代建筑和纪念空间在同一片蓝天下并置。"],
  ["June17_成吉思汗博物馆.jpg", "chinggis-museum", "6月17日，成吉思汗博物馆。高耸的建筑立面把城市里的历史叙事推到眼前。"],
  ["June17_成吉思汗博物馆_1.jpg", "chinggis-museum", "博物馆周边的视角。玻璃、石材和开阔街区延续了乌兰巴托的城市节奏。"],
  ["June17_兴仁寺.jpg", "xingren-temple", "6月17日，兴仁寺。城市行程里安静的一站，寺院色彩和建筑细节让节奏慢下来。"],
  ["June18_甘丹寺.jpg", "gandan", "6月18日，甘丹寺。离开城市前的寺院清晨，建筑和人流之间保留着日常的宗教气息。"],
  ["June18_甘丹寺_1.jpg", "gandan", "甘丹寺的另一处视角。屋檐、院落和阴影共同构成进入草原前的城市记忆。"],
  ["June18_迷你戈壁.jpg", "mini-gobi", "6月18日，迷你戈壁。沙丘在云下起伏，远处骑行的人和车辆显得很小。"],
  ["June18_迷你戈壁骆驼.jpg", "mini-gobi", "迷你戈壁的骆驼队。近距离看见毛色、缰绳和沙地上的停顿。"],
  ["June18_鄂尔浑河谷.jpg", "orkhon", "鄂尔浑河谷初见。雨雾压低山坡，河道在绿色草甸之间弯曲。"],
  ["June18_鄂尔浑河谷1.jpg", "orkhon", "河谷更开阔的一面。水流、浅滩和草地像地图上的线条一样铺开。"],
  ["June18_鄂尔浑河谷2.jpg", "orkhon", "雨后的鄂尔浑河谷。远处车辆和河湾让这片地貌有了尺度。"],
  ["June18_哈拉和林.jpg", "kharkhorin", "抵近哈拉和林。连绵草坡在阴云下变得沉静，远处有零散的马群。"],
  ["June18_哈拉和林1.jpg", "kharkhorin", "哈拉和林附近的绿色山坡。坡线柔和，天空压着一层将雨未雨的灰。"],
  ["June18_哈拉和林2.jpg", "kharkhorin", "草坡继续向远处延伸，起伏之间能看见牧场生活留下的痕迹。"],
  ["June18_哈拉和林3.jpg", "kharkhorin", "路边的开阔视野。云影掠过山丘，让绿色层次一段一段变暗。"],
  ["June18_哈拉和林4.jpg", "kharkhorin", "哈拉和林的草地细节。山坡不高，却把视线慢慢带到远处。"],
  ["June18_哈拉和林5.jpg", "kharkhorin", "低缓草丘与阴天光线。这里的景色更安静，适合把节奏放慢。"],
  ["June18_哈拉和林6.jpg", "kharkhorin", "靠近古都的路上，草场、道路和远山组成一段平缓的过渡。"],
  ["June18_哈拉和林7.jpg", "kharkhorin", "哈拉和林周边的辽阔感。画面里的空地和天空给旅程留出呼吸。"],
  ["June18_哈拉和林8.jpg", "kharkhorin", "傍晚前的草原色调。山坡、云层和地面被压成柔和的绿色。"],
  ["June19_额尔德尼昭寺.jpg", "erdene-zuu", "6月19日，额尔德尼昭寺。院墙、白塔和飞起的鸽子构成清晨的第一眼。"],
  ["June19_额尔德尼昭寺1.jpg", "erdene-zuu", "寺院外墙与草地。灰色天空下，白塔沿着围墙排成稳定的节奏。"],
  ["June19_额尔德尼昭寺2.jpg", "erdene-zuu", "额尔德尼昭寺的建筑细部。旧墙面和屋檐在阴天里显得更有年代感。"],
  ["June19_额尔德尼昭寺3.jpg", "erdene-zuu", "院内空间安静展开，寺院建筑与草地之间留着宽阔的距离。"],
  ["June19_额尔德尼昭寺4.jpg", "erdene-zuu", "绿顶亭子立在院中，背后是白塔和低缓山坡，颜色在阴天里很清晰。"],
  ["June19_额尔德尼昭寺5.jpg", "erdene-zuu", "从院墙看向寺内。白色、砖色和草绿色把历史感拉回到眼前。"],
  ["June19_额尔德尼昭寺6.jpg", "erdene-zuu", "寺院里的路径与建筑。每一个转角都能看到不同层次的院墙。"],
  ["June19_额尔德尼昭寺7.jpg", "erdene-zuu", "额尔德尼昭寺的安静一角。草地、白塔和低云把画面压得很稳。"],
  ["June19_额尔德尼昭寺8.jpg", "erdene-zuu", "院内建筑与远山同框，寺院不只是景点，也像草原上的坐标。"],
  ["June19_额尔德尼昭寺9.jpg", "erdene-zuu", "离开前回看寺院。灰天让建筑轮廓更清楚，色彩也更收敛。"],
  ["June19_额尔德尼昭寺10.jpg", "erdene-zuu", "寺院周边的细部记录。墙、塔和草地共同构成古都的背景。"],
  ["June19_额尔德尼昭寺11.jpg", "erdene-zuu", "额尔德尼昭寺最后一张。白塔沿墙延伸，旅程从历史重新走向草原。"],
  ["June19_呼斯台国家公园.jpg", "hustai", "呼斯台国家公园。雪线下的远山、低云和牧群，让空间一下子打开。"],
  ["June19_呼斯台国家公园1.jpg", "hustai", "进入国家公园后的草原。灌木、牛群和山脊线交织在一起。"],
  ["June19_呼斯台国家公园2.jpg", "hustai", "呼斯台的山地草场。道路和低坡引导视线伸向更远的地方。"],
  ["June19_呼斯台国家公园3.jpg", "hustai", "云影经过山坡，草地的颜色在明暗之间不断变化。"],
  ["June19_呼斯台国家公园4.jpg", "hustai", "国家公园里的开阔景观。远山、草甸和天空占据了整张画面。"],
  ["June19_呼斯台国家公园5.jpg", "hustai", "草地上的细小生命。安静看久一点，画面里会出现微小的动静。"],
  ["June19_呼斯台国家公园6.jpg", "hustai", "贴近草地的一刻。浅色草叶和低矮地形让野外观察变得细腻。"],
  ["June19_呼斯台国家公园7.jpg", "hustai", "草丛中的小动物。它让辽阔的国家公园多了一点近处的可爱细节。"],
  ["June19_呼斯台国家公园8.jpg", "hustai", "草地里的停顿。远处景观很大，近处的生命也值得被认真记录。"],
  ["June19_呼斯台国家公园9.jpg", "hustai", "呼斯台的野外观察。镜头压低后，草地的纹理和小动物都更清楚。"],
  ["June19_呼斯台国家公园10.jpg", "hustai", "国家公园里的安静片刻。风吹过草地，画面只留下细微的移动。"],
  ["June19_呼斯台国家公园11.jpg", "hustai", "草地深处的小身影。它把这段旅程从宏大的风景拉回到近距离观看。"],
  ["June19_呼斯台国家公园12.jpg", "hustai", "旅程收尾的辽阔远景。云层、山脉和草原一起把最后一段路展开。"],
  ["June20_宰桑纪念碑.jpg", "zaisan", "6月20日，宰桑纪念碑。登高之后，乌兰巴托的城市轮廓和远处山脉一起展开。"],
  ["June20_宰桑纪念碑_1.jpg", "zaisan", "宰桑纪念碑的观景视角。城市在山谷中铺开，旅程重新回到首都的高度。"],
  ["June20_宰桑纪念碑_2.jpg", "zaisan", "纪念碑周边的开阔空间。城市、山坡和纪念性建筑形成另一种蒙古尺度。"],
  ["June20_特日勒吉国家公园.jpg", "terelj", "6月20日，特日勒吉国家公园。巨石、草地和山谷把路线再次带向自然景观。"],
  ["June20_特日勒吉国家公园_1.jpg", "terelj", "特日勒吉的山谷视野。道路在草地间延伸，岩石和远山成为画面重心。"],
  ["June20_特日勒吉国家公园_2.jpg", "terelj", "国家公园里的岩石地貌。坚硬的山体和柔软草地形成鲜明对照。"],
  ["June20_特日勒吉国家公园_3.jpg", "terelj", "特日勒吉的草地与山坡。云层移动时，地形的起伏变得更清楚。"],
  ["June20_特日勒吉国家公园_4.jpg", "terelj", "沿着公园道路继续前行，山谷、草场和散落建筑组成层层景深。"],
  ["June20_特日勒吉国家公园_5.jpg", "terelj", "特日勒吉的近景记录。岩石边缘和绿色草地让画面更有触感。"],
  ["June20_特日勒吉国家公园_6.jpg", "terelj", "在特日勒吉停下来的片刻。远山不高，却把视野慢慢推向更深处。"],
  ["June20_特日勒吉国家公园_7.jpg", "terelj", "国家公园中的自然细节。草地、岩体和天空共同构成轻快的一段。"],
  ["June20_特日勒吉国家公园_8.jpg", "terelj", "特日勒吉的开阔景色。道路和坡线把视线引向谷地深处。"],
  ["June20_特日勒吉国家公园_9.jpg", "terelj", "离开特日勒吉前的回望。岩石山体和草原光线为这一天收尾。"],
  ["June21_博格丹可汗东宫.jpg", "bogd-palace", "6月21日，博格丹可汗东宫。旅程最后回到城市历史空间，用宫殿建筑作为收束。"],
];

const grid = document.querySelector("#photoGrid");
const buttons = [...document.querySelectorAll(".filter")];
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxCaption = document.querySelector("#lightboxCaption");
const closeButton = document.querySelector(".close");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const routeLinks = [...document.querySelectorAll(".route-link")];

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
    ulaanbaatar: "苏赫巴托广场",
    "chinggis-museum": "成吉思汗博物馆",
    "xingren-temple": "兴仁寺",
    gandan: "甘丹寺",
    "mini-gobi": "迷你戈壁",
    orkhon: "鄂尔浑河谷",
    kharkhorin: "哈拉和林",
    "erdene-zuu": "额尔德尼昭寺",
    hustai: "呼斯台国家公园",
    zaisan: "宰桑纪念碑",
    terelj: "特日勒吉国家公园",
    "bogd-palace": "博格丹可汗东宫",
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

function setActiveFilter(filter) {
  buttons.forEach((item) => {
    item.classList.toggle("active", item.dataset.filter === filter);
  });
  render(filter);
}

function showGalleryFilter(filter) {
  setActiveFilter(filter);
  document.querySelector("#gallery").scrollIntoView({ behavior: "smooth", block: "start" });
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
    setActiveFilter(button.dataset.filter);
  });
});

routeLinks.forEach((card) => {
  card.addEventListener("click", () => showGalleryFilter(card.dataset.filter));
  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    showGalleryFilter(card.dataset.filter);
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
