
  //grab all text from document
  var allText = {};

  allText.p = [];
  var p = document.getElementsByTagName("p");
  for (var i=0; i<p.length; i++){
    allText.p.push(p[i].innerHTML);
  }

  allText.a = [];
  var a = document.getElementsByTagName("a");
  for (var i=0; i<a.length; i++){
    allText.a.push(a[i].innerHTML);
  }

  allText.button = [];
  var button = document.getElementsByTagName("button");
  for (var i=0; i<button.length; i++){
    allText.button.push(button[i].innerHTML);
  }

  allText.li = [];
  var li = document.getElementsByTagName("li");
  for (var i=0; i<li.length; i++){
    allText.li.push(li[i].innerHTML);
  }

  allText.h1 = [];
  var h1 = document.getElementsByTagName("h1");
  for (var i=0; i<h1.length; i++){
    allText.h1.push(h1[i].innerHTML);
  }

  allText.h2 = [];
  var h2 = document.getElementsByTagName("h2");
  for (var i=0; i<h2.length; i++){
    allText.h2.push(h2[i].innerHTML);
  }

  //send to nlp
  chrome.runtime.sendMessage({request: "getTopicProbability", value: allText},
    function (response){
      console.log(response.value);
    }
  );
