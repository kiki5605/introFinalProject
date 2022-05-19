const trueBtn1 = document.querySelector("button#true1");
const falseBtn1 = document.querySelector("button#false1");
const result1 =document.querySelector("span#results1")
const trueBtn2 = document.querySelector("button#true2");
const falseBtn2 = document.querySelector("button#false2");
const result2 =document.querySelector("span#results2")
const trueBtn3 = document.querySelector("button#true3");
const falseBtn3 = document.querySelector("button#false3");
const result3 =document.querySelector("span#results3")
const trueBtn4 = document.querySelector("button#true4");
const falseBtn4 = document.querySelector("button#false4");
const result4 =document.querySelector("span#results4")
const trueBtn5 = document.querySelector("button#true5");
const falseBtn5 = document.querySelector("button#false5");
const result5 =document.querySelector("span#results5")
const trueBtn6 = document.querySelector("button#true6");
const falseBtn6 = document.querySelector("button#false6");
const result6 =document.querySelector("span#results6")
const trueBtn7 = document.querySelector("button#true7");
const falseBtn7 = document.querySelector("button#false7");
const result7 =document.querySelector("span#results7")
const pointsText = document.querySelector("span#points");
let points = 0;


trueBtn1.onclick = () => {
  result1.innerHTML= "incorrect"
  points -= 1
  pointsText.innerHTML = points
}

falseBtn1.onclick =() => {
  result1.innerHTML = "correct"
  points += 1
  pointsText.innerHTML = points
}

trueBtn2.onclick = () => {
  result2.innerHTML= "incorrect"
  points -= 1
  pointsText.innerHTML = points
}

falseBtn2.onclick =() => {
  result2.innerHTML = "correct"
  points += 1
  pointsText.innerHTML = points
}

trueBtn3.onclick = () => {
  result3.innerHTML= "correct"
  points += 1
  pointsText.innerHTML = points
}

falseBtn3.onclick =() => {
  result3.innerHTML = "incorrect"
  points -= 1
  pointsText.innerHTML = points
}

trueBtn4.onclick = () => {
  result4.innerHTML= "correct"
  points += 1
  pointsText.innerHTML = points
}

falseBtn4.onclick =() => {
  result4.innerHTML = "incorrect"
  points -= 1
  pointsText.innerHTML = points
}

trueBtn5.onclick = () => {
  result5.innerHTML= "correct"
  points += 1
  pointsText.innerHTML = points
}

falseBtn5.onclick =() => {
  result5.innerHTML = "incorrect"
  points -= 1
  pointsText.innerHTML = points
}

trueBtn6.onclick = () => {
  result6.innerHTML= "correct"
  points += 1
  pointsText.innerHTML = points
}

falseBtn6.onclick =() => {
  result6.innerHTML = "incorrect"
  points -= 1
  pointsText.innerHTML = points
}

trueBtn7.onclick = () => {
  result7.innerHTML= "incorrect"
  points -= 1
  pointsText.innerHTML = points
}

falseBtn7.onclick =() => {
  result7.innerHTML = "correct"
  points += 1
  pointsText.innerHTML = points
}
