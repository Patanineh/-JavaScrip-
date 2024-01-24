let grade = prompt("คะแนนของคุณ : ");

if(grade >= 80){
    document.getElementById("result").innerHTML = "คุณได้เกรดA";
}else if(grade >= 70){
    document.getElementById("result").innerHTML = "คุณได้เกรดB";
}else if(grade >= 60){
    document.getElementById("result").innerHTML = "คุณได้เกรดC";
}else if(grade >= 50){
    document.getElementById("result").innerHTML = "คุณได้เกรดD";
}else {document.getElementById("result").innerHTML = "คุณได้เกรดF";}