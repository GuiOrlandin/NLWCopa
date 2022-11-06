const body = document.querySelector("body");
// body.addEventListener('click', () => {
//    if(body.classList.contains('blue')) {
//     body.classList.replace('blue','yellow')
//    }
//    else if (body.classList.contains('yellow')) {
//     body.classList.replace('yellow','green')
//    }
//    else if (body.classList.contains('green')) {
//     body.classList.replace('green','blue')
//    }
// })

function changeColor() {
  if (body.classList.contains("blue")) {
    body.classList.replace("blue", "yellow");
  } else if (body.classList.contains("yellow")) {
    body.classList.replace("yellow", "green");
  } else if (body.classList.contains("green")) {
    body.classList.replace("green", "blue");
  }
}
