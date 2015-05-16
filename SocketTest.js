
if(!window.WebSocket){
    document.body.innerHTML ='Web socket is not supported!';
}

var socket = new WebSocket("ws://echo.websocket.org/");

var my_message;

function messageFocusOut(){
    my_message = document.forms.form1.message.value;
}

function btnSend(){
    var outMessage = my_message;
    socket.send(outMessage);
    return false;
};

function btnSendMore(){
    document.forms.form1.message.value = null;
};

socket.onmessage = function(event){
    var inMessage = event.data;
    showMessage(inMessage);
};

function showMessage(message){
    var messageElement = document.createElement('div');
    messageElement.appendChild(document.createTextNode(message));
    document.getElementById('subscribe').appendChild(messageElement);
}