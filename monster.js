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
        people();
    }else if(a1<30){
        qiang();
    }else if(a1<70){
        goat();
    }else{
        sheep();
    }
    $('#train21').attr('disabled', false);
    $('#train22').attr('disabled', false);
    $('#train23').attr('disabled', false);
    $('#train24').attr('disabled', false);
}

function people(){
    var pg2=Number(localStorage.getItem("g2"));
    var pg3=Number(localStorage.getItem("g3"));
    var pj1=Number(localStorage.getItem("j1"));
    var pl1=Number(localStorage.getItem("l1"));
    var pl2=Number(localStorage.getItem("l2"));
    var pi1=Number(localStorage.getItem("i1"));
    var php=Number(localStorage.getItem("hp"));
    var pa=1;
    var plname=localStorage.getItem("name");
    var mg2=1000;//肌力
    var mg3=50;//脂肪
    var mj1=40;//移動
    var ml1=40;//視力
    var ml2=30;//幸運
    var mi1=60;//智力
    var mhp=10000;//血量
    var content = '';
    content += '<div>'+plname+'遇到了動保委員</div>';
    $('#3').append(content);
    while(php>=0 && mhp>=0){
        if(pl1>=ml1){
            var content = '';
            var pm1 = parseInt(Math.random()*101)*(100+pl1)*(100+pi1)/10000;//命中判定
            var pm2 = parseInt(Math.random()*101)*(100+mj1)/100;//閃避判定
            if(pm1>=50 && pa>0){
                if(pm1>=pm2){
                    pm3 = parseInt(Math.random()*101)*(100-ml2)*(100+pl2)/10000;//爆擊判定
                    if(pm3>mi1){
                        if(pg2*pi1/100-mg3>0){
                            var harm=parseInt((Math.random()*10+(pi1/10)+1)*(pg2*pi1/100-mg3));
                        }else{
                            var harm=parseInt((Math.random()*10+(pi1/10)+1)*pi1/100);
                        }
                        content += '<div>'+plname+'打出了致命一擊，對動保委員造成了'+String(harm)+'點傷害</div>';
                        mhp=mhp-harm;
                    }else{
                        if(pg2*pi1/100-mg3>0){
                            var harm=parseInt((Math.random()*10)*(pg2*pi1/100-mg3));
                        }else{
                            var harm=parseInt((Math.random()*10));
                        }
                        content += '<div>'+plname+'發動攻擊，對動保委員造成了'+String(harm)+'點傷害</div>';
                        mhp=mhp-harm;
                    }
                }else{
                    content += '<div>'+plname+'試圖發動攻擊，但是被動保委員發現了</div>';
                }
            }else if(pa<=0){
                content += '<div>'+plname+'被麻痺了，但是感覺好一點了</div>';
                pa=pa+1;
            }else{
                content += '<div>'+plname+'試圖發動攻擊，但是沒有命中</div>';
            }
            var arms = ['持槍','警衛棍','電擊槍'];
            var newj = [80,50,30];
            var arm = parseInt(Math.random()*3);
            var garm = arms[arm];
            var mj1 = newj[arm];
            var mp1 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
            var mp2 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
            if(mp1>=50){
                if(mp1>=mp2){
                    mp3 = parseInt(Math.random()*101)*(100-pl2)*(100+ml2)/10000;//爆擊判定
                    if(mp3>pi1){;
                        if(mg2*mi1/100-pg3>0){
                            var harm=parseInt((Math.random()*10+(mi1/10)+1)*(mg2*mi1/100-pg3));
                        }else{
                            var harm=parseInt((Math.random()*10+(mi1/10)+1)*mi1/100);
                        }
                        content += '<div>動保委員掏出'+garm+'，打出了致命一擊，對'+plname+'造成了'+String(harm)+'點傷害</div>';
                        php=php-harm;
                        if (garm=='電擊槍'){
                            var mp4 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
                            var mp5 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
                            if(mp4>=mp5){
                                content += '<div>'+plname+'被麻痺了</div>';
                                pa=pa-1;
                            }
                        }
                    }else{
                        if(mg2*mi1/100-pg3>0){
                            var harm=parseInt(Math.random()*10*(mg2*mi1/100-pg3));
                        }else{
                            var harm=parseInt((Math.random()*10));
                        }
                        content += '<div>動保委員掏出'+garm+'，發動攻擊，對'+plname+'造成了'+String(harm)+'點傷害</div>';
                        php=php-harm;
                        if (garm=='電擊槍'){
                            var mp6 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
                            var mp7 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
                            if(mp6>=mp7){
                                content += '<div>'+plname+'被麻痺了</div>';
                                pa=pa-1;
                            }
                        }
                    }
                }else{
                    content += '<div>動保委員試圖發動攻擊，但是被'+plname+'發現了</div>';
                }
            }else{
                content += '<div>動保委員試圖發動攻擊，但是沒有命中</div>';
            }
            $('#3').append(content);
        }else{
            var content = '';
            var arms = ['持槍','警衛棍','電擊槍'];
            var newj = [80,50,30];
            var arm = parseInt(Math.random()*3);
            var garm = arms[arm];
            var mj1 = newj[arm];
            var mp1 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
            var mp2 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
            if(mp1>=50){
                if(mp1>=mp2){
                    mp3 = parseInt(Math.random()*101)*(100-pl2)*(100+ml2)/10000;//爆擊判定
                    if(mp3>pi1){
                        if(mg2*mi1/100-pg3>0){
                            var harm=parseInt((Math.random()*10+(mi1/10)+1)*(mg2*mi1/100-pg3));
                        }else{
                            var harm=parseInt((Math.random()*10+(mi1/10)+1)*mi1/100);
                        }
                        content += '<div>動保委員掏出'+garm+'，打出了致命一擊，對'+plname+'造成了'+String(harm)+'點傷害</div>';
                        php=php-harm;
                        if (garm=='電擊槍'){
                            var mp4 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
                            var mp5 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
                            if(mp4>=mp5){
                                content += '<div>'+plname+'被麻痺了</div>';
                                pa=pa-1;
                            }
                        }
                    }else{
                        if(mg2*mi1/100-pg3>0){
                            var harm=parseInt(Math.random()*10*(mg2*mi1/100-pg3));
                        }else{
                            var harm=parseInt((Math.random()*10));
                        }
                        content += '<div>動保委員掏出'+garm+'，發動攻擊，對'+plname+'造成了'+String(harm)+'點傷害</div>';
                        php=php-harm;
                        if (garm=='電擊槍'){
                            var mp6 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
                            var mp7 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
                            if(mp6>=mp7){
                                content += '<div>'+plname+'被麻痺了</div>';
                                pa=pa-1;
                            }
                        }
                    }
                }else{
                    content += '<div>動保委員試圖發動攻擊，但是被'+plname+'發現了</div>';
                }
            }else{
                content += '<div>動保委員試圖發動攻擊，但是沒有命中</div>';
            }
            var pm1 =parseInt(Math.random()*101)*(100+pl1)*(100+pi1)/10000;//命中判定
            var pm2 = parseInt(Math.random()*101)*(100+mj1)/100;//閃避判定
            if(pm1>=50 && pa>0){
                if(pm1>=pm2){
                    pm3 = parseInt(Math.random()*101)*(100-ml2)*(100+pl2)/10000;//爆擊判定
                    if(pm3>mi1){
                        if(pg2*pi1/100-mg3>0){
                            var harm=parseInt((Math.random()*10+(pi1/10)+1)*(pg2*pi1/100-mg3));
                        }else{
                            var harm=parseInt((Math.random()*10+(pi1/10)+1)*pi1/100);
                        }
                        content += '<div>'+plname+'打出了致命一擊，對動保委員造成了'+String(harm)+'點傷害</div>';
                        mhp=mhp-harm;
                    }else{
                        if(pg2*pi1/100-mg3>0){
                            var harm=parseInt((Math.random()*10)*(pg2*pi1/100-mg3));
                        }else{
                            var harm=parseInt((Math.random()*10));
                        }
                        content += '<div>'+plname+'發動攻擊，對動保委員造成了'+String(harm)+'點傷害</div>';
                        mhp=mhp-harm;
                    }
                }else{
                    content += '<div>'+plname+'試圖發動攻擊，但是被動保委員發現了</div>';
                }
            }else if(pa<=0){
                content += '<div>'+plname+'被麻痺了，但是感覺好一點了</div>';
                pa=pa+1;
            }else{
                content += '<div>'+plname+'試圖發動攻擊，但是沒有命中</div>';
            }
            $('#3').append(content);
        }
    }
    var content = '';
    if(php<0 && mhp>0){
        content += '<div>'+plname+'倒下了，動保委員還有'+String(mhp)+'點生命</div>';
        lose();
    }else if(php>0 && mhp<0){
        content += '<div>動保委員倒下了，'+plname+'還有'+String(php)+'點生命</div>';
        win();
    }else{
        content += '<div>'+plname+'和動保委員同歸於盡了</div>';
    }
    $('#3').append(content);
}

