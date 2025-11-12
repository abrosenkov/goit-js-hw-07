//                    1
const list = document.querySelectorAll("#categories > .item");

console.log(`Number of categories: ${list.length}`);

//                    2
list.forEach((item) => {
  const elements = item.querySelector("h2").textContent;
  const categories = item.querySelectorAll("ul > li").length;
  console.log(`Category: ${categories}`);
  console.log(`Elements: ${elements}`);
});
