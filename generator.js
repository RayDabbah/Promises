function* gen(){
    console.log('Starting...')
    yield;
    console.log('I restarted!!')
}

var it = gen()

it.next()
console.log('Pausing the generator')
console.log('Still Pausing the generator')
it.next()
