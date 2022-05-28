async function cookiebuy(){
    $('#shop11').attr('disabled', true);
    $('#shop12').attr('disabled', true);
    await delay(0);
    mon=Number(localStorage.getItem("money"));
    coo=Number(localStorage.getItem("cookie"));
    if(mon>=10){
        mon=mon-10;
        coo=coo+1;
        localStorage.setItem("money",String(mon));
        localStorage.setItem("cookie",String(coo));
        $("#4").append("<div>您購買了一塊童軍餅乾。</div>");
    }else{
        $("#4").append("<div>您的金錢不夠。</div>");
    }
    $('#shop11').attr('disabled', false);
    $('#shop12').attr('disabled', false);
}

async function cookiesell(){
    $('#shop11').attr('disabled', true);
    $('#shop12').attr('disabled', true);
    await delay(0);
    mon=Number(localStorage.getItem("money"));
    coo=Number(localStorage.getItem("cookie"));
    if(coo>=1){
        mon=mon+5;
        coo=coo-1;
        localStorage.setItem("money",String(mon));
        localStorage.setItem("cookie",String(coo));
        $("#4").append("<div>您販售了一塊童軍餅乾。</div>");
    }else{
        $("#4").append("<div>您似乎沒有這麼多童軍餅乾。</div>");
    }
    $('#shop11').attr('disabled', false);
    $('#shop12').attr('disabled', false);
}

async function cookiebox(){
    $('#shop21').attr('disabled', true);
    await delay(0);
    mon=Number(localStorage.getItem("money"));
    coo=Number(localStorage.getItem("cookie"));
    if(mon>=50){
        mon=mon-50;
        add=parseInt(Math.random()*5)+5;
        coo=coo+add;
        localStorage.setItem("money",String(mon));
        localStorage.setItem("cookie",String(coo));
        $("#4").append("<div>您購買了一份月餅禮盒，裡面裝有"+String(add)+"塊餅乾。</div>");
    }else{
        $("#4").append("<div>您的金錢不夠。</div>");
    }
    $('#shop21').attr('disabled', false);
}

async function oldknife(){
    $('#shop111').attr('disabled', true);
    await delay(0);
    mon=Number(localStorage.getItem("money"));
    if(mon>=1000){
        mon=mon-1000;
        localStorage.setItem("money",String(mon));
        localStorage.setItem("knife",1);
        shop111.style.display='none';
        knifeshop.style.display='block';
        $("#4").append("<div>歡迎使用我們的產品。</div>");
    }else{
        $("#4").append("<div>您的金錢不夠。</div>");
    }
    $('#shop111').attr('disabled', false);
}

async function newphone(){
    $('#shop121').attr('disabled', true);
    await delay(0);
    mon=Number(localStorage.getItem("money"));
    if(mon>=5000){
        mon=mon-5000;
        localStorage.setItem("money",String(mon));
        localStorage.setItem("phone",1);
        shop121.style.display='none';
        phoneshop.style.display='block';
        $("#4").append("<div>歡迎使用我們的產品。</div>");
    }else{
        $("#4").append("<div>您的金錢不夠。</div>");
    }
    $('#shop121').attr('disabled', false);
}

async function treatrobot(){
    $('#shop131').attr('disabled', true);
    await delay(0);
    mon=Number(localStorage.getItem("money"));
    if(mon>=10000){
        mon=mon-10000;
        localStorage.setItem("money",String(mon));
        localStorage.setItem("robot",1);
        shop131.style.display='none';
        robotshop.style.display='block';
        $("#4").append("<div>歡迎使用我們的產品。</div>");
    }else{
        $("#4").append("<div>您的金錢不夠。</div>");
    }
    $('#shop131').attr('disabled', false);
}

async function gossip(){
    $('#shop141').attr('disabled', true);
    await delay(0);
    mon=Number(localStorage.getItem("money"));
    if(mon>=15000){
        mon=mon-15000;
        localStorage.setItem("money",String(mon));
        localStorage.setItem("gossip",1);
        shop141.style.display='none';
        robotshop.style.display='block';
        $("#4").append("<div>歡迎使用我們的產品。</div>");
    }else{
        $("#4").append("<div>您的金錢不夠。</div>");
    }
    $('#shop141').attr('disabled', false);
}



