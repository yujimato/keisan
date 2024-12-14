let randomNumbers = []; 

// 乱数を作る関数
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 配列に乱数を突っ込む関数
function generateRandomNumbers() {
    const count = 10;
    randomNumbers = []; // 配列をリセット
    for (let i = 0; i < count; i++) {
        randomNumbers.push(getRandomInteger(1, 100));
    }
}

//足し算の関数
function add(a, b) {
    return a + b;
}

function subtract(a,b){
    return a-b
}

//問題を生成する関数
document.getElementById("button1").onclick= function(){
    

    // display プロパティを確認して切り替える
    const correctAnswerDiv = document.getElementById("correctAnswer");
    if (correctAnswerDiv.style.display === "block") {
        correctAnswerDiv.style.display = "none"; // 表示
    }

    //問題を再生成にする
    const button1Div = document.getElementById("button1");
    button1Div.textContent = "問題を再生成する";


    generateRandomNumbers();
    document.getElementById("question1").textContent=`(1)${randomNumbers[0]}+${randomNumbers[1]}=?`
    document.getElementById("question2").textContent=`(2)${randomNumbers[2]}-${randomNumbers[3]}=?`
}

//ストップウォッチについて
{let displayElm = document.getElementsByClassName("display")[0];
let timer = null;

let startButton = document.getElementsByClassName("startButton")[0];
startButton.addEventListener("click",function(){
  if(timer === null){
  let seconds = 0;
  timer = setInterval(function(){
    seconds++;
    displayElm.innerText = seconds;
    console.log(seconds);
  },1000); 
 }
  console.log("start" + timer);
});

let stopButton = document.getElementsByClassName("stopButton")[0];
stopButton.addEventListener("click",function(){
  if(timer !== null){
  console.log("stop" + timer);
clearInterval(timer);
timer = null;
  }
});
}

//答え関連
document.getElementById("answerButton").onclick = function () {
    const correctAnswerDiv = document.getElementById("correctAnswer");

    // display プロパティを確認して切り替える
    if (correctAnswerDiv.style.display === "none" || correctAnswerDiv.style.display === "") {
        correctAnswerDiv.style.display = "block"; // 表示
    }

    //まず答え計算するやつ
    const answerOf1 = add(randomNumbers[0],randomNumbers[1]);
    const answerOf2 = subtract(randomNumbers[2],randomNumbers[3]);

    //答え表示するやつ
    correctAnswerDiv.textContent = `(1)${answerOf1} (2)${answerOf2}`;

};