// Not sure yet what this is accomplishing
function asyncThunk(a, b, cb){
    setTimeout(function(){
        cb(a + b);
    }, 500);
}

var thunk = function(cb){
    asyncThunk(18, 20, cb);
}

thunk(function(sum){
    console.log(sum)
})