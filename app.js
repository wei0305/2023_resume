const text = document.querySelectorAll(".paths");

for (let i = 0; i < text.length; i++) {
  console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
}

//動畫消失
 const lastWord = document.querySelector("#second");
 const animation = document.querySelector("div.animation");
 lastWord.addEventListener("animationend", () => {
   animation.style = "transition: all 1s ease; opacity: 0; pointer-events: none;";
 })
 function copyText() {
  var textToCopy = document.getElementById("copy-text").innerText;

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
      alert("已複製：" + textToCopy);
    }, function() {
      alert("複製失敗。");
    });
}
function copyText2() {
  var textToCopy = document.getElementById("copy-text2").innerText;

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
      alert("已複製：" + textToCopy);
    }, function() {
      alert("複製失敗。");
    });
  }