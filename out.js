async function waiter(){
    $('#train11').attr('disabled', true);
    $('#train12').attr('disabled', true);
    $('#train13').attr('disabled', true);
    $('#train14').attr('disabled', true);
    await delay(80);
    var age=Number(localStorage.getItem("age"));
    var m1=Number(localStorage.getItem("m1"));
    var g2=Number(localStorage.getItem("g2"));
    var l2=Number(localStorage.getItem("l2"));
    var a1 = parseInt(Math.random()*100)*(1+l2)/100+1;
    let content = '';
    if (age>=18){
        if(m1>70 && a1>70){
            content = '<div>恭喜您被錄取了</div>';
            localStorage.setItem("work","服務生");
        }else if(g2>40 && a1>90){
            content = '<div>我們剛好缺一個廚師，恭喜您被錄取了。</div>';
            localStorage.setItem("work","廚師");
        }else{
            content = '<div>很抱歉，您並不符合我們的要求</div>';
        }
    }else{
        content = '<div>很抱歉，本場所不雇傭童工</div>';
    }
    $('#2').append(content);
    $('#train11').attr('disabled', false);
    $('#train12').attr('disabled', false);
    $('#train13').attr('disabled', false);
    $('#train14').attr('disabled', false);
}

async function lucky(){
    $('#train11').attr('disabled', true);
    $('#train12').attr('disabled', true);
    $('#train13').attr('disabled', true);
    $('#train14').attr('disabled', true);
    await delay(80);
    var age=Number(localStorage.getItem("age"));
    var m1=Number(localStorage.getItem("m1"));
    var l2=Number(localStorage.getItem("l2"));
    var a1 = parseInt(Math.random()*100)*(1+l2)/100+1;
    var a2 = parseInt(Math.random()*100)*(1+l2)/100+1;
    let content = '';
    if (age>=18){
        if(m1>70 && a1>70){
            content = '<div>恭喜您被錄取了</div>';
            localStorage.setItem("work","彩卷行員工");
        }else if(a2>99){
            content = '<div>在離開彩卷行時，你順便買了一張樂透，恭喜您中獎了。</div>';
            localStorage.setItem("work","幸運星");
        }{
            content = '<div>很抱歉，您並不符合我們的要求</div>';
        }
    }else{
        content = '<div>很抱歉，本場所不雇傭童工</div>';
    }
    $('#2').append(content);
    $('#train11').attr('disabled', false);
    $('#train12').attr('disabled', false);
    $('#train13').attr('disabled', false);
    $('#train14').attr('disabled', false);
}

async function swimmer(){
    $('#train11').attr('disabled', true);
    $('#train12').attr('disabled', true);
    $('#train13').attr('disabled', true);
    $('#train14').attr('disabled', true);
    await delay(80);
    var age=Number(localStorage.getItem("age"));
    var i1=Number(localStorage.getItem("i1"));
    var g2=Number(localStorage.getItem("g2"));
    var l2=Number(localStorage.getItem("l2"));
    var a1 = parseInt(Math.random()*100)*(1+l2)/100+1;
    let content = '';
    if (age>=18){
        if(i1>40 && g2>40 && a1<90){
            content = '<div>恭喜您被錄取了</div>';
            localStorage.setItem("work","救生員");
        }else if(g2>60){
            content = '<div>路過的國家游泳隊教練看上了你，恭喜您被錄取了。</div>';
            localStorage.setItem("work","游泳國手");
        }else{
            content = '<div>很抱歉，您並不符合我們的要求</div>';
        }
    }else{
        content = '<div>很抱歉，本場所不雇傭童工</div>';
    }
    $('#2').append(content);
    $('#train11').attr('disabled', false);
    $('#train12').attr('disabled', false);
    $('#train13').attr('disabled', false);
    $('#train14').attr('disabled', false);
}

async function study(){
    $('#train11').attr('disabled', true);
    $('#train12').attr('disabled', true);
    $('#train13').attr('disabled', true);
    $('#train14').attr('disabled', true);
    await delay(80);
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
            if (a1>=100){
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
    $('#train11').attr('disabled', false);
    $('#train12').attr('disabled', false);
    $('#train13').attr('disabled', false);
    $('#train14').attr('disabled', false);
}