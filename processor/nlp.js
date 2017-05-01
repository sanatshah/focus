  const NOUN = "noun";
  const VERB = "verb";
  const ADJECTIVE = "adjective";
  const TOPIC1 = "topic";

  chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){

    if (response.request == "getTopicProbability"){
    //returns probability that this page pertains to the topic

      chrome.storage.sync.get('topic', function(obj){

        var topic = obj.topic;

        //page information
        var allText = response.value;
        var nouns = getPart(allText, NOUN);
        var verbs = getPart(allText, VERB);

        //get potential wiki pages
        var xhr = new XMLHttpRequest();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + topic + "&limit=10&namespace=0&format=json";
        xhr.open("GET",url, false);
        xhr.send();
        var result = JSON.parse(xhr.responseText);
        result = result[3];

        var anotherresult = getAllText(result[0]);

        /*
        //get all nouns from wikipages
        var nounsWiki = [];
        for (var i = 0; i < result.length; i++){
          nounsWiki.push(getPart(getAllText(result[i]), NOUN));
        }*/

        sendResponse({value: anotherresult});

      });
      return true;
    }

  });

  function getAllText(link){
    var xhr = new XMLHttpRequest();
    xhr.open("GET",link, false);
    xhr.send();
    var result = xhr.responseText;
    return result;
  }


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
