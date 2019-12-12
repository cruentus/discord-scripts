/*-------------------------------------
//
// Discord Script by Stephen Chapman
// GitHub: http://github.com/dsasmblr
// Blog: http://dsasmblr.com/blog
// Edited :Rick Kayo
// 12/11/2019
// Modified script to correctly select for newer discord.
-------------------------------------*/

// Description: This script hides the "blocked message" div.

/* -- SCRIPT START -- */

// Recursive IIFE (Immediately-Invoked Function Expression)
(function hideBlocked(){
	// Find all elements with class .message-group-blocked
	// Update: They now randomize the name, so we can use the following in order to select any classes STARTING with messageGroupBlocked
	document.querySelectorAll("[class^=messageGroupBlocked]")
	
	// For each element found, apply an inline style that hides that element
	.forEach(div => div.setAttribute("style", "display: none;"));

	// Run again every half-second 
	setTimeout(hideBlocked,500);
})();

