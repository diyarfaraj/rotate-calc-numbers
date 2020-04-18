const centralBtn = document.querySelector("#btn5").addEventListener('click', rotateBtns); 
 
const randomNrsArr = [1, 2, 3, 6, 9, 8, 7, 4];
const ids = [1, 2, 3, 6, 9, 8, 7, 4];


function rotateBtns() {
   randomNrsArr.unshift(randomNrsArr.pop());
   for (let i = 0; i <= 7; i++) {
       document.getElementById("btn"+ids[i]).innerHTML = randomNrsArr[i]
       
   }

}

