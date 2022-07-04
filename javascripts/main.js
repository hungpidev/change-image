window.addEventListener("load", handleLoadWindow);
function handleLoadWindow(event) {
  const imageItem = document.querySelectorAll(".image-item img");
  const imageMain = document.querySelector(".image-main img");
  const currentImageMain = localStorage.getItem("image");
  if (currentImageMain) {
    imageMain.setAttribute("src", currentImageMain);
  }
  imageItem.forEach((item) =>
    item.addEventListener("click", handleChangeImage)
  );
  function handleChangeImage(event) {
    const imagePath = event.target.getAttribute("src");
    imageMain.setAttribute("src", imagePath);
    localStorage.setItem("image", imagePath);
  }
}
