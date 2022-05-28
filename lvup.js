function goback(){
    if(localStorage.getItem("goback")==null){
        if(localStorage.getItem("name")==='和人'){
            localStorage.setItem("work","虛假的桐谷");
        }else{
            localStorage.setItem("work","無業");
        }
        if(localStorage.getItem("cookie")===null){
            localStorage.setItem("cookie","0");
        }
        if(localStorage.getItem("money")===null){
            localStorage.setItem("money","0");
        }
        if(localStorage.getItem("chapter")===null){
            localStorage.setItem("chapter","1");
            localStorage.setItem("part","1");
            localStorage.setItem("did","0");
        }
        localStorage.setItem("hp","10");
        localStorage.setItem("g1",String(1+0.1*Number(localStorage.getItem("getg1"))));
        localStorage.setItem("g2",String(1+Number(localStorage.getItem("getg2"))));
        localStorage.setItem("g3",String(1+Number(localStorage.getItem("getg3"))));
        localStorage.setItem("j1",String(1+Number(localStorage.getItem("getj1"))));
        localStorage.setItem("l1",String(1+Number(localStorage.getItem("getl1"))));
        localStorage.setItem("l2",String(1+Number(localStorage.getItem("getj2"))));
        localStorage.setItem("i1",String(1+Number(localStorage.getItem("geti1"))));
        localStorage.setItem("m1",String(1+Number(localStorage.getItem("getm1"))));
        localStorage.setItem("g11","1");
        localStorage.setItem("g21","1");
        localStorage.setItem("g31","1");
        localStorage.setItem("j11","1");
        localStorage.setItem("l11","1");
        localStorage.setItem("l21","1");
        localStorage.setItem("i11","1");
        localStorage.setItem("m11","1");
        localStorage.setItem("getg1","0");
        localStorage.setItem("getg3","0");
        localStorage.setItem("getg2","0");
        localStorage.setItem("getj1","0");
        localStorage.setItem("getl1","0"); 
        localStorage.setItem("getl2","0");
        localStorage.setItem("geti1","0");
        localStorage.setItem("getm1","0");
        localStorage.setItem("weapon","0");
        localStorage.setItem("armor","0");
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
        if(localStorage.getItem("ageend")==null){
            localStorage.setItem("ageend","30");
        }
        var died=Number(localStorage.getItem("died"))+1;
        localStorage.setItem("died",died.toString());
        localStorage.setItem("goagain",0);
        localStorage.removeItem("goback");
        var aged=Number(localStorage.getItem("ageend"))+1;
        if (Number(localStorage.getItem("age"))>=30){
            localStorage.setItem("ageend",aged.toString());
        }
        if (Number(localStorage.getItem("age"))>=80){
            localStorage.setItem("ageend","80");
        }
        goback();
    }
}

