function goback(){
    if(localStorage.getItem("goback")==null){
        localStorage.setItem("goback","0")
        localStorage.setItem("age","0")
        localStorage.setItem("h1","30")
        localStorage.setItem("g1","3")//骨
        localStorage.setItem("g2","1")//肉
        localStorage.setItem("g3","1")//油
        localStorage.setItem("j1","1")
        localStorage.setItem("l1","30")
        localStorage.setItem("lu1","30")
        localStorage.setItem("do","0")
        localStorage.setItem("h11","0")
        localStorage.setItem("g11","0")
        localStorage.setItem("g21","0")
        localStorage.setItem("g31","0")
        localStorage.setItem("j11","0")
        localStorage.setItem("l11","0")
        localStorage.setItem("lu11","0")
    }
}
function gohigh(){
    alert("長長的高丸嘗起來真美味");
    var h11=Number(localStorage.getItem("h11"))+0.1;
    localStorage.setItem("h11",String(h11));
    var j11=Number(localStorage.getItem("j11"))+0.06;
    localStorage.setItem("j11",String(j11));
    gobig();
}
function gofat(){
    alert("吃完垃圾食物後更高興了");
    var g21=Number(localStorage.getItem("g21"))+0.05;
    localStorage.setItem("g21",String(g21));
    var g31=Number(localStorage.getItem("g31"))+0.1;
    localStorage.setItem("g31",String(g31));
    gobig();
}
function backfat(){
    alert("到底有誰會想吃這種鬼東西");
    var g31=Number(localStorage.getItem("g31"))-0.1;
    localStorage.setItem("g31",String(g31));
    var g21=Number(localStorage.getItem("g21"))+0.1;
    localStorage.setItem("g21",String(g21));
    var l11=Number(localStorage.getItem("l11"))+0.1;
    localStorage.setItem("l11",String(l11));
    gobig();
}
function badeye(){
    alert("刀劍神域才不是卡通");
    var l11=Number(localStorage.getItem("l11"))-0.01;
    localStorage.setItem("l11",String(l11));
    var g31=Number(localStorage.getItem("g31"))+0.05;
    localStorage.setItem("g31",String(g31));
    gobig();
}
function gobig(){
    var do1=Number(localStorage.getItem("do"))+1;
    var age=Number(localStorage.getItem("age"));
    if(do1==6){
        if(age<50){
        do1=0;
        age=Number(localStorage.getItem("age"))+1;
        localStorage.setItem("age",String(age));
        var h1=Number(localStorage.getItem("h1"))+Number(localStorage.getItem("h11"));
        localStorage.setItem("h1",String(h1));
        localStorage.setItem("h11","0");
        var g1=Number(localStorage.getItem("g1"))+Number(localStorage.getItem("g11"));
        localStorage.setItem("g1",String(g1));
        localStorage.setItem("g11","0");
        var g2=Number(localStorage.getItem("g2"))+Number(localStorage.getItem("g21"));
        localStorage.setItem("g2",String(g2));
        localStorage.setItem("g21","0");
        var g3=Number(localStorage.getItem("g3"))+Number(localStorage.getItem("g31"));
        localStorage.setItem("g3",String(g3));
        localStorage.setItem("g31","0");
        var j1=Number(localStorage.getItem("j1"))+Number(localStorage.getItem("j11"));
        localStorage.setItem("j1",String(j1));
        localStorage.setItem("j11","0");
        var l1=Number(localStorage.getItem("l1"))+Number(localStorage.getItem("l11"));
        localStorage.setItem("l1",String(l1));
        localStorage.setItem("l11","0");
        var lu1=Number(localStorage.getItem("lu1"))+Number(localStorage.getItem("lu11"));
        localStorage.setItem("lu1",String(lu1));
        localStorage.setItem("lu11","0");
        }else{
            age=Number(localStorage.getItem("age"))+1;
        }
        alert("真的有人無聊到在這邊按了六十次？");

    }
    localStorage.setItem("do",String(do1));
}

goback();