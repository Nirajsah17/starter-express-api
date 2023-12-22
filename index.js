// const express = require('express')
// const expressWs = require('express-ws');
// expressWs(app);

// const app = express()
// app.all('/', (req, res) => {
//     console.log("Just got a request!")
//     res.send('Yo!')
// })

// app.get('/whoami',(req,res)=>{
//     res.send("Hello I am signaling server");
// })
// app.listen(process.env.PORT || 3000)



const express = require('express');
const expressWs = require('express-ws');

const app = express();
expressWs(app);

// Regular route
app.get('/', (req, res) => {
  res.send('Hello, Its working');
});

// WebSocket route
app.ws('/ws', (ws, req) => {
  console.log('WebSocket connection established');

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    ws.send("Yes!!!")
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
