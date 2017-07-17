function delay(num) {
    return new Promise(function(resolve, error){
    setTimeout(resolve, num)
    });
}

delay(100)
    .then(function() {
        console.log('first then')
        return delay(1052);
    })
    .then(function(){
        console.log('second then')
        return delay(1106);
    })
    .then(function(){
        console.log('all done');
    })

    function arithmetic(number){
        return new Promise(function(resolve, reject){
            setTimeout(function(){resolve(number)}, 1000);
            console.log(resolve);
        })
    }

    arithmetic(26)
    .then(function(num1){
        x = num1 + 2;
        return arithmetic(52);
    })
    .then(function(num2){
        y = num2 * 2;
        return arithmetic(y + x);
    })
    .then(function(num3){
        console.log(num3);
    })