async function gohigh(){
    down();
    await delay(5);
    var work=localStorage.getItem("work");
    work1(work);
    var g11=Number(localStorage.getItem("g11"))+2;
    var j11=Number(localStorage.getItem("j11"))+1;
    var g21=Number(localStorage.getItem("g21"))-2;
    var g31=Number(localStorage.getItem("g31"))-1;
    $("#1").prepend("<div>長長的高丸嘗起來真美味。</div>");
    gobig(g11,g21,g31,j11,-1,-1,-1,-1);
    open();
}
async function gofat(){
    down();
    await delay(5);
    var work=localStorage.getItem("work");
    work1(work);
    var g31=Number(localStorage.getItem("g31"))+3;
    var i11=Number(localStorage.getItem("i11"))+2;
    var g11=Number(localStorage.getItem("g11"))-3;
    var g21=Number(localStorage.getItem("g21"))-1;
    var m11=Number(localStorage.getItem("m11"))-1;
    $("#1").prepend("<div>吃完垃圾食物更高興了。</div>");
    gobig(g11,g21,g31,-1,-1,-1,i11,m11);
    open();
}
async function backfat(){
    down();
    await delay(5);
    var work=localStorage.getItem("work");
    work1(work);
    var j11=Number(localStorage.getItem("j11"))+3;
    var g21=Number(localStorage.getItem("g21"))+1;
    var l11=Number(localStorage.getItem("l11"))+1;
    var m11=Number(localStorage.getItem("m11"))+1;
    var g31=Number(localStorage.getItem("g31"))-4;
    var i11=Number(localStorage.getItem("i11"))-2;
    $("#1").prepend("<div>到底有誰會想吃這鬼東西。</div>");
    gobig(-1,g21,g31,j11,l11,-1,i11,m11);
    open();
}
async function badeye(){
    down();
    await delay(5);
    var work=localStorage.getItem("work");
    work1(work);
    var i11=Number(localStorage.getItem("i11"))+4;
    var g31=Number(localStorage.getItem("g31"))+3;
    var g21=Number(localStorage.getItem("g21"))-3;
    var l11=Number(localStorage.getItem("l11"))-3;
    var j11=Number(localStorage.getItem("j11"))-1;
    $("#1").prepend("<div>刀劍神域才不是卡通。</div>");
    gobig(-1,g21,g31,j11,l11,-1,i11,-1);
    $('#train1').attr('disabled', false);
    open();
}
async function useeye(){
    down();
    await delay(5);
    var work=localStorage.getItem("work");
    work1(work);
    var a1 = parseInt(Math.random()*7);
    var b1 = ["g11", "g21", "g31", "j11", "l11", "i11", "m11"];
    var r1=parseInt(Number(localStorage.getItem(b1[a1]))*+5);
    localStorage.setItem(b1[a1],r1.toString());
    var b2 = b1.splice(a1, 1);
    var a2 = parseInt(Math.random()*7);
    var r2=parseInt(Number(localStorage.getItem(b2[a2]))-2);
    localStorage.setItem(b2[a2],r2.toString());
    var l21=parseInt(Number(localStorage.getItem("l21"))+3);
    $("#1").prepend("<div>看三小還想星爆啊。</div>");
    gobig(-1,-1,-1,-1,-1,l21,-1,-1);
    open();
}
async function gopretty(){
    down();
    await delay(5);
    var work=localStorage.getItem("work");
    work1(work);
    var m11=Number(localStorage.getItem("m11"))+6;
    var g31=Number(localStorage.getItem("g31"))-3;
    var g21=Number(localStorage.getItem("g21"))-1;
    var g11=Number(localStorage.getItem("g11"))-1;
    var i11=Number(localStorage.getItem("i11"))-1;
    gobig(g11,g21,g31,-1,-1,-1,i11,m11);
    $("#1").prepend("<div>一個大男人到底能化什麼妝。</div>");
    gobig(-1,-1,-1,-1,-1,-1,-1,-1);
    open();
}
async function getcookie(){
    down();
    await delay(5);
    var work=localStorage.getItem("work");
    if (work=='童子軍'){
        var coo=Number(localStorage.getItem("cookie"))+5;
        localStorage.setItem("cookie",String(coo));
        $("#1").prepend("<div>十塊香噴噴的餅乾出爐了。</div>");
        gobig(-1,-1,-1,-1,-1,-1,-1,-1);
    }else{
        $("#1").prepend("<div>你可能需要一些幫手。</div>");
    }
    open();
}

async function gettofu(){
    down();
    await delay(5);
    var work=localStorage.getItem("work");
    var sto=Number(localStorage.getItem("stool"));
    if (work=='廚師'){
        if(sto>=1){
            var tofu=Number(localStorage.getItem("tofu"))+1;
            localStorage.setItem("tofu",String(tofu));
            var sto=Number(localStorage.getItem("stool"))-1;
            localStorage.setItem("stool",String(sto));
            var g21=Number(localStorage.getItem("g21"))+10;
            $("#1").prepend("<div>發家致富的料理。</div>");
            gobig(-1,g21,-1,-1,-1,-1,-1,-1);
        }else{
            $("#1").prepend("<div>請問，你的材料呢？</div>");
        }
    }else{
        $("#1").prepend("<div>你可能需要一些專業訓練。</div>");
    }
    open();
}

