async function life(){
    var a =Number(localStorage.getItem("chapter"));
    var b =Number(localStorage.getItem("part"));
    localStorage.setItem("did","0");
    var n =Number(localStorage.getItem("did"));
    sessionStorage.setItem("php",String(parseInt(Number(localStorage.getItem("hp")))));
    $('#life1').attr('disabled', true);
    await delay(0);
    $("#liferusult").append("<div>你開始了新的一天。</div>");
    choose11.style.display='block';
    choose12.style.display='block';
    choose21.style.display='block';
    choose22.style.display='block';
    gonext(a,b,n);
    $('#life1').attr('disabled', false);
    $('#choose11').attr('disabled', false);
    $('#choose21').attr('disabled', false);
    $('#choose31').attr('disabled', false);
}

async function taichi(b,n){
    let content = '';
    if (b==1 && n==0){    
        content += '<div class="report_blue">你的父親拋棄了你。</div>';
        content += '<div class="report_blue">在他失蹤以後。</div>';
        content += '<div class="report_blue">討債的小混混天天找上門來。</div>';
    }else if(b==5 && n==0){
        content += '<div class="report_blue">你在小混混中發現了一些混元形意門的門徒。</div>';
        content += '<div class="report_blue">也許你的父親與其門派掌門人有何淵源。</div>';
        content += '<div class="report_blue">於是你決定前去問個清楚。</div>';
    }else if(b==10 && n==0){
        content += '<div class="report_blue">你來到了混元形意門的門口。</div>';
        content += '<div class="report_blue">被門徒揍得鼻青臉腫的你非常憤怒。</div>';
        content += '<div class="report_blue">於是你決定前去問個清楚。</div>';
    }else if(b==11 && n==0){
        content += '<div class="report_blue">在擊敗了落荒而逃的馬保國後。</div>';
        content += '<div class="report_blue">你依然非常憤怒。</div>';
        content += '<div class="report_blue">於是你開始屠殺混元形意門。</div>';
    }else{

    }
    if (b>=15){
        $("#liferusult").append(content);
        $('#choose12').attr('disabled', true);
        choose31.style.display='block';
        choose32.style.display='block';
    }
    if(b==11 && n==5){
        var n =Number(localStorage.getItem("did"))+1;
        var x = parseInt(Math.random()*5)
        sessionStorage.setItem("moname","混元形意門掌門馬保國");
        sessionStorage.setItem("mg2",100);
        sessionStorage.setItem("mg3",100);
        sessionStorage.setItem("mj1",90);
        sessionStorage.setItem("ml1",50);
        sessionStorage.setItem("ml2",150);
        sessionStorage.setItem("mi1",75);
        sessionStorage.setItem("mhp",3000);
        content += '<hr class="divider" />';
        content += '<div>你遇到了'+sessionStorage.getItem("moname")+'。</div>';
        content += '<div>對手資訊</div>';
        content += '<div>血量：' + sessionStorage.getItem("mhp") + '</div>';
        content += '<div>力量：' + sessionStorage.getItem("mg2") + '</div>';
        content += '<div>防禦：' + sessionStorage.getItem("mg3") + '</div>';
        content += '<div>移動：' + sessionStorage.getItem("mj1") + '</div>';
        content += '<div>命中：' + sessionStorage.getItem("ml1") + '</div>';
        content += '<div>幸運：' + sessionStorage.getItem("ml2") + '</div>';
        content += '<div>智力：' + sessionStorage.getItem("mi1") + '</div>';
        content += '<div>一一一一</div>';
        $("#liferusult").append(content);
        let content3 = '';
        content3 += '<div>目前遊戲進度：' + localStorage.getItem("chapter") +'-'+ localStorage.getItem("part") +'-'+localStorage.getItem("did")+ '</div>';
        content3 += '<div>你目前的血量：' + sessionStorage.getItem("php") + '</div>';
        $("#lifesay").append(content3);
    }else{
        var n =Number(localStorage.getItem("did"))+1;
        var x = parseInt(Math.random()*5);
        if(b>=10){
            x=4;
        }
        var list =['小混混','精準打擊的小混混','訓練有素的小混混','混混槍手','混元形意門門徒']
        sessionStorage.setItem("moname",list[x]);
        sessionStorage.setItem("mg2",String(b*10+n+x*3));
        sessionStorage.setItem("mg3",String(b*7+n+x*5));
        sessionStorage.setItem("mj1",String(b*5+n+x*3));
        sessionStorage.setItem("ml1",String(b*5+n*3+x*3));
        sessionStorage.setItem("ml2",String(b*10+n+x*5));
        sessionStorage.setItem("mi1",String(b*4+n+x*7));
        sessionStorage.setItem("mhp",String(b*200+n+x*10));
        content += '<hr class="divider" />';
        content += '<div>你遇到了'+sessionStorage.getItem("moname")+'。</div>';
        content += '<div>對手資訊</div>';
        content += '<div>血量：' + sessionStorage.getItem("mhp") + '</div>';
        content += '<div>力量：' + sessionStorage.getItem("mg2") + '</div>';
        content += '<div>防禦：' + sessionStorage.getItem("mg3") + '</div>';
        content += '<div>移動：' + sessionStorage.getItem("mj1") + '</div>';
        content += '<div>命中：' + sessionStorage.getItem("ml1") + '</div>';
        content += '<div>幸運：' + sessionStorage.getItem("ml2") + '</div>';
        content += '<div>智力：' + sessionStorage.getItem("mi1") + '</div>';
        content += '<hr class="divider" />';
        $("#liferusult").append(content);
        let content3 = '';
        content3 += '<div>目前遊戲進度：' + localStorage.getItem("chapter") +'-'+ localStorage.getItem("part") +'-'+localStorage.getItem("did")+ '</div>';
        content3 += '<div>你目前的血量：' + sessionStorage.getItem("php") + '</div>';
        $("#lifesay").append(content3);
    }
    
    
}

