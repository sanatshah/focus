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
      document.getElementById("topicText").value = inputTopic;
    }
  );
}


chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
  if (response.msg = "checkTopicRes")
      document.getElementById("topicText").value = response.topic;
});
