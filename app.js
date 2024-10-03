let headerButtons = document.querySelectorAll(".btn");

headerButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    let cell = button.dataset["element"];
    console.log(cell);
    if (cell == "insertImage" || cell == "createLink") {
      let url = prompt("Enter link here:", "https://");
      document.execCommand(cell, true, url);
    } else {
      document.execCommand(cell, false, null);
    }
  });
});
