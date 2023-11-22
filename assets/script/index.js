const notifLists = document.querySelectorAll(".notif-list");

notifLists.forEach(function (notifList) {
  const red = notifList.querySelector(".red");

  if (red) {
    notifList.classList.add("unread");
  } else {
    return 0;
  }

  notifList.addEventListener("click", function (e) {
    console.log("hello");

    const notifContent = notifList.querySelector(".red");
    if (!notifContent) {
      return false;
    } else {
      notifContent.style.display = "none";
      notifList.classList.remove("unread");
    }

    redCount();
  });
});

const markRead = document.querySelector(".mark-read");
markRead.addEventListener("click", () => {
  const notifList = document.querySelectorAll(".notif-list");
  notifList.forEach((notif) => {
    notif.classList.contains("unread") && notif.classList.remove("unread");
  });
  var notifContents = document.querySelectorAll(".red");
  notifContents.forEach(function (notifContent) {
    notifContent.style.display = "none";

    redCount();
  });
});

function redCount() {
  const redDisplay = document.querySelector(".notif-num");
  const redCount = document.querySelectorAll(`.red`);
  const displayRedElement = Array.from(redCount).filter((e) => {
    return window.getComputedStyle(e).display !== "none";
  });

  redDisplay.innerHTML = `${displayRedElement.length}`;

  console.log(redCount);
}

redCount();
