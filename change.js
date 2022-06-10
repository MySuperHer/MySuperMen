function FsubmitBtn() {
    var submitValue = $('#testInput2').val().toString();
    localStorage.setItem("number",submitValue);
    localStorage.setItem("ans",submitValue);
    localStorage.setItem("word","");
    alert(numgoword());
}

function FsubmitBtn2() {
    var submitValue = $('#testInput3').val().toString();
    localStorage.setItem("word",submitValue);
    localStorage.setItem("number","");
    localStorage.setItem("ans","");
    alert(wordgonum());
}

function numgoword() {
    var num = Number(localStorage.getItem("number"));
    var x = parseInt(Math.log(num)/Math.log(6));
    if (x>=6) {
        return ("太大了屁眼屁眼");
    }
    var list = ["aempy","ynaoaempy","ylla","eser","tamp","ptae","tarwmpao","ntamnao","wramaekr","ptae wramaekr"];
    var a2 = 0;
    var b = 0;
    for (var i = 0; i < x+1; i++) {
        var a = parseInt(num /(Math.pow(6,x-i)));
        var num = num % (Math.pow(6,x-i));
        if (a >= 1){
            if(x-i > 2){
                localStorage.setItem("word",localStorage.getItem("word")+list[x-i+3]+" ");
                if (a > 1){
                    localStorage.setItem("word",localStorage.getItem("word")+list[a-1]+" ");
                }
            }else if (x-i == 2){
                var a2 = a;
            }else if (x-i == 1){
                var b = a;
            }else{
                localStorage.setItem("word",localStorage.getItem("word")+list[a-1]+" ");
            }
        }
    }
    if (b > 0){
        localStorage.setItem("word",localStorage.getItem("word")+list[b+4]+" ");
    }
    if (a2 > 0){
        localStorage.setItem("word",localStorage.getItem("word")+list[5]+" ");
        if (a2 > 1){
            localStorage.setItem("word",localStorage.getItem("word")+list[a2-1]+" ");
        }
    }
    return (localStorage.getItem("word"))
}

function wordgonum() {
    var word = localStorage.getItem("word") + " ";
    for (let i = 1; i <= 46655; i++){
        localStorage.setItem("number",String(i));
        if (word == numgoword()){
            localStorage.setItem("ans",localStorage.getItem("ans")+String(i)+",");
        }
        localStorage.setItem("word","");
    }
    localStorage.setItem("word",word);
}