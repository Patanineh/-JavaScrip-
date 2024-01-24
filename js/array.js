let number = Array(1,2,3,4,5,6," And ",true);
console.log(number);
console.log(number[0] + number[6] + number[3]);

let color = ["แดง","ชมพู","เขียว","ขาว"];
color[1] = "เปลี่ยน";
console.log(color,number[7]);

let x = color.length; //เชคจำนวน
console.log(x);

let result = color.sort(); //.sort()เรียงลำดับจากน้อยไปมาก หรือจากพยัญชนะตามด้วยสระ
console.log(result);
console.log(color.reverse()); //.reverse() เรียงจากมากไปน้อย จากสระไปพยัญชนะ
console.log(number.reverse());
console.log(color[0]); //ตัวแรก
console.log(color[color.length-1]);//เชคตัวสุดท้าย

color.push("เทา"); //เพิ่มarray
console.log(color);
color.pop(1); //ลบตัวหลังสุดออก
console.log(color);
color.splice(1,2); //ลบ2สมาชิกเริ่มลบในตำแหน่งที่1
console.log(color);