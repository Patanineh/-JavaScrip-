//var num = prompt("เลขที่ต้องการ : ");
//console.log(num);
//console.log(Math.floor(Math.random() * 1000)); 
//Math.randomจะแสดงตัวเลขทศนิยมแค่0-1
//Math.floorจะปัดเศษออก
//*10คือการสุ่ม1-9 *11คือการสุ่ม1-10 *100คือการสุ่ม1-99

var num = prompt("เลขที่ต้องการ : ");
document.getElementById("num").innerHTML = "เลขที่ซื้อ :";
document.getElementById("numsale").innerHTML = num;
document.getElementById("result").innerHTML = Math.floor(Math.random() *1000); 
//เอาไปแสดงผลในhtml