async function police(b,n){
    let content = '';
    if (b==1 && n==0){    
        content += '<div class="report_blue">在你打敗了馬保國以後。</div>';
        content += '<div class="report_blue">你的日子並沒有變的比較平淡。</div>';
        content += '<div class="report_blue">討債的小混混還是天天找上門來。</div>';
    }else if(b==5 && n==0){
        content += '<div class="report_blue">也許你並沒有注意到。</div>';
        content += '<div class="report_blue">但也可能你已經注意到了。</div>';
        content += '<div class="report_blue">那些警察開始頻繁地出現在你的居所。</div>';
    }else if(b==10 && n==0){
        content += '<div class="report_blue">你的大門被全天候的監察著。</div>';
        content += '<div class="report_blue">從你門口停著的警車來看應該很難不被發現。</div>';
        content += '<div class="report_blue">於是你決定前去問個清楚。</div>';
    }else if(b==11 && n==0){
        content += '<div class="report_blue">在你擊敗了那位巡查長之後。</div>';
        content += '<div class="report_blue">成群的警察前仆後繼而來。</div>';
        content += '<div class="report_blue">似乎只能殺出一條血海。</div>';
    }else{

    }
    if (b>=15){
        $("#liferusult").append(content);
        $('#choose12').attr('disabled', true);
        choose31.style.display='block';
        choose32.style.display='block';
    }
    if(b==11 && n==5){
        var n =Number(localStorage.getItem("did"))+1;
        var x = parseInt(Math.random()*5)
        sessionStorage.setItem("moname","兩津勘吉巡查長");
        sessionStorage.setItem("mg2",300);
        sessionStorage.setItem("mg3",280);
        sessionStorage.setItem("mj1",90);
        sessionStorage.setItem("ml1",80);
        sessionStorage.setItem("ml2",150);
        sessionStorage.setItem("mi1",90);
        sessionStorage.setItem("mhp",8000);
        content += '<hr class="divider" />';
        content += '<div>你遇到了'+sessionStorage.getItem("moname")+'。</div>';
        content += '<div>對手資訊</div>';
        content += '<div>血量：' + sessionStorage.getItem("mhp") + '</div>';
        content += '<div>力量：' + sessionStorage.getItem("mg2") + '</div>';
        content += '<div>防禦：' + sessionStorage.getItem("mg3") + '</div>';
        content += '<div>移動：' + sessionStorage.getItem("mj1") + '</div>';
        content += '<div>命中：' + sessionStorage.getItem("ml1") + '</div>';
        content += '<div>幸運：' + sessionStorage.getItem("ml2") + '</div>';
        content += '<div>智力：' + sessionStorage.getItem("mi1") + '</div>';
        content += '<div>一一一一</div>';
        $("#liferusult").append(content);
        let content3 = '';
        content3 += '<div>目前遊戲進度：' + localStorage.getItem("chapter") +'-'+ localStorage.getItem("part") +'-'+localStorage.getItem("did")+ '</div>';
        content3 += '<div>你目前的血量：' + sessionStorage.getItem("php") + '</div>';
        $("#lifesay").append(content3);
    }else{
        var n =Number(localStorage.getItem("did"))+1;
        var a =Number(localStorage.getItem("chapter"))+1;
        var x = parseInt(Math.random()*5);
        if(b>=10){
            x=4;
        }
        var list =['小混混','精準打擊的小混混','訓練有素的小混混','混混槍手','警察']
        sessionStorage.setItem("moname",list[x]);
        sessionStorage.setItem("mg2",String(100+b*10+n+x*3));
        sessionStorage.setItem("mg3",String(100+b*7+n+x*5));
        sessionStorage.setItem("mj1",String(50+b*5+n+x*3));
        sessionStorage.setItem("ml1",String(50+b*5+n*3+x*3));
        sessionStorage.setItem("ml2",String(100+b*10+n+x*5));
        sessionStorage.setItem("mi1",String(70+b*4+n+x*7));
        sessionStorage.setItem("mhp",String(200+b*200+n+x*10));
        content += '<hr class="divider" />';
        content += '<div>你遇到了'+sessionStorage.getItem("moname")+'。</div>';
        content += '<div>對手資訊</div>';
        content += '<div>血量：' + sessionStorage.getItem("mhp") + '</div>';
        content += '<div>力量：' + sessionStorage.getItem("mg2") + '</div>';
        content += '<div>防禦：' + sessionStorage.getItem("mg3") + '</div>';
        content += '<div>移動：' + sessionStorage.getItem("mj1") + '</div>';
        content += '<div>命中：' + sessionStorage.getItem("ml1") + '</div>';
        content += '<div>幸運：' + sessionStorage.getItem("ml2") + '</div>';
        content += '<div>智力：' + sessionStorage.getItem("mi1") + '</div>';
        content += '<hr class="divider" />';
        $("#liferusult").append(content);
        let content3 = '';
        content3 += '<div>目前遊戲進度：' + localStorage.getItem("chapter") +'-'+ localStorage.getItem("part") +'-'+localStorage.getItem("did")+ '</div>';
        content3 += '<div>你目前的血量：' + sessionStorage.getItem("php") + '</div>';
        $("#lifesay").append(content3);
    }
    
    
}

