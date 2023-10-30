function doSome (callback){ // provide argument
    console.log('callback function')
    callback(); // another func 
}

function result () {
    console.log(`another function`)
}

doSome(result);