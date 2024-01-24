var round = prompt("คุณจะเล่นทั้งหมดกี่รอบ : ");
var sum = 0;
var t = "";
for(var i = 1; i <= round; i++){
    var answer = prompt("หัว หรือ ก้อย : ");
    var random = "";
    if(Math.floor(Math.random() *10) <= 4) { //มันเป็นฟังชั่น ถ้าไม่ใส่ Math.random() วงเล็บมันจะออกก้อยหมด 
        random = "หัว";
    }else {
        random = "ก้อย";
    }

    if(answer == random){
        alert("ตอบถูก");
        sum += 1;
        t = " ถูก";
    }else {
        alert("ตอบผิด");
        t = " ผิด";
    }
    document.getElementById("gamelist").innerHTML += "ครั้งที่ : " + i + " ตอบ" + answer + t + "<br>";
}
document.getElementById("sss").innerHTML = "ได้คะแนน = " + sum;