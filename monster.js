//青青草原：羊，山羊，山羌，動保委員

async function grassland(){
    $('#train21').attr('disabled', true);
    $('#train22').attr('disabled', true);
    $('#train23').attr('disabled', true);
    $('#train24').attr('disabled', true);
    await delay(0);
    var l2=Number(localStorage.getItem("l2"));
    var php=Number(localStorage.getItem("hp"));
    var plname=localStorage.getItem("name");
    var work=String(localStorage.getItem("work"));
    var a1 = parseInt(Math.random()*100)*(100+l2)/100+1;
    var a2 = parseInt(Math.random()*100+1);
    if (a1<15){
        grassfight('動保委員',php,700+a2,plname,work);
    }else if(a1<50){
        grassfight('山羌',php,400+a2,plname,work);
    }else if(a1<90){
        grassfight('山羊',php,100+a2,plname,work);
    }else{
        grassfight('綿羊',php,50+a2,plname,work);
    }
    var content = '<div>--------------------------戰鬥結束--------------------------</div>';
    content += '<div>--------------------------戰鬥開始--------------------------</div>';
    $('#3').append(content);
    $('#train21').attr('disabled', false);
    $('#train22').attr('disabled', false);
    $('#train23').attr('disabled', false);
    $('#train24').attr('disabled', false);
}

async function school(){
    $('#train21').attr('disabled', true);
    $('#train22').attr('disabled', true);
    $('#train23').attr('disabled', true);
    $('#train24').attr('disabled', true);
    await delay(0);
    var l2=Number(localStorage.getItem("l2"));
    var php=Number(localStorage.getItem("hp"));
    var plname=localStorage.getItem("name");
    var work=String(localStorage.getItem("work"));
    var a1 = parseInt(Math.random()*100)*(1000+l2)/1000+1;
    var a2 = parseInt(Math.random()*200+1);
    if (a1<15){
        schoolfight('訓導主任',php,1500+a2,plname,work);
    }else if(a1<50){
        schoolfight('初音幫',php,1200+a2,plname,work);
    }else if(a1<90){
        schoolfight('書呆子',php,500+a2,plname,work);
    }else{
        schoolfight('肥宅',php,300+a2,plname,work);
    }
    var content = '<div>--------------------------戰鬥結束--------------------------</div>';
    content += '<div>--------------------------戰鬥開始--------------------------</div>';
    $('#3').append(content);
    $('#train21').attr('disabled', false);
    $('#train22').attr('disabled', false);
    $('#train23').attr('disabled', false);
    $('#train24').attr('disabled', false);
}

