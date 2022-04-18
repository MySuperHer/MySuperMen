async function life(){
    var a =Number(localStorage.getItem("chapter"));
    var b =Number(localStorage.getItem("part"));
    localStorage.setItem("did","0");
    sessionStorage.setItem("php",String(parseInt(Number(localStorage.getItem("hp")))));
    $('#life1').attr('disabled', true);
    await delay(5);
    if(a==1){
        $("#liferusult").append("<div>你開始了新的一天。</div>");
        choose11.style.display='block';
        choose12.style.display='block';
        choose21.style.display='block';
        choose22.style.display='block';
        taichi(b);
    }
    $('#life1').attr('disabled', false);
}

async function taichi(b){
    if (b>=10){
        let content = ''
        content += '<div>你遇到了'+sessionStorage.getItem("moname")+'</div>';
        $("#liferusult").append(content);
    }else{
        var n =Number(localStorage.getItem("did"))+1;
        var x = parseInt(Math.random()*5)
        var list =['小混混','精準打擊的小混混','訓練有素的小混混','混混槍手','混元形意門門徒']
        sessionStorage.setItem("moname",list[x]);
        sessionStorage.setItem("mg2",String(n+b*7+x*3));
        sessionStorage.setItem("mg3",String(n+b*8+x+3));
        sessionStorage.setItem("mj1",String(n*b+x*3));
        sessionStorage.setItem("ml1",String(n+b*7+x*4));
        sessionStorage.setItem("ml2",String(n+b*9+x*5));
        sessionStorage.setItem("mi1",String(n+2+b*5+x*5));
        sessionStorage.setItem("mhp",String(10*n+15*b+x*20));
        let content = ''
        content += '<div>你遇到了'+sessionStorage.getItem("moname")+'</div>';
        content += '<div>對手資訊</div>';
        content += '<div>血量：' + sessionStorage.getItem("mhp") + '</div>';
        content += '<div>力量：' + sessionStorage.getItem("mg2") + '</div>';
        content += '<div>防禦：' + sessionStorage.getItem("mg3") + '</div>';
        content += '<div>移動：' + sessionStorage.getItem("mj1") + '</div>';
        content += '<div>命中：' + sessionStorage.getItem("ml1") + '</div>';
        content += '<div>幸運：' + sessionStorage.getItem("ml2") + '</div>';
        content += '<div>智力：' + sessionStorage.getItem("mi1") + '</div>';
        $("#liferusult").append(content);
        let content2 = ''
        content2 += '<div>目前遊戲進度：' + localStorage.getItem("chapter") +'-'+ localStorage.getItem("part") +'-'+localStorage.getItem("did")+ '</div>';
        content2 += '<div>你目前的血量：' + sessionStorage.getItem("php") + '</div>';
        $("#lifesay").append(content2);
    }
    
    
}

function choose1(){
    var moname=sessionStorage.getItem("moname");
    var work=localStorage.getItem("work");
    var plname=localStorage.getItem("name");
    var php=Number(sessionStorage.getItem("php"));
    taichifight(moname,php,plname,work);
}

