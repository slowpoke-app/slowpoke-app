//three-step process:
// 1 -- user clicks icon; icon then turns a different color to indicate it's 'listening' to the user's selections
// 2 -- user selects text on the webpage
// 3 -- fly-out appears next to selected text (flyout generated)
// 4 -- user picks list from dropdown/list/animation
// 5 -- user clicks submit
// 6 -- user receives visual confirmation submission went through
//----------------------------------------------------------------------

var enable, widget, submit, checkStatus

function iconChange() {
//on user 'click' icon is replaced with new icon (same icon, but different color)
//below is modelled off of animal-crossing-music, available here: https://github.com/andrewrabon/animal-crossing-music/blob/master/extension.js
	chrome.browserAction.onClicked.addListener(function() {
  	var callback = function() {
    	checkStatus();
    	if (audio.paused) {
      	audio.play();
      	updateTime();
      	updateText(currentTime, day);
    	}
    	else {
      	audio.pause();
      	updateText(-1, day);
    	}
  	};
	};

function getText() {
//get the selection and store it in a variable
	window.getSelection().toString()

};

function generateFlyout() {
	//generate a little flyout, which can be a simple dropdown list of logical fallacy items
};

function userSubmit() {
	//store the user's selected item, along with the selected text, timestamp, and user ID (if we decide to register users)
	//in our database.
};

function generateConfirmation() {
	//generate text to say 'Thank you for your submission.'
}