var age = prompt("กรอกอายุของคุณ");
if(age > 13){
    document.getElementById("r").innerHTML = "รุนแรงจริงๆ";
    document.getElementById("rr").innerHTML= "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/UI85AYRzems?si=i_m9one5SzZ9Jsiw\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>";
}
//ให้กรอกอายุถ้ามากกว่า13ก็ดูเนื้อหาได้
//ใส่\หน้า" ไม่งั้นจะไม่ทำงาน