function sheep(){
    var pg2=Number(localStorage.getItem("g2"));
    var pg3=Number(localStorage.getItem("g3"));
    var pj1=Number(localStorage.getItem("j1"));
    var pl1=Number(localStorage.getItem("l1"));
    var pl2=Number(localStorage.getItem("l2"));
    var pi1=Number(localStorage.getItem("i1"));
    var php=Number(localStorage.getItem("hp"));
    var pa=1;
    var plname=localStorage.getItem("name");
    var mg2=10;//肌力
    var mg3=100;//脂肪
    var mj1=50;//移動
    var ml1=30;//視力
    var ml2=40;//幸運
    var mi1=10;//智力
    var mhp=100;//血量
    var content = '';
    content += '<div>'+plname+'遇到了綿羊</div>';
    $('#3').append(content);
    while(php>=0 && mhp>=0){
        if(pl1>=ml1){
            var content = '';
            var pm1 = parseInt(Math.random()*101)*(100+pl1)*(100+pi1)/10000;//命中判定
            var pm2 = parseInt(Math.random()*101)*(100+mj1)/100;//閃避判定
            if(pm1>=50 && pa>0){
                if(pm1>=pm2){
                    pm3 = parseInt(Math.random()*101)*(100-ml2)*(100+pl2)/10000;//爆擊判定
                    if(pm3>mi1){
                        if(pg2*pi1/100-mg3>0){
                            var harm=parseInt((Math.random()*10+(pi1/10)+1)*(pg2*pi1/100-mg3));
                        }else{
                            var harm=parseInt((Math.random()*10+(pi1/10)+1)*pi1/100);
                        }
                        content += '<div>'+plname+'打出了致命一擊，對綿羊造成了'+String(harm)+'點傷害</div>';
                        mhp=mhp-harm;
                    }else{
                        if(pg2*pi1/100-mg3>0){
                            var harm=parseInt((Math.random()*10)*(pg2*pi1/100-mg3));
                        }else{
                            var harm=parseInt((Math.random()*10));
                        }
                        content += '<div>'+plname+'發動攻擊，對綿羊造成了'+String(harm)+'點傷害</div>';
                        mhp=mhp-harm;
                    }
                }else{
                    content += '<div>'+plname+'試圖發動攻擊，但是被綿羊發現了</div>';
                }
            }else{
                content += '<div>'+plname+'試圖發動攻擊，但是沒有命中</div>';
            }
            var arms = ['吃草','跑步'];
            var newj = [0,70];
            var arm = parseInt(Math.random()*2);
            var garm = arms[arm];
            var mj1 = newj[arm];
            var mp1 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
            var mp2 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
            if(mp1>=50){
                if(mp1>=mp2){
                    mp3 = parseInt(Math.random()*101)*(100-pl2)*(100+ml2)/10000;//爆擊判定
                    if(mp3>pi1){
                        if(mg2*mi1/100-pg3>0){
                            var harm=parseInt((Math.random()*10+(mi1/10)+1)*(mg2*mi1/100-pg3));
                        }else{
                            var harm=parseInt((Math.random()*10+(mi1/10)+1)*mi1/100);
                        }
                        if (garm=='跑步'){
                            var mp4 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
                            var mp5 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
                            if(mp4>=mp5){
                                content += '<div>綿羊開始'+garm+'，打出了致命一擊，對'+plname+'造成了'+String(harm)+'點傷害</div>';
                                php=php-harm;
                            }
                        }else{
                            content += '<div>綿羊開始'+garm+'，效果超群，回復了'+String(harm)+'點生命</div>';
                            mhp=mhp+harm;
                        }
                    }else{
                        if(mg2*mi1/100-pg3>0){
                            var harm=parseInt(Math.random()*10*(mg2*mi1/100-pg3));
                        }else{
                            var harm=parseInt((Math.random()*10));
                        }
                        if (garm=='跑步'){
                            var mp6 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
                            var mp7 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
                            if(mp6>=mp7){
                                content += '<div>綿羊開始'+garm+'，對'+plname+'造成了'+String(harm)+'點傷害</div>';
                                php=php-harm;
                            }
                        }else{
                            content += '<div>綿羊開始'+garm+'，回復了'+String(harm)+'點生命</div>';
                            mhp=mhp+harm;
                        }
                    }
                }else{
                    content += '<div>綿羊試圖發動攻擊，但是被'+plname+'發現了</div>';
                }
            }else{
                content += '<div>綿羊試圖發動攻擊，但是沒有命中</div>';
            }
            $('#3').append(content);
        }else{
            var content = '';
            var arms = ['吃草','跑步'];
            var newj = [0,70];
            var arm = parseInt(Math.random()*2);
            var garm = arms[arm];
            var mj1 = newj[arm];
            var mp1 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
            var mp2 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
            if(mp1>=50){
                if(mp1>=mp2){
                    mp3 = parseInt(Math.random()*101)*(100-pl2)*(100+ml2)/10000;//爆擊判定
                    if(mp3>pi1){
                        if(mg2*mi1/100-pg3>0){
                            var harm=parseInt((Math.random()*10+(mi1/10)+1)*(mg2*mi1/100-pg3));
                        }else{
                            var harm=parseInt((Math.random()*10+(mi1/10)+1)*mi1/100);
                        }
                        if (garm=='跑步'){
                            var mp4 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
                            var mp5 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
                            if(mp4>=mp5){
                                content += '<div>綿羊開始'+garm+'，打出了致命一擊，對'+plname+'造成了'+String(harm)+'點傷害</div>';
                                php=php-harm;
                            }
                        }else{
                            content += '<div>綿羊開始'+garm+'，效果超群，回復了'+String(harm)+'點生命</div>';
                            mhp=mhp+harm;
                        }
                    }else{
                        if(mg2*mi1/100-pg3>0){
                            var harm=parseInt(Math.random()*10*(mg2*mi1/100-pg3));
                        }else{
                            var harm=parseInt((Math.random()*10));
                        }
                        if (garm=='跑步'){
                            var mp6 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
                            var mp7 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
                            if(mp6>=mp7){
                                content += '<div>綿羊開始'+garm+'，對'+plname+'造成了'+String(harm)+'點傷害</div>';
                                php=php-harm;
                            }
                        }else{
                            content += '<div>綿羊開始'+garm+'，回復了'+String(harm)+'點生命</div>';
                            mhp=mhp+harm;
                        }
                    }
                }else{
                    content += '<div>綿羊試圖發動攻擊，但是被'+plname+'發現了</div>';
                }
            }else{
                content += '<div>綿羊試圖發動攻擊，但是沒有命中</div>';
            }
            var pm1 = parseInt(Math.random()*101)*(100+pl1)*(100+pi1)/10000;//命中判定
            var pm2 = parseInt(Math.random()*101)*(100+mj1)/100;//閃避判定
            if(pm1>=50 && pa>0){
                if(pm1>=pm2){
                    pm3 = parseInt(Math.random()*101)*(100-ml2)*(100+pl2)/10000;//爆擊判定
                    if(pm3>mi1){
                        if(pg2*pi1/100-mg3>0){
                            var harm=parseInt((Math.random()*10+(pi1/10)+1)*(pg2*pi1/100-mg3));
                        }else{
                            var harm=parseInt((Math.random()*10+(pi1/10)+1)*pi1/100);
                        }
                        content += '<div>'+plname+'打出了致命一擊，對綿羊造成了'+String(harm)+'點傷害</div>';
                        mhp=mhp-harm;
                    }else{
                        if(pg2*pi1/100-mg3>0){
                            var harm=parseInt((Math.random()*10)*(pg2*pi1/100-mg3));
                        }else{
                            var harm=parseInt((Math.random()*10));
                        }
                        content += '<div>'+plname+'發動攻擊，對綿羊造成了'+String(harm)+'點傷害</div>';
                        mhp=mhp-harm;
                    }
                }else{
                    content += '<div>'+plname+'試圖發動攻擊，但是被綿羊發現了</div>';
                }
            }else{
                content += '<div>'+plname+'試圖發動攻擊，但是沒有命中</div>';
            }
            $('#3').append(content);
        }
    }
    var content = '';
    if(php<0 && mhp>0){
        content += '<div>'+plname+'倒下了，綿羊還有'+String(mhp)+'點生命</div>';
        lose();
    }else if(php>0 && mhp<0){
        content += '<div>綿羊倒下了，'+plname+'還有'+String(php)+'點生命</div>';
        win();
    }else{
        content += '<div>'+plname+'和綿羊同歸於盡了</div>';
    }
    $('#3').append(content);
}