async function getg2g3(){
    down();
    await delay(5);
    var g1=Number(localStorage.getItem("g1"));
    var g2=Number(localStorage.getItem("g2"));
    var g3=Number(localStorage.getItem("g3"));
    var w=Number(localStorage.getItem("weapon"));
    var a=Number(localStorage.getItem("armor"));
    if (w==0 && a==0){
        x=parseInt(100*g3/(g1+g2+g3));
        $("#1").prepend("<div>經過了精密的計算後，你的體脂率為"+String(x)+"%"+"</div>");
        gobig(-1,-1,-1,-1,-1,-1,-1,-1);
    }else{
        $("#1").prepend("<div>你可能得先把裝備卸下來。</div>");
    }
    open();
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
    var aged=Number(localStorage.getItem("ageend"));
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
        g11=parseInt(Number(localStorage.getItem("g11")));
        g21=parseInt(Number(localStorage.getItem("g21")));
        g31=parseInt(Number(localStorage.getItem("g31")));
        j11=parseInt(Number(localStorage.getItem("j11")));
        l11=parseInt(Number(localStorage.getItem("l11")));
        l21=parseInt(Number(localStorage.getItem("l21")));
        i11=parseInt(Number(localStorage.getItem("i11")));
        m11=parseInt(Number(localStorage.getItem("m11")));
        var g1n=Number(localStorage.getItem("g1"));
        var g2n=Number(localStorage.getItem("g2"));
        var g3n=Number(localStorage.getItem("g3"));
        var j1n=Number(localStorage.getItem("j1"));
        var l1n=Number(localStorage.getItem("l1"));
        var l2n=Number(localStorage.getItem("l2"));
        var i1n=Number(localStorage.getItem("i1"));
        var m1n=Number(localStorage.getItem("m1"));
        var g1=g1n+g11;
        var g2=g2n+g21;
        var g3=g3n+g31;
        var j1=j1n+j11;
        var l1=l1n+l11;
        var l2=l2n+l21;
        var i1=i1n+i11;
        var m1=m1n+m11;
        var hp=Number(localStorage.getItem("hp"))+g1;
        if (age>aged){
            g1=g1-5;
            g2=g2-10;
            g3=g3-7;
            l1=l1-9;
            i1=i1-8;
            m1=m1-6;
            var content2 = '<div>你的身體開始老化了</div>';
            $("#1").prepend(content2);
        }
        localStorage.setItem("hp",hp.toString());
        localStorage.setItem("g1",g1.toString());
        localStorage.setItem("g11","1");
        localStorage.setItem("g2",g2.toString());
        localStorage.setItem("g21","1");
        localStorage.setItem("g3",g3.toString());
        localStorage.setItem("g31","1");
        localStorage.setItem("j1",j1.toString());
        localStorage.setItem("j11","1");
        localStorage.setItem("l1",l1.toString());
        localStorage.setItem("l11","1");
        localStorage.setItem("l2",l2.toString());
        localStorage.setItem("l21","1");
        localStorage.setItem("i1",i1.toString());
        localStorage.setItem("i11","1");
        localStorage.setItem("m1",m1.toString());
        localStorage.setItem("m11","1");
        localStorage.setItem("do","0");
        localStorage.setItem("age",age1.toString());
        localStorage.setItem("exp",String(line1));
        let content = '';
        content += '<div>你長大了，成果如下</div>';
        content += '<div>身高成長了' + String(parseInt(g1-g1n))+ 'cm</div>';
        content += '<div>體重成長了' + String(parseInt(g1+g2+g3-g1n-g2n-g3n)) + 'kg</div>';
        content += '<div>跳躍力成長了' + String(parseInt(j1-j1n)) + '</div>';
        content += '<div>視力成長了' + String(parseInt(l1-l1n)) + '</div>';
        content += '<div>幸運成長了' + String(parseInt(l2-l2n)) + '</div>';
        content += '<div>智力成長了' + String(parseInt(i1-i1n)) + '</div>';
        content += '<div>魅力成長了' + String(parseInt(m1-m1n)) + '</div>';
        $("#1").prepend(content);
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
    if (work1 === "跳級生"){
        var do1=Number(localStorage.getItem("do"))+1;
        var i11=Number(localStorage.getItem("i11"))*1.5;
        var g31=Number(localStorage.getItem("g31"))-5;
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
        $("#1").prepend(content);
    }else if(work1 === "研究生"){
        var do1=Number(localStorage.getItem("do"))+1;
        var i11=Number(localStorage.getItem("i11"))*1.2;
        var g31=Number(localStorage.getItem("g31"))-10;
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
        $("#1").prepend(content);
    }else if(work1 === "延畢生"){
        var do1=Number(localStorage.getItem("do"))+1;
        var i11=Number(localStorage.getItem("i11"))*1.1;
        var g31=Number(localStorage.getItem("g31"))-20;
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
                $("#1").prepend(content);
            }
        }else{
            let content = '';
            content += '<div>你寫了一篇論文</div>';
            $("#1").prepend(content);
        }
    }else if(work1 === "畢業生"){
        var do1=Number(localStorage.getItem("do"))+1;
        var i11=Number(localStorage.getItem("i11"))*1.15;
        var g31=Number(localStorage.getItem("g31"))-7;
        localStorage.setItem("i11",i11.toString());
        localStorage.setItem("g31",g31.toString());
        localStorage.setItem("do",do1.toString());
        g31correction();
        let content = '';
        content += '<div>你還沒找到工作</div>';
        $("#1").prepend(content);
    }else if(work1 === "大學教授"){
        var do1=Number(localStorage.getItem("do"))+1;
        var i11=Number(localStorage.getItem("i11"))*1.3;
        var g31=Number(localStorage.getItem("g31"))/2;
        localStorage.setItem("i11",i11.toString());
        localStorage.setItem("g31",g31.toString());
        localStorage.setItem("do",do1.toString());
        let content = '';
        content += '<div>你在大學教書</div>';
        $("#1").prepend(content);
    }
}

