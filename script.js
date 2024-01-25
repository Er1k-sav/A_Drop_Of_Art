const $button = document.querySelector("#getstartedbt");
const { clientHeight, clientWidth } = $button;
const r = Math.sqrt(clientHeight ** 2 + clientWidth ** 2);

$button.addEventListener("click", (e) => {
  const $ripple = document.createElement("span");
  $ripple.className = "button-ripple";
  $ripple.style.height = `${2 * r}px`;
  $ripple.style.width = `${2 * r}px`;
  $ripple.style.top = `${e.offsetY - r}px`;
  $ripple.style.left = `${e.offsetX - r}px`;

  const $last = $button.querySelector(".button-ripple");
  if ($last) $last.remove();

  $button.appendChild($ripple);
});
