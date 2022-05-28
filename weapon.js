async function takeknife(){
    $('#tre13').attr('disabled', true);
    $('#tre23').attr('disabled', true);
    $('#tre33').attr('disabled', true);
    $('#tre43').attr('disabled', true);
    $('#tre53').attr('disabled', true);
    $('#tre26').attr('disabled', true);
    $('#tre36').attr('disabled', true);
    $('#tre46').attr('disabled', true);
    $('#tre56').attr('disabled', true);
    $('#tre16').attr('disabled', false);
    localStorage.setItem("weapon","knife");
}

async function takephone(){
    $('#tre13').attr('disabled', true);
    $('#tre23').attr('disabled', true);
    $('#tre33').attr('disabled', true);
    $('#tre43').attr('disabled', true);
    $('#tre53').attr('disabled', true);
    $('#tre26').attr('disabled', true);
    $('#tre36').attr('disabled', true);
    $('#tre46').attr('disabled', true);
    $('#tre56').attr('disabled', true);
    $('#tre26').attr('disabled', false);
    localStorage.setItem("weapon","phone");
}

async function takerobot(){
    $('#tre13').attr('disabled', true);
    $('#tre23').attr('disabled', true);
    $('#tre33').attr('disabled', true);
    $('#tre43').attr('disabled', true);
    $('#tre53').attr('disabled', true);
    $('#tre26').attr('disabled', true);
    $('#tre36').attr('disabled', true);
    $('#tre46').attr('disabled', true);
    $('#tre56').attr('disabled', true);
    $('#tre36').attr('disabled', false);
    localStorage.setItem("weapon","robot");
}

async function takegossip(){
    $('#tre13').attr('disabled', true);
    $('#tre23').attr('disabled', true);
    $('#tre33').attr('disabled', true);
    $('#tre43').attr('disabled', true);
    $('#tre53').attr('disabled', true);
    $('#tre26').attr('disabled', true);
    $('#tre36').attr('disabled', true);
    $('#tre46').attr('disabled', true);
    $('#tre56').attr('disabled', true);
    $('#tre46').attr('disabled', false);
    localStorage.setItem("weapon","gossip");
}

async function takekiller(){
    $('#tre13').attr('disabled', true);
    $('#tre23').attr('disabled', true);
    $('#tre33').attr('disabled', true);
    $('#tre43').attr('disabled', true);
    $('#tre53').attr('disabled', true);
    $('#tre26').attr('disabled', true);
    $('#tre36').attr('disabled', true);
    $('#tre46').attr('disabled', true);
    $('#tre56').attr('disabled', true);
    $('#tre56').attr('disabled', false);
    localStorage.setItem("weapon","killer");
}

async function downknife(){
    $('#tre13').attr('disabled', false);
    $('#tre23').attr('disabled', false);
    $('#tre33').attr('disabled', false);
    $('#tre43').attr('disabled', false);
    $('#tre53').attr('disabled', false);
    $('#tre16').attr('disabled', true);
    localStorage.setItem("weapon","0");
}

async function downphone(){
    $('#tre13').attr('disabled', false);
    $('#tre23').attr('disabled', false);
    $('#tre33').attr('disabled', false);
    $('#tre43').attr('disabled', false);
    $('#tre53').attr('disabled', false);
    $('#tre26').attr('disabled', true);
    localStorage.setItem("weapon","0");
}

async function downrobot(){
    $('#tre13').attr('disabled', false);
    $('#tre23').attr('disabled', false);
    $('#tre33').attr('disabled', false);
    $('#tre43').attr('disabled', false);
    $('#tre53').attr('disabled', false);
    $('#tre36').attr('disabled', true);
    localStorage.setItem("weapon","0");
}

async function downgossip(){
    $('#tre13').attr('disabled', false);
    $('#tre23').attr('disabled', false);
    $('#tre33').attr('disabled', false);
    $('#tre43').attr('disabled', false);
    $('#tre53').attr('disabled', false);
    $('#tre46').attr('disabled', true);
    localStorage.setItem("weapon","0");
}