function taichifight(moname,php,plname,work){
    var pg2=Number(localStorage.getItem("g2"));
    if (localStorage.getItem("weapon")=="knife"){
        if(localStorage.getItem("knife")>=11){
            pg2=pg2+Math.pow((Number(localStorage.getItem("knife"))),2);
        }else{
            pg2=pg2+(Number(localStorage.getItem("knife"))*5);
        }
    }
    var pg3=Number(localStorage.getItem("g3"));
    var pj1=Number(localStorage.getItem("j1"));
    var pl1=Number(localStorage.getItem("l1"));
    var pl2=Number(localStorage.getItem("l2"));
    var pi1=Number(localStorage.getItem("i1"));
    if (localStorage.getItem("weapon")=="phone"){
        if(localStorage.getItem("phone")>=11){
            pi1=pi1+(Number(localStorage.getItem("phone"))*4);
        }else{
            pi1=pi1+(Number(localStorage.getItem("phone"))*3);
        }
    }
    if(work==='無業'){
        work='';
    }
    var pgosh=1;
    var pgosh1=1;
    var pfire=1;
    var pkill=0;
    var mgosh=1;
    var mfire=1;
    var mgosh2=1;
    var mg2=Number(sessionStorage.getItem("mg2"));//肌力
    var mg3=Number(sessionStorage.getItem("mg3"));//脂肪
    var mj1=Number(sessionStorage.getItem("mj1"));//移動
    var ml1=Number(sessionStorage.getItem("ml1"));//視力
    var ml2=Number(sessionStorage.getItem("ml2"));//幸運
    var mi1=Number(sessionStorage.getItem("mi1"));//智力
    var mhp=Number(sessionStorage.getItem("mhp"));
    var turn = 0
    var content = '';
    content += '<div>'+work+plname+'攻擊了'+moname+'</div>';
    $('#liferusult').append(content);
    while(php>0 && mhp>0 && turn<100){
        if(pl1>pl2){
            var x =playerattack(pg2,pg3,pj1,pl1,pl2,pi1,php,mg3,mj1,ml2,mi1,mhp,work,plname,moname,pgosh,mgosh,mfire,mgosh2,pgosh1,turn,pfire,pkill);
            php = x[0];
            mhp = x[1];
            pgosh = x[2];
            mgosh = x[3];
            mfire = x[4];
            mgosh2 = x[5];
            pgosh2 = x[6];
            turn=turn+1;
            if (mhp>0){
                var y =monstorattack11(mg2,ml1,ml2,mi1,mhp,pg2,pg3,pj1,pl2,pi1,php,work,plname,moname,pgosh,mgosh,mfire,mgosh2,pgosh1,pfire);
                php = y[0];
                mhp = y[1];
                pgosh = y[2];
                mgosh = y[3];
                mfire = y[4];
                mgosh2 = y[5];
                mj1=y[6];
                pgosh2 = y[7];
                pfire = y[8];
                pkill = y[9];
                turn=turn+1;
            }
        }else{
            var y =monstorattack11(mg2,ml1,ml2,mi1,mhp,pg2,pg3,pj1,pl2,pi1,php,work,plname,moname,pgosh,mgosh,mfire,mgosh2,pgosh1,pfire,pkill);
            php = y[0];
            mhp = y[1];
            pgosh = y[2];
            mgosh = y[3];
            mfire = y[4];
            mgosh2 = y[5];
            mj1=y[6];
            pgosh2 = y[7];
            pfire = y[8];
            pkill = y[9];
            turn=turn+1;
            if (php>0){
                var x =playerattack(pg2,pg3,pj1,pl1,pl2,pi1,php,mg3,mj1,ml2,mi1,mhp,work,plname,moname,pgosh,mgosh,mfire,mgosh2,pgosh1,turn,pfire);
                php = x[0];
                mhp = x[1];
                pgosh = x[2];
                mgosh = x[3];
                mfire = x[4];
                mgosh2 = x[5];
                pgosh2 = x[6];
                turn=turn+1;
            }
        }
    }
    var content='';
    var coo=Number(localStorage.getItem("cookie"));
    var coom=parseInt(Math.random()*100)+1;
    if (php>0 && mhp<=0){
        var content = '<div>'+moname+'倒下了，'+work+plname+'還有'+String(parseInt(php))+'生命</div>';
        $('#liferusult').append(content);
        sessionStorage.setItem("php",String(parseInt(php)));
        var n =Number(localStorage.getItem("did"))+1;
        var b =Number(localStorage.getItem("part"));
        if(n>5){
            n=0;
            localStorage.setItem("did",String(b+1));
        }
        localStorage.setItem("did",String(n));
        taichi(b);
    }else if (php<=0 && mhp>0 && coo>=1 && coom>=70){
        var content = '<div>'+work+plname+'倒下了，'+moname+'還有'+String(parseInt(mhp))+'生命</div>';
        $('#liferusult').append(content);
        var content='';
        var plname=localStorage.getItem("name");
        var work=String(localStorage.getItem("work"));
        var content = '<div>'+work+plname+'使用了一塊餅乾呼喚了一群童子軍來幫忙</div>';
        $('#liferusult').append(content);
        localStorage.setItem("cookie",String(coo-1));
        var php=Number(localStorage.getItem("hp"));
        var a = schoolfight(moname,php,mhp,'童子軍隊員','');
    }else if (php<=0 && mhp>0){
        var content = '<div>'+work+plname+'倒下了，'+moname+'還有'+String(parseInt(mhp))+'生命</div>';
        $('#liferusult').append(content);
    }else if (php<=0 && mhp<=0){
        var content = '<div>'+work+plname+'和'+moname+'同歸於盡了</div>';
        $('#liferusult').append(content);
    }else{
        var content = '<div>'+work+plname+'和'+moname+'打得難分難捨</div>';
        $('#liferusult').append(content);
    }
}

