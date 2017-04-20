  const NOUN = "noun";
  const VERB = "verb";
  const ADJECTIVE = "adjective";

  chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){

    if (response.request == "getTopicProbability"){
    //returns probability that this page pertains to the topic
      var allText = response.value;

      var nouns = getPart(allText, NOUN);
      var verbs = getPart(allText, VERB);

      sendResponse({value: verbs});

    }

  });

  function getPart(obj, type){
    var allTags = [];
    var count = 0;

    for (var tag in obj){
      var part = [];

      for(var i=0; i<obj[tag].length; i++){
        var text = nlp(obj[tag][i]);
        if (type === NOUN)
          part.push(text.nouns().out('array'));
        else if (type === VERB)
          part.push(text.verbs().out('array'));
      }

      allTags[count] = part;
      count = count + 1;
    }

    return allTags;
  }
