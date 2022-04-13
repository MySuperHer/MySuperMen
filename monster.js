//青青草原：羊，山羊，山羌，動保委員

async function grassland(){
    $('#train21').attr('disabled', true);
    $('#train22').attr('disabled', true);
    $('#train23').attr('disabled', true);
    $('#train24').attr('disabled', true);
    await delay(10);
    var l2=Number(localStorage.getItem("l2"));
    var a1 = parseInt(Math.random()*100)*(100+l2)/100+1;
    if (a1<10){
        grassfight('動保委員');
    }else if(a1<30){
        grassfight('山羌');
    }else if(a1<70){
        grassfight('山羊');
    }else{
        grassfight('綿羊');
    }
    $('#train21').attr('disabled', false);
    $('#train22').attr('disabled', false);
    $('#train23').attr('disabled', false);
    $('#train24').attr('disabled', false);
}

function grassfight(moname){
    var pg2=Number(localStorage.getItem("g2"));
    var pg3=Number(localStorage.getItem("g3"));
    var pj1=Number(localStorage.getItem("j1"));
    var pl1=Number(localStorage.getItem("l1"));
    var pl2=Number(localStorage.getItem("l2"));
    var pi1=Number(localStorage.getItem("i1"));
    var php=Number(localStorage.getItem("hp"));
    var work=String(localStorage.getItem("work"));
    if(work=='無業'){
        work=='';
    }
    var pgosh=1;
    var pgosh1=1;
    var plname=localStorage.getItem("name");
    if(moname=='動保委員'){
        var mg2=1000000;//肌力
        var mg3=2000;//脂肪
        var mj1=1000;//移動
        var ml1=50;//視力
        var ml2=1000;//幸運
        var mi1=1000;//智力
        var mhp=100000;//血量
        var mgosh=1;
        var mfire=1;
        var mgosh2=1;
    }else if(moname=='山羌'){
        var mg2=12500;//肌力
        var mg3=3000;//脂肪
        var mj1=1500;//移動
        var ml1=30;//視力
        var ml2=2000;//幸運
        var mi1=700;//智力
        var mhp=10000;//血量
        var mgosh=1;
        var mfire=1;
        var mgosh2=1;
    }else if(moname=='山羊'){
        var mg2=1000;//肌力
        var mg3=100;//脂肪
        var mj1=300;//移動
        var ml1=20;//視力
        var ml2=100;//幸運
        var mi1=100;//智力
        var mhp=1000;//血量
        var mgosh=1;
        var mfire=1;
        var mgosh2=1;
    }else if(moname=='綿羊'){
        var mg2=10;//肌力
        var mg3=200;//脂肪
        var mj1=20;//移動
        var ml1=20;//視力
        var ml2=20;//幸運
        var mi1=150;//智力
        var mhp=500;//血量
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
            var x =playerattack(pg2,pj1,pl1,pl2,pi1,php,mg3,mj1,ml2,mi1,mhp,work,plname,moname,pgosh,mgosh,mfire,mgosh2,pgosh1);
            php = x[0];
            mhp = x[1];
            pgosh = x[2];
            mgosh = x[3];
            mfire = x[4];
            mgosh2 = x[5];
            pgosh2 = x[6];
            turn=turn+1;
            if (mhp>0){
                if (moname == '山羌'){
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
                if(php>0 && fight>=2){
                    var content = '';
                    var content = '<div>山羌梅開二度</div>';
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
                if(php>0 && fight>=3){
                    var content = '';
                    var content = '<div>山羌梅開三度</div>';
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
            if (moname == '山羌'){
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
            if(php>0 && fight>=2){
                var content = '';
                var content = '<div>山羌梅開二度</div>';
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
            if(php>0 && fight>=3){
                var content = '';
                var content = '<div>山羌梅開三度</div>';
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
            if (php>0){
                var x =playerattack(pg2,pj1,pl1,pl2,pi1,php,mg3,mj1,ml2,mi1,mhp,work,plname,moname,pgosh,mgosh,mfire,mgosh2,pgosh1);
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
    if (php>0 && mhp<0){
        var content = '<div>'+moname+'倒下了，'+work+plname+'還有'+String(parseInt(php))+'生命</div>';
        $('#3').append(content);
        win(moname);
    }else if (php<0 && mhp>0){
        var content = '<div>'+work+plname+'倒下了，'+moname+'還有'+String(parseInt(mhp))+'生命</div>';
        $('#3').append(content);
        lose();
    }else if (php<0 && mhp<0){
        var content = '<div>'+work+plname+'和'+moname+'同歸於盡了</div>';
        $('#3').append(content);
    }else{
        var content = '<div>'+work+plname+'和'+moname+'打得難分難捨</div>';
        $('#3').append(content);
    }
}
//青青中學：校園惡霸，訓導主任，初音幫

function playerattack(pg2,pj1,pl1,pl2,pi1,php,mg3,mj1,ml2,mi1,mhp,work1,plname,moname,pgosh,mgosh,mfire,mgosh2,pgosh1){
    var content = '';
    var pm1 = parseInt(Math.random()*101)*(100+pl1)*(100+pi1)/10000;//命中判定
    var pm2 = parseInt(Math.random()*101)*(1000+mj1)/1000;//閃避判定
    if(pm1>=50 && pgosh>0 && pgosh1>0){//命中
        if(pm1>=pm2){
            var pm3 = parseInt(Math.random()*101)*(100-ml2)*(100+pl2)/10000;//爆擊判定
            var pm4 = parseInt(Math.random()*101)*(1000+mi1)/1000;//爆擊抵抗
            var pm5 = parseInt(Math.random()*101)*(1000+pi1)/1000;//技能判定
            var pm6 = parseInt(Math.random()*101)*(1000+mg3)/1000;//技能抵抗
            if(work1 =='救生員'){
                var pm7 = parseInt(Math.random()*100)
                if(pm7>50 && pm5>=pm6){
                    content += '<div>'+work1+plname+'用力地吹了吹口哨'+moname+'受到了驚嚇</div>';
                    content += '<div>'+moname+'感到了恐懼</div>';
                    mgosh2 = mgosh2-2;
                }else{
                    content += '<div>'+work1+plname+'用力地吹了吹口哨，沒什麼效果</div>';
                }
            }
            if(work1 =='彩卷行員工'){
                var pm7 = parseInt(Math.random()*(pl2/70)+1);
                content += '<div>'+work1+plname+'獲得了'+String(pm7)+'張彩券</div>';
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
            if(work1 =='幸運星' && pm5>=pm6){
                var pm7 = parseInt(Math.random()*101)
                if(pm7>=99){
                    var harm=parseInt(Math.random()*10*pl2);
                    content += '<div>天上掉下一個盆栽，砸到了'+moname+'的頭上，造成了'+String(harm)+'點傷害</div>';
                    mhp=mhp-harm;
                    var pm8 = parseInt(Math.random()*100)
                    if(pm8>70){
                        content += '<div>'+moname+'眩暈了</div>';
                        mgosh = mgosh-1;
                    }
                }else if(pm7>=70){
                    var harm=parseInt(Math.random()*10*(pl2/20));
                    content += '<div>'+moname+'被午餐的魚骨頭噎到了，受到了'+String(harm)+'點傷害</div>';
                    php=php-harm;
                }else{
                    var harm=parseInt(Math.random()*10*(pl2/100));
                    content += '<div>'+moname+'踩到了地上的香蕉皮滑倒了，受到了'+String(harm)+'點傷害</div>';
                    php=php-harm;
                    var pm8 = parseInt(Math.random()*100)
                    if(pm8>70){
                        content += '<div>'+moname+'眩暈了</div>';
                        mgosh = mgosh-1;
                    }
                }
            }
            if(plname == '和人'){
                var pm7 = parseInt(Math.random()*101);
                if(pm7>40){
                    var harm=parseInt((Math.random()*10+1)*(Math.sqrt(pg2*pj1)-mg3));
                    if (harm<0){
                        harm=parseInt(Math.random()*10);
                    }
                    content += '<div>真正的桐谷和人使出了水平立方斬，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                    mhp = mhp - harm;
                }else if(pm7>10){
                    var harm=parseInt((Math.random()*10+1)*(Math.sqrt(pg2*pj1)-mg3));
                    if (harm<0){
                        harm=parseInt(Math.random()*10);
                    }
                    content += '<div>真正的桐谷和人使出了星爆氣流斬，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                    mhp = mhp - harm;
                    var harm=parseInt((Math.random()*10+1)*(Math.sqrt(pg2*pj1)-mg3));
                    if (harm<0){
                        harm=parseInt(Math.random()*10);
                    }
                    content += '<div>星爆氣流斬二連擊！對'+moname+'造成了'+String(harm)+'點傷害</div>';
                    mhp = mhp - harm;
                }else{
                    content += '<div>SWITCH!/div>';
                    content += '<div>真正的桐谷和人使出了星爆氣流斬，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                    var i=0;
                    for (i = 1; i < 17; i++) {
                        var harm=parseInt((Math.random()*10+1)*(Math.sqrt(pg2*pj1)-mg3));
                        if (harm<0){
                            harm=parseInt(Math.random()*10);
                        }
                        content += '<div>星爆氣流斬'+String(i)+'連擊！對'+moname+'造成了'+String(harm)+'點傷害</div>';
                        mhp = mhp - harm;
                    }
                }
            }else if(work1 == '雙刀劍士' && pm5>=pm6){
                var pm7 = parseInt(Math.random()*101);
                if(pm7>=30){
                    var harm=parseInt((Math.random()*10+(pi1/10)+1)*(Math.sqrt(pg2*pi1)));
                    content += '<div>'+work1+plname+'使出了水平立方斬，對'+moname+'造成了'+String(harm)+'點傷害</div>'
                    mhp = mhp - harm;
                }else {
                    var harm=parseInt((Math.random()*10+1)*(Math.sqrt(pg2*pj1)-mg3));
                    if (harm<0){
                        harm=parseInt(Math.random()*10);
                    }
                    content += '<div>'+work1+plname+'使出了星爆氣流斬，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                    mhp = mhp - harm;
                    var harm=parseInt((Math.random()*10+1)*(Math.sqrt(pg2*pj1)-mg3));
                    if (harm<0){
                        harm=parseInt(Math.random()*10);
                    }
                    content += '<div>星爆氣流斬2連擊！對'+moname+'造成了'+String(harm)+'點傷害</div>';
                    mhp = mhp - harm;
                }                
            }else if(work1 =='服務生' && pm5>=pm6){
                var harm=parseInt((Math.random()*10+(pi1/10)+1)*(Math.sqrt(pg2*pi1)));
                content += '<div>'+work1+plname+'使用了瘋狂餐車，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                var pm7 = parseInt(Math.random()*100)
                if(pm7>70){
                    content += '<div>'+moname+'眩暈了</div>';
                    mgosh = mgosh-1;
                }
                mhp=mhp-harm;
            }else if(work1 =='廚師' && pm5>=pm6){
                content += '<div>'+work1+plname+'開始料理'+moname+'</div>';
                var pm7 = parseInt(Math.random()*100)
                if(pm7>70){
                    content += '<div>'+moname+'灼燒了</div>';
                    mfire = mfire-1;
                }
            }else if(work1 =='游泳國手' && pm5>=pm6){
                var harm=parseInt((Math.random()*10+(pi1/10)+1)*(Math.sqrt(pg2*pi1)));
                content += '<div>'+work1+plname+'開始有氧呼吸，恢復了'+String(harm)+'</div>';
                php = php + harm;
            }else if(work1 =='卡車司機' && pm5>=pm6*2){
                var harm=parseInt(Math.random()*100)+1;
                if(harm>50){
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
                var harm=parseInt((Math.random()*10+(pi1/10)+1)*(Math.sqrt(pg2*pi1)-mg3));
                if (harm<0){
                    harm=parseInt(Math.random()*10);
                }
                content += '<div>'+work1+plname+'打出了致命一擊，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                mhp = mhp - harm;
            }else{
                var harm=parseInt((Math.random()*10)*(Math.sqrt(pg2*pi1)-mg3));
                if (harm<0){
                    harm=parseInt(Math.random()*10);
                }
                content += '<div>'+work1+plname+'發動攻擊，對'+moname+'造成了'+String(harm)+'點傷害</div>';
                mhp = mhp - harm;
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
    $('#3').append(content);
    return [php,mhp,pgosh,mgosh,mfire,mgosh2]
}

function monstorattack(mg2,ml1,ml2,mi1,mhp,pg2,pg3,pj1,pl2,pi1,php,work1,plname,moname,pgosh,mgosh,mfire,mgosh2,pgosh1){
    var content = '';
    var mp1 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
    var mp2 = parseInt(Math.random()*101)*(1000+pj1)/1000;//閃避判定
    if(mp1>=50 && mgosh>0 && mgosh2>0){//命中
        if(mp1>=mp2){
            var mp3 = parseInt(Math.random()*101)*(100-pl2)*(100+ml2)/10000;//爆擊判定
            var mp4 = parseInt(Math.random()*101)*(1000+pi1)/1000;//爆擊抵抗
            if(moname=='動保委員'){
                var arm = ['掏出電擊棒','掏出警棍','掏出持槍'];
                var armj = [30,50,90];
                var which = parseInt(Math.random()*3);
                var newm = arm[which];
                var newj = armj[which];
            }else if(moname=='山羌'){
                var arm = ['用角撞擊','踢擊','跳躍攻擊'];
                var armj = [20,60,90];
                var which = parseInt(Math.random()*3);
                var newm = arm[which];
                var newj = armj[which];
            }else if(moname=='山羊'){
                var arm = ['撞擊','吐口水'];
                var armj = [10,50];
                var which = parseInt(Math.random()*2);
                var newm = arm[which];
                var newj = armj[which];
            }else if(moname=='綿羊'){
                var arm = ['吃草','跑步'];
                var armj = [0,60];
                var which = parseInt(Math.random()*2);
                var newm = arm[which];
                var newj = armj[which];
            }
            if (newm=='掏出警棍'||newm=='用角撞擊'||newm=='撞擊'){
                var harm=parseInt((Math.random()*10)*(Math.sqrt(mg2*mi1)-pg3));
                if (harm<0){
                    harm=parseInt(Math.random()*10);
                }
                content += '<div>'+moname+newm+'發動攻擊，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                php=php-harm;
                content += '<div>'+work1+plname+'眩暈了</div>';
                pgosh = pgosh-1;
            }else if(newm=='掏出電擊棒'){
                var harm=parseInt((Math.random()*10)*(Math.sqrt(mg2*mi1)-pg3));
                if (harm<0){
                    harm=parseInt(Math.random()*10);
                }
                content += '<div>'+moname+newm+'發動攻擊，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                php=php-harm;
                content += '<div>'+work1+plname+'被麻痺了</div>';
                pgosh1 = pgosh1-1;
            }else if(newm=='掏出持槍'){
                var harm=parseInt((Math.random()*10)*(Math.sqrt(mg2*mi1)-pg3));
                if (harm<0){
                    harm=parseInt(Math.random()*10);
                }
                content += '<div>'+moname+newm+'，發動攻擊，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                php=php-harm;
                var mp5 = Math.random()*10;
                if (mp5>8){ 
                    var harm=parseInt((Math.random()*10)*(Math.sqrt(mg2*mi1)-pg3));
                    if (harm<0){
                        harm=parseInt(Math.random()*10);
                    }
                    content += '<div>'+moname+'再次'+newm+'，再次發動攻擊，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                    var mp6 = Math.random()*10;
                    if (mp6>9){ 
                        var harm=parseInt((Math.random()*10)*(Math.sqrt(mg2*mi1)-pg3));
                        if (harm<0){
                            harm=parseInt(Math.random()*10);
                        }
                        content += '<div>'+moname+newm+'，連開三槍，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                    }
                }
            }else if (newm=='吃草'){
                var harm=parseInt((Math.random()*10)*(Math.sqrt(mg2*mi1)-pg3));
                if (harm<0){
                    harm=parseInt(Math.random()*10);
                }
                content += '<div>'+moname+newm+'回復了'+String(harm)+'點生命</div>';
                mhp=mhp+harm;
            }else if(mp3>=mp4){//爆擊
                var harm=parseInt((Math.random()*10+(mi1/10)+1)*(Math.sqrt(mg2*mi1)-pg3));
                if (harm<0){
                    harm=parseInt(Math.random()*10);
                }
                content += '<div>'+moname+newm+'打出了致命一擊，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                php=php-harm;
            }else{
                var harm=parseInt((Math.random()*10)*(Math.sqrt(mg2*mi1)-pg3));
                if (harm<0){
                    harm=parseInt(Math.random()*10);
                }
                content += '<div>'+moname+newm+'發動攻擊，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                php=php-harm;
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
    $('#3').append(content);
    return [php,mhp,pgosh,mgosh,mfire,mgosh2,newj,pgosh1];
}

function lotto(pl2,php,mhp,plname,moname){
    var work1=String(localStorage.getItem("work"));
    var a = parseInt(Math.random()*100)+1;
    if(a>80){
        var harm=parseInt(Math.random()*10*(pl2/20));
        content = '<div>'+work1+plname+'刮了一張彩卷，抽中了藥水，藥水回復了'+work1+plname+String(harm)+'點生命</div>';
        php=php+harm;
        $('#3').append(content);
    }else if(a>60){
        var harm=parseInt(Math.random()*10*(pl2/20));
        content = '<div>'+work1+plname+'刮了一張彩卷，抽中了藥水，藥水回復了'+moname+String(harm)+'點生命</div>';
        mhp=mhp+harm;
        $('#3').append(content);
    }else if(a>40){
        var harm = parseInt(Math.random()*(pl2/70)+1);
        content = '<div>'+work1+plname+'刮了一張彩卷，抽中了'+String(harm)+'張彩券</div>';
        $('#3').append(content);
        for (i = 1; i <= harm; i++) {
            var aa = lotto(pl2,php,mhp,plname,moname);
            php = aa[0];
            mhp = aa[1];
        }
    }else if(a>20){
        var harm=parseInt(Math.random()*10*(pl2/20));
        content = '<div>'+work1+plname+'刮了一張彩卷，抽中了炸彈，炸彈爆炸對'+moname+'造成了'+String(harm)+'點傷害</div>';
        mhp=mhp-harm;
        $('#3').append(content);
    }else{
        var harm=parseInt(Math.random()*10*(pl2/20));
        content = '<div>'+work1+plname+'刮了一張彩卷，抽中了炸彈，炸彈爆炸對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
        php=php-harm;
        $('#3').append(content);
    }
    return [php,mhp];
}