function playerattack(pg2,pg3,pj1,pl1,pl2,pi1,php,mg3,mj1,ml2,mi1,mhp,work1,plname,moname,pgosh,mgosh,mfire,mgosh2,pgosh1,turn,pfire){
    var content = '';
    var pm1 = parseInt(Math.random()*101)*(10+pl1)/10;//命中判定
    var pm2 = parseInt(Math.random()*101)*(100+ml2)*(100+mj1)/10000;//閃避判定
    if(pm1>=50 && pgosh>0 && pgosh1>0){//命中
        if(pm1>=pm2){
            var pm3 = parseInt(Math.random()*101)*(1000+pl2)/1000;//爆擊判定
            var pm4 = parseInt(Math.random()*101)*(1000+mi1)/1000;//爆擊抵抗
            var pm5 = parseInt(Math.random()*101)*(1000+pi1)/1000;//技能判定
            var pm6 = parseInt(Math.random()*101)*(1000+mg3)/1000;//技能抵抗
            if(work1 ==='救生員'){
                var pm7 = parseInt(Math.random()*100+(pi1/10))
                if(pm7>50){
                    content += '<div>'+work1+plname+'用力地吹了吹口哨'+moname+'受到了驚嚇</div>';
                    content += '<div>'+moname+'感到了恐懼</div>';
                    mgosh2 = mgosh2-2;
                }else{
                    content += '<div>'+work1+plname+'用力地吹了吹口哨，沒什麼效果</div>';
                }
            }
            if(work1 ==='彩卷行員工' && pm5>=pm6){
                var pm7 = parseInt(Math.random()*pl2/100+1);
                content += '<div>'+work1+plname+'獲得了'+String(pm7)+'張彩卷</div>';
                $('#3').append(content);
                var content = '';
                for (i = 1; i <= pm7; i++) {
                    var aa =lotto(pl2,php,mhp,plname,moname);
                    php = aa[0];
                    mhp = aa[1];
                }
                $('#3').append(content);
                var content = '';
            }
            if(work1 === '雙刀劍士'){
                var pm7 = parseInt(Math.random()*101*(1000+pj1)/1000);
                if(pm7<70){
                    var harm=parseInt((Math.random()*10+1)*(Math.sqrt(pg2*pj1)-Math.sqrt(pg3*mg3)));
                    if (harm<=0){
                        harm=parseInt(Math.random()*10+1);
                        content += '<div>'+work1+plname+'使出了水平立方斬，但是沒有突破'+moname+'的防禦，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                        mhp = mhp - harm;
                    }else{
                        content += '<div>'+work1+plname+'使出了水平立方斬，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                        mhp = mhp - harm;
                    }
                }else if(pm7<100){
                    var harm=parseInt((Math.random()*10+1)*(Math.sqrt(pg2*pj1)-Math.sqrt(pg3*mg3)));
                    if (harm<=0){
                        harm=parseInt(Math.random()*10+1);
                        content += '<div>'+work1+plname+'使出了星爆氣流斬，但是沒有突破'+moname+'的防禦，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                        mhp = mhp - harm;
                    }else{
                        content += '<div>'+work1+plname+'使出了星爆氣流斬，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                        mhp = mhp - harm;
                    }
                    var pm1 = parseInt(Math.random()*101)*(10+pl1)*(100+pj1)/1000;//命中判定
                    var pm2 = parseInt(Math.random()*101)*(100+ml2)*(100+mj1)/10000;//閃避判定
                    if (pm1>=pm2){
                        var harm=parseInt((Math.random()*10+1)*(Math.sqrt(pg2*pj1)-Math.sqrt(pg3*mg3)));
                        if (harm<=0){
                            harm=parseInt(Math.random()*10+1);
                            content += '<div>星爆氣流斬二連擊！但是沒有突破'+moname+'的防禦，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                            mhp = mhp - harm;
                        }else{
                            content += '<div>星爆氣流斬二連擊！對'+moname+'造成了'+String(harm)+'點傷害</div>';
                            mhp = mhp - harm;
                        }
                    }else{
                        content += '<div>星爆氣流斬二連擊！但是沒有命中</div>';
                    }
                }else{
                    content += '<div>SWITCH!</div>';
                    content += '<div>'+work1+plname+'使出了星爆氣流斬</div>';
                    var i=0;
                    for (i = 1; i < 17; i++) {
                        var pm1 = parseInt(Math.random()*101)*(100+pl1)*(100+pi1)/10000;//命中判定
                        var pm2 = parseInt(Math.random()*101)*(1000+mj1)*(1000+pg3)/1000000;
                        if (pm1>=pm2){
                            var harm=parseInt((Math.random()*10+1)*(Math.sqrt(pg2*pj1)-Math.sqrt(pg3)));
                            if (harm<=0){
                                harm=parseInt(Math.random()*10+1);
                            }
                            content += '<div>星爆氣流斬'+String(i)+'連擊！對'+moname+'造成了'+String(harm)+'點傷害</div>';
                            mhp = mhp - harm;
                        }else{
                            content += '<div>星爆氣流斬'+String(i)+'連擊！但是沒有命中</div>';
                        }
                        
                    }
                }
            }else if(work1 === '虛假的桐谷' && pm5>=pm6){
                var pm7 = parseInt(Math.random()*101+(pi1/10));
                if(pm7<=70){
                    var harm=parseInt((Math.random()*10+(pi1/10)+1)*(Math.sqrt(pg2*pi1)-mg3));
                    if (harm<=0){
                        harm=parseInt(Math.random()*10+1);
                        content += '<div>'+work1+plname+'使出了水平立方斬，但是沒有突破'+moname+'的防禦，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                        mhp = mhp - harm;
                    }else{
                        content += '<div>'+work1+plname+'使出了水平立方斬，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                        mhp = mhp - harm;
                    }
                }else {
                    var harm=parseInt((Math.random()*10+1)*(Math.sqrt(pg2*pi1)-mg3));
                    if (harm<=0){
                        harm=parseInt(Math.random()*10+1);
                        content += '<div>'+work1+plname+'使出了星爆氣流斬，但是沒有突破'+moname+'的防禦，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                        mhp = mhp - harm;
                    }else{
                        content += '<div>'+work1+plname+'使出了星爆氣流斬，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                        mhp = mhp - harm;
                    }
                    var harm=parseInt((Math.random()*10+1)*Math.sqrt(pg2*pi1));
                    content += '<div>星爆氣流斬2連擊！對'+moname+'造成了'+String(harm)+'點傷害</div>';
                    mhp = mhp - harm;
                }                
            }else if(work1 ==='服務生' && pm5>=pm6){
                var harm=parseInt((Math.random()*10+1)*(Math.sqrt(pg2*pi1)));
                if (harm<=0){
                    harm=parseInt(Math.random()*10);
                    content += '<div>'+work1+plname+'使用了瘋狂餐車，但是沒有突破'+moname+'的防禦，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                    mhp = mhp - harm;
                }else{
                    content += '<div>'+work1+plname+'使用了瘋狂餐車，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                    mhp = mhp - harm;
                }
                var pm7 = parseInt(Math.random()*100+pi1/100);
                if(pm7>70){
                    content += '<div>'+moname+'眩暈了</div>';
                    mgosh = mgosh-1;
                }
            }else if(work1 ==='廚師'){
                content += '<div>'+work1+plname+'開始料理'+moname+'</div>';
                var pm7 = parseInt(Math.random()*100*pg2/10);
                if(pm7>50){
                    var pm8 = parseInt(Math.random()*11+(pi1/10));
                    if(pm8>=200){
                        content += '<div>'+moname+'四度灼燒了</div>';
                        mfire = mfire-4;
                    }else if(pm8>=100){
                        content += '<div>'+moname+'三度灼燒了</div>';
                        mfire = mfire-3;
                    }else if(pm8>=50){
                        content += '<div>'+moname+'二度灼燒了</div>';
                        mfire = mfire-2;
                    }else{
                        content += '<div>'+moname+'灼燒了</div>';
                        mfire = mfire-1;
                    }
                }
            }else if(work1 ==='游泳國手' && pm5>=pm6){
                var harm=parseInt((Math.random()*100+(pi1/10)+1)*(Math.sqrt(pg2*pi1)));
                content += '<div>'+work1+plname+'開始有氧呼吸，恢復了'+String(harm)+'</div>';
                php = php + harm;
            }else if(work1 ==='卡車司機' && pm5>=pm6*2){
                var harm=parseInt(Math.random()*100)+1;
                var turn2=parseInt(Math.random()*10)+5;
                if(harm>50 && turn>=turn2){
                    content += '<div>'+work1+plname+'開著卡車撞擊'+moname+'</div>';
                    content += '<div>'+moname+'轉生到異世界去了</div>';
                    mhp = -1;
                }else{
                    content += '<div>'+work1+plname+'開著卡車撞擊'+moname+'的時候爆炸了</div>';
                    content += '<div>'+work1+plname+'和'+moname+'一起轉生到異世界去了</div>';
                    php = -1;
                    mhp = -1;
                }
            }else if(pm3>=pm4){//爆擊
                var harm=parseInt((Math.random()*6+(pi1/10)+5)*(Math.sqrt(pg2*pi1)-mg3));
                if (harm<=0){
                    harm=parseInt(Math.random()*10);
                    content += '<div>'+work1+plname+'打出了致命一擊，但是沒有突破'+moname+'的防禦，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                    mhp = mhp - harm;
                }else{
                    content += '<div>'+work1+plname+'打出了致命一擊，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                    mhp = mhp - harm;
                }
            }else{
                var harm=parseInt((Math.random()*10)*(Math.sqrt(pg2*pi1)-mg3));
                if (harm<=0){
                    harm=parseInt(Math.random()*10);
                    content += '<div>'+work1+plname+'發動攻擊，但是沒有突破'+moname+'的防禦，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                    mhp = mhp - harm;
                }else{
                    content += '<div>'+work1+plname+'發動攻擊，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                    mhp = mhp - harm;
                }
            }
        }else{
            content += '<div>'+work1+plname+'試圖發動攻擊，但是被'+moname+'發現了</div>';
        }
    }else if(pgosh<=0){
        var pm10 = parseInt(Math.random()*101)*(1000+pi1)/1000;
        if(pm10>50){
            content += '<div>'+work1+plname+'被暈眩了，但是感覺好一點了</div>';
            pgosh=pgosh+1;
        }else{
            content += '<div>'+work1+plname+'被暈眩了</div>';
        }
    }else if(pgosh1<=0){
        var pm10 = parseInt(Math.random()*101)*(1000+pi1)/1000;
        if(pm10>50){
            content += '<div>'+work1+plname+'被麻痺了，但是感覺好一點了</div>';
            pgosh1=pgosh1+1;
        }else{
            content += '<div>'+work1+plname+'被麻痺了</div>';
        }
    }else{
        content += '<div>'+work1+plname+'試圖發動攻擊，但是沒有命中</div>';
    }
    if(work1 ==='幸運星'){
        var pm7 = parseInt(Math.random()*101*pl2/100)-parseInt(Math.random()*101*ml2/100)
        if (pm7>=150){
            content += '<div>天上降下了獅子座流星雨</div>';
            var pm8=parseInt(Math.random()*7+pl2/200);
            for (i = 1; i < pm8; i++) {
                var harm=parseInt((Math.random()*5+1)*pl2/10);
                content += '<div>第'+String(i)+'顆流星，砸到了'+moname+'的頭上，造成了'+String(harm)+'點傷害</div>';
                mhp=mhp-harm;
                content += '<div>'+moname+'眩暈了</div>';
                mgosh = mgosh-3;
            }
        }else if(pm7>=99){
            var harm=parseInt((Math.random()*10+5)*pl2/15);
            content += '<div>天上掉下一顆流星，砸到了'+moname+'的頭上，造成了'+String(harm)+'點傷害</div>';
            mhp=mhp-harm;
            content += '<div>'+moname+'眩暈了</div>';
            mgosh = mgosh-2;
        }else if(pm7>=80){
            var harm=parseInt((Math.random()*5+1)*(pl2/20+1));
            content += '<div>'+moname+'跌進了隕石坑，受到了'+String(harm)+'點傷害</div>';
            mhp=mhp-harm;
        }else if(pm7>=50){
            var harm=parseInt((Math.random()*10+1)*(pl2/50+1));
            content += '<div>'+moname+'踩到了地上的香蕉皮滑倒了，受到了'+String(harm)+'點傷害</div>';
            mhp=mhp-harm;
            var pm8 = parseInt(Math.random()*100+pl2/100);
            if(pm8>=70){
                content += '<div>'+moname+'眩暈了</div>';
                mgosh = mgosh-1;
            }
        }else{
            var harm=parseInt((Math.random()*10+1)*(pl2/150+1));
            content += '<div>'+moname+'被樹上的椰子砸到了，受到了'+String(harm)+'點傷害</div>';
            mhp=mhp-harm;
        }
    }
    if(pfire<=0){
        var harm=parseInt((Math.random()*10+(mi1/10)+1)+mi1/1000)*(-1*(pfire-1));
        content += '<div>'+plname+'被灼燒了，受到'+String(harm)+'點傷害</div>';
        php = php - harm;
    }
    if (localStorage.getItem("weapon")=="robot"){
        var harm=Math.pow(5,Number(localStorage.getItem("robot")));
        content += '<div>結衣使用了清潔，'+plname+'回復了'+String(harm)+'點傷害</div>';
        php=php+harm;
    }
    $('#liferusult').append(content);
    return [php,mhp,pgosh,mgosh,mfire,mgosh2]
}