function choose1(){
    moname=sessionStorage.getItem("moname");
    php=Number(sessionStorage.getItem("php"));
    plname=localStorage.getItem("name");
    work=localStorage.getItem("work");
    taichifight(moname,php,plname,work);
}

function choose2(){
    let content2 = '';
    content2 += '<div class="report_blue">你逃回到了家，</div>';
    localStorage.setItem("chapter","1");
    localStorage.setItem("part","1");
    localStorage.setItem("did","0");
    $("#liferusult").append(content2);
    taichi(1,0);
}

function choose3(){
    let content2 = '';
    content2 += '<div class="report_blue">你結束了這愉快的一天。</div>';
    content2 += '<div class="report_blue">盡管可能不是這麼的愉悅。</div>';
    localStorage.setItem("chapter",String(2));
    localStorage.setItem("part","1");
    localStorage.setItem("did","0");
    if(String(Number(localStorage.getItem("chapter"))=='3')){
        localStorage.setItem("chapter",String(Number(localStorage.getItem("chapter"))-1));
        content2 += '<div class="report_blue">後續內容，敬請期待。</div>';
    }
    $("#liferusult").append(content2);
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
    if(moname=='混元形意門掌門馬保國'){
        content += '<div class="report_blue">你二話不說就往馬保國頭上尻。</div>';
        content += '<div class="report_blue">我也不知道是誰給你的勇氣。</div>';
        content += '<div class="report_blue">梁靜茹嗎？</div>';
        content += '<div class="report_red">'+moname+'：年輕人不講武德，偷襲！</div>';
        sessionStorage.setItem("run","0");
    }else if(moname=='兩津勘吉巡查長'){
        content += '<div class="report_red">'+moname+'：趕快處理完吧，我還要回去吃我的蝦仁飯。</div>';
        sessionStorage.setItem("run","0");
    }else{
        sessionStorage.removeItem("run");
    }
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
            pgosh1 = x[6];
            turn=turn+1;
            if (php>0 && mhp>0){
                var y =monstorattack11(mg2,ml1,ml2,mi1,mhp,pg2,pg3,pj1,pl2,pi1,php,work,plname,moname,pgosh,mgosh,mfire,mgosh2,pgosh1,pfire);
                php = y[0];
                mhp = y[1];
                pgosh = y[2];
                mgosh = y[3];
                mfire = y[4];
                mgosh2 = y[5];
                mj1=y[6];
                pgosh1 = y[7];
                pfire = y[8];
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
            pgosh1 = y[7];
            pfire = y[8];
            turn=turn+1;
            if (php>0 && mhp>0){
                var x =playerattack(pg2,pg3,pj1,pl1,pl2,pi1,php,mg3,mj1,ml2,mi1,mhp,work,plname,moname,pgosh,mgosh,mfire,mgosh2,pgosh1,turn,pfire);
                php = x[0];
                mhp = x[1];
                pgosh = x[2];
                mgosh = x[3];
                mfire = x[4];
                mgosh2 = x[5];
                pgosh1 = x[6];
                turn=turn+1;
            }
        }
    }
    var content='';
    if (php>0 && mhp<=0){
        var content = '<div>'+moname+'倒下了，'+work+plname+'還有'+String(parseInt(php))+'生命</div>';
        $('#liferusult').append(content);
        win2(moname);
        sessionStorage.setItem("php",String(parseInt(php)));
        var n =Number(localStorage.getItem("did"))+1;
        var b =Number(localStorage.getItem("part"));
        if(n>5){
            n=0;
            localStorage.setItem("part",b+1);
        }
        localStorage.setItem("did",String(n));
        var a= localStorage.getItem("chapter");
        gonext(a,b+1,n);
    }else if (php<=0 && mhp>0){
        var content = '<div>'+work+plname+'倒下了，'+moname+'還有'+String(parseInt(mhp))+'生命</div>';
        $('#liferusult').append(content);
        $('#choose11').attr('disabled', true);
        $('#choose21').attr('disabled', true);
        $('#choose31').attr('disabled', true);
    }else if (php<=0 && mhp<=0){
        var content = '<div>'+work+plname+'和'+moname+'同歸於盡了</div>';
        $('#liferusult').append(content);
        $('#choose11').attr('disabled', true);
        $('#choose21').attr('disabled', true);
        $('#choose31').attr('disabled', true);
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
                $('#liferusult').append(content);
                var content = '';
                for (i = 1; i <= pm7; i++) {
                    var aa =lotto2(pl2,php,mhp,plname,moname);
                    php = aa[0];
                    mhp = aa[1];
                }
                $('#liferusult').append(content);
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
                content += '<div class="report_green">'+work1+plname+'開始有氧呼吸，恢復了'+String(harm)+'</div>';
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
            content += '<div>'+work1+plname+'被麻痺了</div>';
        }
    }else{
        content += '<div>'+work1+plname+'試圖發動攻擊，但是沒有命中</div>';
    }
    if(work1 ==='幸運星'){
        var pm7 = parseInt(Math.random()*101*pl2/100)-parseInt(Math.random()*101*ml2/100)
        if (pm7>=150){
            content += '<div class="report_blue">天上降下了獅子座流星雨</div>';
            var pm8=parseInt(Math.random()*7+pl2/200);
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
    $('#liferusult').append(content);
    return [php,mhp,pgosh,mgosh,mfire,mgosh2,pgosh1]
}

function gonext(a,b,n){
    if(a==1){
        taichi(b,n);
    }else if(a==2){
        police(b,n);
    }
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
                }else{
                    var newm = arm[0];
                    var newj = armj[0];
                }
            }else if(moname==='精準打擊的小混混'){
                var arm = ['揮動球棒','精確打擊'];
                var armj = [30,20];
                if(mp5>mp6){
                    var newm = arm[1];
                    var newj = armj[1];
                }else{
                    var newm = arm[0];
                    var newj = armj[0];
                }
            }else if(moname==='混混槍手' || moname==='警察'){
                var arm = ['開三槍','掏槍射擊'];
                var armj = [0,45];
                if(mp5>mp6){
                    var newm = arm[0];
                    var newj = armj[0];
                }else{
                    var newm = arm[1];
                    var newj = armj[1];
                }
            }else if(moname==='訓練有素的小混混'){
                var arm = ['揮舞鐵棒','使用槍托','掏槍射擊'];
                var armj = [20,10,45];
                var which = parseInt(Math.random()*2);
                if(mp5>mp6){
                    var newm = arm[2];
                    var newj = armj[2];
                }else{
                    var newm = arm[which];
                    var newj = armj[which];
                }
            }else if(moname==='混元形意門門徒'){
                var arm = ['混元功法','太極拳','閃電鞭'];
                var armj = [0,15,60];
                var which = parseInt(Math.random()*2);
                if(mp5>mp6){
                    var newm = arm[2];
                    var newj = armj[2];
                }else{
                    var newm = arm[which];
                    var newj = armj[which];
                }
            }else if(moname==='混元形意門掌門馬保國'){
                var arm = ['混元功法','往你的鼻梁狠狠的','閃電鞭','閃電鞭五連鞭'];
                var armj = [0,50,100,100];
                var which = parseInt(Math.random()*3);
                var newm = arm[which];
                var newj = armj[which]; 
            }else if(moname==='兩津勘吉巡查長'){
                var arm = ['品嘗燒肉便當','投擲木屐','原始人打擊','騎上腳踏車'];
                var armj = [0,50,100,100];
                var which = parseInt(Math.random()*4);
                var newm = arm[which];
                var newj = armj[which]; 
            }
            if(moname=='混元形意門掌門馬保國'){
                if(mhp<2500 && sessionStorage.getItem("run")=="0"){
                    content += '<div class="report_blue">'+moname+'：小朋友，來折折看我一根手指頭。</div>';
                    sessionStorage.setItem("run","1");
                }if(mhp<2000 && sessionStorage.getItem("run")=="1"){
                    content += '<div class="report_blue">'+moname+'：傳統功夫可是講化勁了的！</div>';
                    content += '<div class="report_blue">'+moname+'：兩百多公斤的英國大力士都折不動我一根手指頭。</div>';
                    sessionStorage.setItem("run","2");
                }if(mhp<1000  && sessionStorage.getItem("run")=="2"){
                    content += '<div class="report_red">'+moname+'把右拳放在了你的鼻子上</div>';
                    sessionStorage.setItem("run","3");
                }if(mhp<500  && sessionStorage.getItem("run")=="3"){
                    content += '<div class="report_blue">'+moname+'：根據傳統功夫的點到為止，你已經輸了。</div>';
                    content += '<div class="report_blue">'+moname+'：如果剛剛那一拳發力，你的鼻梁已經歪了。</div>';
                    content += '<div class="report_red">'+moname+'：現在該結束這場鬧劇了。</div>';
                    newm='閃電鞭五連鞭';
                    sessionStorage.setItem("run","4");
                }
            }else if(moname=='兩津勘吉巡查長'){
                if(mhp<2500 && sessionStorage.getItem("run")=="0"){
                    content += '<div class="report_blue">'+moname+'：燒肉，我的燒肉。</div>';
                    newm='品嘗燒肉便當';
                    sessionStorage.setItem("run","1");
                }if(mhp<2000 && sessionStorage.getItem("run")=="1"){
                    content += '<div class="report_red">'+moname+'：他媽的！我看你是沒被打過。</div>';
                    newm='原始人打擊';
                    sessionStorage.setItem("run","2");
                }if(mhp<500  && sessionStorage.getItem("run")=="2"){
                    content += '<div class="report_blue">'+moname+'：唉呦，情況好像有點不太妙欸，本田，這裡就交給你了。</div>';
                    newm='馬上騎上腳踏車離開';
                    sessionStorage.setItem("run","3");
                }
            }
            if (newm==='揮動球棒'||newm==='精確打擊'||newm==='揮舞鐵棒'||newm==='往你的鼻梁狠狠的'||newm==='投擲木屐'){
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
                    pgosh = pgosh-1;
                }
            }else if (newm==='閃電鞭'){
                var harm=parseInt((Math.random()*10)*(Math.sqrt(mg2*mi1)));
                if (harm<=0){
                    harm=parseInt(Math.random()*10);
                    content += '<div class="report_yellow">'+moname+newm+'發動攻擊，但是沒有突破'+work1+plname+'的防禦，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                    php=php-harm;
                }else{
                    content += '<div class="report_yellow">'+moname+newm+'發動攻擊，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                    php=php-harm;
                }
                var mp5=parseInt(Math.random()*10-pl2/1000);
                if(mp5>=4){
                    content += '<div>'+work1+plname+'被麻痺了</div>';
                    pgosh1 = pgosh1-1;
                }
            }else if(newm==='閃電鞭五連鞭'){
                for (i = 1; i < 6; i++) {
                    var harm=parseInt((Math.random()*10)*(Math.sqrt(mg2*mi1)));
                    if (harm<=0){
                        harm=parseInt(Math.random()*10);
                        content += '<div class="report_yellow">'+moname+newm+'發動攻擊，但是沒有突破'+work1+plname+'的防禦，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                        php=php-harm;
                    }else{
                        content += '<div class="report_yellow">'+moname+newm+'發動攻擊，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                        php=php-harm;
                    }
                    var mp5=parseInt(Math.random()*10-pl2/1000);
                    if(mp5>=4){
                        content += '<div>'+work1+plname+'被麻痺了</div>';
                        pgosh1 = pgosh1-1;
                    }
                }
            }else if (newm==='原始人打擊'){
                content += '<div class="report_red">'+moname+'使出了'+newm+'。</div>';
                var x =['抓起','甩出','再次抓起','痛扁']
                for (var i=0; i<4; i++){
                    var harm=parseInt((Math.random()*10)*(Math.sqrt(mg2*mi1)));
                    content += '<div class="report_blue">'+moname+x[i]+work1+plname+'，對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
                    php=php-harm;
                }
            }else if (newm==='馬上騎上腳踏車離開'){
                content += '<div class="report_red">'+moname+newm+'</div>';
                php=-1000000;
                mhp=-1000000;
            }else if (newm==='混元功法'|| newm==='品嘗燒肉便當'){
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
    $('#liferusult').append(content);
    return [php,mhp,pgosh,mgosh,mfire,mgosh2,newj,pgosh1,pfire];
}

