let n1 = Math.random() * 6
n1 = Math.floor(n1) + 1

let n2 = Math.random() * 6
n2 = Math.floor(n2) + 1

let img1 = "images/dice" + n1 + ".png"
let img2 = "images/dice" + n2 + ".png"

let image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", img1)

let image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src", img2)

if (n1 > n2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!"
} else if (n2 > n1) {
  document.querySelector("h1").innerHTML = "Player 2 wins!"
} else {
  document.querySelector("h1").innerHTML = "A Tie!"
}
