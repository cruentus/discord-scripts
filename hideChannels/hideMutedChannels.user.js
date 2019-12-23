// ==UserScript==
// @name         Hide Muted Channels
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Completely hide any muted channels from view
// @author       Rick Kayo rickkayo@gmail.com
// @match        *discordapp.com/*
// @require http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

// Hides all muted channels
(function hideChannels() {
	document.querySelectorAll("div[class*='modeMuted']")
	.forEach(div => div.setAttribute("style", "display: none;"));
	setTimeout(hideChannels,500);
})();
