function goback(){
    if(localStorage.getItem("goback")==null){
        localStorage.setItem("work","無業");
        localStorage.setItem("hp","10");
        localStorage.setItem("g1","2.5");
        localStorage.setItem("g2","0.3");
        localStorage.setItem("g3","0.2");
        localStorage.setItem("j1","1");
        localStorage.setItem("l1","10");
        localStorage.setItem("l2","5");
        localStorage.setItem("i1","0");
        localStorage.setItem("m1","0");
        localStorage.setItem("g11","31");
        localStorage.setItem("g21","31");
        localStorage.setItem("g31","31");
        localStorage.setItem("j11","31");
        localStorage.setItem("l11","31");
        localStorage.setItem("l21","31");
        localStorage.setItem("i11","31");
        localStorage.setItem("m11","31");
        localStorage.setItem("age","0");
        localStorage.setItem("do","0");
        localStorage.setItem("goback","0");
        localStorage.setItem("g01","0");
    }
}

function again(){
    if(localStorage.getItem("goagain")==null){
        localStorage.setItem("age0",localStorage.getItem("age"));
        localStorage.setItem("work0",localStorage.getItem("work"));
        localStorage.setItem("g01",localStorage.getItem("g1"));//轉生成長加成
        localStorage.setItem("g02",localStorage.getItem("g2"));
        localStorage.setItem("g03",localStorage.getItem("g3"));
        localStorage.setItem("j01",localStorage.getItem("j1"));
        localStorage.setItem("l01",localStorage.getItem("l1"));
        localStorage.setItem("l02",localStorage.getItem("l2"));
        localStorage.setItem("i01",localStorage.getItem("i1"));
        localStorage.setItem("m01",localStorage.getItem("m1"));
        localStorage.setItem("goagain",0);
        localStorage.removeItem("goback");
    }
}

