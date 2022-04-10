async function waiter(){
    $('#train11').attr('disabled', true);
    $('#train12').attr('disabled', true);
    $('#train13').attr('disabled', true);
    await delay(80);
    
    alert("2");
    $('#train11').attr('disabled', false);
    $('#train12').attr('disabled', false);
    $('#train13').attr('disabled', false);
}

lucky()

swimmer()