async function downkiller(){
    $('#tre13').attr('disabled', false);
    $('#tre23').attr('disabled', false);
    $('#tre33').attr('disabled', false);
    $('#tre43').attr('disabled', false);
    $('#tre53').attr('disabled', false);
    $('#tre56').attr('disabled', true);
    localStorage.setItem("weapon","0");
}

async function takedenture(){
    $('#tre113').attr('disabled', true);
    $('#tre123').attr('disabled', true);
    $('#tre116').attr('disabled', false);
    localStorage.setItem("armor","denture");
}

async function downdenture(){
    $('#tre113').attr('disabled', false);
    $('#tre123').attr('disabled', false);
    $('#tre116').attr('disabled', true);
    localStorage.setItem("armor","0");
}

async function takehelmet(){
    $('#tre113').attr('disabled', true);
    $('#tre123').attr('disabled', true);
    $('#tre126').attr('disabled', false);
    localStorage.setItem("armor","helmet");
}

async function downhelmet(){
    $('#tre113').attr('disabled', false);
    $('#tre123').attr('disabled', false);
    $('#tre126').attr('disabled', true);
    localStorage.setItem("armor","0");
}

async function upknife(){
    $('#tre18').attr('disabled', true);
    await delay(0);
    var a=Number(localStorage.getItem("knife"));
    var woo=Number(localStorage.getItem("wool"));
    var gmk=Number(localStorage.getItem("gmilk"));
    var clo=Number(localStorage.getItem("cloth"));
    var gun=Number(localStorage.getItem("gunpow"));
    var l2=Number(localStorage.getItem("l2"));
    if (localStorage.getItem("weapon")=="gossip"){
        if(localStorage.getItem("gossip")>=11){
            l2=l2+Math.pow((Number(localStorage.getItem("gossip"))),3);
        }else{
            l2=l2+(Number(localStorage.getItem("gossip"))*10);
        }
    }
    var up=parseInt(Math.random()*101)+l2/100;
    if(a<10){
        if(woo>=Math.pow(a,3) && gmk>=Math.pow(a,2)*3){
            woo=woo-Math.pow(a,3);
            gmk=gmk-Math.pow(a,2)*3;
            localStorage.setItem("wool",String(woo));
            localStorage.setItem("gmilk",String(gmk));
            if(up<=10){
                localStorage.setItem("knife",String(a));
                $("#tre110").append("<div>很遺憾，升級失敗了。</div>");
            }else{
                localStorage.setItem("knife",String(a+1));
                $("#tre110").append("<div>恭喜你，升級成功！</div>");
            }
        }else{
            $("#tre110").append("<div>你的材料準備好了嗎？</div>");
        }
    }else if(a<20){
        if(woo>=Math.pow(a,2)*2 && gmk>=Math.pow(a,2) && clo>=Math.pow(a-8,3) && gun>=Math.pow(a-9,2)){
            woo=woo-Math.pow(a,2)*2;
            gmk=gmk-Math.pow(a,2);
            clo=clo-Math.pow(a-8,3);
            gun=gun-Math.pow(a-9,2);
            localStorage.setItem("wool",String(woo));
            localStorage.setItem("gmilk",String(gmk));
            localStorage.setItem("cloth",String(clo));
            localStorage.setItem("gunpow",String(gun));
            if(up<=10){
                localStorage.setItem("knife",String(a));
                $("#tre110").append("<div>很遺憾，升級失敗了。</div>");
            }else{
                localStorage.setItem("knife",String(a+1));
                $("#tre110").append("<div>恭喜你，升級成功！</div>");
            }
        }else{
            $("#tre110").append("<div>你的材料準備好了嗎？</div>");
        }
    }else{
        $("#tre110").append("<div>你的材料準備好了嗎？</div>");
    }
    $('#tre18').attr('disabled', false);
}

