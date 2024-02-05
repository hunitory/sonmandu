<<<<<<< HEAD
<<<<<<< HEAD
var token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyNiIsImF1dGgiOiJST0xFX1VTRVIiLCJtZW1iZXJJZCI6MjYsImV4cCI6MTcwNzgxMTk1OH0.DI5txR6yZiVKwAP7X347aihp_4i6t35-KAwqW5DASgqv_n58ng54oP7gWzDf0pU8UBUo-t9RtpFbzLmYhsBj4w'

const stompClient = new StompJs.Client({
    brokerURL: 'ws://localhost:8080/chat-connection',
    connectHeaders: {
    "Authorization" : token
}
});

=======
=======
var token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiYXV0aCI6IlJPTEVfVVNFUiIsIm1lbWJlcklkIjoxLCJleHAiOjE3MDcxMjE1ODV9.rzOp-7C9Pdny1m7pkik_TBZ8uwaKmxZhk4QWSsr3J4XnUxY88UYQzdVMJG4_Rd46CTORcO2L160HYTz0FzO9fw'

>>>>>>> 75259de (feat: add WebSocketSecurity)
const stompClient = new StompJs.Client({
    brokerURL: 'ws://localhost:8080/chat-connection',
    connectHeaders: {
    "Authorization" : token
}
});

<<<<<<< HEAD
var token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiYXV0aCI6IlJPTEVfVVNFUiIsIm1lbWJlcklkIjoxLCJleHAiOjE3MDcxMjE1ODV9.rzOp-7C9Pdny1m7pkik_TBZ8uwaKmxZhk4QWSsr3J4XnUxY88UYQzdVMJG4_Rd46CTORcO2L160HYTz0FzO9fw'

>>>>>>> bb48a11 (feat: add WebSocket)
=======
>>>>>>> 75259de (feat: add WebSocketSecurity)
stompClient.onConnect = (frame) => {
    setConnected(true);
    console.log('Connected: ' + frame);
    stompClient.subscribe('/topic/sonmandu', (chat) => {
<<<<<<< HEAD
        showChatting(JSON.parse(chat.body).message);
    }, {'Authorization': token});
=======
        showGreeting(JSON.parse(chat.body).message);
<<<<<<< HEAD
    }, {'Authorization': 'dasd'});
>>>>>>> bb48a11 (feat: add WebSocket)
=======
    }, {'Authorization': token});
>>>>>>> 75259de (feat: add WebSocketSecurity)
};

stompClient.onWebSocketError = (error) => {
    console.error('Error with websocket', error);
};

stompClient.onStompError = (frame) => {
    console.error('Broker reported error: ' + frame.headers['message']);
    console.error('Additional details: ' + frame.body);
};

function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#greetings").html("");
}

function connect() {
    stompClient.activate();
}

function disconnect() {
    stompClient.deactivate();
    setConnected(false);
    console.log("Disconnected");
}

<<<<<<< HEAD
function sendMessage() {
    stompClient.publish({
        headers: {'Authorization': token},
        destination: "/app/sonmandu",
        body: JSON.stringify({
            'message': $("#message").val(),
            'handwritingId': 3
        })
    });
}

function showChatting(message) {
=======
function sendName() {
    stompClient.publish({
        headers: {'Authorization': token},
        destination: "/app/sonmandu",
        body: JSON.stringify({'message': $("#name").val()})
    });
}

function showGreeting(message) {
>>>>>>> bb48a11 (feat: add WebSocket)
    console.log(message)
    $("#greetings").append("<tr><td>" + message + "</td></tr>");
}

$(function () {
    $("form").on('submit', (e) => e.preventDefault());
    $( "#connect" ).click(() => connect());
    $( "#disconnect" ).click(() => disconnect());
<<<<<<< HEAD
    $( "#send" ).click(() => sendMessage());
=======
    $( "#send" ).click(() => sendName());
>>>>>>> bb48a11 (feat: add WebSocket)
});