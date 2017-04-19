  chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){

    if (response.request == "getTopicProbability"){
    //returns probability that this page pertains to the topic

      var num = nlp('five-hundred and twenty');
      num.values().toNumber();
      sendResponse({value: "test"});
    }

  });