async function upphone(){
    $('#tre28').attr('disabled', true);
    await delay(0);
    var a=Number(localStorage.getItem("phone"));
    var woo=Number(localStorage.getItem("wool"));
    var ger=Number(localStorage.getItem("gear"));
    var l2=Number(localStorage.getItem("l2"));
    if (localStorage.getItem("weapon")=="gossip"){
        if(localStorage.getItem("gossip")>=11){
            l2=l2+Math.pow((Number(localStorage.getItem("gossip"))),3);
        }else{
            l2=l2+(Number(localStorage.getItem("gossip"))*10);
        }
    }
    var up=parseInt(Math.random()*101)+l2/100;
    if(a<10){
        if(woo>=Math.pow(a,4) && ger>=Math.pow(a,2)*2){
            woo=woo-Math.pow(a,4);
            ger=ger-Math.pow(a,2)*2;
            localStorage.setItem("wool",String(woo));
            localStorage.setItem("gear",String(ger));
            if(up<=10){
                localStorage.setItem("phone",String(a));
                $("#tre210").append("<div>很遺憾，升級失敗了。</div>");
            }else{
                localStorage.setItem("phone",String(a+1));
                $("#tre210").append("<div>恭喜你，升級成功！</div>");
            }
        }else{
            $("#tre210").append("<div>你的材料準備好了嗎？</div>");
        }
    }else{
        $("#tre210").append("<div>你的材料準備好了嗎？</div>");
    }
    $('#tre28').attr('disabled', false);
}

async function uprobot(){
    $('#tre38').attr('disabled', true);
    await delay(0);
    var a=Number(localStorage.getItem("robot"));
    var ger=Number(localStorage.getItem("gear"));
    var gra=Number(localStorage.getItem("grass"));
    var l2=Number(localStorage.getItem("l2"));
    if (localStorage.getItem("weapon")=="gossip"){
        if(localStorage.getItem("gossip")>=11){
            l2=l2+Math.pow((Number(localStorage.getItem("gossip"))),3);
        }else{
            l2=l2+(Number(localStorage.getItem("gossip"))*10);
        }
    }
    var up=parseInt(Math.random()*101)+l2/100;
    if(a<10){
        if(ger>=Math.pow(a,4) && gra>=Math.pow(a,2)*2){
            ger=ger-Math.pow(a,4);
            gra=gra-Math.pow(a,2)*2;
            localStorage.setItem("gear",String(ger));
            localStorage.setItem("grass",String(gra));
            if(up<=10){
                localStorage.setItem("robot",String(a));
                $("#tre310").append("<div>很遺憾，升級失敗了。</div>");
            }else{
                localStorage.setItem("robot",String(a+1));
                $("#tre310").append("<div>恭喜你，升級成功！</div>");
            }
        }else{
            $("#tre310").append("<div>你的材料準備好了嗎？</div>");
        }
    }else{
        $("#tre310").append("<div>你的材料準備好了嗎？</div>");
    }
    $('#tre38').attr('disabled', false);
}

async function upgossip(){
    $('#tre48').attr('disabled', true);
    await delay(0);
    var a=Number(localStorage.getItem("gossip"));
    var bkf=Number(localStorage.getItem("bkfish"));
    var wtf=Number(localStorage.getItem("wtfish"));
    var ston=Number(localStorage.getItem("stone"));
    var l2=Number(localStorage.getItem("l2"));
    if (localStorage.getItem("weapon")=="gossip"){
        if(localStorage.getItem("gossip")>=11){
            l2=l2+Math.pow((Number(localStorage.getItem("gossip"))),3);
        }else{
            l2=l2+(Number(localStorage.getItem("gossip"))*10);
        }
    }
    var up=parseInt(Math.random()*101)+l2/100;
    if(a<10){
        if(bkf>=Math.pow(a,2) && wtf>=Math.pow(a,2)){
            bkf=bkf-Math.pow(a,2);
            wtf=wtf-Math.pow(a,2);
            localStorage.setItem("bkfish",String(bkf));
            localStorage.setItem("wtfish",String(wtf));
            if(up<=10){
                localStorage.setItem("gossip",String(a));
                $("#tre410").append("<div>很遺憾，升級失敗了。</div>");
            }else{
                localStorage.setItem("gossip",String(a+1));
                $("#tre410").append("<div>恭喜你，升級成功！</div>");
            }
        }else{
            $("#tre410").append("<div>你的材料準備好了嗎？</div>");
        }
    }else if(a<20){
        if(bkf>=Math.pow(a,2) && wtf>=Math.pow(a,2) && ston>=(a-9)){
            bkf=bkf-Math.pow(a,2);
            wtf=wtf-Math.pow(a,2);
            ston=ston-(a-9)
            localStorage.setItem("bkfish",String(bkf));
            localStorage.setItem("wtfish",String(wtf));
            localStorage.getItem("stone",String(ston));
            if(up<=10){
                localStorage.setItem("gossip",String(a));
                $("#tre410").append("<div>很遺憾，升級失敗了。</div>");
            }else{
                localStorage.setItem("gossip",String(a+1));
                $("#tre410").append("<div>恭喜你，升級成功！</div>");
            }
        }else{
            $("#tre410").append("<div>你的材料準備好了嗎？</div>");
        }
    }else{
        $("#tre410").append("<div>你的材料準備好了嗎？</div>");
    }
    $('#tre48').attr('disabled', false);
}

