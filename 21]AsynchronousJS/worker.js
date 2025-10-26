onmessage = function(data){    // data is the array of numbers sent from main thread
    const ans  = data.data.reduce((acc, item)=>acc+item,0);
    postMessage(ans); // ans ko main thread pe bhej diya
}