function win2(n){
    var l2=Number(localStorage.getItem("l2"));
    var work=localStorage.getItem("work");
    if (localStorage.getItem("weapon")=="gossip"){
        if(localStorage.getItem("gossip")>=11){
            l2=l2+Math.pow((Number(localStorage.getItem("gossip"))),3);
        }else{
            l2=l2+(Number(localStorage.getItem("gossip"))*10);
        }
    }
    if(n=='混元形意門門徒'){
        var a = parseInt((Math.random()*100+1)*(2000+l2)/2000);
        if(a>100){
            bkf=Number(localStorage.getItem("bkfish"));
            localStorage.setItem("bkfish",String(bkf+1));
            var content = '<div>你獲得了從'+n+'身上掉下來的一個太極魚眼．黑</div>';
            $('#liferusult').append(content);
        }
        var a2 = parseInt((Math.random()*100+1)*(2000+l2)/2000);
        if(a2>100){
            wtf=Number(localStorage.getItem("wtfish"));
            localStorage.setItem("wtfish",String(wtf+1));
            var content2 = '<div>你獲得了從'+n+'身上掉下來的一個太極魚眼．白</div>';
            $('#liferusult').append(content2);
        }
    }
    if(n=='混元形意門掌門馬保國'){
        var a = parseInt((Math.random()*100)+(2000+l2)/2000);
        if(a>=100){
            ston=Number(localStorage.getItem("stone"));
            localStorage.setItem("stone",String(ston+1));
            var content = '<div>你獲得了從'+n+'身上掉下來的一個通天石</div>';
            $('#liferusult').append(content);
        }
    }
    if(n=='兩津勘吉巡查長' && work=='蝦仁飯'){
        var a = parseInt((Math.random()*100)+(2000+l2)/2000);
        if(a>=100){
            if (localStorage.getItem("killer")==null){
                localStorage.setItem("killer","1");
                var content = '<div>你獲得了從'+n+'身上掉下來的殺人令/div>';
            }
            $('#liferusult').append(content);
        }
    }
    var mon=Number(localStorage.getItem("money"));
    var a2 = parseInt((Math.random()*20+5)*(150+l2)/150);
    localStorage.setItem("money",String(mon+a2));
    var content = '<div>你獲得了從'+n+'身上掉下來的'+String(a2)+'塊錢</div>';
    $('#liferusult').append(content);
}

