const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const adValue = () => {
  const text = input.value.trim();
  return (output.textContent = text === "" ? "Anonymous" : text);
};

input.addEventListener("input", adValue);
