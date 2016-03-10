var socket = io.connect(chat_server || "http://" + window.location.hostname + ":3334");
var myID;

$(function () {
    var time = new Date;
    var hour = time.getHours();
    if (hour <= 7 || hour >= 19) {
        $('#icon-chat').hide();
    }
    socket.emit('checkSession');
    $('#icon-chat').click(function () {
        if ($('#chat-wrapper').css('display') == 'none') {
            $('#chat-wrapper').show();
            $('.icon-chat').hide();
            $('#header-bar').show();
            var element = document.getElementById("inner");
            element.scrollTop = element.scrollHeight;
        } else {
            $('#chat-wrapper').hide();
        }
    });
    $('.chat-menu').click(function () {
        $('#chat-wrapper').hide();
        $('.icon-chat').show();
    });
});

socket.on('clearForm', function () {
    "use strict";
    $('#message-form').show();
    $('#input-form').show();
});

//Hiển thị thông báo của admin
socket.on('adminNotify', function (data) {
    $('#AdminNotify-content').show();
    $('#AdminNotify').empty();
    $('#AdminNotify').append(data.message);
});

//Sẵn sàng chat
socket.on('readyChat', function (data) {
    $('#name-form').hide();
    $('#message-form').show();
    $('#input-form').show();
    myID = data.id;
});

$(function () {
    $('#userMessage').on('keydown', function (key) {
        if (key.which == 13 && key.shiftKey) {
            //$('#userMessage').val($('#userMessage').val() + "<br/>");
        } else if (key.which == 13) {
            key.preventDefault();
            sendMessage();
        }
    })
});

socket.on('message', function (data) {
    data = JSON.parse(data);
    if (data.username) {
        if (data.type === "adminMessage") {
            $('#message-form').append(
                "<div class='message-wrapper " + data.type + "'>" +
                "<div class='circle-wrapper animated bounceIn'>" +
                " <img class='responsive-img' src='/frontend/techv3/assets/img/minhcuonglogo.png'>" +
                " </div> <div class='text-wrapper animated fadeIn'>" + data.message + "</div> </div>"
            )
            ;
        } else {
            $('#message-form').append(
                "<div class='message-wrapper " + data.type + "'>" +
                " <div class='circle-wrapper animated bounceIn'><img class='responsive-img' src='/frontend/techv3/assets/img/psyduck.png'></div>" +
                " <div class='text-wrapper animated fadeIn'>" + data.message + "</div> </div>"
            );
        }
    } else {
        $('#message-form').append(
            "<div class='message-wrapper " + data.type + "'>" +
            "<div class='circle-wrapper animated bounceIn'>" +
            " <img class='responsive-img' src='/frontend/techv3/assets/img/minhcuonglogo.png'>" +
            " </div> <div class='text-wrapper animated fadeIn'>" + data.message + "</div> </div>"
        );
    }
    var element = document.getElementById("inner");
    element.scrollTop = element.scrollHeight;
});

function stripHTML(text) {
    var regex = /(<([^>]+)>)/ig;
    return text.replace(regex, "");
}

var sendMessage = function () {
    var data = {
        message: stripHTML($('#userMessage').val()),
        type: 'userMessage',
        id: myID
    };
    socket.send(JSON.stringify(data));
    $('#userMessage').val('');
};

socket.on('getLogChatByUser', function (data) {
    data = JSON.parse(data);
    $('#message-form').html('');
    for (key in data) {
        if (data[key].username) {
            if (data[key].type === "adminMessage") {
                $('#message-form').append(
                    "<div class='message-wrapper " + data[key].type + "'>" +
                    "<div class='circle-wrapper animated bounceIn'>" +
                    " <img class='responsive-img' src='/frontend/techv3/assets/img/minhcuonglogo.png'>" +
                    " </div> <div class='text-wrapper animated fadeIn'>" + data[key].message + "</div> </div>"
                );
            } else {
                $('#message-form').append(
                    "<div class='message-wrapper " + data[key].type + "'>" +
                    " <div class='circle-wrapper animated bounceIn'><img class='responsive-img' src='/frontend/techv3/assets/img/psyduck.png'></div>" +
                    " <div class='text-wrapper animated fadeIn'>" + data[key].message + "</div> </div>"
                );
            }
        } else {
            $('#message-form').append(
                "<div class='message-wrapper " + data[key].type + "'>" +
                "<div class='circle-wrapper animated bounceIn'>" +
                " <img class='responsive-img' src='/frontend/techv3/assets/img/minhcuonglogo.png'>" +
                " </div> <div class='text-wrapper animated fadeIn'>" + data[key].message + "</div> </div>"
            );
        }
    }
    var element = document.getElementById("inner");
    element.scrollTop = element.scrollHeight;
});