async function gohigh(){
    $('#train1').attr('disabled', true);
    $('#train2').attr('disabled', true);
    $('#train3').attr('disabled', true);
    $('#train4').attr('disabled', true);
    $('#train5').attr('disabled', true);
    await delay(0);
    var g11=Number(localStorage.getItem("g11"))+3;
    localStorage.setItem("g11",String(g11));
    var j11=Number(localStorage.getItem("j11"))+1;
    localStorage.setItem("j11",String(j11));
    var g21=Number(localStorage.getItem("g21"))-3;
    localStorage.setItem("g21",String(g21));
    var g31=Number(localStorage.getItem("g31"))-1;
    localStorage.setItem("g31",String(g31));
    g21correction();
    g31correction();
    gobig();
    $("p").append("<div>長長的高丸嘗起來真美味</div>");
    $('#train1').attr('disabled', false);
    $('#train2').attr('disabled', false);
    $('#train3').attr('disabled', false);
    $('#train4').attr('disabled', false);
    $('#train5').attr('disabled', false);
}
async function gofat(){
    $('#train1').attr('disabled', true);
    $('#train2').attr('disabled', true);
    $('#train3').attr('disabled', true);
    $('#train4').attr('disabled', true);
    $('#train5').attr('disabled', true);
    await delay(20);
    var g31=Number(localStorage.getItem("g31"))+9;
    localStorage.setItem("g11",String(g11));
    var i11=Number(localStorage.getItem("i11"))-5;
    localStorage.setItem("i11",String(i11));
    var g11=Number(localStorage.getItem("g11"))-3;
    localStorage.setItem("g11",String(g11));
    var g21=Number(localStorage.getItem("g21"))-1;
    localStorage.setItem("g21",String(g21));
    g11correction();
    g21correction();
    i11correction();
    $("p").append("<div>吃完垃圾食物更高興了</div>");
    gobig();
    $('#train1').attr('disabled', false);
    $('#train2').attr('disabled', false);
    $('#train3').attr('disabled', false);
    $('#train4').attr('disabled', false);
    $('#train5').attr('disabled', false);
}
async function backfat(){
    $('#train1').attr('disabled', true);
    $('#train2').attr('disabled', true);
    $('#train3').attr('disabled', true);
    $('#train4').attr('disabled', true);
    $('#train5').attr('disabled', true);
    await delay(20);
    var j11=Number(localStorage.getItem("j11"))+4;
    localStorage.setItem("j11",String(j11));
    var g21=Number(localStorage.getItem("g21"))+3;
    localStorage.setItem("g21",String(g21));
    var l11=Number(localStorage.getItem("l11"))+1;
    localStorage.setItem("l11",String(l11));
    var g31=Number(localStorage.getItem("g31"))-7;
    localStorage.setItem("g31",String(g31));
    var i11=Number(localStorage.getItem("i11"))-1;
    localStorage.setItem("i11",String(i11));
    g31correction();
    i11correction();
    $("p").append("<div>到底有誰會想吃這鬼東西</div>");
    gobig();
    $('#train1').attr('disabled', false);
    $('#train2').attr('disabled', false);
    $('#train3').attr('disabled', false);
    $('#train4').attr('disabled', false);
    $('#train5').attr('disabled', false);
}
async function badeye(){
    $('#train1').attr('disabled', true);
    $('#train2').attr('disabled', true);
    $('#train3').attr('disabled', true);
    $('#train4').attr('disabled', true);
    $('#train5').attr('disabled', true);
    await delay(20);
    var i11=Number(localStorage.getItem("i11"))+4;
    localStorage.setItem("i11",String(i11));
    var g31=Number(localStorage.getItem("g31"))*1.1;
    localStorage.setItem("g31",String(g31));
    var g21=Number(localStorage.getItem("g21"))*0.8;
    localStorage.setItem("g21",String(g21));
    var l11=Number(localStorage.getItem("l11"))-7;
    localStorage.setItem("l11",String(l11));
    var j11=Number(localStorage.getItem("j11"))-1;
    localStorage.setItem("j11",String(j11));
    j11correction();
    l11correction();
    $("p").append("<div>刀劍神域才不是卡通</div>");
    gobig();
    $('#train1').attr('disabled', false);
    $('#train2').attr('disabled', false);
    $('#train3').attr('disabled', false);
    $('#train4').attr('disabled', false);
    $('#train5').attr('disabled', false);
}
async function useeye(){
    $('#train1').attr('disabled', true);
    $('#train2').attr('disabled', true);
    $('#train3').attr('disabled', true);
    $('#train4').attr('disabled', true);
    $('#train5').attr('disabled', true);
    await delay(20);
    var a1 = Math.random()*8;
    var b1 = ["g11", "g21", "g31", "j11", "l11", "l21", "i11", "m11"];
    var r1=Number(localStorage.getItem(b1[a1]))*1.1;
    localStorage.setItem(b1[a1],String(r1));
    var b2 = b.splice(pos, a1);
    var a2 = Math.random()*7;
    var r2=Number(localStorage.getItem(b2[a2]))*0.09;
    localStorage.setItem(b2[a2],String(r2));
    var l21=Number(localStorage.getItem("l21"))+3;
    localStorage.setItem("l21",String(l21));
    l11correction();
    $("p").append("<div>看三小還想星爆啊</div>");
    gobig();
    $('#train1').attr('disabled', false);
    $('#train2').attr('disabled', false);
    $('#train3').attr('disabled', false);
    $('#train4').attr('disabled', false);
    $('#train5').attr('disabled', false);
}
function gobig(){
    var do1=Number(localStorage.getItem("do"))+1;
    var age=Number(localStorage.getItem("age"))+1;
    var age2=age*2;
    if (do1 == age2){
        var g0=(Number(localStorage.getItem(g01)));
        var g11=parseInt(Number(localStorage.getItem(g11))/5);
        var g21=parseInt(Number(localStorage.getItem(g21))/5);
        var g31=parseInt(Number(localStorage.getItem(g31))/5);
        var j11=parseInt(Number(localStorage.getItem(j11))/5);
        var l11=parseInt(Number(localStorage.getItem(l11))/5);
        var l21=parseInt(Number(localStorage.getItem(l21))/5);
        var i11=parseInt(Number(localStorage.getItem(i11))/5);
        var m11=parseInt(Number(localStorage.getItem(m11))/5);
        var g1=Number(localStorage.getItem(g1))+(g11)*(1+g0/20)/24;
        var g2=Number(localStorage.getItem(g2))+(g21)*(1+g0/20)/6;
        var g3=Number(localStorage.getItem(g3))+(g31)*(1+g0/20)/6;
        var j1=Number(localStorage.getItem(j1))+(j11)*(1+g0/20)/5;
        var l1=Number(localStorage.getItem(l1))+(l11)*(1+g0/20)/5;
        var l2=Number(localStorage.getItem(l2))+(l21)*(1+g0/20)/5;
        var i1=Number(localStorage.getItem(i1))+(i11)*(1+g0/20)/5;
        var m1=Number(localStorage.getItem(m1))+(m11)*(1+g0/20)/5;
        var hp=Number(localStorage.getItem(hp))+10*(1+g0/20);
        if (g1>20*(1+g0/100)){
            g1=20*(1+g0/20);
            if(age>50){
                g1=g1*0.99;
            }
        }
        if (g2+g3>g1*14){
            g2=g2*0.95;
            g3=g3*0.9;
        }
        if (j1>g2*3.5){
            j1=g2*3.5;
        }
        if (l1>100*(1+g0/20)){
            l1=100;
            if(age>35){
                l1=l1*(1-0.005*age);
            }
        }
        if (l2>100*(1+g0/20)){
            l2=100*(1+g0/20);
        }
        if (i1>180*(1+g0/20)){
            i1=180*(1+g0/20);
            if (age>30){
                i1=i1*(1-0.002*age);
            }
        }
        localStorage.setItem("hp",String(hp));
        localStorage.setItem("g1",String(g1));
        localStorage.setItem("g11","0");
        localStorage.setItem("g2",String(g2));
        localStorage.setItem("g21","0");
        localStorage.setItem("g3",String(g3));
        localStorage.setItem("g31","0");
        localStorage.setItem("j1",String(j1));
        localStorage.setItem("j11","0");
        localStorage.setItem("l1",String(l1));
        localStorage.setItem("l11","0");
        localStorage.setItem("l2",String(l2));
        localStorage.setItem("l21","0");
        localStorage.setItem("i1",String(i1));
        localStorage.setItem("i11","0");
        localStorage.setItem("m1",String(m1));
        localStorage.setItem("m11","0");
        localStorage.setItem("age",String(age));
        let content = '';
        content += '<div>你長大了，成果如下</div>';
        content += '<div>身高成長了' + String((g11)*(1+g0/20)/24) + 'cm</div>';
        content += '<div>體重成長了' + String(((g21)*(1+g0/20)/3+(g11)*(1+g0/20)/24)) + 'kg</div>';
        content += '<div>跳躍力成長了' + String((j11)*(1+g0/20)/5) + '</div>';
        content += '<div>視力成長了' + String((l11)*(1+g0/20)/5) + '</div>';
        content += '<div>幸運成長了' + String((l21)*(1+g0/20)/5) + '</div>';
        content += '<div>智力成長了' + String((i11)*(1+g0/20)/5) + '</div>';
        $("p").append(content);
    } else {
        localStorage.setItem("do",String(do1));
    }
}

