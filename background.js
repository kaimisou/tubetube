//chrome.webNavigation.onCompleted.addListener(function() {

	chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
	    if(changeInfo && changeInfo.status == "complete"){
	    //if( changeInfo.status == "complete"){
	        chrome.tabs.executeScript(tabId, {file: "jquery.js"}, function(){
	            chrome.tabs.executeScript(tabId, {file: "script.js"});
	        });
	    }
	});



//}, {url: [{urlMatches : 'https://www.youtube.com/'}]});

      
  