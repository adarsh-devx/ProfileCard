let h5 = document.querySelector("h5");

let addFriend = document.querySelector("#add");

let flag = 0

addFriend.addEventListener("click", function () {
    if (flag == 0){

        h5.innerHTML = "Friends";
        h5.style.color = "green";
        flag = 1
        addFriend.innerHTML =  "Unfollow"
    }
    else {
        h5.innerHTML = "Stranger";
        h5.style.color = "red";
        flag = 0
        addFriend.innerHTML =  "Follow"
    }
});

