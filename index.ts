// const express = require("express");
// const app = express();
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const port = 8080;

// app.use(cors());

// app.use(bodyParser.json());

// app.get("/", (req, res) => {
//     console.log(req)
//     const values = {
//         name: "jg ssaaa",
//     };
//     return res.json(values);
// });

// app.get("/teacher", (req, res) => {
//     const values = {
//         name: "jg teacher!!",
//     };
//     return res.json(values);
// });

// const server = app.listen(8080, function () {
//     const host = server.address().address;
//     const port = server.address().port;

//     console.log("Server is working : PORT - ", port);
// });

const express1 = require("express");
const router = express1.Router();

router.get("/", (req, res) => {
    res.send({ response: "I am alive" }).status(200);
});

module.exports = router;


const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const port = process.env.PORT || 4001;
// const index = require("router");

const app = express();
app.use(cors());
app.use(router);

// app.all('*', function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//     );
//     next();
// });


const server = http.createServer(app);

const io = socketIo(server);

let interval;
//

io.on('connection', (socket) => {
    console.log(`Connected: ${socket.id}`);

    socket.on('disconnect', () =>
        console.log(`Disconnected: ${socket.id}`));

    socket.on('join', (room) => {
        console.log(`Socket ${socket.id} joining ${room}`);
        socket.join(room);
    });

    socket.on('chat', (payload) => {
        console.log('chat')
        console.log(payload)
        const { room, data } = payload;
        // console.log(`msg: ${message}, room: ${room}`);
        io.to(room).emit('chat', { ...data });
    });
});

//

// io.on("connection", (socket) => {
//     console.log("New client connected");

//     socket.on('chat-msg', (msg) => {
//         console.log('message', msg)
//         io.emit('chat-msg', msg)
//     })

//     if (interval) {
//         clearInterval(interval);
//     }

//     interval = setInterval(() => getApiAndEmit(socket), 1000);
//     socket.on("disconnect", () => {
//         console.log("Client disconnected");
//         clearInterval(interval);
//     });
// });

// const getApiAndEmit = socket => {
//     const response = new Date();
//     // Emitting a new message. Will be consumed by the client
//     socket.emit("FromAPI", response);
// };

server.listen(port, () => console.log(`Listening on port ${port}`));