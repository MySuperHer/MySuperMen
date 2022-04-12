function goback(){
    if(localStorage.getItem("goback")==null){
        localStorage.setItem("work","無業");
        localStorage.setItem("hp","10");
        localStorage.setItem("g1","2.5");
        localStorage.setItem("g2","1");
        localStorage.setItem("g3","1");
        localStorage.setItem("j1","5");
        localStorage.setItem("l1","10");
        localStorage.setItem("l2","5");
        localStorage.setItem("i1","1");
        localStorage.setItem("m1","1");
        localStorage.setItem("g11","20");
        localStorage.setItem("g21","20");
        localStorage.setItem("g31","20");
        localStorage.setItem("j11","20");
        localStorage.setItem("l11","20");
        localStorage.setItem("l21","20");
        localStorage.setItem("i11","20");
        localStorage.setItem("m11","20");
        localStorage.setItem("age","0");
        localStorage.setItem("do","0");
        localStorage.setItem("exp","2");
        localStorage.setItem("goback","0");
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
        var died=Number(localStorage.getItem("died"))+1;
        localStorage.setItem("died",died.toString());
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
    $('#train6').attr('disabled', true);
    await delay(5);
    var work=localStorage.getItem("work");
    work1(work);
    var g11=Number(localStorage.getItem("g11"))+3;
    var j11=Number(localStorage.getItem("j11"))+1;
    var g21=Number(localStorage.getItem("g21"))-3;
    var g31=Number(localStorage.getItem("g31"))-1;
    $("#1").append("<div>長長的高丸嘗起來真美味。</div>");
    gobig(g11,g21,g31,j11,-1,-1,-1,-1);
    $('#train1').attr('disabled', false);
    $('#train2').attr('disabled', false);
    $('#train3').attr('disabled', false);
    $('#train4').attr('disabled', false);
    $('#train5').attr('disabled', false);
    $('#train6').attr('disabled', false);
}
async function gofat(){
    $('#train1').attr('disabled', true);
    $('#train2').attr('disabled', true);
    $('#train3').attr('disabled', true);
    $('#train4').attr('disabled', true);
    $('#train5').attr('disabled', true);
    $('#train6').attr('disabled', true);
    await delay(5);
    var work=localStorage.getItem("work");
    work1(work);
    var g31=Number(localStorage.getItem("g31"))+9;
    var i11=Number(localStorage.getItem("i11"))-5;
    var g11=Number(localStorage.getItem("g11"))-3;
    var g21=Number(localStorage.getItem("g21"))-1;
    var m11=Number(localStorage.getItem("m11"))-1;
    $("#1").append("<div>吃完垃圾食物更高興了。</div>");
    gobig(g11,g21,g31,-1,-1,-1,i11,m11);
    $('#train1').attr('disabled', false);
    $('#train2').attr('disabled', false);
    $('#train3').attr('disabled', false);
    $('#train4').attr('disabled', false);
    $('#train5').attr('disabled', false);
    $('#train6').attr('disabled', false);
}
async function backfat(){
    $('#train1').attr('disabled', true);
    $('#train2').attr('disabled', true);
    $('#train3').attr('disabled', true);
    $('#train4').attr('disabled', true);
    $('#train5').attr('disabled', true);
    $('#train6').attr('disabled', true);
    await delay(5);
    var work=localStorage.getItem("work");
    work1(work);
    var j11=Number(localStorage.getItem("j11"))+4;
    var g21=Number(localStorage.getItem("g21"))+3;
    var l11=Number(localStorage.getItem("l11"))+1;
    var m11=Number(localStorage.getItem("m11"))+1;
    var g31=Number(localStorage.getItem("g31"))-7;
    var i11=Number(localStorage.getItem("i11"))-1;
    $("#1").append("<div>到底有誰會想吃這鬼東西。</div>");
    gobig(-1,g21,g31,j11,l11,-1,i11,m11);
    $('#train1').attr('disabled', false);
    $('#train2').attr('disabled', false);
    $('#train3').attr('disabled', false);
    $('#train4').attr('disabled', false);
    $('#train5').attr('disabled', false);
    $('#train6').attr('disabled', false);
}
async function badeye(){
    $('#train1').attr('disabled', true);
    $('#train2').attr('disabled', true);
    $('#train3').attr('disabled', true);
    $('#train4').attr('disabled', true);
    $('#train5').attr('disabled', true);
    $('#train6').attr('disabled', true);
    await delay(5);
    var work=localStorage.getItem("work");
    work1(work);
    var i11=Number(localStorage.getItem("i11"))+4;
    var g31=Number(localStorage.getItem("g31"))*1.1;
    var g21=Number(localStorage.getItem("g21"))*0.8;
    var l11=Number(localStorage.getItem("l11"))-7;
    var j11=Number(localStorage.getItem("j11"))-1;
    $("#1").append("<div>刀劍神域才不是卡通。</div>");
    gobig(-1,g21,g31,j11,l11,-1,i11,-1);
    $('#train1').attr('disabled', false);
    $('#train2').attr('disabled', false);
    $('#train3').attr('disabled', false);
    $('#train4').attr('disabled', false);
    $('#train5').attr('disabled', false);
    $('#train6').attr('disabled', false);
}
async function useeye(){
    $('#train1').attr('disabled', true);
    $('#train2').attr('disabled', true);
    $('#train3').attr('disabled', true);
    $('#train4').attr('disabled', true);
    $('#train5').attr('disabled', true);
    $('#train6').attr('disabled', true);
    await delay(5);
    var work=localStorage.getItem("work");
    work1(work);
    var a1 = parseInt(Math.random()*7);
    var b1 = ["g11", "g21", "g31", "j11", "l11", "i11", "m11"];
    var r1=Number(localStorage.getItem(b1[a1]))*1.1;
    localStorage.setItem(b1[a1],r1.toString());
    var b2 = b1.splice(a1, 1);
    var a2 = parseInt(Math.random()*7);
    var r2=Number(localStorage.getItem(b2[a2]))*0.09;
    localStorage.setItem(b2[a2],r2.toString());
    var l21=Number(localStorage.getItem("l21"))*1.2;
    $("#1").append("<div>看三小還想星爆啊。</div>");
    gobig(-1,-1,-1,-1,-1,l21,-1,-1);
    $('#train1').attr('disabled', false);
    $('#train2').attr('disabled', false);
    $('#train3').attr('disabled', false);
    $('#train4').attr('disabled', false);
    $('#train5').attr('disabled', false);
    $('#train6').attr('disabled', false);
}
async function gopretty(){
    $('#train1').attr('disabled', true);
    $('#train2').attr('disabled', true);
    $('#train3').attr('disabled', true);
    $('#train4').attr('disabled', true);
    $('#train5').attr('disabled', true);
    $('#train6').attr('disabled', true);
    await delay(5);
    var work=localStorage.getItem("work");
    work1(work);
    var m11=Number(localStorage.getItem("m11"))*1.2;
    var g31=Number(localStorage.getItem("g31"))-3;
    var g21=Number(localStorage.getItem("g21"))-2;
    var g11=Number(localStorage.getItem("g11"))-2;
    var i11=Number(localStorage.getItem("i11"))-1;
    $("#1").append("<div>一個大男人到底能化什麼妝。</div>");
    gobig(g11,g21,g31,-1,-1,-1,i11,m11);
    gobig(-1,-1,-1,-1,-1,-1,-1,-1);
    $('#train1').attr('disabled', false);
    $('#train2').attr('disabled', false);
    $('#train3').attr('disabled', false);
    $('#train4').attr('disabled', false);
    $('#train5').attr('disabled', false);
    $('#train6').attr('disabled', false);
}

function gobig(g11,g21,g31,j11,l11,l21,i11,m11){
    g11correction();
    g21correction();
    g31correction();
    j11correction();
    l11correction();
    l21correction();
    i11correction();
    m11correction();
    var do1=Number(localStorage.getItem("do"))+1;
    var age=Number(localStorage.getItem("age"));
    var age1=Number(localStorage.getItem("age"))+1;
    if(age>=35){
        var line=age;
    }else if(age>=20){
        var line=age+20;
    }else{
        var line=age*2+2;
    }
    if(age1>=35){
        var line1=age1;
    }else if(age1>=20){
        var line1=age1+20;
    }else{
        var line1=age1*2+2;
    }
    if (do1 >= line){
        g01=Number(localStorage.getItem("g01"));
        g02=Number(localStorage.getItem("g02"));
        g03=Number(localStorage.getItem("g03"));
        j01=Number(localStorage.getItem("j01"));
        l01=Number(localStorage.getItem("l01"));
        l02=Number(localStorage.getItem("l02"));
        i01=Number(localStorage.getItem("i01"));
        m01=Number(localStorage.getItem("m01"));
        g11=parseInt(Number(localStorage.getItem("g11"))/5);
        g21=parseInt(Number(localStorage.getItem("g21"))/5);
        g31=parseInt(Number(localStorage.getItem("g31"))/5);
        j11=parseInt(Number(localStorage.getItem("j11"))/5);
        l11=parseInt(Number(localStorage.getItem("l11"))/5);
        l21=parseInt(Number(localStorage.getItem("l21"))/5);
        i11=parseInt(Number(localStorage.getItem("i11"))/5);
        m11=parseInt(Number(localStorage.getItem("m11"))/5);
        var g1n=Number(localStorage.getItem("g1"))
        var g2n=Number(localStorage.getItem("g2"))
        var g3n=Number(localStorage.getItem("g3"))
        var j1n=Number(localStorage.getItem("j1"))
        var l1n=Number(localStorage.getItem("l1"))
        var l2n=Number(localStorage.getItem("l2"))
        var i1n=Number(localStorage.getItem("i1"))
        var m1n=Number(localStorage.getItem("m1"))
        var g1=Number(localStorage.getItem("g1"))+g11*(0.2+0.1*g01/(g01+1));
        var g2=Number(localStorage.getItem("g2"))+g21*(0.3+(0.3*Math.sqrt(g01)*g02)/((Math.sqrt(g01)+1)*(g02+1)));
        var g3=Number(localStorage.getItem("g3"))+g31*(0.3+(0.3*Math.sqrt(g01)*g03)/((Math.sqrt(g01)+1)*(g03+1)));
        var j1=Number(localStorage.getItem("j1"))+j11*(0.2+(0.35*Math.sqrt(g01)*j01)/((Math.sqrt(g01)+1)*(j01+1)));
        var l1=Number(localStorage.getItem("l1"))+l11*(0.3+(0.3*Math.sqrt(g01)*l01)/((Math.sqrt(g01)+1)*(l01+1)));
        var l2=Number(localStorage.getItem("l2"))+l21*(0.2+(0.2*Math.sqrt(g01)*l02)/((Math.sqrt(g01)+1)*(l02+1)));
        var i1=Number(localStorage.getItem("i1"))+i11*(0.1+0.1*Math.sqrt(g01)*i01/((Math.sqrt(g01)+1)*(i01+1)));
        var m1=Number(localStorage.getItem("m1"))+m11*(0.3+0.4*Math.sqrt(g01)*m01/((Math.sqrt(g01)+1)*(m01+1)));
        var hp=Number(localStorage.getItem("hp"))+g01;
        if (g1>20+g01){
            g1=20+g01;
            if(age>30){
                g1=g1*0.9;
            }
        }
        if (g2>g1*7+g02){
            g2=g1*7+g02;
        }
        if (g3>g1*7+g03){
            g3=g1*7+g03;
        }
        if (g2+g3 > g1*10){
            g3=g3*0.9;
            g2=g2*0.95;
        }
        if (j1>g2*3+j01){
            j1=g2*3+j01;
        }
        if (l1>100){
            l1=100;
            if(age>20){
                l1=l1*0.9;
            }
        }
        if (l2>100+l02){
            l2=100+l02;
        }
        if (i1>180+i01){
            i1=180+i01;
            if (age>20){
                i1=i1*0.9;
            }
        }
        if (m1>100+m01){
            m1=100+m01;
            if (age>20){
                m1=m1*0.9;
            }
        }
        localStorage.setItem("hp",hp.toString());
        localStorage.setItem("g1",g1.toString());
        localStorage.setItem("g11","31");
        localStorage.setItem("g2",g2.toString());
        localStorage.setItem("g21","31");
        localStorage.setItem("g3",g3.toString());
        localStorage.setItem("g31","31");
        localStorage.setItem("j1",j1.toString());
        localStorage.setItem("j11","31");
        localStorage.setItem("l1",l1.toString());
        localStorage.setItem("l11","31");
        localStorage.setItem("l2",l2.toString());
        localStorage.setItem("l21","31");
        localStorage.setItem("i1",i1.toString());
        localStorage.setItem("i11","31");
        localStorage.setItem("m1",m1.toString());
        localStorage.setItem("m11","31");
        localStorage.setItem("do","0");
        localStorage.setItem("age",age1.toString());
        localStorage.setItem("exp",String(line1));
        let content = '';
        content += '<div>你長大了，成果如下</div>';
        content += '<div>身高成長了' + String(parseInt((g1-g1n)*1000)/100)+ 'cm</div>';
        content += '<div>體重成長了' + String(parseInt((g1+g2+g3-g1n-g2n-g3n)*100)/100) + 'kg</div>';
        content += '<div>跳躍力成長了' + String(parseInt((j1-j1n)*100)/100) + '</div>';
        content += '<div>視力成長了' + String(parseInt((l1-l1n)*100)/100) + '</div>';
        content += '<div>幸運成長了' + String(parseInt((l2-l2n)*100)/100) + '</div>';
        content += '<div>智力成長了' + String(parseInt((i1-i1n)*100)/100) + '</div>';
        content += '<div>魅力成長了' + String(parseInt((m1-m1n)*100)/100) + '</div>';
        $("#1").append(content);
    } else {
        if(g11>=0){
            localStorage.setItem("g11",String(g11));
        }
        if(g21>=0){
            localStorage.setItem("g21",String(g21));
        }
        if(g31>=0){
            localStorage.setItem("g31",String(g31));
        }
        if(j11>=0){
            localStorage.setItem("j11",String(j11));
        }
        if(l11>=0){
            localStorage.setItem("l11",String(l11));
        }
        if(l21>=0){
            localStorage.setItem("l21",String(l21));
        }
        if(i11>=0){
            localStorage.setItem("i11",String(i11));
        }
        if(m11>=0){
            localStorage.setItem("m11",String(m11));
        }
        localStorage.setItem("do",do1.toString());
    }
}


function work1(work1){
    var age=Number(localStorage.getItem("age"));
    if (work1 == "跳級生"){
        var do1=Number(localStorage.getItem("do"))+1;
        var i11=Number(localStorage.getItem("i11"))+5;
        var g31=Number(localStorage.getItem("g31"))-2;
        localStorage.setItem("i11",i11.toString());
        localStorage.setItem("g31",g31.toString());
        localStorage.setItem("do",do1.toString());
        if(age == 27){
            var i1=Number(localStorage.getItem("i1"));
            if(i1<70){
                localStorage.setItem("work","延畢生");
            }else if(i1<100){
                localStorage.setItem("work","畢業生");
            }else{
                localStorage.setItem("work","大學教授");
            }
        }
        let content = '';
        content += '<div>你寫了一篇論文</div>';
        $("#1").append(content);
    }else if(work1 == "研究生"){
        var do1=Number(localStorage.getItem("do"))+1;
        var i11=Number(localStorage.getItem("i11"))+3;
        var g31=Number(localStorage.getItem("g31"))-4;
        localStorage.setItem("i11",i11.toString());
        localStorage.setItem("g31",g31.toString());
        localStorage.setItem("do",do1.toString());
        g31correction();
        if(age == 27){
            var i1=Number(localStorage.getItem("i1"));
            if(i1<70){
                localStorage.setItem("work","延畢生");
            }else{
                localStorage.setItem("work","畢業生");
            }
        }
        let content = '';
        content += '<div>你做了一篇研究</div>';
        $("#1").append(content);
    }else if(work1 == "延畢生"){
        var do1=Number(localStorage.getItem("do"))+1;
        var i11=Number(localStorage.getItem("i11"))+1;
        var g31=Number(localStorage.getItem("g31"))-5;
        localStorage.setItem("i11",i11.toString());
        localStorage.setItem("g31",g31.toString());
        localStorage.setItem("do",do1.toString());
        g31correction();
        if(age >= 27){
            var i1=Number(localStorage.getItem("i1"));
            if(i1>70){
                localStorage.setItem("work","畢業生");
            }else{
                let content = '';
                content += '<div>你寫了一篇論文，但沒有通過考試</div>';
                $("#1").append(content);
            }
        }else{
            let content = '';
            content += '<div>你寫了一篇論文</div>';
            $("#1").append(content);
        }
    }else if(work1 == "畢業生"){
        var do1=Number(localStorage.getItem("do"))+1;
        var i11=Number(localStorage.getItem("i11"))+4;
        var g31=Number(localStorage.getItem("g31"))-2;
        localStorage.setItem("i11",i11.toString());
        localStorage.setItem("g31",g31.toString());
        localStorage.setItem("do",do1.toString());
        g31correction();
        let content = '';
        content += '<div>你還沒找到工作</div>';
        $("#1").append(content);
    }else if(work1 == "大學教授"){
        var do1=Number(localStorage.getItem("do"))+1;
        var i11=Number(localStorage.getItem("i11"))*2;
        var g31=Number(localStorage.getItem("g31"))/2;
        localStorage.setItem("i11",i11.toString());
        localStorage.setItem("g31",g31.toString());
        localStorage.setItem("do",do1.toString());
        let content = '';
        content += '<div>你在大學教書</div>';
        $("#1").append(content);
    }
}

function g11correction(){
    var g11=Number(localStorage.getItem("g11"));
    var g31=Number(localStorage.getItem("g31"));
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
    var g21=Number(localStorage.getItem("g21"));
    var g11=Number(localStorage.getItem("g11"));
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
    var g31=Number(localStorage.getItem("g31"));
    var g21=Number(localStorage.getItem("g21"));
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
    var j11=Number(localStorage.getItem("j11"));
    var i11=Number(localStorage.getItem("i11"));
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
    var l11=Number(localStorage.getItem("l11"));
    var i11=Number(localStorage.getItem("i11"));
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

function l21correction(){
    var l21=Number(localStorage.getItem("l21"));
    var i11=Number(localStorage.getItem("i11"));
    if (l21<0){
        i11=i11+l21;
        if(i11<0){
            i11=0;
        }
        l21=0;
    }
    localStorage.setItem("l21",String(l21));
    localStorage.setItem("i11",String(i11));
}

function i11correction(){
    var i11=Number(localStorage.getItem("i11"));
    var g31=Number(localStorage.getItem("g31"));
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

function m11correction(){
    var m11=Number(localStorage.getItem("m11"));
    var g31=Number(localStorage.getItem("g31"));
    if (m11<0){
        g31=g31+m11;
        if(g31<0){
            g31=0;
        }
        m11=0;
    }
    localStorage.setItem("m11",String(m11));
    localStorage.setItem("g31",String(g31));
}


goback();

again();

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);  //n*1000為毫秒
    });
}