function lotto2(pl2,php,mhp,plname,moname){
    var work1=String(localStorage.getItem("work"));
    var a = parseInt(Math.random()*100)+1;
    if(a>80){
        var harm=parseInt(Math.random()*10*(pl2/20));
        content = '<div>'+work1+plname+'刮了一張彩卷，抽中了藥水，藥水回復了'+work1+plname+String(harm)+'點生命</div>';
        php=php+harm;
        $('#liferusult').append(content);
    }else if(a>60){
        var harm=parseInt(Math.random()*10*(pl2/20));
        content = '<div>'+work1+plname+'刮了一張彩卷，抽中了藥水，藥水回復了'+moname+String(harm)+'點生命</div>';
        mhp=mhp+harm;
        $('#liferusult').append(content);
    }else if(a>50){
        var harm = parseInt(Math.random()*pl2/150+1);
        content = '<div>'+work1+plname+'刮了一張彩卷，抽中了'+String(harm)+'張彩券</div>';
        $('#liferusult').append(content);
        for (i = 1; i <= harm; i++) {
            var aa = lotto(pl2,php,mhp,plname,moname);
            php = aa[0];
            mhp = aa[1];
        }
    }else if(a>40){
        var harm=parseInt(Math.random()*10*(pl2/100));
        content = '<div>'+work1+plname+'刮了一張彩卷，抽出了一把生鏽的刀對'+moname+'造成了'+String(harm)+'點傷害</div>';;
        $('#liferusult').append(content);
    }else if(a>20){
        var harm=parseInt(Math.random()*10*(pl2/20));
        content = '<div>'+work1+plname+'刮了一張彩卷，抽中了炸彈，炸彈爆炸對'+moname+'造成了'+String(harm)+'點傷害</div>';
        mhp=mhp-harm;
        $('#liferusult').append(content);
    }else{
        var harm=parseInt(Math.random()*10*(pl2/20));
        content = '<div>'+work1+plname+'刮了一張彩卷，抽中了炸彈，炸彈爆炸對'+work1+plname+'造成了'+String(harm)+'點傷害</div>';
        php=php-harm;
        $('#liferusult').append(content);
    }
    return [php,mhp];
}