function goat(){
    var pg2=Number(localStorage.getItem("g2"));
    var pg3=Number(localStorage.getItem("g3"));
    var pj1=Number(localStorage.getItem("j1"));
    var pl1=Number(localStorage.getItem("l1"));
    var pl2=Number(localStorage.getItem("l2"));
    var pi1=Number(localStorage.getItem("i1"));
    var php=Number(localStorage.getItem("hp"));
    var pa=1;
    var plname=localStorage.getItem("name");
    var mg2=500;//肌力
    var mg3=20;//脂肪
    var mj1=80;//移動
    var ml1=20;//視力
    var ml2=15;//幸運
    var mi1=10;//智力
    var mhp=1000;//血量
    var content = '';
    content += '<div>'+plname+'遇到了山羊</div>';
    $('#3').append(content);
    while(php>=0 && mhp>=0){
        if(pl1>=ml1){
            var content = '';
            var pm1 = parseInt(Math.random()*101)*(100+pl1)*(100+pi1)/10000;//命中判定
            var pm2 = parseInt(Math.random()*101)*(100+mj1)/100;//閃避判定
            if(pm1>=50 && pa>0){
                if(pm1>=pm2){
                    pm3 = parseInt(Math.random()*101)*(100-ml2)*(100+pl2)/10000;//爆擊判定
                    if(pm3>mi1){
                        if(pg2*pi1/100-mg3>0){
                            var harm=parseInt((Math.random()*10+(pi1/10)+1)*(pg2*pi1/100-mg3));
                        }else{
                            var harm=parseInt((Math.random()*10+(pi1/10)+1)*pi1/100);
                        }
                        content += '<div>'+plname+'打出了致命一擊，對山羊造成了'+String(harm)+'點傷害</div>';
                        mhp=mhp-harm;
                    }else{
                        if(pg2*pi1/100-mg3>0){
                            var harm=parseInt((Math.random()*10)*(pg2*pi1/100-mg3));
                        }else{
                            var harm=parseInt((Math.random()*10));
                        }
                        content += '<div>'+plname+'發動攻擊，對山羊造成了'+String(harm)+'點傷害</div>';
                        mhp=mhp-harm;
                    }
                }else{
                    content += '<div>'+plname+'試圖發動攻擊，但是被山羊發現了</div>';
                }
            }else if(pa<=0){
                content += '<div>'+plname+'被暈眩了，但是感覺好一點了</div>';
                pa=pa+1;
            }else{
                content += '<div>'+plname+'試圖發動攻擊，但是沒有命中</div>';
            }
            var arms = ['吐口水','攻擊','衝撞'];
            var newj = [80,50,30];
            var arm = parseInt(Math.random()*3);
            var garm = arms[arm];
            var mj1 = newj[arm];
            var mp1 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
            var mp2 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
            if(mp1>=50){
                if(mp1>=mp2){
                    mp3 = parseInt(Math.random()*101)*(100-pl2)*(100+ml2)/10000;//爆擊判定
                    if(mp3>pi1){;
                        if(mg2*mi1/100-pg3>0){
                            var harm=parseInt((Math.random()*10+(mi1/10)+1)*(mg2*mi1/100-pg3));
                        }else{
                            var harm=parseInt((Math.random()*10+(mi1/10)+1)*mi1/100);
                        }
                        content += '<div>山羊'+garm+'，打出了致命一擊，對'+plname+'造成'+String(harm)+'點傷害</div>';
                        php=php-harm;
                        if (garm=='衝撞'){
                            var mp4 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
                            var mp5 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
                            if(mp4>=mp5){
                                content += '<div>'+plname+'被暈眩了</div>';
                                pa=pa-1;
                            }
                        }
                    }else{
                        if(mg2*mi1/100-pg3>0){
                            var harm=parseInt(Math.random()*10*(mg2*mi1/100-pg3));
                        }else{
                            var harm=parseInt((Math.random()*10));
                        }
                        content += '<div>山羊'+garm+'，發動攻擊，對'+plname+'造成了'+String(harm)+'點傷害</div>';
                        php=php-harm;
                        if (garm=='衝撞'){
                            var mp6 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
                            var mp7 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
                            if(mp6>=mp7){
                                content += '<div>'+plname+'被暈眩了</div>';
                                pa=pa-1;
                            }
                        }
                    }
                }else{
                    content += '<div>山羊試圖發動攻擊，但是被'+plname+'發現了</div>';
                }
            }else{
                content += '<div>山羊試圖發動攻擊，但是沒有命中</div>';
            }
            $('#3').append(content);
        }else{
            var content = '';
            var arms = ['吐口水','攻擊','衝撞'];
            var newj = [120,80,50];
            var arm = parseInt(Math.random()*3);
            var garm = arms[arm];
            var mj1 = newj[arm];
            var mp1 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
            var mp2 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
            if(mp1>=50){
                if(mp1>=mp2){
                    mp3 = parseInt(Math.random()*101)*(100-pl2)*(100+ml2)/10000;//爆擊判定
                    if(mp3>pi1){
                        if(mg2*mi1/100-pg3>0){
                            var harm=parseInt((Math.random()*10+(mi1/10)+1)*(mg2*mi1/100-pg3));
                        }else{
                            var harm=parseInt((Math.random()*10+(mi1/10)+1)*mi1/100);
                        }
                        content += '<div>山羊'+garm+'，打出了致命一擊，對'+plname+'造成'+String(harm)+'點傷害</div>';
                        php=php-harm;
                        if (garm=='衝撞'){
                            var mp4 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
                            var mp5 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
                            if(mp4>=mp5){
                                content += '<div>'+plname+'被暈眩了</div>';
                                pa=pa-1;
                            }
                        }
                    }else{
                        if(mg2*mi1/100-pg3>0){
                            var harm=parseInt(Math.random()*10*(mg2*mi1/100-pg3));
                        }else{
                            var harm=parseInt((Math.random()*10));
                        }
                        content += '<div>山羊'+garm+'，發動攻擊，對'+plname+'造成了'+String(harm)+'點傷害</div>';
                        php=php-harm;
                        if (garm=='衝撞'){
                            var mp6 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
                            var mp7 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
                            if(mp6>=mp7){
                                content += '<div>'+plname+'被暈眩了</div>';
                                pa=pa-1;
                            }
                        }
                    }
                }else{
                    content += '<div>山羊試圖發動攻擊，但是被'+plname+'發現了</div>';
                }
            }else{
                content += '<div>山羊試圖發動攻擊，但是沒有命中</div>';
            }
            var pm1 = parseInt(Math.random()*101)*(100+pl1)*(100+pi1)/10000;//命中判定
            var pm2 = parseInt(Math.random()*101)*(100+mj1)/100;//閃避判定
            if(pm1>=50 && pa>0){
                if(pm1>=pm1){
                    pm3 = parseInt(Math.random()*101)*(100-ml2)*(100+pl2)/10000;//爆擊判定
                    if(pm3>mi1){
                        if(pg2*pi1/100-mg3>0){
                            var harm=parseInt((Math.random()*10+(pi1/10)+1)*(pg2*pi1/100-mg3));
                        }else{
                            var harm=parseInt((Math.random()*10+(pi1/10)+1)*pi1/100);
                        }
                        content += '<div>'+plname+'打出了致命一擊，對山羊造成了'+String(harm)+'點傷害</div>';
                        mhp=mhp-harm;
                    }else{
                        if(pg2*pi1/100-mg3>0){
                            var harm=parseInt((Math.random()*10)*(pg2*pi1/100-mg3));
                        }else{
                            var harm=parseInt((Math.random()*10));
                        }
                        content += '<div>'+plname+'發動攻擊，對山羊造成了'+String(harm)+'點傷害</div>';
                        mhp=mhp-harm;
                    }
                }else{
                    content += '<div>'+plname+'試圖發動攻擊，但是被山羊發現了</div>';
                }
            }else if(pa<=0){
                content += '<div>'+plname+'被暈眩了，但是感覺好一點了</div>';
                pa=pa+1;
            }else{
                content += '<div>'+plname+'試圖發動攻擊，但是沒有命中</div>';
            }
            $('#3').append(content);
        }
    }
    var content = '';
    if(php<0 && mhp>0){
        content += '<div>'+plname+'倒下了，山羊還有'+String(mhp)+'點生命</div>';
        lose();
    }else if(php>0 && mhp<0){
        content += '<div>山羊倒下了，'+plname+'還有'+String(php)+'點生命</div>';
        win();
    }else{
        content += '<div>'+plname+'和山羊同歸於盡了</div>';
    }
    $('#3').append(content);
}

