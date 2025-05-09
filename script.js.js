function changeColor() {
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.getElementById("colorBox").style.backgroundColor = randomColor;
  document.getElementById("colorCode").innerText = randomColor;
}
function copyColorCode() {
  const colorText = document.getElementById("colorCode").innerText;

  navigator.clipboard.writeText(colorText)
    .then(() => {
      showToast("Color Code Copied: " + colorText);
    })
    .catch(err => {
      showToast("Failed to Copy: " + err);
    });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.style.visibility = "visible";
  toast.style.opacity = "1";
  toast.style.transform = "translateX(-50%) translateY(0)";
  
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-50%) translateY(20px)";
    setTimeout(() => {
      toast.style.visibility = "hidden";
    }, 500); // Hide visibility after fade out
  }, 2000); // Visible for 2 seconds
}

