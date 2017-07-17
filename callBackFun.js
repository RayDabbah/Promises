// Traditional nested callbacks.
setTimeout(function(){
    console.log('one')
    setTimeout(function(){
        console.log('two')
        setTimeout(function(){
            console.log('three')
        },1000);
    },1000);
}, 1000);

// Same result without nesting.
function four(cb){
    setTimeout(function(){
        console.log('four')
    }, 1000)
    setTimeout(cb, 1000);
}
function five(cb){
    console.log('five');
    setTimeout(cb, 1000);
}
function six(cb){
    console.log('six');
}

four(function(){
    five(six)
})
