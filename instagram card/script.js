let myStatus = document.querySelector("h5");

let addFriend = document.querySelector("#add");

let check = 0;

addFriend.addEventListener("click", function () {
  if (check == 0) {
    myStatus.innerHTML = "Friends";
    myStatus.style.color = "green";
    check = 1;
    addFriend.innerHTML = "Remove Friends";
  } else {
    myStatus.innerHTML = "Strenger";
    myStatus.style.color = "red";
    check = 0;
    addFriend.innerHTML = "Add Friends";
  }
});
