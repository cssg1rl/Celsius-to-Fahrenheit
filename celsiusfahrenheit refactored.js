

//Uses this formula to convert celsius to fahrenheit
function calculating(e, lambda) {
    let dir = e.id != 'input1';
    let result = document.getElementById('input' + (dir ? 1:2));
    if(isNaN((e.value)) || !e.value)
        result.value = '';
        else
            if(!dir)
                result.value = (e.value * 9/5 + 32).toFixed(3);
            else
                result.value = ((e.value - 32) * 5/9).toFixed(3);
}