async function denture(){
    $('#shop211').attr('disabled', true);
    await delay(0);
    mon=Number(localStorage.getItem("money"));
    if(mon>=3000){
        mon=mon-3000;
        localStorage.setItem("money",String(mon));
        localStorage.setItem("denture",1);
        shop211.style.display='none';
        dentureshop.style.display='block';
        $("#4").append("<div>歡迎使用我們的產品。</div>");
    }else{
        $("#4").append("<div>您的金錢不夠。</div>");
    }
    $('#shop211').attr('disabled', false);
}

async function helmet(){
    $('#shop221').attr('disabled', true);
    await delay(0);
    mon=Number(localStorage.getItem("money"));
    if(mon>=12000){
        mon=mon-12000;
        localStorage.setItem("money",String(mon));
        localStorage.setItem("helmet",1);
        shop221.style.display='none';
        dentureshop.style.display='block';
        $("#4").append("<div>歡迎使用我們的產品。</div>");
    }else{
        $("#4").append("<div>您的金錢不夠。</div>");
    }
    $('#shop221').attr('disabled', false);
}


async function woolbuy(){
    $('#shop31').attr('disabled', true);
    $('#shop32').attr('disabled', true);
    await delay(0);
    mon=Number(localStorage.getItem("money"));
    woo=Number(localStorage.getItem("wool"));
    if(mon>=30){
        mon=mon-30;
        woo=woo+1;
        localStorage.setItem("money",String(mon));
        localStorage.setItem("wool",String(woo));
        $("#4").append("<div>您購買了一份高級羊毛。</div>");
    }else{
        $("#4").append("<div>您的金錢不夠。</div>");
    }
    $('#shop31').attr('disabled', false);
    $('#shop32').attr('disabled', false);
}

async function woolsell(){
    $('#shop31').attr('disabled', true);
    $('#shop32').attr('disabled', true);
    await delay(0);
    mon=Number(localStorage.getItem("money"));
    woo=Number(localStorage.getItem("wool"));
    if(woo>=1){
        mon=mon+15;
        woo=woo-1;
        localStorage.setItem("money",String(mon));
        localStorage.setItem("wool",String(woo));
        $("#4").append("<div>您販售了一份高級羊毛。</div>");
    }else{
        $("#4").append("<div>您似乎沒有這麼多高級羊毛。</div>");
    }
    $('#shop31').attr('disabled', false);
    $('#shop32').attr('disabled', false);
}

async function gmilkbuy(){
    $('#shop41').attr('disabled', true);
    $('#shop42').attr('disabled', true);
    await delay(0);
    mon=Number(localStorage.getItem("money"));
    gmk=Number(localStorage.getItem("gmilk"));
    if(mon>=50){
        mon=mon-50;
        gmk=gmk+1;
        localStorage.setItem("money",String(mon));
        localStorage.setItem("gmilk",String(gmk));
        $("#4").append("<div>您購買了一份山羊奶。</div>");
    }else{
        $("#4").append("<div>您的金錢不夠。</div>");
    }
    $('#shop41').attr('disabled', false);
    $('#shop42').attr('disabled', false);
}

async function gmilksell(){
    $('#shop41').attr('disabled', true);
    $('#shop42').attr('disabled', true);
    await delay(0);
    mon=Number(localStorage.getItem("money"));
    gmk=Number(localStorage.getItem("gmilk"));
    if(gmk>=1){
        mon=mon+25;
        gmk=gmk-1;
        localStorage.setItem("money",String(mon));
        localStorage.setItem("gmilk",String(gmk));
        $("#4").append("<div>您販售了一份山羊奶。</div>");
    }else{
        $("#4").append("<div>您似乎沒有這麼多山羊奶。</div>");
    }
    $('#shop41').attr('disabled', false);
    $('#shop42').attr('disabled', false);
}

