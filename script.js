const button = document.querySelector("#getstartedbt");
const { clientHeight, clientWidth } = button;
const r = Math.sqrt(clientHeight ** 2 + clientWidth ** 2);

button.addEventListener("click", (e) => {
  const $ripple = document.createElement("span");
  $ripple.className = "button-ripple";
  $ripple.style.height = `${2 * r}px`;
  $ripple.style.width = `${2 * r}px`;
  $ripple.style.top = `${e.offsetY - r}px`;
  $ripple.style.left = `${e.offsetX - r}px`;

  const $last = button.querySelector(".button-ripple");
  if ($last) $last.remove();

  button.appendChild($ripple);

  
  const arrow = document.getElementById("arrowsvg");
  const menu = document.getElementById("menu");
  arrow.style.top = "1px";
  const timer = setInterval(() => {
    arrow.style.top = parseInt(arrow.style.top.split("px")[0]) + 2 + "px";
    arrow.style.visibility = "hidden";
  }, 1);

  button.style.opacity = 0;
  button.style.visibility = "hidden";
  setTimeout(() => {
    clearInterval(timer);
    setTimeout(() => {
        menu.style.opacity = 1;
        menu.style.visibility = "visible";
    }, 300);
  }, 1500);
});


const menu = () => {
    const creditsBT1 = document.getElementById("point1");
    const creditsBT2 = document.getElementById("scrolltext1");
    const credBOX = document.getElementById("cred");

    const infoBT1 = document.getElementById("point2");
    const infoBT2 = document.getElementById("scrolltext2");
    const infoBOX = document.getElementById("info");

    const downloadBT1 = document.getElementById("point3");
    const downloadBT2 = document.getElementById("scrolltext3");
    const downloadBOX = document.getElementById("download");

    creditsBT2.addEventListener("click", () => {
        infoBT1.style.backgroundColor = "transparent";
        downloadBT1.style.backgroundColor = "transparent";

        creditsBT1.style.backgroundColor = "white";
        creditsBT2.style.color = "coral";
        credBOX.style.visibility = "visible";
        infoBOX.style.visibility = "hidden";
        downloadBOX.style.visibility = "hidden";
        infoBT2.style.color = "white";
        downloadBT2.style.color = "white";
    });

    infoBT2.addEventListener("click", () => {
        creditsBT1.style.backgroundColor = "transparent";
        downloadBT1.style.backgroundColor = "transparent";

        infoBT1.style.backgroundColor = "white";
        infoBT2.style.color = "coral";
        credBOX.style.visibility = "hidden";
        infoBOX.style.visibility = "visible";
        downloadBOX.style.visibility = "hidden";
        downloadBT2.style.color = "white";
        creditsBT2.style.color = "white";
    });

    downloadBT2.addEventListener("click", () => {
        creditsBT1.style.backgroundColor = "transparent";
        infoBT1.style.backgroundColor = "transparent";

        downloadBT1.style.backgroundColor = "white";
        downloadBT2.style.color = "coral";
        credBOX.style.visibility = "hidden";
        infoBOX.style.visibility = "hidden";
        downloadBOX.style.visibility = "visible";
        infoBT2.style.color = "white";
        creditsBT2.style.color = "white";
    });
};

menu();
