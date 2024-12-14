const drumButtons = document.querySelectorAll(".drum");

drumButtons.forEach(button => {
  button.addEventListener("click", function () {
    playSound(this.innerText);
    addAnimation(this.innerText);
  });
});

// 2. 監聽鍵盤按鍵事件
document.addEventListener("keydown", function (event) {
  playSound(event.key);
  addAnimation(event.key);
});

// 3. 播放音效的函數
function playSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(key);
  }
}

// 4. 添加按壓動畫的函數
function addAnimation(currentKey) {
  const activeButton = document.querySelector(`.${currentKey}`);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}