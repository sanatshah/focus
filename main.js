
/* Set the Topic */

var portID;

function getTopic(){
  chrome.runtime.sendMessage({request: "checkTopic"});
}

getTopic();

document.getElementById("topicClicked").onclick = function() {
  setTopic(document.getElementById("topicText").value);
}

function setTopic(inputTopic){
  chrome.runtime.sendMessage({request: "setTopic", topic: inputTopic},
    function (response){
      document.getElementById("div").textContent = inputTopic;
    }
  );
}


chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
  if (response.msg = "checkTopic")
      document.getElementById("div").textContent = response.topic;
});
