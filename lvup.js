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
    $('#train6').attr('disabled', true);
    await delay(5);
    var g11=Number(localStorage.getItem("g11"))+3;
    localStorage.setItem("g11",g11.toString());
    var j11=Number(localStorage.getItem("j11"))+1;
    localStorage.setItem("j11",j11.toString());
    var g21=Number(localStorage.getItem("g21"))-3;
    localStorage.setItem("g21",g21.toString());
    var g31=Number(localStorage.getItem("g31"))-1;
    localStorage.setItem("g31",g31.toString());
    g21correction();
    g31correction();
    $("#1").append("<div>長長的高丸嘗起來真美味。</div>");
    gobig();
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
    var g31=Number(localStorage.getItem("g31"))+9;
    localStorage.setItem("g31",g31.toString());
    var i11=Number(localStorage.getItem("i11"))-5;
    localStorage.setItem("i11",i11.toString());
    var g11=Number(localStorage.getItem("g11"))-3;
    localStorage.setItem("g11",g11.toString());
    var g21=Number(localStorage.getItem("g21"))-1;
    localStorage.setItem("g21",g21.toString());
    var m11=Number(localStorage.getItem("m11"))-1;
    localStorage.setItem("m11",m11.toString());
    g11correction();
    g21correction();
    i11correction();
    m11correction();
    $("#1").append("<div>吃完垃圾食物更高興了。</div>");
    gobig();
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
    var j11=Number(localStorage.getItem("j11"))+4;
    localStorage.setItem("j11",j11.toString());
    var g21=Number(localStorage.getItem("g21"))+3;
    localStorage.setItem("g21",g21.toString());
    var l11=Number(localStorage.getItem("l11"))+1;
    localStorage.setItem("l11",l11.toString());
    var m11=Number(localStorage.getItem("m11"))+1;
    localStorage.setItem("m11",m11.toString());
    var g31=Number(localStorage.getItem("g31"))-7;
    localStorage.setItem("g31",g31.toString());
    var i11=Number(localStorage.getItem("i11"))-1;
    localStorage.setItem("i11",i11.toString());
    g31correction();
    i11correction();
    $("#1").append("<div>到底有誰會想吃這鬼東西。</div>");
    gobig();
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
    var i11=Number(localStorage.getItem("i11"))+4;
    localStorage.setItem("i11",i11.toString());
    var g31=Number(localStorage.getItem("g31"))*1.1;
    localStorage.setItem("g31",g31.toString());
    var g21=Number(localStorage.getItem("g21"))*0.8;
    localStorage.setItem("g21",g21.toString());
    var l11=Number(localStorage.getItem("l11"))-7;
    localStorage.setItem("l11",l11.toString());
    var j11=Number(localStorage.getItem("j11"))-1;
    localStorage.setItem("j11",j11.toString());
    j11correction();
    l11correction();
    $("#1").append("<div>刀劍神域才不是卡通。</div>");
    gobig();
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
    var a1 = Math.random()*8;
    var b1 = ["g11", "g21", "g31", "j11", "l11", "l21", "i11", "m11"];
    var r1=Number(localStorage.getItem(b1[a1]))*1.1;
    localStorage.setItem(b1[a1],r1.toString());
    var b2 = b1.splice(a1, 1);
    var a2 = parseInt(Math.random()*7);
    var r2=Number(localStorage.getItem(b2[a2]))*0.09;
    localStorage.setItem(b2[a2],r2.toString());
    var l21=Number(localStorage.getItem("l21"))+3;
    localStorage.setItem("l21",l21.toString());
    $("#1").append("<div>看三小還想星爆啊。</div>");
    gobig();
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
    var m11=Number(localStorage.getItem("m11"))*1.3;
    localStorage.setItem("m11",m11.toString());
    var g31=Number(localStorage.getItem("g31"))-3;
    localStorage.setItem("g31",g31.toString());
    var g21=Number(localStorage.getItem("g21"))-2;
    localStorage.setItem("g21",g21.toString());
    var g11=Number(localStorage.getItem("g11"))-2;
    localStorage.setItem("g11",g11.toString());
    var i11=Number(localStorage.getItem("i11"))-1;
    localStorage.setItem("i11",i11.toString());
    g11correction();
    g21correction();
    g31correction();
    i11correction();
    $("#1").append("<div>一個大男人到底能化什麼妝。</div>");
    gobig();
    $('#train1').attr('disabled', false);
    $('#train2').attr('disabled', false);
    $('#train3').attr('disabled', false);
    $('#train4').attr('disabled', false);
    $('#train5').attr('disabled', false);
    $('#train6').attr('disabled', false);
}

