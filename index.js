function receivesAFunction(callback) {
    callback()
}
function returnsANamedFunction() {
    return function named(){
        console.log('something')
    }
}
function returnsAnAnonymousFunction() {
    return function() {
        console.log('I')
    }
}