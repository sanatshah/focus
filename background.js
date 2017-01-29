
const TOPIC = "topic";
const CHECK_TOPIC = "checkTopic";
const SET_TOPIC = "setTopic";

chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){

  if (response.request == CHECK_TOPIC){
    chrome.storage.sync.get(TOPIC, function(obj){

      if(obj != null)
        chrome.runtime.sendMessage({msg: "checkTopic", topic: obj.topic});
      else
        chrome.runtime.sendMessage({msg: "checkTopic", topic: "no topic"});

    });
  }else if (response.request == SET_TOPIC){
    chrome.storage.sync.remove(TOPIC);

    var obj={};
    obj[TOPIC] = response.topic;
    chrome.storage.sync.set(obj);
  }

});


chrome.windows.onFocusChanged.addListener(function(){



});
