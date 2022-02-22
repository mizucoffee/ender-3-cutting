import SerialPort, { parsers } from 'serialport'

async function main() {
  const ports = await SerialPort.list()
  const portPath = ports.find(port => port.path.includes('/dev/tty.usbmodem'))

  if (!portPath) return console.log('Not found')

  const port = new SerialPort(portPath.path, {
    baudRate: 115200,
    
  })
  const parser = port.pipe(new parsers.Readline({ delimiter: '\n' }))

  parser.on('data', line => {
    if(line == "ok"){
      console.log("ok")
    }
    console.log(line)
  })

  port.write("G28\n")
  port.write("G0 X50 Y0\n")
  port.write("G0 X50 Y50\n")
  port.write("G0 X0 Y50\n")
  port.write("G0 X0 Y0\n")
}

main()