function monstorattack11(mg2,ml1,ml2,mi1,mhp,pg2,pg3,pj1,pl2,pi1,php,work1,plname,moname,pgosh,mgosh,mfire,mgosh2,pgosh1,pfire,pkill){
    var content = '';
    var mp1 = parseInt(Math.random()*101)*(10+ml1)*(100+mi1)/1000;//命中判定
    var mp2 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
    if(mp1>=50 && mgosh>0 && mgosh2>0){//命中
        if(mp1>=mp2){
            var mp3 = parseInt(Math.random()*101)*(1000+ml2)/1000;//爆擊判定
            var mp4 = parseInt(Math.random()*101)*(1000+pi1)/1000;//爆擊抵抗
            var mp5 = parseInt(Math.random()*101)*(1000+mi1)/1000;//技能判定
            var mp6 = parseInt(Math.random()*101)*(1000+pg3)/1000;//技能抵抗
            if(moname==='小混混'){
                var arm = ['抬起拳頭','揮動球棒'];
                var armj = [20,30];
                if(mp5>mp6){
                    var newm = arm[1];
                    var newj = armj[1];
                }
                var newm = arm[0];
                var newj = armj[0];
            }else if(moname==='精準打擊的小混混'){
                var arm = ['揮動球棒','精確打擊'];
                var armj = [30,20];
                if(mp5>mp6){
                    var newm = arm[1];
                    var newj = armj[1];
                }
                var newm = arm[0];
                var newj = armj[0];
            }else if(moname==='混混槍手'){
                var arm = ['開三槍','掏槍射擊'];
                var armj = [0,45];
                if(mp5>mp6){
                    var newm = arm[0];
                    var newj = armj[0];
                }
                var newm = arm[1];
                var newj = armj[1];
            }else if(moname==='訓練有素的小混混'){
                var arm = ['揮舞鐵棒','使用槍托','掏槍射擊'];
                var armj = [20,10,45];
                var which = parseInt(Math.random()*2);
                if(mp5>mp6){
                    var newm = arm[2];
                    var newj = armj[2];
                }
                var newm = arm[which];
                var newj = armj[which];
            }else if(moname==='混元形意門門徒'){
                var arm = ['混元功法','太極拳','閃電鞭'];
                var armj = [0,15,60];
                var which = parseInt(Math.random()*2);
                if(mp5>mp6){
                    var newm = arm[2];
                    var newj = armj[2];
                }
                var newm = arm[which];
                var newj = armj[which];
            }

            if (newm==='揮動球棒'||newm==='精確打擊'||newm==='揮舞鐵棒'){
                var harm=parseInt((Math.random()*10)*(Math.sqrt(mg2*mi1)));
                if (harm<=0){
                    harm=parseInt(Math.random()*10);
                    content += '<div>'+moname+newm+'發動攻擊，但是沒有突破'+work1+plname+'的防禦，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                    php=php-harm;
                }else{
                    content += '<div>'+moname+newm+'發動攻擊，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                    php=php-harm;
                }
                var mp5=parseInt(Math.random()*10-pl2/1000);
                if(mp5>=4){
                    content += '<div>'+work1+plname+'眩暈了</div>';
                    pgosh = pgosh-1;
                }
            }else if (newm==='閃電鞭'){
                var harm=parseInt((Math.random()*10)*(Math.sqrt(mg2*mi1)));
                if (harm<=0){
                    harm=parseInt(Math.random()*10);
                    content += '<div>'+moname+newm+'發動攻擊，但是沒有突破'+work1+plname+'的防禦，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                    php=php-harm;
                }else{
                    content += '<div>'+moname+newm+'發動攻擊，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                    php=php-harm;
                }
                var mp5=parseInt(Math.random()*10-pl2/1000);
                if(mp5>=4){
                    content += '<div>'+work1+plname+'被麻痺了</div>';
                    pgosh1 = pgosh1-1;
                }
            }else if (newm==='混元功法'){
                var harm=parseInt((Math.random()*10+(mi1/10))*(Math.sqrt(mg2*mi1)-pg3));
                content += '<div>'+moname+newm+'回復了'+String(harm)+'點生命</div>';
                mhp=mhp+harm;
            }else if(mp3>=mp4){//爆擊
                var harm=parseInt((Math.random()*6+(mi1/10)+5)*(Math.sqrt(mg2*mi1)-pg3));
                if (harm<=0){
                    harm=parseInt(Math.random()*10);
                    content += '<div>'+moname+newm+'打出了致命一擊，但是沒有突破'+work1+plname+'的防禦，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                    php=php-harm;
                }else{
                    content += '<div>'+moname+newm+'打出了致命一擊，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                    php=php-harm;
                }
            }else{
                var harm=parseInt((Math.random()*10)*(Math.sqrt(mg2*mi1)-pg3));
                if (harm<=0){
                    harm=parseInt(Math.random()*10);
                    content += '<div>'+moname+newm+'發動攻擊，但是沒有突破'+work1+plname+'的防禦，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                    php=php-harm;
                }else{
                    content += '<div>'+moname+newm+'發動攻擊，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                    php=php-harm;
                }
            }
        }else{
            content += '<div>'+moname+'試圖發動攻擊，但是被'+work1+plname+'發現了</div>';
        }
    }else if(mgosh<=0){
        mp10 = parseInt(Math.random()*101)*(1000+pi1)/1000;
        if(mp10>50){
            content += '<div>'+moname+'被暈眩了，但是感覺好一點了</div>';
            mgosh=mgosh+1;
        }else{
            content += '<div>'+moname+'被暈眩了</div>';
        }
    }else if(mgosh2<=0){
        var mp10 = parseInt(Math.random()*101)*(1000+pi1)/1000;
        if(mp10>50){
            content += '<div>'+moname+'感到恐懼不敢行動，但是感覺好一點了</div>';
            mgosh2=mgosh2+1;
        }else{
            content += '<div>'+moname+'感到恐懼不敢行動</div>';
        }
    }else{
        content += '<div>'+moname+'試圖發動攻擊，但是沒有命中</div>';
    }
    if (mfire<=0){
        var harm=parseInt((Math.random()*10+(pi1/10)+1)*(Math.sqrt(pg2*pi1)))*(-1*mfire);
        content += '<div>'+moname+'被灼燒了，受到'+String(harm)+'點傷害</div>';
        mhp = mhp - harm;
    }
    $('#liferusult').append(content);
    return [php,mhp,pgosh,mgosh,mfire,mgosh2,newj,pgosh1,pfire,pkill];
}
