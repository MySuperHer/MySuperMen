async function waiter(){
    $('#train11').attr('disabled', true);
    $('#train12').attr('disabled', true);
    $('#train13').attr('disabled', true);
    $('#train14').attr('disabled', true);
    $('#train15').attr('disabled', true);
    $('#train16').attr('disabled', true);
    await delay(20);
    var age=Number(localStorage.getItem("age"));
    var m1=Number(localStorage.getItem("m1"));
    var g2=Number(localStorage.getItem("g2"));
    let content = '';
    if (age>=10){
        if(m1>30){
            content = '<div>恭喜您被錄取了。</div>';
            localStorage.setItem("work","服務生");
        }else if(g2>40){
            content = '<div>我們剛好缺一個廚師，恭喜您被錄取了。</div>';
            localStorage.setItem("work","廚師");
        }else{
            content = '<div>很抱歉，您並不符合我們的要求。</div>';
        }
    }else{
        content = '<div>很抱歉，本場所不雇傭童工。</div>';
    }
    $('#2').append(content);
    gobig(-1,-1,-1,-1,-1,-1,-1,-1);
    $('#train11').attr('disabled', false);
    $('#train12').attr('disabled', false);
    $('#train13').attr('disabled', false);
    $('#train14').attr('disabled', false);
    $('#train15').attr('disabled', false);
    $('#train16').attr('disabled', false);
}

async function lucky(){
    $('#train11').attr('disabled', true);
    $('#train12').attr('disabled', true);
    $('#train13').attr('disabled', true);
    $('#train14').attr('disabled', true);
    $('#train15').attr('disabled', true);
    $('#train16').attr('disabled', true);
    await delay(20);
    var age=Number(localStorage.getItem("age"));
    var m1=Number(localStorage.getItem("m1"));
    var l2=Number(localStorage.getItem("l2"));
    let content = '';
    if (age>=10){
        if(m1>30 && l2>30){
            content = '<div>恭喜您被錄取了。</div>';
            localStorage.setItem("work","彩卷行員工");
        }else if(l2>50){
            content = '<div>在離開彩卷行時，你順便買了一張樂透，恭喜您中獎了。</div>';
            localStorage.setItem("work","幸運星");
        }else{
            content = '<div>很抱歉，您並不符合我們的要求。</div>';
        }
    }else{
        content = '<div>很抱歉，本場所不雇傭童工。</div>';
    }
    $('#2').append(content);
    gobig(-1,-1,-1,-1,-1,-1,-1,-1);
    $('#train11').attr('disabled', false);
    $('#train12').attr('disabled', false);
    $('#train13').attr('disabled', false);
    $('#train14').attr('disabled', false);
    $('#train15').attr('disabled', false);
    $('#train16').attr('disabled', false);
}

async function swimmer(){
    $('#train11').attr('disabled', true);
    $('#train12').attr('disabled', true);
    $('#train13').attr('disabled', true);
    $('#train14').attr('disabled', true);
    $('#train15').attr('disabled', true);
    $('#train16').attr('disabled', true);
    await delay(20);
    var age=Number(localStorage.getItem("age"));
    var i1=Number(localStorage.getItem("i1"));
    var g2=Number(localStorage.getItem("g2"));
    let content = '';
    if (age>=10){
        if(i1>30 && g2>40){
            content = '<div>恭喜您被錄取了。</div>';
            localStorage.setItem("work","救生員");
        }else if(g2>50){
            content = '<div>路過的國家游泳隊教練看上了你，恭喜您被錄取了。</div>';
            localStorage.setItem("work","游泳國手");
        }else{
            content = '<div>很抱歉，您並不符合我們的要求。</div>';
        }
    }else{
        content = '<div>很抱歉，本場所不雇傭童工。</div>';
    }
    $('#2').append(content);
    gobig(-1,-1,-1,-1,-1,-1,-1,-1);
    $('#train11').attr('disabled', false);
    $('#train12').attr('disabled', false);
    $('#train13').attr('disabled', false);
    $('#train14').attr('disabled', false);
    $('#train15').attr('disabled', false);
    $('#train16').attr('disabled', false);
}

async function study(){
    $('#train11').attr('disabled', true);
    $('#train12').attr('disabled', true);
    $('#train13').attr('disabled', true);
    $('#train14').attr('disabled', true);
    $('#train15').attr('disabled', true);
    $('#train16').attr('disabled', true);
    await delay(20);
    var age=Number(localStorage.getItem("age"));
    var i1=Number(localStorage.getItem("i1"));
    var l2=Number(localStorage.getItem("l2"));
    var a1 = parseInt(Math.random()*100)*(100+i1)*(1000+l2)/100000;
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
            if (a1>=100 && age>=10){
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
    gobig(-1,-1,-1,-1,-1,-1,-1,-1);
    $('#train11').attr('disabled', false);
    $('#train12').attr('disabled', false);
    $('#train13').attr('disabled', false);
    $('#train14').attr('disabled', false);
    $('#train15').attr('disabled', false);
    $('#train16').attr('disabled', false);
}

async function getcar(){
    $('#train11').attr('disabled', true);
    $('#train12').attr('disabled', true);
    $('#train13').attr('disabled', true);
    $('#train14').attr('disabled', true);
    $('#train15').attr('disabled', true);
    $('#train16').attr('disabled', true);
    await delay(20);
    var l1=Number(localStorage.getItem("l1"));
    var age=Number(localStorage.getItem("age"));
    let content = '';
    if(l1<70 && age>14){
        content = '<div>你撿到了一台來路不明的卡車。</div>';
        localStorage.setItem("work","卡車司機");
    }else{
        content = '<div>來這裡找工作是想當乞丐嗎？</div>';
    }
    $('#2').append(content);
    gobig(-1,-1,-1,-1,-1,-1,-1,-1);
    $('#train11').attr('disabled', false);
    $('#train12').attr('disabled', false);
    $('#train13').attr('disabled', false);
    $('#train14').attr('disabled', false);
    $('#train15').attr('disabled', false);
    $('#train16').attr('disabled', false);
}

async function star(){
    $('#train11').attr('disabled', true);
    $('#train12').attr('disabled', true);
    $('#train13').attr('disabled', true);
    $('#train14').attr('disabled', true);
    $('#train15').attr('disabled', true);
    $('#train16').attr('disabled', true);
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
    let content = '';
    if (age>=15){
        var n = g1*11+g2+g3+j1+l1+l2+i1+m1;
        if(n>=48763){
            content = '<div>一個散發著強大氣場的無名黑衣劍士給了你兩把單手劍。</div>';
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
    gobig(-1,-1,-1,-1,-1,-1,-1,-1);
    $('#train11').attr('disabled', false);
    $('#train12').attr('disabled', false);
    $('#train13').attr('disabled', false);
    $('#train14').attr('disabled', false);
    $('#train15').attr('disabled', false);
    $('#train16').attr('disabled', false);
}