# ClamHTML-BrowserAddon
ClamHTML - Browser Addon - part 2 of 2 
<br />
ClamHTML is an application that provides scanning of web resources using free an open source softwares, providing a safer web browsing experience.<br />
<br />
The Browser Addon is the second part of this 2 part system. It is a browser addon that redirects your internet traffic before it's rendered by your browser. It sends all those bytes over to the Loopback Server to get processed by the ClamAV antivirus engine. It waits for a result and then decides if it should procede or block the web resource.<br />
<br />
This application is easy to use, there are no settings. It's either running or it's not. ClamHTML will appear in the browsers extensions if it's installed.<br />
<br />
to run, type in the broswers url:<br />
about:debugging<br />
<br />
click "Load Temporary Add-on"<br />
doulble-click on the manifest.json file and its installed (temporary)
