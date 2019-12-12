// ==UserScript==
// @name         Hide Discord Blocked messages
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hides the 'blocked message' bar when you ignore someone. It will completely hide their messages.
// @match        *discordapp.com/*
// @require http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

(function hideMessages() {
	document.querySelectorAll("[class^=messageGroupBlocked]")
	.forEach(div => div.setAttribute("style", "display: none;"));
	setTimeout(hideMessages,500);
})();
