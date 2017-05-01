
const TOPIC = "topic";
const CHECK_TOPIC = "checkTopic";
const SET_TOPIC = "setTopic";

chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){

  if (response.request == CHECK_TOPIC){
    chrome.storage.sync.get('topic', function(obj){

      if(obj != null)
        chrome.runtime.sendMessage({msg: "checkTopicRes", topic: obj.topic});
      else
        chrome.runtime.sendMessage({msg: "checkTopicRes", topic: "no topic"});

    });
  }else if (response.request == SET_TOPIC){
    chrome.storage.sync.remove('topic');
    chrome.storage.sync.set({'topic': response.topic}, function() {
      sendResponse({value: "Topic updated."});
    });
  }

  return true;
});
