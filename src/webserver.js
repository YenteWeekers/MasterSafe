let http= require('http');
let fs = require('fs')

let HTML = fs.readFileSync('index.html');



const { SerialPort } = require('serialport');

const p = SerialPort.list();
p.then((data)=>{


    const port = new SerialPort({ path: 'COM4', baudRate: 115200 })


    // port.on('readable', function () {
    //     // console.log('Data:', port.read())
    // })

// Switches the port into "flowing mode"
    let id ='';
    port.on('data', function (data) {
        data = new Buffer(data).toString('ascii');
        id += data;
        let res = data.charAt(data.length - 1);
        if(res === '\n') {
            // console.log('Data:', id);
            const SerialN = id.substring(id.length - 10);
            console.log(SerialN); // uty
            if(SerialN.trim() === "18219670"){
                console.log("sending");
                port.write("a");
            }
        }
    })

// Pipe the data into another stream (like a parser or standard out)
//     const lineStream = port.pipe(new Readline())


    // port.write('main screen turn on', function(err) {
    //     if (err) {
    //         return console.log('Error on write: ', err.message)
    //     }
    //     console.log('message written')
    // })

// Open errors will be emitted as an error event
    port.on('error', function(err) {
        console.log('Error: ', err.message)
    })
});


console.log("hoi")


// or

/*
// Create a port
const port = new SerialPort({ path: 'com3', baudRate: 9600 })

// Read data that is available but keep the stream in "paused mode"
port.on('readable', function () {
    console.log('Data:', port.read())
})

// Switches the port into "flowing mode"
port.on('data', function (data) {
    console.log('Data:', data)
})
*/
// Pipe the data into another stream (like a parser or standard out)
//const lineStream = port.pipe(new Readline())



// const parsers = SerialPort.parsers;
// const parser = new parsers.Readline({
//     delimiter: '\r\n'
// });
//
// let port = new SerialPort('COM3',{
//     baudRate: 9600,
// });
// /* SerialPort serialPort = new SerialPort("COMx", 9600); */
//
//
// port.pipe(parser);
// parser.on('data', function(data) {
//
//     console.log(data);
// });


 http.createServer(function (req, res){

     // TODO: write code that reads ID from the card


     // TODO: sent ID back to front-end
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(HTML);

}).listen(3000);