function win(){
    var g21=Number(localStorage.getItem("g21"))+9;
    var i11=Number(localStorage.getItem("i11"))+5;
    var m11=Number(localStorage.getItem("m11"))-7;
    var l21=Number(localStorage.getItem("l21"))-4;
    gobig2(-1,g21,-1,-1,-1,l21,i11,m11);
}

function lose(){
    var g31=Number(localStorage.getItem("g31"))+4;
    var j11=Number(localStorage.getItem("j11"))+3;
    var l11=Number(localStorage.getItem("l11"))+3;
    var i11=Number(localStorage.getItem("i11"))-9;
    gobig2(-1,-1,g31,j11,l11,-1,i11,-1);
}

function gobig2(g11,g21,g31,j11,l11,l21,i11,m11){
    g11correction();
    g21correction();
    g31correction();
    j11correction();
    l11correction();
    l21correction();
    i11correction();
    m11correction();
    var do1=Number(localStorage.getItem("do"))+1;
    var age=Number(localStorage.getItem("age"));
    var age1=Number(localStorage.getItem("age"))+1;
    if(age>=35){
        var line=age;
    }else if(age>=20){
        var line=age+20;
    }else{
        var line=age*2+2;
    }
    if(age1>=35){
        var line1=age1;
    }else if(age1>=20){
        var line1=age1+20;
    }else{
        var line1=age1*2+2;
    }
    if (do1 >= line){
        g01=Number(localStorage.getItem("g01"));
        g02=Number(localStorage.getItem("g02"));
        g03=Number(localStorage.getItem("g03"));
        j01=Number(localStorage.getItem("j01"));
        l01=Number(localStorage.getItem("l01"));
        l02=Number(localStorage.getItem("l02"));
        i01=Number(localStorage.getItem("i01"));
        m01=Number(localStorage.getItem("m01"));
        g11=parseInt(Number(localStorage.getItem("g11"))/5);
        g21=parseInt(Number(localStorage.getItem("g21"))/5);
        g31=parseInt(Number(localStorage.getItem("g31"))/5);
        j11=parseInt(Number(localStorage.getItem("j11"))/5);
        l11=parseInt(Number(localStorage.getItem("l11"))/5);
        l21=parseInt(Number(localStorage.getItem("l21"))/5);
        i11=parseInt(Number(localStorage.getItem("i11"))/5);
        m11=parseInt(Number(localStorage.getItem("m11"))/5);
        var g1n=Number(localStorage.getItem("g1"))
        var g2n=Number(localStorage.getItem("g2"))
        var g3n=Number(localStorage.getItem("g3"))
        var j1n=Number(localStorage.getItem("j1"))
        var l1n=Number(localStorage.getItem("l1"))
        var l2n=Number(localStorage.getItem("l2"))
        var i1n=Number(localStorage.getItem("i1"))
        var m1n=Number(localStorage.getItem("m1"))
        var g1=Number(localStorage.getItem("g1"))+g11*(0.2+0.1*g01/(g01+1));
        var g2=Number(localStorage.getItem("g2"))+g21*(0.3+(0.3*Math.sqrt(g01)*g02)/((Math.sqrt(g01)+1)*(g02+1)));
        var g3=Number(localStorage.getItem("g3"))+g31*(0.3+(0.3*Math.sqrt(g01)*g03)/((Math.sqrt(g01)+1)*(g03+1)));
        var j1=Number(localStorage.getItem("j1"))+j11*(0.2+(0.35*Math.sqrt(g01)*j01)/((Math.sqrt(g01)+1)*(j01+1)));
        var l1=Number(localStorage.getItem("l1"))+l11*(0.3+(0.3*Math.sqrt(g01)*l01)/((Math.sqrt(g01)+1)*(l01+1)));
        var l2=Number(localStorage.getItem("l2"))+l21*(0.2+(0.2*Math.sqrt(g01)*l02)/((Math.sqrt(g01)+1)*(l02+1)));
        var i1=Number(localStorage.getItem("i1"))+i11*(0.1+0.1*Math.sqrt(g01)*i01/((Math.sqrt(g01)+1)*(i01+1)));
        var m1=Number(localStorage.getItem("m1"))+m11*(0.3+0.4*Math.sqrt(g01)*m01/((Math.sqrt(g01)+1)*(m01+1)));
        var hp=10*(0.1+(0.1*g01)/(g01+1))+g01;
        if (g1>20+g01){
            g1=20+g01;
            if(age>20){
                g1=g1*0.9;
            }
        }
        if (g2>g1*7+g02){
            g2=g1*7+g02;
        }
        if (g3>g1*7+g03){
            g3=g1*7+g03;
        }
        if (g2+g3 > g1*10){
            g3=g3*0.9;
            g2=g2*0.95;
        }
        if (j1>g2*3+j01){
            j1=g2*3+j01;
        }
        if (l1>100){
            l1=100;
            if(age>20){
                l1=l1*0.9;
            }
        }
        if (l2>100+l02){
            l2=100+l02;
        }
        if (i1>180+i01){
            i1=180+i01;
            if (age>20){
                i1=i1*0.9;
            }
        }
        if (m1>100+m01){
            m1=100+m01;
            if (age>20){
                m1=m1*0.9;
            }
        }
        localStorage.setItem("hp",hp.toString());
        localStorage.setItem("g1",g1.toString());
        localStorage.setItem("g11","31");
        localStorage.setItem("g2",g2.toString());
        localStorage.setItem("g21","31");
        localStorage.setItem("g3",g3.toString());
        localStorage.setItem("g31","31");
        localStorage.setItem("j1",j1.toString());
        localStorage.setItem("j11","31");
        localStorage.setItem("l1",l1.toString());
        localStorage.setItem("l11","31");
        localStorage.setItem("l2",l2.toString());
        localStorage.setItem("l21","31");
        localStorage.setItem("i1",i1.toString());
        localStorage.setItem("i11","31");
        localStorage.setItem("m1",m1.toString());
        localStorage.setItem("m11","31");
        localStorage.setItem("do",(line-do1).toString());
        localStorage.setItem("age",age1.toString());
        localStorage.setItem("exp",String(line1));
        let content = '';
        content += '<div>你長大了，成果如下</div>';
        content += '<div>身高成長了' + String(parseInt((g1-g1n)*1000)/100)+ 'cm</div>';
        content += '<div>體重成長了' + String(parseInt((g1+g2+g3-g1n-g2n-g3n)*100)/100) + 'kg</div>';
        content += '<div>跳躍力成長了' + String(parseInt((j1-j1n)*100)/100) + '</div>';
        content += '<div>視力成長了' + String(parseInt((l1-l1n)*100)/100) + '</div>';
        content += '<div>幸運成長了' + String(parseInt((l2-l2n)*100)/100) + '</div>';
        content += '<div>智力成長了' + String(parseInt((i1-i1n)*100)/100) + '</div>';
        content += '<div>魅力成長了' + String(parseInt((m1-m1n)*100)/100) + '</div>';
        $("#1").append(content);
    } else {
        if(g11>=0){
            localStorage.setItem("g11",String(g11));
        }
        if(g21>=0){
            localStorage.setItem("g21",String(g21));
        }
        if(g31>=0){
            localStorage.setItem("g31",String(g31));
        }
        if(j11>=0){
            localStorage.setItem("j11",String(j11));
        }
        if(l11>=0){
            localStorage.setItem("l11",String(l11));
        }
        if(l21>=0){
            localStorage.setItem("l21",String(l21));
        }
        if(i11>=0){
            localStorage.setItem("i11",String(i11));
        }
        if(m11>=0){
            localStorage.setItem("m11",String(m11));
        }
        localStorage.setItem("do",do1.toString());
    }
}