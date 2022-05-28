async function waiter(){
    $('#train11').attr('disabled', true);
    $('#train12').attr('disabled', true);
    $('#train13').attr('disabled', true);
    $('#train14').attr('disabled', true);
    $('#train15').attr('disabled', true);
    $('#train16').attr('disabled', true);
    $('#train17').attr('disabled', true);
    $('#train18').attr('disabled', true);
    await delay(0);
    var age=Number(localStorage.getItem("age"));
    var g1=Number(localStorage.getItem("g1"))*10;
    var m1=Number(localStorage.getItem("m1"));
    var g2=Number(localStorage.getItem("g2"));
    var l2=Number(localStorage.getItem("l2"));
    if (localStorage.getItem("weapon")=="gossip"){
        if(localStorage.getItem("gossip")>=11){
            l2=l2+Math.pow((Number(localStorage.getItem("gossip"))),3);
        }else{
            l2=l2+(Number(localStorage.getItem("gossip"))*10);
        }
    }
    var a=parseInt(Math.random()*100)+m1/10+l2/100;
    let content = '';
    if (age>=18){
        if(m1>45 && a>60){
            content = '<div>恭喜您被錄取了。</div>';
            localStorage.setItem("work","服務生");
        }else if(g2>35 && g1>15 && a>90){
            content = '<div>我們剛好缺一個廚師，恭喜您被錄取了。</div>';
            localStorage.setItem("work","廚師");
        }else{
            content = '<div>很抱歉，您並不符合我們的要求。</div>';
        }
    }else{
        content = '<div>很抱歉，本場所不雇傭童工。</div>';
    }
    gobig3(-1,-1,-1,-1,-1,-1,-1,-1);
    $('#2').prepend(content);
    $('#train11').attr('disabled', false);
    $('#train12').attr('disabled', false);
    $('#train13').attr('disabled', false);
    $('#train14').attr('disabled', false);
    $('#train15').attr('disabled', false);
    $('#train16').attr('disabled', false);
    $('#train17').attr('disabled', false);
    $('#train18').attr('disabled', false);
}

async function lucky(){
    $('#train11').attr('disabled', true);
    $('#train12').attr('disabled', true);
    $('#train13').attr('disabled', true);
    $('#train14').attr('disabled', true);
    $('#train15').attr('disabled', true);
    $('#train16').attr('disabled', true);
    $('#train17').attr('disabled', true);
    $('#train18').attr('disabled', true);
    await delay(0);
    var age=Number(localStorage.getItem("age"));
    var m1=Number(localStorage.getItem("m1"));
    var l2=Number(localStorage.getItem("l2"));
    if (localStorage.getItem("weapon")=="gossip"){
        if(localStorage.getItem("gossip")>=11){
            l2=l2+Math.pow((Number(localStorage.getItem("gossip"))),3);
        }else{
            l2=l2+(Number(localStorage.getItem("gossip"))*10);
        }
    }
    var a=parseInt(Math.random()*100)+m1/10+l2/100;
    let content = '';
    if (age>=18){
        if(m1>40 && l2>50 && a>60){
            content = '<div>恭喜您被錄取了。</div>';
            localStorage.setItem("work","彩卷行員工");
        }else if(l2>100 && a>90){
            content = '<div>在離開彩卷行時，你順便買了一張樂透，恭喜您中獎了。</div>';
            localStorage.setItem("work","幸運星");
        }else{
            content = '<div>很抱歉，您並不符合我們的要求。</div>';
        }
    }else{
        content = '<div>很抱歉，本場所不雇傭童工。</div>';
    }
    gobig3(-1,-1,-1,-1,-1,-1,-1,-1);
    $('#2').prepend(content);
    $('#train11').attr('disabled', false);
    $('#train12').attr('disabled', false);
    $('#train13').attr('disabled', false);
    $('#train14').attr('disabled', false);
    $('#train15').attr('disabled', false);
    $('#train16').attr('disabled', false);
    $('#train17').attr('disabled', false);
    $('#train18').attr('disabled', false);
}

