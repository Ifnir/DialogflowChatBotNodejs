var socket = require('socket.io-client')

socket.on('connect', function(){
    console.log('connected')
})
socket.on('event', function(data){
    console.log('event')
})
socket.on('disconnect', function(){
    console.log('disc')
})

