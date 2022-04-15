async function cookiesell(){
    $('#shop11').attr('disabled', true);
    $('#shop12').attr('disabled', true);
    await delay(10);
    mon=Number(localStorage.getItem("money"));
    coo=Number(localStorage.getItem("cookie"));
    if(mon>=10){
        mon=mon-10;
        coo=coo+1;
        localStorage.setItem("money",String(mon));
        localStorage.setItem("do",String(coo));
        $("#4").append("<div>您購買了一塊童軍餅乾。</div>");
    }else{
        $("#4").append("<div>您的金錢不夠。</div>");
    }
    $('#shop11').attr('disabled', false);
    $('#shop12').attr('disabled', false);
}