async function swimmer(){
    $('#train11').attr('disabled', true);
    $('#train12').attr('disabled', true);
    $('#train13').attr('disabled', true);
    $('#train14').attr('disabled', true);
    $('#train15').attr('disabled', true);
    $('#train16').attr('disabled', true);
    $('#train17').attr('disabled', true);
    $('#train18').attr('disabled', true);
    await delay(0);
    var age=Number(localStorage.getItem("age"));
    var i1=Number(localStorage.getItem("i1"));
    var g2=Number(localStorage.getItem("g2"));
    var m1=Number(localStorage.getItem("m1"));
    var l2=Number(localStorage.getItem("l2"));
    if (localStorage.getItem("weapon")=="gossip"){
        if(localStorage.getItem("gossip")>=11){
            l2=l2+Math.pow((Number(localStorage.getItem("gossip"))),3);
        }else{
            l2=l2+(Number(localStorage.getItem("gossip"))*10);
        }
    }
    var a=parseInt(Math.random()*100)+m1/10+l2/100;
    let content = '';
    if (age>=18){
        if(i1>25 && g2>35 && a>60){
            content = '<div>恭喜您被錄取了。</div>';
            localStorage.setItem("work","救生員");
        }else if(g2>60 && a>60){
            content = '<div>路過的國家游泳隊教練看上了你，恭喜您被錄取了。</div>';
            localStorage.setItem("work","游泳國手");
        }else{
            content = '<div>很抱歉，您並不符合我們的要求。</div>';
        }
    }else{
        content = '<div>很抱歉，本場所不雇傭童工。</div>';
    }
    gobig3(-1,-1,-1,-1,-1,-1,-1,-1);
    $('#2').prepend(content);
    $('#train11').attr('disabled', false);
    $('#train12').attr('disabled', false);
    $('#train13').attr('disabled', false);
    $('#train14').attr('disabled', false);
    $('#train15').attr('disabled', false);
    $('#train16').attr('disabled', false);
    $('#train17').attr('disabled', false);
    $('#train18').attr('disabled', false);
}

async function study(){
    $('#train11').attr('disabled', true);
    $('#train12').attr('disabled', true);
    $('#train13').attr('disabled', true);
    $('#train14').attr('disabled', true);
    $('#train15').attr('disabled', true);
    $('#train16').attr('disabled', true);
    $('#train17').attr('disabled', true);
    $('#train18').attr('disabled', true);
    await delay(0);
    var age=Number(localStorage.getItem("age"));
    var i1=Number(localStorage.getItem("i1"));
    var l2=Number(localStorage.getItem("l2"));
    if (localStorage.getItem("weapon")=="gossip"){
        if(localStorage.getItem("gossip")>=11){
            l2=l2+Math.pow((Number(localStorage.getItem("gossip"))),3);
        }else{
            l2=l2+(Number(localStorage.getItem("gossip"))*10);
        }
    }
    var a1 = parseInt(Math.random()*100)+i1/10+l2/100;
    let content = '';
    if (localStorage.getItem("weapon")=="phone"){
        content = '<div>同學，考場禁止使用手機。</div>';
    }else if (age<27){
        if(age>22){
            if (a1>60){
                content = '<div>你的成績非常出眾，恭喜您被錄取了。</div>';
                localStorage.setItem("work","研究生");
            }else{
                content = '<div>入學測試慘遭滑鐵盧，明年再來吧。</div>';
            }
        }else{
            if (a1>=90 && age>=10){
                content = '<div>你的成績非常出眾，於是你的老師決定讓你至哈佛研究所就讀。</div>';
                localStorage.setItem("work","跳級生");
            }else{
                content = '<div>你的年紀太小了。</div>';
            }
        }
    }else{
        content = '<div>旁邊有社區大學。</div>';
    }
    gobig3(-1,-1,-1,-1,-1,-1,-1,-1);
    $('#2').prepend(content);
    $('#train11').attr('disabled', false);
    $('#train12').attr('disabled', false);
    $('#train13').attr('disabled', false);
    $('#train14').attr('disabled', false);
    $('#train15').attr('disabled', false);
    $('#train16').attr('disabled', false);
    $('#train17').attr('disabled', false);
    $('#train18').attr('disabled', false);
}

async function getcar(){
    $('#train11').attr('disabled', true);
    $('#train12').attr('disabled', true);
    $('#train13').attr('disabled', true);
    $('#train14').attr('disabled', true);
    $('#train15').attr('disabled', true);
    $('#train16').attr('disabled', true);
    $('#train17').attr('disabled', true);
    $('#train18').attr('disabled', true);
    await delay(0);
    var l1=Number(localStorage.getItem("l1"));
    var m1=Number(localStorage.getItem("m1"));
    var age=Number(localStorage.getItem("age"));
    var a1 = parseInt(Math.random()*60);
    let content = '';
    if(l1>40 && age>18 && a1>40){
        content = '<div>你撿到了一台來路不明的卡車。</div>';
        localStorage.setItem("work","卡車司機");
    }else if(m1>30 && age<20 && a1>20){
        content = '<div>你結交到了一群志同道合的朋友。</div>';
        localStorage.setItem("work","童子軍");
    }else{
        content = '<div>來這裡找工作是想當乞丐嗎？</div>';
    }
    gobig3(-1,-1,-1,-1,-1,-1,-1,-1);
    $('#2').prepend(content);
    $('#train11').attr('disabled', false);
    $('#train12').attr('disabled', false);
    $('#train13').attr('disabled', false);
    $('#train14').attr('disabled', false);
    $('#train15').attr('disabled', false);
    $('#train16').attr('disabled', false);
    $('#train17').attr('disabled', false);
    $('#train18').attr('disabled', false);
}