function g11correction(){
    var g11=Number(localStorage.getItem("g11"));
    var g21=Number(localStorage.getItem("g21"));
    if (g11<0){
        g21=g21+g11;
        if(g21<0){
            g21correction();
        }
        g11=0;
    }
    localStorage.setItem("g11",String(g11));
    localStorage.setItem("g21",String(g21));
}

function g21correction(){
    var g21=Number(localStorage.getItem("g21"));
    var j11=Number(localStorage.getItem("j11"));
    if (g21<0){
        j11=j11+g21;
        if(j11<0){
            j11correction();
        }
        g21=0;
    }
    localStorage.setItem("g21",String(g21));
    localStorage.setItem("j11",String(j11));
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

function i11correction(){
    var i11=Number(localStorage.getItem("i11"));
    var g11=Number(localStorage.getItem("g11"));
    if (i11<0){
        g11=g11+i11;
        if(g11<0){
            g11correction();
        }
        i11=0;
    }
    localStorage.setItem("i11",String(i11));
    localStorage.setItem("g11",String(g11));
}

function g31correction(){
    var g31=Number(localStorage.getItem("g31"));
    var g21=Number(localStorage.getItem("g21"));
    if (g31<0){
        g21=g21+g31;
        if(g21<0){
            g21correction();
        }
        g31=0;
    }
    localStorage.setItem("g21",String(g21));
    localStorage.setItem("g31",String(g31));
}

function l11correction(){
    var l11=Number(localStorage.getItem("l11"));
    var g21=Number(localStorage.getItem("g21"));
    if (l11<0){
        g21=g21+l11;
        if(g21<0){
            g21correction();
        }
        l11=0;
    }
    localStorage.setItem("l11",String(l11));
    localStorage.setItem("g21",String(g21));
}

function l21correction(){
    var l21=Number(localStorage.getItem("l21"));
    var i11=Number(localStorage.getItem("i11"));
    if (l21<0){
        i11=i11+l21;
        if(i11<0){
            i11correction();
        }
        l21=0;
    }
    localStorage.setItem("l21",String(l21));
    localStorage.setItem("i11",String(i11));
}

function m11correction(){
    var m11=Number(localStorage.getItem("m11"));
    var g31=Number(localStorage.getItem("g31"));
    if (m11<0){
        g31=g31+m11;
        if(g31<0){
            g31correction();
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

function win(n){
    var g21=Number(localStorage.getItem("g21"))+9;
    var i11=Number(localStorage.getItem("i11"))+5;
    var m11=Number(localStorage.getItem("m11"))-7;
    var l21=Number(localStorage.getItem("l21"))-4;
    var l2=Number(localStorage.getItem("l2"));
    if (localStorage.getItem("weapon")=="gossip"){
        if(localStorage.getItem("gossip")>=11){
            l2=l2+Math.pow((Number(localStorage.getItem("gossip"))),3);
        }else{
            l2=l2+(Number(localStorage.getItem("gossip"))*10);
        }
    }
    if (n ==='動保委員'){
        var getg2=Number(localStorage.getItem("getg2"))+0.75;
        localStorage.setItem("getg2",String(getg2));
        if (localStorage.getItem("weapon")=="gossip"){
            var content = '<div class="report_red">殺人令保護了你免於成為蝦仁飯的命運。</div>';
            $('#3').append(content);
        }else{
            localStorage.setItem("work","蝦仁飯");
        }
        var a = parseInt((Math.random()*100+1)*(2000+l2)/2000);
        var l2=Number(localStorage.getItem("l2"))
        var mon=Number(localStorage.getItem("money"));
        var a2 = parseInt((Math.random()*10+1)*(100+l2)/100);
        if(a>=100){
            var a1 = parseInt((Math.random()*1+1)*(150+l2)/150);
            antl=Number(localStorage.getItem("antler"));
            localStorage.setItem("antler",String(antl+a1));
            var content = '<div>你獲得了從'+n+'身上掉下來的'+String(a1)+'個鹿茸</div>';
            $('#3').append(content);
        }
    }else if (n === '山羌'){
        var getj1=Number(localStorage.getItem("getj1"))+0.5;
        localStorage.setItem("getj1",String(getj1));
        var a = parseInt((Math.random()*100+1)*(1000+l2)/1000);
        var l2=Number(localStorage.getItem("l2"))
        var mon=Number(localStorage.getItem("money"));
        var a2 = parseInt((Math.random()*10+1)*(100+l2)/100);
        if(a>=70){
            var a1 = parseInt((Math.random()*2+1)*(100+l2)/100);
            sto=Number(localStorage.getItem("stool"));
            localStorage.setItem("stool",String(sto+a1));
            var content = '<div>你獲得了從'+n+'身上掉下來的'+String(a1)+'個山羌糞便</div>';
            $('#3').append(content);
        }
    }else if (n === '山羊'){
        var getg1=Number(localStorage.getItem("getg1"))+0.1;
        localStorage.setItem("getg1",String(getg1));
        var a = parseInt((Math.random()*100+1)*(500+l2)/500);
        var l2=Number(localStorage.getItem("l2"))
        var mon=Number(localStorage.getItem("money"));
        var a2 = parseInt((Math.random()*10+1)*(100+l2)/100);
        if(a>=90){
            var a1 = parseInt((Math.random()*4+1)*(100+l2)/100);
            gmk=Number(localStorage.getItem("gmilk"));
            localStorage.setItem("gmilk",String(gmk+a1));
            var content = '<div>你獲得了從'+n+'身上掉下來的'+String(a1)+'個山羊奶</div>';
            $('#3').append(content);
        }
    }else if (n === '綿羊'){
        var getg3=Number(localStorage.getItem("getg3"))+0.1;
        localStorage.setItem("getg3",String(getg3));
        var a = parseInt((Math.random()*100+1)*(100+l2)/100);
        var l2=Number(localStorage.getItem("l2"))
        var mon=Number(localStorage.getItem("money"));
        var a2 = parseInt((Math.random()*10+1)*(100+l2)/100);
        if(a>=80){
            var a1 = parseInt((Math.random()*5+1)*(100+l2)/100);
            woo=Number(localStorage.getItem("wool"));
            localStorage.setItem("wool",String(woo+a1));
            var content = '<div>你獲得了從'+n+'身上掉下來的'+String(a1)+'個羊毛</div>';
            $('#3').append(content);
        }
    }else if(n ==='訓導主任'){
        var getg2=Number(localStorage.getItem("getg2"))+1.75;
        localStorage.setItem("getg2",String(getg2));
        if (localStorage.getItem("weapon")=="gossip"){
            var content = '<div class="report_red">殺人令保護了你免於成為蝦仁飯的命運。</div>';
            $('#3').append(content);
        }else{
            localStorage.setItem("work","蝦仁飯");
        }
        var a = parseInt((Math.random()*100+1)*(200+l2)/200);
        var l2=Number(localStorage.getItem("l2"))
        var mon=Number(localStorage.getItem("money"));
        var a2 = parseInt((Math.random()*100+1)*(300+l2)/300);
        if(a>=90){
            var a1 = parseInt((Math.random()*1+1)*(250+l2)/250);
            pan=Number(localStorage.getItem("paint"));
            localStorage.setItem("paint",String(pan+a1));
            var content = '<div>你獲得了從'+n+'身上掉下來的'+String(a1)+'個油漆</div>';
            $('#3').append(content);
        }
    }else if (n === '初音幫'){
        var getl2=Number(localStorage.getItem("getl2"))+1.5;
        localStorage.setItem("getl2",String(getl2));
        var a = parseInt((Math.random()*100+1)*(200+l2)/200);
        var l2=Number(localStorage.getItem("l2"))
        var mon=Number(localStorage.getItem("money"));
        var a2 = parseInt((Math.random()*120+1)*(300+l2)/300);
        if(a>=90){
            var a1 = parseInt((Math.random()*2+1)*(200+l2)/200);
            gun=Number(localStorage.getItem("gunpow"));
            localStorage.setItem("gunpow",String(gun+a1));
            var content = '<div>你獲得了從'+n+'身上掉下來的'+String(a1)+'個火藥</div>';
            $('#3').append(content);
        }
        var a = parseInt((Math.random()*100+1)*(200+l2)/200);
        if(a>=70){
            var a1 = parseInt((Math.random()*6+1)*(200+l2)/200);
            tee=Number(localStorage.getItem("teech"));
            localStorage.setItem("teech",String(tee+a1));
            var content = '<div>你獲得了從'+n+'身上掉下來的'+String(a1)+'個掉落牙齒</div>';
            $('#3').append(content);
        }
        var a = parseInt((Math.random()*100+1)*(200+l2)/200);
        if(a>=90){
            var a1 = parseInt((Math.random()*2+1)*(200+l2)/200);
            gra=Number(localStorage.getItem("grass"));
            localStorage.setItem("grass",String(gra+a1));
            var content = '<div>你獲得了從'+n+'身上掉下來的'+String(a1)+'個玻璃碎片</div>';
            $('#3').append(content);
        }
    }else if (n === '書呆子'){
        var geti1=Number(localStorage.getItem("geti1"))+0.75;
        localStorage.setItem("geti1",String(geti1));
        var a = parseInt((Math.random()*100+1)*(200+l2)/200);
        var l2=Number(localStorage.getItem("l2"))
        var mon=Number(localStorage.getItem("money"));
        var a2 = parseInt((Math.random()*30+1)*(200+l2)/200);
        if(a>=80){
            var a1 = parseInt((Math.random()*4+1)*(200+l2)/200);
            clo=Number(localStorage.getItem("cloth"));
            localStorage.setItem("cloth",String(clo+a1));
            var content = '<div>你獲得了從'+n+'身上掉下來的'+String(a1)+'個眼鏡布</div>';
            $('#3').append(content);
        }
    }else if (n === '肥宅'){
        var getg3=Number(localStorage.getItem("getg3"))+0.5;
        localStorage.setItem("getg3",String(getg3));
        var a = parseInt((Math.random()*100+1)*(200+l2)/200);
        var l2=Number(localStorage.getItem("l2"))
        var mon=Number(localStorage.getItem("money"));
        var a2 = parseInt((Math.random()*20+5)*(150+l2)/150);
        if(a>=70){
            var a1 = parseInt((Math.random()*6+1)*(200+l2)/200);
            ger=Number(localStorage.getItem("gear"));
            localStorage.setItem("gear",String(ger+a1));
            var content = '<div>你獲得了從'+n+'身上掉下來的'+String(a1)+'個合金齒輪</div>';
            $('#3').append(content);
        }
    }
    localStorage.setItem("money",String(mon+a2));
    var content = '<div>你獲得了從'+n+'身上掉下來的'+String(a2)+'塊錢</div>';
    $('#3').append(content);
    gobig2(-1,g21,-1,-1,-1,l21,i11,m11);
}

function lose(){
    var g31=Number(localStorage.getItem("g31"))+4;
    var j11=Number(localStorage.getItem("j11"))+3;
    var l11=Number(localStorage.getItem("l11"))+3;
    var i11=Number(localStorage.getItem("i11"))-9;
    gobig2(-1,-1,g31,j11,l11,-1,i11,-1);
}

function tie(){
    var l21=Number(localStorage.getItem("l21"))+4;
    var i11=Number(localStorage.getItem("i11"))+5;
    var m11=Number(localStorage.getItem("m11"))+3;
    var g11=Number(localStorage.getItem("g11"))-4;
    gobig2(g11,-1,-1,-1,-1,l21,i11,m11);
}



async function down(){
    $('#train1').attr('disabled', true);
    $('#train2').attr('disabled', true);
    $('#train3').attr('disabled', true);
    $('#train4').attr('disabled', true);
    $('#train5').attr('disabled', true);
    $('#train6').attr('disabled', true);
    $('#train7').attr('disabled', true);
    $('#train8').attr('disabled', true);
    $('#train9').attr('disabled', true);
}

async function open(){
    $('#train1').attr('disabled', false);
    $('#train2').attr('disabled', false);
    $('#train3').attr('disabled', false);
    $('#train4').attr('disabled', false);
    $('#train5').attr('disabled', false);
    $('#train6').attr('disabled', false);
    $('#train7').attr('disabled', false);
    $('#train8').attr('disabled', false);
    $('#train9').attr('disabled', false);
}
