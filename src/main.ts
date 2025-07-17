const showCount = document.querySelector(".count") as HTMLDivElement;
const btn = document.querySelector("button")!;

let count = 0;
btn.onclick = () => {
  showCount.innerText = `Count: ${++count}`;
};