function qiang(){
    var pg2=Number(localStorage.getItem("g2"));
    var pg3=Number(localStorage.getItem("g3"));
    var pj1=Number(localStorage.getItem("j1"));
    var pl1=Number(localStorage.getItem("l1"));
    var pl2=Number(localStorage.getItem("l2"));
    var pi1=Number(localStorage.getItem("i1"));
    var php=Number(localStorage.getItem("hp"));
    var pa=1;
    var plname=localStorage.getItem("name");
    var mg2=3000;//肌力
    var mg3=100;//脂肪
    var mj1=100;//移動
    var ml1=50;//視力
    var ml2=80;//幸運
    var mi1=70;//智力
    var mhp=5000;//血量
    var content = '';
    content += '<div>'+plname+'遇到了山羌</div>';
    $('#3').append(content);
    while(php >=0 && mhp >= 0 ){
        if(pl1>=ml1){
            var content = '';
            var pm1 = parseInt(Math.random()*101)*(100+pl1)*(100+pi1)/10000;//命中判定
            var pm2 = parseInt(Math.random()*101)*(100+mj1)/100;//閃避判定
            if(pm1>=50 && pa>0){
                if(pm1>=pm2){
                    pm3 = parseInt(Math.random()*101)*(100-ml2)*(100+pl2)/10000;//爆擊判定
                    if(pm3>mi1){
                        if(pg2*pi1/100-mg3>0){
                            var harm=parseInt((Math.random()*10+(pi1/10)+1)*(pg2*pi1/100-mg3));
                        }else{
                            var harm=parseInt((Math.random()*10+(pi1/10)+1)*pi1/100);
                        }
                        content += '<div>'+plname+'打出了致命一擊，對山羌造成了'+String(harm)+'點傷害</div>';
                    }else{
                        if(pg2*pi1/100-mg3>0){
                            var harm=parseInt((Math.random()*10)*(pg2*pi1/100-mg3));
                        }else{
                            var harm=parseInt((Math.random()*10));
                        }
                        content += '<div>'+plname+'發動攻擊，對山羌造成了'+String(harm)+'點傷害</div>';
                        mhp=mhp-harm;
                    }
                }else{
                    content += '<div>'+plname+'試圖發動攻擊，但是被山羌發現了</div>';
                }
            }else if(pa<=0){
                content += '<div>'+plname+'被暈眩了，但是感覺好一點了</div>';
                pa=pa+1;
            }else{
                content += '<div>'+plname+'試圖發動攻擊，但是沒有命中</div>';
            }
            var arms = ['吐口水','跳躍攻擊','用角衝撞','踢擊'];
            var newj = [180,100,30,70];
            var arm = parseInt(Math.random()*4);
            var garm = arms[arm];
            var mj1 = newj[arm];
            var mp1 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
            var mp2 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
            if(mp1>=50){
                if(mp1>=mp2){
                    mp3 = parseInt(Math.random()*101)*(100-pl2)*(100+ml2)/10000;//爆擊判定
                    if(mp3>pi1){;
                        if(mg2*mi1/100-pg3>0){
                            var harm=parseInt((Math.random()*10+(mi1/10)+1)*(mg2*mi1/100-pg3));
                        }else{
                            var harm=parseInt((Math.random()*10+(mi1/10)+1)*mi1/100);
                        }
                        content += '<div>山羌'+garm+'，打出了致命一擊，對'+plname+'造成了'+String(harm)+'點傷害</div>';
                        php=php-harm;
                        if (garm=='用角衝撞'){
                            var mp4 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
                            var mp5 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
                            if(mp4>=mp5){
                                content += '<div>'+plname+'被暈眩了</div>';
                                pa=pa-1;
                            }
                        }
                    }else{
                        if(mg2*mi1/100-pg3>0){
                            var harm=parseInt(Math.random()*10*(mg2*mi1/100-pg3));
                        }else{
                            var harm=parseInt((Math.random()*10));
                        }
                        content += '<div>山羌'+garm+'，發動攻擊，對'+plname+'造成了'+String(harm)+'點傷害</div>';
                        php=php-harm;
                        if (garm=='用角衝撞'){
                            var mp6 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
                            var mp7 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
                            if(mp6>=mp7){
                                content += '<div>'+plname+'被暈眩了</div>';
                                pa=pa-1;
                            }
                        }
                    }
                }else{
                    content += '<div>山羌試圖發動攻擊，但是被'+plname+'發現了</div>';
                }
            }else{
                content += '<div>山羌試圖發動攻擊，但是沒有命中</div>';
            }
            content += '<div>山羌梅開二度</div>';
            var arms = ['吐口水','跳躍攻擊','用角衝撞','踢擊'];
            var newj = [180,100,30,70];
            var arm = parseInt(Math.random()*4);
            var garm = arms[arm];
            var mj1 = newj[arm];
            var mp1 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
            var mp2 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
            if(mp1>=50){
                if(mp1>=mp2){
                    mp3 = parseInt(Math.random()*101)*(100-pl2)*(100+ml2)/10000;//爆擊判定
                    if(mp3>pi1){;
                        if(mg2*mi1/100-pg3>0){
                            var harm=parseInt((Math.random()*10+(mi1/10)+1)*(mg2*mi1/100-pg3));
                        }else{
                            var harm=parseInt((Math.random()*10+(mi1/10)+1)*mi1/100);
                        }
                        content += '<div>山羌'+garm+'，打出了致命一擊，對'+plname+'造成了'+String(harm)+'點傷害</div>';
                        php=php-harm;
                        if (garm=='用角衝撞'){
                            var mp4 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
                            var mp5 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
                            if(mp4 >= mp5){
                                content += '<div>'+plname+'被暈眩了</div>';
                                pa = pa-1;
                            }
                        }
                    }else{
                        if(mg2*mi1/100-pg3>0){
                            var harm=parseInt(Math.random()*10*(mg2*mi1/100-pg3));
                        }else{
                            var harm=parseInt((Math.random()*10));
                        }
                        content += '<div>山羌'+garm+'，發動攻擊，對'+plname+'造成了'+String(harm)+'點傷害</div>';
                        php=php-harm;
                        if (garm =='用角衝撞'){
                            var mp6 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
                            var mp7 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
                            if(mp6 >= mp7){
                                content += '<div>'+plname+'被暈眩了</div>';
                                pa=pa-1;
                            }
                        }
                    }
                }else{
                    content += '<div>山羌試圖發動攻擊，但是被'+plname+'發現了</div>';
                }
            }else{
                content += '<div>山羌試圖發動攻擊，但是沒有命中</div>';
            }
            content += '<div>山羌梅開三度</div>';
            var arms = ['吐口水','跳躍攻擊','用角衝撞','踢擊'];
            var newj = [180,100,30,70];
            var arm = parseInt(Math.random()*4);
            var garm = arms[arm];
            var mj1 = newj[arm];
            var mp1 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
            var mp2 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
            if(mp1>=50){
                if(mp1>=mp2){
                    mp3 = parseInt(Math.random()*101)*(100-pl2)*(100+ml2)/10000;//爆擊判定
                    if(mp3>pi1){;
                        if(mg2*mi1/100-pg3>0){
                            var harm=parseInt((Math.random()*10+(mi1/10)+1)*(mg2*mi1/100-pg3));
                        }else{
                            var harm=parseInt((Math.random()*10+(mi1/10)+1)*mi1/100);
                        }
                        content += '<div>山羌'+garm+'，打出了致命一擊，對'+plname+'造成了'+String(harm)+'點傷害</div>';
                        php=php-harm;
                        if (garm=='用角衝撞'){
                            var mp4 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
                            var mp5 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
                            if(mp4>=mp5){
                                content += '<div>'+plname+'被暈眩了</div>';
                                pa=pa-1;
                            }
                        }
                    }else{
                        if(mg2*mi1/100-pg3>0){
                            var harm=parseInt(Math.random()*10*(mg2*mi1/100-pg3));
                        }else{
                            var harm=parseInt((Math.random()*10));
                        }
                        content += '<div>山羌'+garm+'，發動攻擊，對'+plname+'造成了'+String(harm)+'點傷害</div>';
                        php=php-harm;
                        if (garm == '用角衝撞'){
                            var mp6 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
                            var mp7 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
                            if(mp6 >= mp7){
                                content += '<div>'+plname+'被暈眩了</div>';
                                pa=pa-1;
                            }
                        }
                    }
                }else{
                    content += '<div>山羌試圖發動攻擊，但是被'+plname+'發現了</div>';
                }
            }else{
                content += '<div>山羌試圖發動攻擊，但是沒有命中</div>';
            }
            $('#3').append(content);
        }else{
            var content = ''
            var arms = ['吐口水','跳躍攻擊','用角衝撞','踢擊'];
            var newj = [180,100,30,70];
            var arm = parseInt(Math.random()*4);
            var garm = arms[arm];
            var mj1 = newj[arm];
            var mp1 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
            var mp2 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
            if(mp1>=50){
                if(mp1>=mp2){
                    mp3 = parseInt(Math.random()*101)*(100-pl2)*(100+ml2)/10000;//爆擊判定
                    if(mp3>pi1){;
                        if(mg2*mi1/100-pg3>0){
                            var harm=parseInt((Math.random()*10+(mi1/10)+1)*(mg2*mi1/100-pg3));
                        }else{
                            var harm=parseInt((Math.random()*10+(mi1/10)+1)*mi1/100);
                        }
                        content += '<div>山羌'+garm+'，打出了致命一擊，對'+plname+'造成了'+String(harm)+'點傷害</div>';
                        php=php-harm;
                        if (garm =='用角衝撞'){
                            var mp4 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
                            var mp5 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
                            if(mp4 >= mp5){
                                content += '<div>'+plname+'被暈眩了</div>';
                                pa = pa-1;
                            }
                        }
                    }else{
                        if(mg2*mi1/100-pg3>0){
                            var harm=parseInt(Math.random()*10*(mg2*mi1/100-pg3));
                        }else{
                            var harm=parseInt((Math.random()*10));
                        }
                        content += '<div>山羌'+garm+'，發動攻擊，對'+plname+'造成了'+String(harm)+'點傷害</div>';
                        php=php-harm;
                        if (garm =='用角衝撞'){
                            var mp6 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
                            var mp7 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
                            if(mp6 >= mp7){
                                content += '<div>'+plname+'被暈眩了</div>';
                                pa = pa-1;
                            }
                        }
                    }
                }else{
                    content += '<div>山羌試圖發動攻擊，但是被'+plname+'發現了</div>';
                }
            }else{
                content += '<div>山羌試圖發動攻擊，但是沒有命中</div>';
            }
            content += '<div>山羌梅開二度</div>';
            var arms = ['吐口水','跳躍攻擊','用角衝撞','踢擊'];
            var newj = [180,100,30,70];
            var arm = parseInt(Math.random()*4);
            var garm = arms[arm];
            var mj1 = newj[arm];
            var mp1 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
            var mp2 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
            if(mp1>=50){
                if(mp1>=mp2){
                    mp3 = parseInt(Math.random()*101)*(100-pl2)*(100+ml2)/10000;//爆擊判定
                    if(mp3>pi1){;
                        if(mg2*mi1/100-pg3>0){
                            var harm=parseInt((Math.random()*10+(mi1/10)+1)*(mg2*mi1/100-pg3));
                        }else{
                            var harm=parseInt((Math.random()*10+(mi1/10)+1)*mi1/100);
                        }
                        content += '<div>山羌'+garm+'，打出了致命一擊，對'+plname+'造成了'+String(harm)+'點傷害</div>';
                        php=php-harm;
                        if (garm=='用角衝撞'){
                            var mp4 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
                            var mp5 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
                            if(mp4>=mp5){
                                content += '<div>'+plname+'被暈眩了</div>';
                                pa=pa-1;
                            }
                        }
                    }else{
                        if(mg2*mi1/100-pg3>0){
                            var harm=parseInt(Math.random()*10*(mg2*mi1/100-pg3));
                        }else{
                            var harm=parseInt((Math.random()*10));
                        }
                        content += '<div>山羌'+garm+'，發動攻擊，對'+plname+'造成了'+String(harm)+'點傷害</div>';
                        php=php-harm;
                        if (garm=='用角衝撞'){
                            var mp6 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
                            var mp7 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
                            if(mp6>=mp7){
                                content += '<div>'+plname+'被暈眩了</div>';
                                pa=pa-1;
                            }
                        }
                    }
                }else{
                    content += '<div>山羌試圖發動攻擊，但是被'+plname+'發現了</div>';
                }
            }else{
                content += '<div>山羌試圖發動攻擊，但是沒有命中</div>';
            }
            content += '<div>山羌梅開三度</div>';
            var arms = ['吐口水','跳躍攻擊','用角衝撞','踢擊'];
            var newj = [180,100,30,70];
            var arm = parseInt(Math.random()*4);
            var garm = arms[arm];
            var mj1 = newj[arm];
            var mp1 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
            var mp2 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
            if(mp1>=50){
                if(mp1>=mp2){
                    mp3 = parseInt(Math.random()*101)*(100-pl2)*(100+ml2)/10000;//爆擊判定
                    if(mp3>pi1){;
                        if(mg2*mi1/100-pg3>0){
                            var harm=parseInt((Math.random()*10+(mi1/10)+1)*(mg2*mi1/100-pg3));
                        }else{
                            var harm=parseInt((Math.random()*10+(mi1/10)+1)*mi1/100);
                        }
                        content += '<div>山羌'+garm+'，打出了致命一擊，對'+plname+'造成了'+String(harm)+'點傷害</div>';
                        php=php-harm;
                        if (garm=='用角衝撞'){
                            var mp4 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
                            var mp5 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
                            if(mp4>=mp5){
                                content += '<div>'+plname+'被暈眩了</div>';
                                pa=pa-1;
                            }
                        }
                    }else{
                        if(mg2*mi1/100-pg3>0){
                            var harm=parseInt(Math.random()*10*(mg2*mi1/100-pg3));
                        }else{
                            var harm=parseInt((Math.random()*10));
                        }
                        content += '<div>山羌'+garm+'，發動攻擊，對'+plname+'造成了'+String(harm)+'點傷害</div>';
                        php=php-harm;
                        if (garm=='用角衝撞'){
                            var mp6 = parseInt(Math.random()*101)*(100+ml1)*(100+mi1)/10000;//命中判定
                            var mp7 = parseInt(Math.random()*101)*(100+pj1)/100;//閃避判定
                            if(mp6>=mp7){
                                content += '<div>'+plname+'被暈眩了</div>';
                                pa=pa-1;
                            }
                        }
                    }
                }else{
                    content += '<div>山羌試圖發動攻擊，但是被'+plname+'發現了</div>';
                }
            }else{
                content += '<div>山羌試圖發動攻擊，但是沒有命中</div>';
            }
            var pm1 = parseInt(Math.random()*101)*(100+pl1)*(100+pi1)/10000;//命中判定
            var pm2 = parseInt(Math.random()*101)*(100+mj1)/100;//閃避判定
            if(pm1>=50 && pa>0){
                if(pm1>=pm2){
                    pm3 = parseInt(Math.random()*101)*(100-ml2)*(100+pl2)/10000;//爆擊判定
                    if(pm3>mi1){
                        if(pg2*pi1/100-mg3>0){
                            var harm=parseInt((Math.random()*10+(pi1/10)+1)*(pg2*pi1/100-mg3));
                        }else{
                            var harm=parseInt((Math.random()*10+(pi1/10)+1)*pi1/100);
                        }
                        content += '<div>'+plname+'打出了致命一擊，對山羊造成了'+String(harm)+'點傷害</div>';
                        mhp=mhp-harm;
                    }else{
                        if(pg2*pi1/100-mg3>0){
                            var harm=parseInt((Math.random()*10)*(pg2*pi1/100-mg3));
                        }else{
                            var harm=parseInt((Math.random()*10));
                        }
                        content += '<div>'+plname+'發動攻擊，對山羊造成了'+String(harm)+'點傷害</div>';
                        mhp=mhp-harm;
                    }
                }else{
                    content += '<div>'+plname+'試圖發動攻擊，但是被山羊發現了</div>';
                }
            }else if(pa<=0){
                content += '<div>'+plname+'被暈眩了，但是感覺好一點了</div>';
                pa=pa+1;
            }else{
                content += '<div>'+plname+'試圖發動攻擊，但是沒有命中</div>';
            }
        }
    }
    $('#3').append(content);
    var content = '';
    if(php<0 && mhp>0){
        content += '<div>'+plname+'倒下了，山羌還有'+String(mhp)+'點生命</div>';
        lose();
    }else if(php>0 && mhp<0){
        content += '<div>山羌倒下了，'+plname+'還有'+String(php)+'點生命</div>';
        win();
    }else{
        content += '<div>'+plname+'和山羌同歸於盡了</div>';
    }
    $('#3').append(content);
}



//青青中學：校園惡霸，訓導主任，初音幫