async function star(){
    $('#train11').attr('disabled', true);
    $('#train12').attr('disabled', true);
    $('#train13').attr('disabled', true);
    $('#train14').attr('disabled', true);
    $('#train15').attr('disabled', true);
    $('#train16').attr('disabled', true);
    $('#train17').attr('disabled', true);
    $('#train18').attr('disabled', true);
    await delay(0);
    var age=Number(localStorage.getItem("age"));
    var wea=localStorage.getItem("weapon");
    var work=localStorage.getItem("work");
    let content = '';
    if (age>=15){
        if(age>=48 && work=='無業' && wea=='robot'){
            content = '<div>一個散發著強大氣場的無名黑衣劍士給了你兩把單手劍和兩本密技。</div>';
            localStorage.setItem("work","雙刀劍士");
        }else{
            content = '<div>風景真好。</div>';
        }
    }else{
        k=parseInt(Math.random()*41);
        if(k>36){
            content = '<div>我們只歡迎真正的維京人</div>';
        }else if(k>27){
            content = '<div>我們只歡迎真正的英雄</div>';
        }else if(k>16){
            content = '<div>我們只歡迎真正的勇士</div>';
        }else {
            content = '<div>我們只歡迎真正的冒險者</div>';
        }
    }
    gobig3(-1,-1,-1,-1,-1,-1,-1,-1);
    $('#2').prepend(content);
    $('#train11').attr('disabled', false);
    $('#train12').attr('disabled', false);
    $('#train13').attr('disabled', false);
    $('#train14').attr('disabled', false);
    $('#train15').attr('disabled', false);
    $('#train16').attr('disabled', false);
    $('#train17').attr('disabled', false);
    $('#train18').attr('disabled', false);
}

async function gym(){
    $('#train11').attr('disabled', true);
    $('#train12').attr('disabled', true);
    $('#train13').attr('disabled', true);
    $('#train14').attr('disabled', true);
    $('#train15').attr('disabled', true);
    $('#train16').attr('disabled', true);
    $('#train17').attr('disabled', true);
    $('#train18').attr('disabled', true);
    await delay(0);
    var age=Number(localStorage.getItem("age"));
    var g1=Number(localStorage.getItem("g1"));
    var g2=Number(localStorage.getItem("g2"));
    var g21=Number(localStorage.getItem("g21"));
    var g31=Number(localStorage.getItem("g31"));
    var l21=Number(localStorage.getItem("l21"));
    var i11=Number(localStorage.getItem("i11"));
    let content = '';
    if (age>=18){
        if(g2>=g1*20){
            content = '<div>為什麼我的人生會變成這樣...</div>';
            localStorage.setItem("work","俱樂部會員");
        }else{
            g21=g21+(g31/4)+4;
            g31=g31/3;
            l21=l21-3;
            i11=i11-3;
            content = '<div>你在淋浴間撿到了塊肥皂，但是沒有事情發生。</div>';
        }
    }else{
        content = '<div>未成年禁止入內。</div>';
    }
    gobig3(-1,g21,g31,-1,-1,l21,i11,0);
    $('#2').prepend(content);
    $('#train11').attr('disabled', false);
    $('#train12').attr('disabled', false);
    $('#train13').attr('disabled', false);
    $('#train14').attr('disabled', false);
    $('#train15').attr('disabled', false);
    $('#train16').attr('disabled', false);
    $('#train17').attr('disabled', false);
    $('#train18').attr('disabled', false);
}

async function circus(){
    $('#train11').attr('disabled', true);
    $('#train12').attr('disabled', true);
    $('#train13').attr('disabled', true);
    $('#train14').attr('disabled', true);
    $('#train15').attr('disabled', true);
    $('#train16').attr('disabled', true);
    $('#train17').attr('disabled', true);
    $('#train18').attr('disabled', true);
    await delay(0);
    var age=Number(localStorage.getItem("age"));
    let content = '';
    if (age>=15){
        content = '<div>先生，我們的小丑夠多了。</div>';
    }else{
        content = '<div>小朋友，我們不賣水餃。</div>';
    } 
    gobig3(-1,-1,-1,-1,-1,-1,-1,-1);
    $('#2').prepend(content);
    $('#train11').attr('disabled', false);
    $('#train12').attr('disabled', false);
    $('#train13').attr('disabled', false);
    $('#train14').attr('disabled', false);
    $('#train15').attr('disabled', false);
    $('#train16').attr('disabled', false);
    $('#train17').attr('disabled', false);
    $('#train18').attr('disabled', false);
}