function grassfight(moname,php,mhp,plname,work){
    var pg2=Number(localStorage.getItem("g2"));
    if (localStorage.getItem("weapon")=="knife"){
        if(localStorage.getItem("knife")>=11){
            pg2=parseInt(pg2+(Math.pow(Number(localStorage.getItem("knife"))),2));
        }else{
            pg2=parseInt(pg2+(Number(localStorage.getItem("knife"))*5));
        }
    }
    if (localStorage.getItem("armor")=="denture"){
        if(localStorage.getItem("denture")>=11){
            pg2=parseInt((pg2+Math.pow((Number(localStorage.getItem("denture")))+1,2))*100)/100;
        }else{
            pg2=parseInt((pg2+(Number(localStorage.getItem("denture"))*10))*100)/100;
        }
    }
    var pg3=Number(localStorage.getItem("g3"));
    if (localStorage.getItem("armor")=="helmet"){
        if(localStorage.getItem("helmet")>=11){
            pg3=parseInt((pg3+Math.pow((Number(localStorage.getItem("helmet"))),2))*100)/100;
        }else{
            pg3=parseInt((pg3+(Number(localStorage.getItem("helmet"))*7))*100)/100;
        }
    }
    var pj1=Number(localStorage.getItem("j1"));
    var pl1=Number(localStorage.getItem("l1"));
    var pl2=Number(localStorage.getItem("l2"));
    if (localStorage.getItem("weapon")=="gossip"){
        if(localStorage.getItem("gossip")>=11){
            pl2=pl2+Math.pow((Number(localStorage.getItem("gossip"))),3);
        }else{
            pl2=pl2+(Number(localStorage.getItem("gossip"))*10);
        }
    }
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
    if(moname==='動保委員'){
        var mg2=50+parseInt(Math.random()*7)-2;//肌力
        var mg3=20+parseInt(Math.random()*7)-2;//脂肪
        var mj1=10+parseInt(Math.random()*7)-2;//移動
        var ml1=10+parseInt(Math.random()*7)-2;//視力
        var ml2=20+parseInt(Math.random()*7)-2;//幸運
        var mi1=15+parseInt(Math.random()*7)-2;//智力
        var mgosh=1;
        var mfire=1;
        var mgosh2=1;
    }else if(moname==='山羌'){
        var mg2=20+parseInt(Math.random()*9)-3;//肌力
        var mg3=15+parseInt(Math.random()*9)-3;//脂肪
        var mj1=20+parseInt(Math.random()*9)-3;//移動
        var ml1=5+parseInt(Math.random()*9)-3;//視力
        var ml2=20+parseInt(Math.random()*9)-3;//幸運
        var mi1=10+parseInt(Math.random()*9)-3;//智力
        var mgosh=1;
        var mfire=1;
        var mgosh2=1;
    }else if(moname==='山羊'){
        var mg2=10+parseInt(Math.random()*11)-5;//肌力
        var mg3=5+parseInt(Math.random()*9)-4;//脂肪
        var mj1=10+parseInt(Math.random()*11)-5;//移動
        var ml1=5+parseInt(Math.random()*9)-4;//視力
        var ml2=10+parseInt(Math.random()*11)-5;//幸運
        var mi1=10+parseInt(Math.random()*11)-5;//智力
        var mgosh=1;
        var mfire=1;
        var mgosh2=1;
    }else if(moname==='綿羊'){
        var mg2=5+parseInt(Math.random()*3)-1;;//肌力
        var mg3=10+parseInt(Math.random()*3)-1;//脂肪
        var mj1=5+parseInt(Math.random()*3)-1;//移動
        var ml1=5+parseInt(Math.random()*3)-1;//視力
        var ml2=5+parseInt(Math.random()*3)-1;//幸運
        var mi1=10+parseInt(Math.random()*3)-1;//智力
        var mgosh=1;
        var mfire=1;
        var mgosh2=1;
    }
    var turn = 0
    var content = '';
    var fight = 1;
    content += '<div>'+work+plname+'遇到了'+moname+'</div>';
    $('#3').append(content);
    while(php>0 && mhp>0 && turn<100){
        if(pl1>pl2){
            var x =playerattack(pg2,pg3,pj1,pl1,pl2,pi1,php,mg3,mj1,ml2,mi1,mhp,work,plname,moname,pgosh,mgosh,mfire,mgosh2,pgosh1,turn);
            php = x[0];
            mhp = x[1];
            pgosh = x[2];
            mgosh = x[3];
            mfire = x[4];
            mgosh2 = x[5];
            pgosh2 = x[6];
            turn=turn+1;
            if (php>0 && mhp>0){
                if (moname === '山羌'){
                    var fight = parseInt(Math.random()*3+1);
                }
                var y =monstorattack(mg2,ml1,ml2,mi1,mhp,pg2,pg3,pj1,pl2,pi1,php,work,plname,moname,pgosh,mgosh,mfire,mgosh2,pgosh1);
                php = y[0];
                mhp = y[1];
                pgosh = y[2];
                mgosh = y[3];
                mfire = y[4];
                mgosh2 = y[5];
                mj1=y[6];
                pgosh2 = y[7];
                turn=turn+1;
                if(php>0 && mhp>0 && fight>=2){
                    var content = '<div class="report_blue">山羌梅開二度</div>';
                    $('#3').append(content);
                    var y =monstorattack(mg2,ml1,ml2,mi1,mhp,pg2,pg3,pj1,pl2,pi1,php,work,plname,moname,pgosh,mgosh,mfire,mgosh2,pgosh1);
                    php = y[0];
                    mhp = y[1];
                    pgosh = y[2];
                    mgosh = y[3];
                    mfire = y[4];
                    mgosh2 = y[5];
                    mj1=y[6];
                    pgosh2 = y[7];
                    turn=turn+1;
                }
                if(php>0 && mhp>0 && fight>=3){
                    var content = '<div class="report_blue">山羌梅開三度</div>';
                    $('#3').append(content);
                    var y =monstorattack(mg2,ml1,ml2,mi1,mhp,pg2,pg3,pj1,pl2,pi1,php,work,plname,moname,pgosh,mgosh,mfire,mgosh2,pgosh1);
                    php = y[0];
                    mhp = y[1];
                    pgosh = y[2];
                    mgosh = y[3];
                    mfire = y[4];
                    mgosh2 = y[5];
                    mj1=y[6];
                    pgosh2 = y[7];
                    turn=turn+1;
                }
            }
            }else{
            if (moname === '山羌'){
                var fight = parseInt(Math.random()*3+1);
            }
            var y =monstorattack(mg2,ml1,ml2,mi1,mhp,pg2,pg3,pj1,pl2,pi1,php,work,plname,moname,pgosh,mgosh,mfire,mgosh2,pgosh1);
            php = y[0];
            mhp = y[1];
            pgosh = y[2];
            mgosh = y[3];
            mfire = y[4];
            mgosh2 = y[5];
            mj1=y[6];
            pgosh2 = y[7];
            turn=turn+1;
            if(php>0 && mhp>0 && fight>=2){
                var content = '';
                var content = '<div class="report_blue">山羌梅開二度</div>';
                var y =monstorattack(mg2,ml1,ml2,mi1,mhp,pg2,pg3,pj1,pl2,pi1,php,work,plname,moname,pgosh,mgosh,mfire,mgosh2,pgosh1);
                php = y[0];
                mhp = y[1];
                pgosh = y[2];
                mgosh = y[3];
                mfire = y[4];
                mgosh2 = y[5];
                mj1=y[6];
                pgosh2 = y[7];
                turn=turn+1;
            }
            if(php>0 && mhp>0 && fight>=3){
                var content = '';
                var content = '<div class="report_blue">山羌梅開三度</div>';
                var y =monstorattack(mg2,ml1,ml2,mi1,mhp,pg2,pg3,pj1,pl2,pi1,php,work,plname,moname,pgosh,mgosh,mfire,mgosh2,pgosh1);
                php = y[0];
                mhp = y[1];
                pgosh = y[2];
                mgosh = y[3];
                mfire = y[4];
                mgosh2 = y[5];
                mj1=y[6];
                pgosh2 = y[7];
                turn=turn+1;
            }
            if (php>0 && mhp>0){
                var x =playerattack(pg2,pg3,pj1,pl1,pl2,pi1,php,mg3,mj1,ml2,mi1,mhp,work,plname,moname,pgosh,mgosh,mfire,mgosh2,pgosh1,turn);
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
        $('#3').append(content);
        win(moname);
    }else if (php<=0 && mhp>0 && coo>=1 && coom>=70){
        var content = '<div>'+work+plname+'倒下了，'+moname+'還有'+String(parseInt(mhp))+'生命</div>';
        $('#3').append(content);
        var content='';
        var plname=localStorage.getItem("name");
        var work=String(localStorage.getItem("work"));
        if(work==='無業'){
            work='';
        }
        var content = '<div>'+work+plname+'使用了一塊餅乾呼喚了一群童子軍來幫忙</div>';
        $('#3').append(content);
        localStorage.setItem("cookie",String(coo-1));
        var php=Number(localStorage.getItem("hp"));
        var a = grassfight(moname,php,mhp,'童子軍隊員','');
    }else if (php<=0 && mhp>0){
        var content = '<div>'+work+plname+'倒下了，'+moname+'還有'+String(parseInt(mhp))+'生命</div>';
        $('#3').append(content); 
        lose();
    }else if (php<=0 && mhp<=0){
        var content = '<div>'+work+plname+'和'+moname+'同歸於盡了</div>';
        $('#3').append(content);
        lose();
    }else{
        var content = '<div>'+work+plname+'和'+moname+'打得難分難捨</div>';
        $('#3').append(content);
        tie();
    }
}
//青青中學：校園惡霸，訓導主任，初音幫

function schoolfight(moname,php,mhp,plname,work){
    var pg2=Number(localStorage.getItem("g2"));
    if (localStorage.getItem("weapon")=="knife"){
        if(localStorage.getItem("knife")>=11){
            pg2=pg2+Math.pow((Number(localStorage.getItem("knife"))),2);
        }else{
            pg2=pg2+(Number(localStorage.getItem("knife"))*5);
        }
    }
    if (localStorage.getItem("armor")=="denture"){
        if(localStorage.getItem("denture")>=11){
            pg2=parseInt((pg2+Math.pow((Number(localStorage.getItem("denture")))+1,2))*100)/100;
        }else{
            pg2=parseInt((pg2+(Number(localStorage.getItem("denture"))*10))*100)/100;
        }
    }
    var pg3=Number(localStorage.getItem("g3"));
    if (localStorage.getItem("armor")=="helmet"){
        if(localStorage.getItem("helmet")>=11){
            pg3=parseInt((pg3+Math.pow((Number(localStorage.getItem("helmet"))),2))*100)/100;
        }else{
            pg3=parseInt((pg3+(Number(localStorage.getItem("helmet"))*7))*100)/100;
        }
    }
    var pj1=Number(localStorage.getItem("j1"));
    var pl1=Number(localStorage.getItem("l1"));
    var pl2=Number(localStorage.getItem("l2"));
    if (localStorage.getItem("weapon")=="gossip"){
        if(localStorage.getItem("gossip")>=11){
            pl2=pl2+Math.pow((Number(localStorage.getItem("gossip"))),3);
        }else{
            pl2=pl2+(Number(localStorage.getItem("gossip"))*10);
        }
    }
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
    if(moname==='訓導主任'){
        var mg2=130+parseInt(Math.random()*11)-5;//肌力
        var mg3=80+parseInt(Math.random()*11)-5;//脂肪
        var mj1=55+parseInt(Math.random()*11)-5;//移動
        var ml1=60+parseInt(Math.random()*21)-15;//視力
        var ml2=70+parseInt(Math.random()*11)-5;//幸運
        var mi1=30+parseInt(Math.random()*11)-5;//智力
    }else if(moname==='初音幫'){
        var mg2=40+parseInt(Math.random()*15)-7;//肌力
        var mg3=60+parseInt(Math.random()*11)-5;//脂肪
        var mj1=35+parseInt(Math.random()*11)-5;//移動
        var ml1=60+parseInt(Math.random()*11)-5;//視力
        var ml2=35+parseInt(Math.random()*11)-5;//幸運
        var mi1=40+parseInt(Math.random()*11)-5;//智力
    }else if(moname==='書呆子'){
        var mg2=12+parseInt(Math.random()*15)-10;//肌力
        var mg3=12+parseInt(Math.random()*11)-5;//脂肪
        var mj1=25+parseInt(Math.random()*11)-5;//移動
        var ml1=35+parseInt(Math.random()*11)-5;//視力
        var ml2=25+parseInt(Math.random()*11)-5;//幸運
        var mi1=150+parseInt(Math.random()*51)-20;//智力
    }else if(moname==='肥宅'){
        var mg2=20+parseInt(Math.random()*11)-5;//肌力
        var mg3=200+parseInt(Math.random()*21)-10;//脂肪
        var mj1=10+parseInt(Math.random()*11)-5;//移動
        var ml1=20+parseInt(Math.random()*11)-5;//視力
        var ml2=50+parseInt(Math.random()*11)-5;//幸運
        var mi1=25+parseInt(Math.random()*11)-5;//智力
    }
    var turn = 0
    var content = '';
    content += '<div>'+work+plname+'遇到了'+moname+'</div>';
    $('#3').append(content);
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
            if (php>0 && mhp>0){
                var y =monstorattack2(mg2,ml1,ml2,mi1,mhp,pg2,pg3,pj1,pl2,pi1,php,work,plname,moname,pgosh,mgosh,mfire,mgosh2,pgosh1,pfire);
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
            var y =monstorattack2(mg2,ml1,ml2,mi1,mhp,pg2,pg3,pj1,pl2,pi1,php,work,plname,moname,pgosh,mgosh,mfire,mgosh2,pgosh1,pfire,pkill);
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
            if (php>0 && mhp>0){
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
    if(pkill>=10){
        var content = '<div>'+work+plname+'被退學了，'+moname+'還有'+String(parseInt(hp))+'生命</div>';
        $('#3').append(content);
        lose();
    }else if (php>0 && mhp<=0){
        var content = '<div>'+moname+'倒下了，'+work+plname+'還有'+String(parseInt(php))+'生命</div>';
        $('#3').append(content);
        win(moname);
    }else if (php<=0 && mhp>0 && coo>=1 && coom>=70){
        var content = '<div>'+work+plname+'倒下了，'+moname+'還有'+String(parseInt(mhp))+'生命</div>';
        $('#3').append(content);
        var content='';
        var plname=localStorage.getItem("name");
        var work=String(localStorage.getItem("work"));
        if(work==='無業'){
            work='';
        }
        var content = '<div>'+work+plname+'使用了一塊餅乾呼喚了一群童子軍來幫忙</div>';
        $('#3').append(content);
        localStorage.setItem("cookie",String(coo-1));
        var php=Number(localStorage.getItem("hp"));
        var a = schoolfight(moname,php,mhp,'童子軍隊員','');
    }else if (php<=0 && mhp>0){
        var content = '<div>'+work+plname+'倒下了，'+moname+'還有'+String(parseInt(mhp))+'生命</div>';
        $('#3').append(content);
        lose();
    }else if (php<=0 && mhp<=0){
        var content = '<div>'+work+plname+'和'+moname+'同歸於盡了</div>';
        $('#3').append(content);
        lose();
    }else{
        var content = '<div>'+work+plname+'和'+moname+'打得難分難捨</div>';
        $('#3').append(content);
        tie();
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
                    content += '<div class="report_blue">'+work1+plname+'用力地吹了吹口哨'+moname+'受到了驚嚇</div>';
                    content += '<div>'+moname+'感到了恐懼</div>';
                    mgosh2 = mgosh2-2;
                }else{
                    content += '<div class="report_blue">'+work1+plname+'用力地吹了吹口哨，沒什麼效果</div>';
                }
            }
            if(work1 ==='彩卷行員工' && pm5>=pm6){
                var pm7 = parseInt(Math.random()*pl2/100+1);
                content += '<div class="report_blue">'+work1+plname+'獲得了'+String(pm7)+'張彩卷</div>';
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
                        content += '<div class="report_blue">'+work1+plname+'使出了水平立方斬，但是沒有突破'+moname+'的防禦，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                        mhp = mhp - harm;
                    }else{
                        content += '<div class="report_blue">'+work1+plname+'使出了水平立方斬，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                        mhp = mhp - harm;
                    }
                }else if(pm7<100){
                    var harm=parseInt((Math.random()*10+1)*(Math.sqrt(pg2*pj1)-Math.sqrt(pg3*mg3)));
                    if (harm<=0){
                        harm=parseInt(Math.random()*10+1);
                        content += '<div class="report_blue">'+work1+plname+'使出了星爆氣流斬，但是沒有突破'+moname+'的防禦，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                        mhp = mhp - harm;
                    }else{
                        content += '<div class="report_blue">'+work1+plname+'使出了星爆氣流斬，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                        mhp = mhp - harm;
                    }
                    var pm1 = parseInt(Math.random()*101)*(10+pl1)*(100+pj1)/1000;//命中判定
                    var pm2 = parseInt(Math.random()*101)*(100+ml2)*(100+mj1)/10000;//閃避判定
                    if (pm1>=pm2){
                        var harm=parseInt((Math.random()*10+1)*(Math.sqrt(pg2*pj1)-Math.sqrt(pg3*mg3)));
                        if (harm<=0){
                            harm=parseInt(Math.random()*10+1);
                            content += '<div class="report_blue">星爆氣流斬二連擊！但是沒有突破'+moname+'的防禦，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                            mhp = mhp - harm;
                        }else{
                            content += '<div class="report_blue">星爆氣流斬二連擊！對'+moname+'造成了'+String(harm)+'點傷害</div>';
                            mhp = mhp - harm;
                        }
                    }else{
                        content += '<div class="report_blue">星爆氣流斬二連擊！但是沒有命中</div>';
                    }
                }else{
                    content += '<div class="report_blue">SWITCH!</div>';
                    content += '<div class="report_blue">'+work1+plname+'使出了星爆氣流斬</div>';
                    var i=0;
                    for (i = 1; i < 17; i++) {
                        var pm1 = parseInt(Math.random()*101)*(100+pl1)*(100+pi1)/10000;//命中判定
                        var pm2 = parseInt(Math.random()*101)*(1000+mj1)*(1000+pg3)/1000000;
                        if (pm1>=pm2){
                            var harm=parseInt((Math.random()*10+1)*(Math.sqrt(pg2*pj1)-Math.sqrt(pg3)));
                            if (harm<=0){
                                harm=parseInt(Math.random()*10+1);
                            }
                            content += '<div class="report_blue">星爆氣流斬'+String(i)+'連擊！對'+moname+'造成了'+String(harm)+'點傷害</div>';
                            mhp = mhp - harm;
                        }else{
                            content += '<div class="report_blue">星爆氣流斬'+String(i)+'連擊！但是沒有命中</div>';
                        }
                        
                    }
                }
            }else if(work1 === '虛假的桐谷' && pm5>=pm6){
                var pm7 = parseInt(Math.random()*101+(pi1/10));
                if(pm7<=70){
                    var harm=parseInt((Math.random()*10+(pi1/10)+1)*(Math.sqrt(pg2*pi1)-mg3));
                    if (harm<=0){
                        harm=parseInt(Math.random()*10+1);
                        content += '<div class="report_blue">'+work1+plname+'使出了水平立方斬，但是沒有突破'+moname+'的防禦，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                        mhp = mhp - harm;
                    }else{
                        content += '<div class="report_blue">'+work1+plname+'使出了水平立方斬，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                        mhp = mhp - harm;
                    }
                }else {
                    var harm=parseInt((Math.random()*10+1)*(Math.sqrt(pg2*pi1)-mg3));
                    if (harm<=0){
                        harm=parseInt(Math.random()*10+1);
                        content += '<div class="report_blue">'+work1+plname+'使出了星爆氣流斬，但是沒有突破'+moname+'的防禦，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                        mhp = mhp - harm;
                    }else{
                        content += '<div class="report_blue">'+work1+plname+'使出了星爆氣流斬，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                        mhp = mhp - harm;
                    }
                    var harm=parseInt((Math.random()*10+1)*Math.sqrt(pg2*pi1));
                    content += '<div class="report_blue">星爆氣流斬2連擊！對'+moname+'造成了'+String(harm)+'點傷害</div>';
                    mhp = mhp - harm;
                }                
            }else if(work1 ==='服務生' && pm5>=pm6){
                var harm=parseInt((Math.random()*10+1)*(Math.sqrt(pg2*pi1)));
                if (harm<=0){
                    harm=parseInt(Math.random()*10);
                    content += '<div class="report_blue">'+work1+plname+'使用了瘋狂餐車，但是沒有突破'+moname+'的防禦，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                    mhp = mhp - harm;
                }else{
                    content += '<div class="report_blue">'+work1+plname+'使用了瘋狂餐車，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                    mhp = mhp - harm;
                }
                var pm7 = parseInt(Math.random()*100+pi1/100);
                if(pm7>70){
                    content += '<div>'+moname+'眩暈了</div>';
                    mgosh = mgosh-1;
                }
            }else if(work1 ==='廚師'){
                content += '<div class="report_blue">'+work1+plname+'開始料理'+moname+'</div>';
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
                content += '<div class="report_blue">'+work1+plname+'開始有氧呼吸，恢復了'+String(harm)+'點生命</div>';
                php = php + harm;
            }else if(work1 ==='卡車司機' && pm5>=pm6*2){
                var harm=parseInt(Math.random()*100)+1;
                var turn2=parseInt(Math.random()*10)+5;
                if(harm>50 && turn>=turn2){
                    content += '<div class="report_red">'+work1+plname+'開著卡車撞擊'+moname+'</div>';
                    content += '<div class="report_red">'+moname+'轉生到異世界去了</div>';
                    mhp = -1;
                }else{
                    content += '<div class="report_red">'+work1+plname+'開著卡車撞擊'+moname+'的時候爆炸了</div>';
                    content += '<div class="report_red">'+work1+plname+'和'+moname+'一起轉生到異世界去了</div>';
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
            content += '<div>'+work1+plname+'被暈眩了</div>';
        }
    }else{
        content += '<div>'+work1+plname+'試圖發動攻擊，但是沒有命中</div>';
    }
    if(work1 ==='幸運星'){
        var pm7 = parseInt(Math.random()*101*pl2/100)-parseInt(Math.random()*101*ml2/100)
        if (pm7>=150){
            content += '<div class="report_blue">天上降下了獅子座流星雨</div>';
            var pm8=parseInt(Math.random()*4+pl2/200+1);
            for (i = 1; i < pm8; i++) {
                var harm=parseInt((Math.random()*5+1)*pl2/10);
                content += '<div class="report_blue">第'+String(i)+'顆流星，砸到了'+moname+'的頭上，造成了'+String(harm)+'點傷害</div>';
                mhp=mhp-harm;
                content += '<div>'+moname+'眩暈了</div>';
                mgosh = mgosh-3;
            }
        }else if(pm7>=99){
            var harm=parseInt((Math.random()*10+5)*pl2/15);
            content += '<div class="report_red">天上掉下一顆流星，砸到了'+moname+'的頭上，造成了'+String(harm)+'點傷害</div>';
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
        content += '<div>'+work1+plname+'被灼燒了，受到'+String(harm)+'點傷害</div>';
        php = php - harm;
    }
    if (localStorage.getItem("weapon")=="robot"){
        var harm=parseInt(5*Number(localStorage.getItem("robot")));
        content += '<div class="report_green">結衣使用了清潔，'+work1+plname+'回復了'+String(harm)+'點生命</div>';
        php=php+harm;
    }
    $('#3').append(content);
    return [php,mhp,pgosh,mgosh,mfire,mgosh2]
}

function monstorattack2(mg2,ml1,ml2,mi1,mhp,pg2,pg3,pj1,pl2,pi1,php,work1,plname,moname,pgosh,mgosh,mfire,mgosh2,pgosh1,pfire,pkill){
    var content = '';
    var mp1 = parseInt(Math.random()*101)*(10+ml1)*(100+mi1)/1000;//命中判定
    var mp2 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
    if(mp1>=50 && mgosh>0 && mgosh2>0){//命中
        if(mp1>=mp2){
            var mp3 = parseInt(Math.random()*101)*(1000+ml2)/1000;//爆擊判定
            var mp4 = parseInt(Math.random()*101)*(1000+pi1)/1000;//爆擊抵抗
            var mp5 = parseInt(Math.random()*101)*(1000+mi1)/1000;//技能判定
            var mp6 = parseInt(Math.random()*101)*(1000+pg3)/1000;//技能抵抗
            if(moname==='訓導主任'){
                var arm = ['拿出警告單','抬起拳頭','咆嘯'];
                var armj = [30,50,90];
                var which = parseInt(Math.random()*2+1);
                if(mp5>mp6){
                    var newm = arm[0];
                    var newj = armj[0];
                }
                var newm = arm[which];
                var newj = armj[which];
            }else if(moname==='書呆子'){
                var arm = ['讀書','投擲英語辭海','揮拳'];
                var armj = [10,50,35];
                var which = parseInt(Math.random()*2+1);
                if(mp5>mp6){
                    var newm = arm[0];
                    var newj = armj[0];
                }
                var newm = arm[which];
                var newj = armj[which];
            }else if(moname==='肥宅'){
                var arm = ['上課偷吃東西','腳底抹油','揮拳'];
                var armj = [0,60,35];
                var which = parseInt(Math.random()*2+1);
                if(mp5>mp6){
                    var newm = arm[0];
                    var newj = armj[0];
                }
                var newm = arm[which];
                var newj = armj[which];
            }
            if(moname==='初音幫'){
                var arm = ['小王','放人','尊'];
                var armj = [20,60,300];
                var i=0;
                for (i = 1; i < 4; i++) {
                    var which = parseInt(Math.random()*3);
                    var newm = arm[which];
                    var newj = armj[which];
                    if (newm==='小王'){
                        var harm=parseInt((Math.random()*10)*(Math.sqrt(mg2*mi1)-pg3));
                        if (harm<=0){
                            harm=parseInt(Math.random()*10);
                            content += '<div>'+moname+newm+'發動亂源攻擊，但是沒有突破'+work1+plname+'的防禦，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                            php=php-harm;
                        }else{
                            content += '<div>'+moname+newm+'發動亂源攻擊，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                            php=php-harm;
                        }
                        var mp5=parseInt(Math.random()*10-pl2/1000);
                        if(mp5>=4){
                            content += '<div>'+work1+plname+'眩暈了</div>';
                            pgosh = pgosh-1;
                        }
                    }else if(newm==='放人'){
                        content += '<div class="report_blue">'+moname+newm+'開始對著'+work1+plname+'放火</div>';
                        var mp7 = parseInt(Math.random()*101);
                        if(mp7>50){
                            var mp8 = parseInt(Math.random()*11*(mi1/100));
                            if(mp8>=199){
                                content += '<div>'+plname+'四度灼燒了</div>';
                                pfire = pfire-4;
                            }else if(mp8>=180){
                                content += '<div>'+plname+'三度灼燒了</div>';
                                pfire = pfire-3;
                            }else if(mp8>=100){
                                content += '<div>'+plname+'二度灼燒了</div>';
                                pfire = pfire-2;
                            }else{
                                content += '<div>'+plname+'灼燒了</div>';
                                pfire = pfire-1;
                            }
                        }
                    }else if(newm==='尊'){
                        var harm=parseInt((Math.random()*10)*(Math.sqrt(mg2*mi1)-pg3));
                        if (harm<=0){
                            harm=parseInt(Math.random()*10);
                            content += '<div class="report_blue">'+moname+newm+'發動眼鏡發射破壞死光，但是沒有突破'+work1+plname+'的防禦，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                            php=php-harm;
                        }else{
                            content += '<div class="report_blue">'+moname+newm+'發動眼鏡發射破壞死光，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                            php=php-harm;
                        }
                    }
                }
            }else if (newm==='咆嘯'||newm==='腳底抹油'||newm==='投擲英語辭海'){
                var harm=parseInt((Math.random()*10)*(Math.sqrt(mg2*mi1)));
                if (harm<=0){
                    harm=parseInt(Math.random()*10);
                    content += '<div class="report_blue">'+moname+newm+'發動攻擊，但是沒有突破'+work1+plname+'的防禦，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                    php=php-harm;
                }else{
                    content += '<div class="report_blue">'+moname+newm+'發動攻擊，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                    php=php-harm;
                }
                var mp5=parseInt(Math.random()*10-pl2/1000);
                if(mp5>=4){
                    content += '<div>'+work1+plname+'眩暈了</div>';
                    pgosh = pgosh-2;
                }
            }else if(newm==='拿出警告單'){
                content += '<div class="report_red">'+moname+newm+'開始登記'+plname+'警告</div>';
                var mp7 = parseInt(Math.random()*101);
                if(mp7>50){
                    var mp8 = parseInt(Math.random()*21*(mi1/100));
                    if(mp8>=280){
                        pkill = pkill+3;
                        content += '<div class="report_red">'+work1+plname+'已經被記'+String(pkill)+'支警告了</div>';
                    }else if(mp8>=250){
                        pkill = pkill+2;
                        content += '<div class="report_red">'+work1+plname+'已經被記'+String(pkill)+'支警告了</div>';
                    }else{
                        pkill = pkill+1;
                        content += '<div class="report_red">'+work1+plname+'已經被記'+String(pkill)+'支警告了</div>';
                    }
                }else{
                    content += '<div>但是沒有登記到'+work1+plname+'</div>';
                }
                if(pkill>=10){
                    php=-1;
                }
            }else if (newm==='上課偷吃東西'||newm==='讀書'){
                var harm=parseInt((Math.random()*10+(mi1/10))*(Math.sqrt(mg2*mi1)));
                content += '<div class="report_green">'+moname+newm+'回復了'+String(harm)+'點生命</div>';
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
        var harm=parseInt((Math.random()*(-1*mfire+1)+1)*(Math.sqrt(pg2*pi1)))*(-1*mfire+1);
        content += '<div>'+moname+'被灼燒了，受到'+String(harm)+'點傷害</div>';
        mhp = mhp - harm;
    }
    $('#3').append(content);
    return [php,mhp,pgosh,mgosh,mfire,mgosh2,newj,pgosh1,pfire,pkill];
}

function monstorattack(mg2,ml1,ml2,mi1,mhp,pg2,pg3,pj1,pl2,pi1,php,work1,plname,moname,pgosh,mgosh,mfire,mgosh2,pgosh1){
    var content = '';
    var mp1 = parseInt(Math.random()*101)*(10+ml1)*(100+mi1)/1000;//命中判定
    var mp2 = parseInt(Math.random()*101)*(100+pl2)*(100+pj1)/10000;//閃避判定
    if(mp1>=50 && mgosh>0 && mgosh2>0){//命中
        if(mp1>=mp2){
            var mp3 = parseInt(Math.random()*101)*(1000+ml2)/1000;//爆擊判定
            var mp4 = parseInt(Math.random()*101)*(1000+pi1)/1000;//爆擊抵抗
            var mp5 = parseInt(Math.random()*101)*(1000+mi1)/1000;//技能判定
            var mp6 = parseInt(Math.random()*101)*(1000+pg3)/1000;//技能抵抗
            if(moname==='動保委員'){
                var arm = ['掏出電擊棒','掏出警棍','掏出持槍'];
                var armj = [0,10,20];
                var which = parseInt(Math.random()*2);
                if(mp5>mp6){
                    var newm = arm[2];
                    var newj = armj[2];
                }
                var newm = arm[which];
                var newj = armj[which];
            }else if(moname==='山羌'){
                var arm = ['用角撞擊','踢擊','跳躍攻擊'];
                var armj = [0,15,40];
                var which = parseInt(Math.random()*2+1);
                if(mp5>mp6){
                    var newm = arm[0];
                    var newj = armj[0];
                }
                var newm = arm[which];
                var newj = armj[which];
            }else if(moname==='山羊'){
                var arm = ['撞擊','吐口水'];
                var armj = [0,15];
                if(mp5>mp6){
                    var newm = arm[0];
                    var newj = armj[0];
                }
                var newm = arm[1];
                var newj = armj[1];
            }else if(moname==='綿羊'){
                var arm = ['吃草','跑步'];
                var armj = [0,10];
                if(mp5>mp6){
                    var newm = arm[0];
                    var newj = armj[0];
                }
                var newm = arm[1];
                var newj = armj[1];
            }
            if (newm==='掏出警棍'||newm==='用角撞擊'||newm==='撞擊'){
                var harm=parseInt((Math.random()*10)*(Math.sqrt(mg2*mi1)-pg3));
                if (harm<=0){
                    harm=parseInt(Math.random()*10);
                    content += '<div class="report_blue">'+moname+newm+'發動攻擊，但是沒有突破'+work1+plname+'的防禦，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                    php=php-harm;
                }else{
                    content += '<div class="report_blue">'+moname+newm+'發動攻擊，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                    php=php-harm;
                }
                var mp5=parseInt(Math.random()*10-pl2/100);
                if(mp5>=4){
                    content += '<div>'+work1+plname+'眩暈了</div>';
                    pgosh = pgosh-1;
                }
            }else if(newm==='掏出電擊棒'){
                var harm=parseInt((Math.random()*10)*(Math.sqrt(mg2*mi1)-pg3));
                if (harm<=0){
                    harm=parseInt(Math.random()*10);
                    content += '<div class="report_yellow">'+moname+newm+'發動攻擊，但是沒有突破'+work1+plname+'的防禦，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                    php=php-harm;
                }else{
                    content += '<div class="report_yellow">'+moname+newm+'發動攻擊，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                    php=php-harm;
                }
                var mp5=parseInt(Math.random()*10-pl2/100);
                if(mp5>=4){
                    content += '<div>'+work1+plname+'被麻痺了</div>';
                    pgosh1 = pgosh1-1;
                }
            }else if(newm==='掏出持槍'){
                var harm=parseInt((Math.random()*10)*(Math.sqrt(mg2*mi1)-pg3));
                if (harm<=0){
                    harm=parseInt(Math.random()*10);
                    content += '<div>'+moname+newm+'，再次發動攻擊，但是沒有突破'+work1+plname+'的防禦，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                    php=php-harm;
                }else{
                    content += '<div class="report_red">'+moname+newm+'，發動攻擊，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                    php=php-harm;
                }
                var mp5 = Math.random()*10;
                if (mp5>8){ 
                    var harm=parseInt((Math.random()*10)*(Math.sqrt(mg2*mi1)-pg3));
                    if (harm<=0){
                        harm=parseInt(Math.random()*10);
                        content += '<div>'+moname+'再次'+newm+'，再次發動攻擊，但是沒有突破'+work1+plname+'的防禦，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                        php=php-harm;
                    }else {
                        content += '<div class="report_red">'+moname+'再次'+newm+'，再次發動攻擊，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                        php=php-harm;
                    }
                    var mp6 = Math.random()*10;
                    if (mp6>9){ 
                        var harm=parseInt((Math.random()*10)*(Math.sqrt(mg2*mi1)-pg3));
                        if (harm<0){
                            harm=parseInt(Math.random()*10);
                            content += '<div>'+moname+newm+'，連開三槍，但是沒有突破'+work1+plname+'的防禦，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                            php=php-harm;
                        }else{
                            content += '<div class="report_red">'+moname+newm+'，連開三槍，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                            php=php-harm;
                        }
                    }
                }
            }else if (newm==='吃草'){
                var harm=parseInt((Math.random()*10+(mi1/10))*(Math.sqrt(mg2*mi1)));
                content += '<div class="report_green">'+moname+newm+'回復了'+String(harm)+'點生命</div>';
                mhp=mhp+harm;
            }else if(mp3>=mp4){//爆擊
                var harm=parseInt((Math.random()*10+(mi1/10)+1)*(Math.sqrt(mg2*mi1)-pg3));
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
        mp10 = parseInt(Math.random()*101)*(1000+mi1)/1000;
        if(mp10>50){
            content += '<div>'+moname+'被暈眩了，但是感覺好一點了</div>';
            mgosh=mgosh+1;
        }else{
            content += '<div>'+moname+'被暈眩了</div>';
        }
    }else if(mgosh2<=0){
        var mp10 = parseInt(Math.random()*101)*(1000+mi1)/1000;
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
        var harm=parseInt((Math.random()*(-1*mfire+1)+1)*(Math.sqrt(pg2*pi1)))*(-1*mfire+1);
        content += '<div class="report_red">'+moname+'被灼燒了，受到'+String(harm)+'點傷害</div>';
        mhp = mhp - harm;
    }
    $('#3').append(content);
    return [php,mhp,pgosh,mgosh,mfire,mgosh2,newj,pgosh1];
}

function lotto(pl2,php,mhp,plname,moname){
    var work1=String(localStorage.getItem("work"));
    var a = parseInt(Math.random()*100)+1;
    if(a>80){
        var harm=parseInt(Math.random()*10*(pl2/20));
        content = '<div class="report_green">'+work1+plname+'刮了一張彩卷，抽中了藥水，藥水回復了'+work1+plname+String(harm)+'點生命</div>';
        php=php+harm;
        $('#3').append(content);
    }else if(a>60){
        var harm=parseInt(Math.random()*10*(pl2/20));
        content = '<div class="report_green">'+work1+plname+'刮了一張彩卷，抽中了藥水，藥水回復了'+moname+String(harm)+'點生命</div>';
        mhp=mhp+harm;
        $('#3').append(content);
    }else if(a>50){
        var harm = parseInt(Math.random()*pl2/150+1);
        content = '<div class="report_blue">'+work1+plname+'刮了一張彩卷，抽中了'+String(harm)+'張彩券</div>';
        $('#3').append(content);
        for (i = 1; i <= harm; i++) {
            var aa = lotto(pl2,php,mhp,plname,moname);
            php = aa[0];
            mhp = aa[1];
        }
    }else if(a>40){
        var harm=parseInt(Math.random()*10*(pl2/100));
        content = '<div>'+work1+plname+'刮了一張彩卷，抽出了一把生鏽的刀對'+moname+'造成了'+String(harm)+'點傷害</div>';
        mhp=mhp-harm;
        $('#3').append(content);
    }else if(a>20){
        var harm=parseInt(Math.random()*10*(pl2/20));
        content = '<div class="report_red">'+work1+plname+'刮了一張彩卷，抽中了炸彈，炸彈爆炸對'+moname+'造成了'+String(harm)+'點傷害</div>';
        mhp=mhp-harm;
        $('#3').append(content);
    }else{
        var harm=parseInt(Math.random()*10*(pl2/20));
        content = '<div class="report_red">'+work1+plname+'刮了一張彩卷，抽中了炸彈，炸彈爆炸對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
        php=php-harm;
        $('#3').append(content);
    }
    return [php,mhp];
}