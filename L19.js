let listfood = prompt("จำนวนสินค้า");
let sum = 0;
for(var i = 1; i <= listfood; i++){ 
    let item_price = prompt("ราคาสินค้าชิ้นที่ " + i);
    sum += parseInt(item_price); //เปลี่ยนจากstrเป็นintเพื่อการคำนวณ
    document.getElementById("price-list").innerHTML += "รายการสินค้าชิ้นที่" + i + " : " + item_price + " บาท" + "<br>";
     //เริ่มที่sum=0 กรอก10 sum+10=10 ค่าที่ได้จะไปเก็บไว้ที่sum รอบต่อไปsum=10 กรอก20 sum+20=30 รอบต่อไปsum=30 กรอก40 sum+40=70 
} //+=เพิ่มข้อมูลไปเรื่อยๆ ต่อราคาที่กรอก ราคาสินค้าชิ้นที่ไปเรื่อยๆ
document.getElementById("result").innerHTML = "ราคารวม : " + sum + " บาท";