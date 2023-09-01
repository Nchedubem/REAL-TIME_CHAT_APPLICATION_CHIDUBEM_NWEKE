let messages = [];

function sendMessage(senderId) {
  const message = document.getElementById(senderId).value;
  messages.push({
    sender: senderId,
    message: message
  });

  document.getElementById(senderId).value = "";

  updateMessages();
}


function updateMessages() {
  let messagesElement = document.getElementById("messages");
  messagesElement.innerHTML = "";

  for (let message of messages) {
    let liElement = document.createElement("li");
    liElement.textContent = message.sender + ": " + message.message;
    messagesElement.appendChild(liElement);
  }
}

document.getElementById("send1").addEventListener("click", function() {
  sendMessage("sender1");
});
document.getElementById("send2").addEventListener("click", function() {
  sendMessage("sender2");
});

messages.push({
  sender: "Sender 1",
  message: "Hello, world!"
});
messages.push({
  sender: "Sender 2",
  message: "Hi!"
});

function saveMessages() {
  localStorage.setItem("messages", JSON.stringify(messages));
}

function loadMessages() {
  let messagesString = localStorage.getItem("messages");
  if (messagesString) {
    messages = JSON.parse(messagesString);
  }
}


window.addEventListener("beforeunload", saveMessages);

loadMessages();
