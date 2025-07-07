const shareIconBtn = document.querySelector(".icon");
const shareIcons = document.querySelector(".share-icons");

shareIconBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (shareIcons.style.display === 'none' || shareIcons.style.display === '') {
    shareIcons.style.display = 'block';
  } else {
    shareIcons.style.display = 'none';
  }
});