function g11correction(){
    var g11=Number(localStorage.getItem(g11));
    var g31=Number(localStorage.getItem(g31));
    if (g11<0){
        g31=g31+g11;
        if(g31<0){
            g31=0;
        }
        g11=0;
    }
    localStorage.setItem("g11",String(g11));
    localStorage.setItem("g31",String(g31));
}

function g21correction(){
    var g21=Number(localStorage.getItem(g21));
    var g11=Number(localStorage.getItem(g11));
    if (g21<0){
        g11=g11+g21;
        if(g11<0){
            g11=0;
        }
        g21=0;
    }
    localStorage.setItem("g21",String(g21));
    localStorage.setItem("g11",String(g11));
}

function g31correction(){
    var g31=Number(localStorage.getItem(g31));
    var g21=Number(localStorage.getItem(g21));
    if (g31<0){
        g21=g21+g31;
        if(g21<0){
            g21=0;
        }
        g31=0;
    }
    localStorage.setItem("g21",String(g21));
    localStorage.setItem("g31",String(g31));
}

function j11correction(){
    var j11=Number(localStorage.getItem(j11));
    var i11=Number(localStorage.getItem(i11));
    if (j11<0){
        i11=i11+j11;
        if(i11<0){
            i11=0;
        }
        j11=0;
    }
    localStorage.setItem("j11",String(j11));
    localStorage.setItem("i11",String(i11));
}

function l11correction(){
    var l11=Number(localStorage.getItem(l11));
    var i11=Number(localStorage.getItem(i11));
    if (l11<0){
        i11=i11+l11;
        if(i11<0){
            i11=0;
        }
        l11=0;
    }
    localStorage.setItem("l11",String(l11));
    localStorage.setItem("i11",String(i11));
}

function i11correction(){
    var i11=Number(localStorage.getItem(i11));
    var g31=Number(localStorage.getItem(g31));
    if (i11<0){
        g31=g31+i11;
        if(g31<0){
            g31=0;
        }
        i11=0;
    }
    localStorage.setItem("i11",String(i11));
    localStorage.setItem("g31",String(g31));
}

goback();

again();

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);  //n*1000為毫秒
    });
}
