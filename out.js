async function waiter(){
    $('#train11').attr('disabled', true);
    $('#train12').attr('disabled', true);
    $('#train13').attr('disabled', true);
    await delay(80);
    var age=Number(localStorage.getItem("age"));
    var m1=Number(localStorage.getItem("m1"));
    var g2=Number(localStorage.getItem("g2"));
    var a1 = parseInt(Math.random()*100)+1;
    if (age>=18){
        if(m1>70 && a1>70){
            let content = '';
            content += '<div>恭喜您被錄取了</div>';
            $("p").append(content);
        }else if(g2>40 && a1>90){
            let content = '';
            content += '<div>我們剛好缺一個主廚，恭喜您被錄取了。</div>';
            $("p").append(content);
        }else{
            let content = '';
            content += '<div>很抱歉，您並不符合我們的要求</div>';
            $("p").append(content);
        }
    }else{
        let content = '';
        content += '<div>很抱歉，本場所不雇傭童工</div>';
        $("p").append(content);
    }
    $('#train11').attr('disabled', false);
    $('#train12').attr('disabled', false);
    $('#train13').attr('disabled', false);
}

async function lucky(){
    $('#train11').attr('disabled', true);
    $('#train12').attr('disabled', true);
    $('#train13').attr('disabled', true);
    await delay(80);
    
    alert("2");
    $('#train11').attr('disabled', false);
    $('#train12').attr('disabled', false);
    $('#train13').attr('disabled', false);
}

async function swimmer(){
    $('#train11').attr('disabled', true);
    $('#train12').attr('disabled', true);
    $('#train13').attr('disabled', true);
    await delay(80);
    
    alert("2");
    $('#train11').attr('disabled', false);
    $('#train12').attr('disabled', false);
    $('#train13').attr('disabled', false);
}

async function study(){
    $('#train11').attr('disabled', true);
    $('#train12').attr('disabled', true);
    $('#train13').attr('disabled', true);
    await delay(80);
    
    alert("2");
    $('#train11').attr('disabled', false);
    $('#train12').attr('disabled', false);
    $('#train13').attr('disabled', false);
}