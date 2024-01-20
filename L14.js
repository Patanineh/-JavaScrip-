var num = prompt("เลขที่ต้องการ : ");
var random = Math.floor(Math.random() *1000); //สุ่มและเก็บไว้ที่ตัวแปรrandom
document.getElementById("num").innerHTML = "เลขที่ซื้อ :";
document.getElementById("numsale").innerHTML = num;
document.getElementById("randomm").innerHTML = random; //แสดงผลสุ่ม
if(num == random){
    document.getElementById("re").innerHTML = "ยินดีด้วยคุณถูกรางวัล";
}else {document.getElementById("re").innerHTML = "เสียใจด้วยคุณไม่ถูกรางวัล";}