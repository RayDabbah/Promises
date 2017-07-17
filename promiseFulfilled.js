// var pro = require('es6-promise')

 function promise(FULFILLED){
return new Promise(function(fulfill, reject){
setTimeout(function(){fulfill(FULFILLED)}, 300)
})	
}
promise('FULFILLED!')
.then(function(FULFILLED){
	console.log(FULFILLED)
})

var newPromise = new Promise(function(fulfill, reject){
	setTimeout(function(){
		fulfill('FULFILLED TWICE!!')
	},1500)
});
newPromise.then(console.log)
function extraNewPromise(){
	return new Promise(function(fulfill, reject){
		setTimeout(function() {
			fulfill('EXTRA NEW IS FULFILLED TOO!')
		}, 2000)
	})
}

extraNewPromise().then(console.log)
