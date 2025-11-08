let statusText = document.querySelector(".card-subtitle");
let btn = document.querySelector("#add");

btn.addEventListener("click", () => {
  
  btn.classList.toggle("following");

  if(btn.classList.contains("following")){
    statusText.innerHTML = "Friends";
    statusText.style.color = "green";
    btn.innerHTML = "Unfollow";
  } 
  else {
    statusText.innerHTML = "Stranger";
    statusText.style.color = "#ff4d4d";
    btn.innerHTML = "Follow";
  }

});
