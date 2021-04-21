"use strict"


// let i = 1;
// if (i === 1){
//   console.log("真です");
// }

// let testScore = 72;

// if(testScore >= 80){
//   document.write("合格です。おめでとうございます！");
// } else if(testScore >= 70){
//   document.write("惜しい！あと少し！");
// } else{
//   document.write("不合格です！もう少し勉強しましょう！");
// }



// const nameList =["田中", "山田", "林"];
// for (let i =0; i < nameList.length;i++){
//   console.log(nameList[i]);
// }

//下記のループ文をこのように表示しなさい
// 1.田中
// 2.山田
// 3.林
// 4.佐藤

// const nameList =["田中", "山田", "林", "佐藤"];
// for (let i =0; i < nameList.length;i++){
//   console.log(nameList[i]);
// }

// 解答
// const nameList =["田中", "山田", "林", "佐藤"];
// for (let i =0; i < nameList.length;i++){
//   console.log(`${i+1}.${nameList[i]}`);
// }

//入力した点数に応じて、判定が変わる
function scoreCheck(){
  let testScore = document.getElementById('score').value
  if(testScore >= 80){
    document.write("合格です。おめでとうございます！");
  } else if(testScore >= 70){
    document.write("惜しい！あと少し！");
  } else{
    document.write("不合格です！もう少し勉強しましょう！");
  }
}