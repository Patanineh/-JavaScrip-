function Sayhello(userName, Lastname){ //userNameเป็นพารามิเตอ คือตัวแปรที่สามารถข้อมูลส่งมาให้มัน ส่ง2ค่าก็ใส่, คั่น

    return "Hello " + userName + " " + Lastname; //สามารถเรียกใช้ในฟังชั่นได้เลย
}
let Userinput = "Eh"; 
console.log(Sayhello(Userinput, "Patanin")); //การส่งข้อมูลไปให้userName ส่งเป็นตัวแปร และ สตริงก็ได้เรียกว่าอากิวเม้น ตัวแรกUserinputจะไปแทนที่userName ตัวที่สอง"Patanin"จะไปแทนLastname
//ตัวแรกแทนตัวแรก ตัวสองแทนตัวสอง
//อากิวเม้นส่ง พารามิเตอรับ