async function updenture(){
    $('#tre118').attr('disabled', true);
    await delay(0);
    var a=Number(localStorage.getItem("denture"));
    var antl=Number(localStorage.getItem("antler"));
    var tee=Number(localStorage.getItem("teech"));
    var l2=Number(localStorage.getItem("l2"));
    if (localStorage.getItem("weapon")=="gossip"){
        if(localStorage.getItem("gossip")>=11){
            l2=l2+Math.pow((Number(localStorage.getItem("gossip"))),3);
        }else{
            l2=l2+(Number(localStorage.getItem("gossip"))*10);
        }
    }
    var up=parseInt(Math.random()*101)+l2/100;
    if(a<10){
        if(antl>=Math.pow(a,3) && tee>=Math.pow(a,2)*3){
            antl=antl-Math.pow(a,3);
            tee=tee-Math.pow(a,2)*3;
            localStorage.setItem("antler",String(antl));
            localStorage.setItem("teech",String(tee));
            if(up<=10){
                localStorage.setItem("denture",String(a));
                $("#tre1110").append("<div>很遺憾，升級失敗了。</div>");
            }else{
                localStorage.setItem("denture",String(a+1));
                $("#tre1110").append("<div>恭喜你，升級成功！</div>");
            }
        }else{
            $("#tre1110").append("<div>你的材料準備好了嗎？</div>");
        }
    }else{
        $("#tre1110").append("<div>你的材料準備好了嗎？</div>");
    }
    $('#tre118').attr('disabled', false);
}

async function uphelmet(){
    $('#tre128').attr('disabled', true);
    await delay(0);
    var a=Number(localStorage.getItem("helmet"));
    var gra=Number(localStorage.getItem("grass"));
    var pai=Number(localStorage.getItem("paint"));
    var l2=Number(localStorage.getItem("l2"));
    if (localStorage.getItem("weapon")=="gossip"){
        if(localStorage.getItem("gossip")>=11){
            l2=l2+Math.pow((Number(localStorage.getItem("gossip"))),3);
        }else{
            l2=l2+(Number(localStorage.getItem("gossip"))*10);
        }
    }
    var up=parseInt(Math.random()*101)+l2/100;
    if(a<10){
        if(gra>=Math.pow(a,3) && pai>=Math.pow(a,2)*3){
            gra=gra-Math.pow(a,3);
            pai=pai-Math.pow(a,2)*3;
            localStorage.setItem("grass",String(gra));
            localStorage.setItem("paint",String(pai));
            if(up<=10){
                localStorage.setItem("helmet",String(a));
                $("#tre1210").append("<div>很遺憾，升級失敗了。</div>");
            }else{
                localStorage.setItem("helmet",String(a+1));
                $("#tre1210").append("<div>恭喜你，升級成功！</div>");
            }
        }else{
            $("#tre1210").append("<div>你的材料準備好了嗎？</div>");
        }
    }else{
        $("#tre1210").append("<div>你的材料準備好了嗎？</div>");
    }
    $('#tre128').attr('disabled', false);
}