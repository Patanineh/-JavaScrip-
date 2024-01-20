console.log(10+10*10); //คูณก่อนบวก 110
console.log((10+10)*10); ///200

console.log("hello"+" EH"); //การต่อสตริง
var name = "Hello" + " Eh"; //ใช้ต่อแบบตัวแปรก็ได้
console.log(name);

{ //ขอบเขตของการทำงานของตัวแปรvar และ let
    var n = 20; //เรียกที่ไหนก็ได้
    let v = 21; //เรียกได้เฉพาะในนี้
    console.log(v);
}
console.log(n);
//console.log(v); //เรียกตรงนี้ไม่ได้

var a = 18;
{
    var a = 19;
}
console.log(a); //ถ้าเขียนแบบนี้เรียก19ก่อน