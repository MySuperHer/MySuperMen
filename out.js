async function waiter(){
    $('#train11').attr('disabled', true);
    $('#train12').attr('disabled', true);
    $('#train13').attr('disabled', true);
    $('#train14').attr('disabled', true);
    $('#train15').attr('disabled', true);
    $('#train16').attr('disabled', true);
    $('#train17').attr('disabled', true);
    $('#train18').attr('disabled', true);
    await delay(20);
    var age=Number(localStorage.getItem("age"));
    var g1=Number(localStorage.getItem("g1"))*10;
    var m1=Number(localStorage.getItem("m1"));
    var g2=Number(localStorage.getItem("g2"));
    let content = '';
    if (age>=18){
        if(m1>100){
            content = '<div>恭喜您被錄取了。</div>';
            localStorage.setItem("work","服務生");
        }else if(g2>150 && g1>180){
            content = '<div>我們剛好缺一個廚師，恭喜您被錄取了。</div>';
            localStorage.setItem("work","廚師");
        }else{
            content = '<div>很抱歉，您並不符合我們的要求。</div>';
        }
    }else{
        content = '<div>很抱歉，本場所不雇傭童工。</div>';
    }
    $('#2').append(content);
    gobig3(-1,-1,-1,-1,-1,-1,-1,-1);
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
    await delay(20);
    var age=Number(localStorage.getItem("age"));
    var m1=Number(localStorage.getItem("m1"));
    var l2=Number(localStorage.getItem("l2"));
    let content = '';
    if (age>=18){
        if(m1>100 && l2>200){
            content = '<div>恭喜您被錄取了。</div>';
            localStorage.setItem("work","彩卷行員工");
        }else if(l2>500){
            content = '<div>在離開彩卷行時，你順便買了一張樂透，恭喜您中獎了。</div>';
            localStorage.setItem("work","幸運星");
        }else{
            content = '<div>很抱歉，您並不符合我們的要求。</div>';
        }
    }else{
        content = '<div>很抱歉，本場所不雇傭童工。</div>';
    }
    $('#2').append(content);
    gobig3(-1,-1,-1,-1,-1,-1,-1,-1);
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
    await delay(20);
    var age=Number(localStorage.getItem("age"));
    var i1=Number(localStorage.getItem("i1"));
    var g2=Number(localStorage.getItem("g2"));
    var m1=Number(localStorage.getItem("m1"));
    let content = '';
    if (age>=18){
        if(i1>50 && g2>70){
            content = '<div>恭喜您被錄取了。</div>';
            localStorage.setItem("work","救生員");
        }else if(g2>100 && m1>70){
            content = '<div>路過的國家游泳隊教練看上了你，恭喜您被錄取了。</div>';
            localStorage.setItem("work","游泳國手");
        }else{
            content = '<div>很抱歉，您並不符合我們的要求。</div>';
        }
    }else{
        content = '<div>很抱歉，本場所不雇傭童工。</div>';
    }
    $('#2').append(content);
    gobig3(-1,-1,-1,-1,-1,-1,-1,-1);
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
    await delay(20);
    var age=Number(localStorage.getItem("age"));
    var i1=Number(localStorage.getItem("i1"));
    var l2=Number(localStorage.getItem("l2"));
    var a1 = parseInt(Math.random()*100)+i1/30+l2/100;
    let content = '';
    if (age<27){
        if(age>22){
            if (a1>70){
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
    $('#2').append(content);
    gobig3(-1,-1,-1,-1,-1,-1,-1,-1);
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
    await delay(20);
    var l1=Number(localStorage.getItem("l1"));
    var m1=Number(localStorage.getItem("m1"));
    var age=Number(localStorage.getItem("age"));
    let content = '';
    if(l1>80 && age>18){
        content = '<div>你撿到了一台來路不明的卡車。</div>';
        localStorage.setItem("work","卡車司機");
    }else if(m1>100 && age<20){
        content = '<div>你結交到了一群志同道合的朋友。</div>';
        localStorage.setItem("work","童子軍");
    }else{
        content = '<div>來這裡找工作是想當乞丐嗎？</div>';
    }
    $('#2').append(content);
    gobig3(-1,-1,-1,-1,-1,-1,-1,-1);
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
    await delay(20);
    var age=Number(localStorage.getItem("age"));
    var g1=Number(localStorage.getItem("g1"));
    var g2=Number(localStorage.getItem("g2"));
    var g3=Number(localStorage.getItem("g3"));
    var j1=Number(localStorage.getItem("j1"));
    var l1=Number(localStorage.getItem("l1"));
    var l2=Number(localStorage.getItem("l2"));
    var i1=Number(localStorage.getItem("i1"));
    var m1=Number(localStorage.getItem("m1"));
    var hp=Number(localStorage.getItem("hp"));
    let content = '';
    if (age>=15){
        var n = g1*11+g2+g3+j1+l1+l2+i1+m1+hp;
        if(n>=48763){
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
    $('#2').append(content);
    gobig3(-1,-1,-1,-1,-1,-1,-1,-1);
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
    await delay(20);
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
    $('#2').append(content);
    gobig3(-1,g21,g31,-1,-1,l21,i11,0);
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
    await delay(20);
    var age=Number(localStorage.getItem("age"));
    let content = '';
    if (age>=15){
        content = '<div>先生，我們的小丑夠多了。</div>';
    }else{
        content = '<div>小朋友，我們不賣水餃。</div>';
    } 
    $('#2').append(content);
    gobig3(-1,-1,-1,-1,-1,-1,-1,-1);
    $('#train11').attr('disabled', false);
    $('#train12').attr('disabled', false);
    $('#train13').attr('disabled', false);
    $('#train14').attr('disabled', false);
    $('#train15').attr('disabled', false);
    $('#train16').attr('disabled', false);
    $('#train17').attr('disabled', false);
    $('#train18').attr('disabled', false);
}