async function antlerbuy(){
    $('#shop51').attr('disabled', true);
    $('#shop52').attr('disabled', true);
    await delay(0);
    mon=Number(localStorage.getItem("money"));
    antl=Number(localStorage.getItem("antler"));
    if(mon>=500){
        mon=mon-500;
        antl=antl+1;
        localStorage.setItem("money",String(mon));
        localStorage.setItem("antler",String(antl));
        $("#4").append("<div>您購買了一份鹿茸。</div>");
    }else{
        $("#4").append("<div>您的金錢不夠。</div>");
    }
    $('#shop51').attr('disabled', false);
    $('#shop52').attr('disabled', false);
}

async function antlersell(){
    $('#shop51').attr('disabled', true);
    $('#shop52').attr('disabled', true);
    await delay(0);
    mon=Number(localStorage.getItem("money"));
    antl=Number(localStorage.getItem("antler"));
    if(antl>=1){
        mon=mon+250;
        antl=antl-1;
        localStorage.setItem("money",String(mon));
        localStorage.setItem("antler",String(antl));
        $("#4").append("<div>您販售了一份鹿茸。</div>");
    }else{
        $("#4").append("<div>您似乎沒有這麼多鹿茸。</div>");
    }
    $('#shop51').attr('disabled', false);
    $('#shop52').attr('disabled', false);
}

async function tofubuy(){
    $('#shop61').attr('disabled', true);
    $('#shop62').attr('disabled', true);
    await delay(0);
    mon=Number(localStorage.getItem("money"));
    tofu=Number(localStorage.getItem("tofu"));
    if(mon>=800){
        mon=mon-800;
        tofu=tofu+1;
        localStorage.setItem("money",String(mon));
        localStorage.setItem("tofu",String(tofu));
        $("#4").append("<div>您購買了一份臭豆腐。</div>");
    }else{
        $("#4").append("<div>您的金錢不夠。</div>");
    }
    $('#shop61').attr('disabled', false);
    $('#shop62').attr('disabled', false);
}

async function tofusell(){
    $('#shop61').attr('disabled', true);
    $('#shop62').attr('disabled', true);
    await delay(0);
    mon=Number(localStorage.getItem("money"));
    tofu=Number(localStorage.getItem("tofu"));
    if(tofu>=1){
        mon=mon+400;
        tofu=tofu-1;
        localStorage.setItem("money",String(mon));
        localStorage.setItem("tofu",String(tofu));
        $("#4").append("<div>您販售了一份臭豆腐。</div>");
    }else{
        $("#4").append("<div>您似乎沒有這麼多臭豆腐。</div>");
    }
    $('#shop61').attr('disabled', false);
    $('#shop62').attr('disabled', false);
}

async function gearbuy(){
    $('#shop71').attr('disabled', true);
    $('#shop72').attr('disabled', true);
    await delay(0);
    mon=Number(localStorage.getItem("money"));
    ger=Number(localStorage.getItem("gear"));
    if(mon>=1000){
        mon=mon-1000;
        ger=ger+1;
        localStorage.setItem("money",String(mon));
        localStorage.setItem("gear",String(ger));
        $("#4").append("<div>您購買了一份合金齒輪。</div>");
    }else{
        $("#4").append("<div>您的金錢不夠。</div>");
    }
    $('#shop71').attr('disabled', false);
    $('#shop72').attr('disabled', false);
}

async function gearsell(){
    $('#shop71').attr('disabled', true);
    $('#shop72').attr('disabled', true);
    await delay(0);
    mon=Number(localStorage.getItem("money"));
    ger=Number(localStorage.getItem("gear"));
    if(ger>=1){
        mon=mon+500;
        ger=ger-1;
        localStorage.setItem("money",String(mon));
        localStorage.setItem("gear",String(ger));
        $("#4").append("<div>您販售了一份合金齒輪。</div>");
    }else{
        $("#4").append("<div>您似乎沒有這麼多合金齒輪。</div>");
    }
    $('#shop71').attr('disabled', false);
    $('#shop72').attr('disabled', false);
}

