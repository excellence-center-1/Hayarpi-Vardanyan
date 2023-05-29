const tilesContainer = document.querySelector(".tiles");
const images = [
  "../images/flowers/82496c575469656abb32bdeb048b466c.jpg",
  "../images/flowers/82fce18610991fa5f865f08fe8f06d79.jpg",
  "../images/flowers/7d11c13742cd857b3e4a1319dd83983c.jpg",
  "../images/flowers/a2cda9caa139848018502ebabf205a21.jpg",
  "../images/flowers/be74602a7eb3ae0558faa2090933bfe0.jpg",
  "../images/flowers/d5c31b570fd4da360471bbfb8cfaa65e.jpg",
  "../images/flowers/ecd1e0dc394bb7c75d9213620fbbd4bd.jpg",
  "../images/flowers/ef059373de716f92fc2e7ca2533819fc.jpg"
];
const imagesPicklist = [...images, ...images];
const tileCount = imagesPicklist.length;

let revealedCount = 0;
let activeTiles = [];

class Tile {
  constructor(image) {
    this.element = this.buildTileElement(image);
    this.revealed = false;
    this.active = false;
  
    this.element.addEventListener("click", () => {
      this.handleClick();
    });
  }
  
  buildTileElement(image) {
    const element = document.createElement("div");
    element.classList.add("tile");
    element.setAttribute("data-revealed", "false");
  
    const img = document.createElement("img");
    img.src = image;
  
    element.appendChild(img);
  
    return element;
  }
  
  handleClick() {
    const revealed = this.element.getAttribute("data-revealed");
  
    if (revealed === "true" || activeTiles.length >= 2) {
      return;
    }
  
    this.reveal();
    this.active = true;
    activeTiles.push(this);
  
    if (activeTiles.length === 2) {
      this.checkMatch();
    }
  }
  
  reveal() {
    this.element.setAttribute("data-revealed", "true");
  }
  
  hide() {
    this.element.setAttribute("data-revealed", "false");
  }
  
  checkMatch() {
    const [tile1, tile2] = activeTiles;
    const image1 = tile1.element.querySelector("img").src;
    const image2 = tile2.element.querySelector("img").src;
  
    if (image1 === image2) {
      tile1.revealed = true;
      tile2.revealed = true;
  
      revealedCount += 2;
  
      if (revealedCount === tileCount) {
          alert("You win!" );
        }
    } else {
      setTimeout(() => {
        tile1.hide();
        tile2.hide();
      }, 1000);
    }
  
    activeTiles.length = 0;
  }
}
  
for (let i = 0; i < tileCount; i++) {
  const randomIndex = Math.floor(Math.random() * imagesPicklist.length);
  const image = imagesPicklist[randomIndex];
  const tile = new Tile(image);
  
  imagesPicklist.splice(randomIndex, 1);
  tilesContainer.appendChild(tile.element);
}


