//                    1
const list = document.querySelectorAll("#categories > .item");

console.log(`Number of categories: ${list.length}`);

//                    2
list.forEach((item) => {
  const categories = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("ul > li").length;
  console.log(`Category: ${categories}`);
  console.log(`Elements: ${elements}`);
});
