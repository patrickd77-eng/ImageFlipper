window.onload = function () {
  var output = document.getElementById("output"),
    buttonCheck = document.getElementById("rotate");
  let rotation = 0;

  function rotate() {
    rotation += 90;
    if (rotation === 360) {
      //reset
      rotation = 0;
    }
    output.style.transform = `rotate(${rotation}deg)`;
  }


  buttonCheck.addEventListener("click", function () {
    rotate();
  });
};

function loadFile(event) {
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src); // free memory
  };
}
