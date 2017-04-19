
  //grab all text from document
  var allText = {};
  allText.p = document.getElementsByTagName("p");
  allText.a = document.getElementsByTagName("a");
  allText.button = document.getElementsByTagName("button");
  allText.li = document.getElementsByTagName("li");
  allText.h1 = document.getElementsByTagName("h1");
  allText.h2 = document.getElementsByTagName("h2");
  allText.h3 = document.getElementsByTagName("h3");
  allText.h4 = document.getElementsByTagName("h4");

  //send to nlp
  chrome.runtime.sendMessage({request: "getTopicProbability", value: allText},
    function (response){
      alert("got response" + response);
    }
  );
