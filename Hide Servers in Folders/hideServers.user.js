// ==UserScript==
// @name         Hide Discord Servers in Folders
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Completely hides folders containing servers IF they are closed.
// @author       Rick Kayo rickkayo@gmail.com
// @match        *discordapp.com/*
// @require http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==


/* This will hide any and all closed folders in discord browser. You can also use this with BetterDiscord.
I'm using tampermonkey so this autoexecutes.
To unhide a folder, turn off the script, refresh, click on the folder icon to expand it, then you can turn the script back on. This only hides closed folders.
(function hideServers(){
    var element = document.querySelectorAll('[class^=closedFolderIconWrapper]')
    let i=0;
    $.each( element , function( i ) {
    $(this).parent().parent().parent().parent().parent().parent().attr('style','display:none;');
});
	setTimeout(hideServers,500);
})();