function gobig(){
    var do1=Number(localStorage.getItem("do"))+1;
    var age=Number(localStorage.getItem("age"))+1;
    if(age>=35){
        var age2=age;
    }else if(age>=20){
        var age2=age+20;
    }else{
        var age2=age*2;
    }
    ocalStorage.setItem("exp",String(age2));
    var work=localStorage.getItem("work");
    if (work == "跳級生"){
        var do1=Number(localStorage.getItem("do"))+1;
        var i11=Number(localStorage.getItem("i11"))+5;
        var g31=Number(localStorage.getItem("g31"))-2;
        localStorage.setItem("i11",i11.toString());
        localStorage.setItem("g31",g31.toString());
        g31correction();
        if(age == 30){
            var i1=Number(localStorage.getItem("i1"));
            if(i1<50){
                localStorage.setItem("work","延畢生");
            }else if(i1<90){
                localStorage.setItem("work","畢業生");
            }else{
                localStorage.setItem("work","大學教授");
            }
        }
    }else if(work == "研究生"){
        var do1=Number(localStorage.getItem("do"))+1;
        var i11=Number(localStorage.getItem("i11"))+3;
        var g31=Number(localStorage.getItem("g31"))-4;
        localStorage.setItem("i11",i11.toString());
        localStorage.setItem("g31",g31.toString());
        g31correction();
        if(age == 30){
            var i1=Number(localStorage.getItem("i1"));
            if(i1<50){
                localStorage.setItem("work","延畢生");
            }else{
                localStorage.setItem("work","畢業生");
            }
        }
    }else if(work == "延畢生"){
        var do1=Number(localStorage.getItem("do"))+1;
        var i11=Number(localStorage.getItem("i11"))+1;
        var g31=Number(localStorage.getItem("g31"))-5;
        localStorage.setItem("i11",i11.toString());
        localStorage.setItem("g31",g31.toString());
        g31correction();
        if(age == 30){
            var i1=Number(localStorage.getItem("i1"));
            if(i1>50){
                localStorage.setItem("work","畢業生");
            }
        }
    }else if(work == "畢業生"){
        var do1=Number(localStorage.getItem("do"))+1;
        var i11=Number(localStorage.getItem("i11"))+4;
        var g31=Number(localStorage.getItem("g31"))-2;
        localStorage.setItem("i11",i11.toString());
        localStorage.setItem("g31",g31.toString());
        g31correction();
    }else if(work == "大學教授"){
        var do1=Number(localStorage.getItem("do"))+1;
        var i11=Number(localStorage.getItem("i11"))*2;
        var g31=Number(localStorage.getItem("g31"))/2;
        localStorage.setItem("i11",i11.toString());
        localStorage.setItem("g31",g31.toString());
    }
    if (do1 == age2){
        var g0=Number(localStorage.getItem("g01"));
        var g11=parseInt(Number(localStorage.getItem("g11"))/5);
        var g21=parseInt(Number(localStorage.getItem("g21"))/5);
        var g31=parseInt(Number(localStorage.getItem("g31"))/5);
        var j11=parseInt(Number(localStorage.getItem("j11")))/5;
        var l11=parseInt(Number(localStorage.getItem("l11")))/5;
        var l21=parseInt(Number(localStorage.getItem("l21")))/5;
        var i11=parseInt(Number(localStorage.getItem("i11")))/5;
        var m11=parseInt(Number(localStorage.getItem("m11")))/5;
        var g1x=g11*(1+g0/20)/19.5;
        var g2x=g21*(1+g0/20)/3.8;
        var g3x=g31*(1+g0/20)/3.6;
        var j1x=j11*(1+g0/20)/1.5;
        var l1x=l11*(1+g0/20)/2.75;
        var l2x=l21*(1+g0/20)/3.5;
        var i1x=i11*(1+g0/20)/3.25;
        var m1x=m11*(1+g0/20)/3.1;
        var hpx=10*(1+g0/20);
        var cg1=Number(localStorage.getItem("g1"));
        var cg2=Number(localStorage.getItem("g2"));
        var cg3=Number(localStorage.getItem("g3"));
        var cj1=Number(localStorage.getItem("j1"));
        var cl1=Number(localStorage.getItem("l1"));
        var cl2=Number(localStorage.getItem("l2"));
        var ci1=Number(localStorage.getItem("i1"));
        var cm1=Number(localStorage.getItem("m1"));
        var chp=Number(localStorage.getItem("hp"));
        var g1=cg1+g1x;
        var g2=cg2+g2x;
        var g3=cg3+g3x;
        var j1=cj1+j1x;
        var l1=cl1+l1x;
        var l2=cl2+l2x;
        var i1=ci1+i1x;
        var m1=cm1+m1x;
        var hp=chp+hpx;
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
        if (m1>100*(1+g0/20)){
            m1=180*(1+g0/20);
            if (age>30){
                m1=m1*(1-0.01*age);
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
        localStorage.setItem("age",age.toString());
        let content = '';
        content += '<div>你長大了，成果如下</div>';
        content += '<div>身高成長了' + String((parseInt(g1*1000)-parseInt(cg1*1000))/100)+ 'cm</div>';
        content += '<div>體重成長了' + String((parseInt((g1+g2+g3)*100)-parseInt((cg1+cg2+cg3)*100))/100) + 'kg</div>';
        content += '<div>跳躍力成長了' + String((parseInt(j1*100)-parseInt(cj1*100))/100) + '</div>';
        content += '<div>視力成長了' + String((parseInt(l1*100)-parseInt(cl1*100))/100) + '</div>';
        content += '<div>幸運成長了' + String((parseInt(l2*100)-parseInt(cl2*100))/100) + '</div>';
        content += '<div>智力成長了' + String((parseInt(i1*100)-parseInt(ci1*100))/100) + '</div>';
        content += '<div>魅力成長了' + String((parseInt(m1*100)-parseInt(cm1*100))/100) + '</div>';
        $("#1").append(content);
    } else {
        localStorage.setItem("do",do1.toString());
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
    localStorage.setItem("g21",g21.toString());
    var i11=Number(localStorage.getItem("i11"))+5;
    localStorage.setItem("i11",i11.toString());
    var m11=Number(localStorage.getItem("m11"))-7;
    localStorage.setItem("m11",m11.toString());
    var l21=Number(localStorage.getItem("l21"))-4;
    localStorage.setItem("l21",l21.toString());
    m11correction();
    l21correction();
    gobig2();
}

function lose(){
    var g31=Number(localStorage.getItem("g31"))+4;
    localStorage.setItem("g31",g31.toString());
    var j11=Number(localStorage.getItem("j11"))+3;
    localStorage.setItem("j11",j11.toString());
    var l11=Number(localStorage.getItem("l11"))+3;
    localStorage.setItem("l11",l11.toString());
    var i11=Number(localStorage.getItem("i11"))-9;
    localStorage.setItem("i11",i11.toString());
    i11correction();
    gobig2();
}

function gobig2(){
    var do1=Number(localStorage.getItem("do"))+1;
    var age=Number(localStorage.getItem("age"))+1;
    if(age>=35){
        var age2=age;
    }else if(age>=20){
        var age2=age+20;
    }else{
        var age2=age*2;
    }
    ocalStorage.setItem("exp",String(age2));
    var work=localStorage.getItem("work");
    if (work == "跳級生"){
        var do1=Number(localStorage.getItem("do"))+1;
        var i11=Number(localStorage.getItem("i11"))+5;
        var g31=Number(localStorage.getItem("g31"))-2;
        localStorage.setItem("i11",i11.toString());
        localStorage.setItem("g31",g31.toString());
        g31correction();
        if(age == 30){
            var i1=Number(localStorage.getItem("i1"));
            if(i1<50){
                localStorage.setItem("work","延畢生");
            }else if(i1<90){
                localStorage.setItem("work","畢業生");
            }else{
                localStorage.setItem("work","大學教授");
            }
        }
    }else if(work == "研究生"){
        var do1=Number(localStorage.getItem("do"))+1;
        var i11=Number(localStorage.getItem("i11"))+3;
        var g31=Number(localStorage.getItem("g31"))-4;
        localStorage.setItem("i11",i11.toString());
        localStorage.setItem("g31",g31.toString());
        g31correction();
        if(age == 30){
            var i1=Number(localStorage.getItem("i1"));
            if(i1<50){
                localStorage.setItem("work","延畢生");
            }else{
                localStorage.setItem("work","畢業生");
            }
        }
    }else if(work == "延畢生"){
        var do1=Number(localStorage.getItem("do"))+1;
        var i11=Number(localStorage.getItem("i11"))+1;
        var g31=Number(localStorage.getItem("g31"))-5;
        localStorage.setItem("i11",i11.toString());
        localStorage.setItem("g31",g31.toString());
        g31correction();
        if(age == 30){
            var i1=Number(localStorage.getItem("i1"));
            if(i1>50){
                localStorage.setItem("work","畢業生");
            }
        }
    }else if(work == "畢業生"){
        var do1=Number(localStorage.getItem("do"))+1;
        var i11=Number(localStorage.getItem("i11"))+4;
        var g31=Number(localStorage.getItem("g31"))-2;
        localStorage.setItem("i11",i11.toString());
        localStorage.setItem("g31",g31.toString());
        g31correction();
    }else if(work == "大學教授"){
        var do1=Number(localStorage.getItem("do"))+1;
        var i11=Number(localStorage.getItem("i11"))*2;
        var g31=Number(localStorage.getItem("g31"))/2;
        localStorage.setItem("i11",i11.toString());
        localStorage.setItem("g31",g31.toString());
    }
    if (do1 == age2){
        var g0=Number(localStorage.getItem("g01"));
        var g11=parseInt(Number(localStorage.getItem("g11"))/5);
        var g21=parseInt(Number(localStorage.getItem("g21"))/5);
        var g31=parseInt(Number(localStorage.getItem("g31"))/5);
        var j11=parseInt(Number(localStorage.getItem("j11")))/5;
        var l11=parseInt(Number(localStorage.getItem("l11")))/5;
        var l21=parseInt(Number(localStorage.getItem("l21")))/5;
        var i11=parseInt(Number(localStorage.getItem("i11")))/5;
        var m11=parseInt(Number(localStorage.getItem("m11")))/5;
        var g1x=g11*(1+g0/20)/19.5;
        var g2x=g21*(1+g0/20)/3.8;
        var g3x=g31*(1+g0/20)/3.6;
        var j1x=j11*(1+g0/20)/1.5;
        var l1x=l11*(1+g0/20)/2.75;
        var l2x=l21*(1+g0/20)/3.5;
        var i1x=i11*(1+g0/20)/3.25;
        var m1x=m11*(1+g0/20)/3.1;
        var hpx=10*(1+g0/20);
        var cg1=Number(localStorage.getItem("g1"));
        var cg2=Number(localStorage.getItem("g2"));
        var cg3=Number(localStorage.getItem("g3"));
        var cj1=Number(localStorage.getItem("j1"));
        var cl1=Number(localStorage.getItem("l1"));
        var cl2=Number(localStorage.getItem("l2"));
        var ci1=Number(localStorage.getItem("i1"));
        var cm1=Number(localStorage.getItem("m1"));
        var chp=Number(localStorage.getItem("hp"));
        var g1=cg1+g1x;
        var g2=cg2+g2x;
        var g3=cg3+g3x;
        var j1=cj1+j1x;
        var l1=cl1+l1x;
        var l2=cl2+l2x;
        var i1=ci1+i1x;
        var m1=cm1+m1x;
        var hp=chp+hpx;
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
        if (m1>100*(1+g0/20)){
            m1=180*(1+g0/20);
            if (age>30){
                m1=m1*(1-0.01*age);
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
        localStorage.setItem("age",age.toString());
        let content = '';
        content += '<div>你長大了，成果如下</div>';
        content += '<div>身高成長了' + String((parseInt(g1*1000)-parseInt(cg1*1000))/100)+ 'cm</div>';
        content += '<div>體重成長了' + String((parseInt((g1+g2+g3)*100)-parseInt((cg1+cg2+cg3)*100))/100) + 'kg</div>';
        content += '<div>跳躍力成長了' + String((parseInt(j1*100)-parseInt(cj1*100))/100) + '</div>';
        content += '<div>視力成長了' + String((parseInt(l1*100)-parseInt(cl1*100))/100) + '</div>';
        content += '<div>幸運成長了' + String((parseInt(l2*100)-parseInt(cl2*100))/100) + '</div>';
        content += '<div>智力成長了' + String((parseInt(i1*100)-parseInt(ci1*100))/100) + '</div>';
        content += '<div>魅力成長了' + String((parseInt(m1*100)-parseInt(cm1*100))/100) + '</div>';
        $("#3").append(content);
    } else {
        localStorage.setItem("do",do1.toString());
    }
}
