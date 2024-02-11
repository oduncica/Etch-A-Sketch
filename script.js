const container = document.querySelector("#container");
const button = document.querySelector("button");
for (let i = 1; i <= 16 * 16; i++) {
  const div = document.createElement("div");
  container.appendChild(div);
}

// container.addEventListener("mouseover", function (event) {
//   event.target.style.color = "orange";
// });


button.addEventListener("click",
 function createDiv (number) {
    container.innerHTML = "";
    number = prompt("how many div do you want ?")
    if (number < 100) {
        for (let i = 1; i <= number*number; i*i) {
                const div = document.createElement("div");
                container.appendChild(div);
          }

    }

    else {
        alert("your number must be under 100 ! ")
        createDiv(number)
    
    }
 
}
)