var blocked = '<!DOCTYPE html>\
<html>\
\
<head>\
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\
<title>Alert! - ClamHTML Security</title>\
<style type="text/css">\
    tr.top, tr.bottom, td.left, td.right {\
      display: none;\
    }\
    body {\
      margin:0;\
      padding:0;\
      vertical-align:top;\
      font-family:"Segoe UI", Arial, Tahoma, Geneva, sans-serif;\
      font-size:13px;\
      line-height:18px;\
    }\
    a {\
      color:#059;\
      text-decoration:none;\
    }\
    a:hover{\
      text-decoration:underline;\
    }\
    p {\
      margin:0 0 10px;\
    }\
    .main {\
      margin:70px auto 0;\
    }\
    .main_t {\
      width:566px;\
      margin:0 auto;\
      border-spacing: 0;\
    }\
    tr.c {\
      margin: 0;\
      border: 0;\
    }\
    .container {\
      background-color:#ededed;\
    }\
    .footer td {\
      text-align:right;\
      color:#aaa;\
      font-size:11px;\
      line-height:16px;\
      padding-top:5px;\
    }\
    .footer a {\
      color:#666;\
    }\
    .prodhead {\
      background-color:#d5330e;\
      height:18px;\
      font-size:11px;\
      padding:0 10px 4px;\
      vertical-align:top;\
      color:white;\
      font-weight:bold;\
    }\
    .redhead {\
      height:54px;\
      background-color:#ededed;\
      border-bottom:1px solid #bbbcc4;\
      margin: 0 10px;\
    }\
    .redhead div {\
      height:38px;\
      line-height:38px;\
      font-size:18px;\
      color:#d91f00;\
      font-weight:bold;\
      white-space:nowrap;\
      margin:16px 0 0 20px;\
      padding:0 0 0 51px;\
      background:left center no-repeat url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4ggRAAc7sccU8QAAAy9JREFUWMPNl0tIVFEYx393dMYKKcqkNNSwrouok0QRBSlUFghWIC6KWlRQGPSgxypahS0iihbRol21iJbppqKgIKHaXSGIwxjUGI1RhjbZOHfmtpijzh1n7pxhHvbBXcw93zn85/e9zoUimBQUzXxFErNMCh5LwaFCzzOKROg5sBsIAltMi7F5ISQFSMEOYLt6tQY4OK+EUuhM2ydgs2nxs6yCVO7sAJ4BC9KWdwEvTavMhKRgENiWYemdabG1bIQUnT1APxDI4BIDOoBX+VIqJGTvgc0eLs9Mi70lJ6TotKncqfJw/QPsNC3elrTsVQhuJ8UYJCKQmJh9nNiM6yKgvaR9SAoMKTgArAdwog6rX3ykZdiZeRb3HEvdck4KVpRMkGnhADeBSgAqYCr4wZ3NX4KpP+uA4yURpOh0A00zCegDe3TE5WeHQ+lbj5ZEkKJzw7XHB/a3UC5BDVKwWwq9AqrMo7I6gfr0Nfu7W0BiLIqv2vWqCrhuWmwqGiFVWVczNcF4CpH4xK9sJ66Tgv06lHyahC4BGzOtxcIjrnAZmU+sAvpU2AsTpMr2QrKm5loqITscyuIFwHIpqCsGoROQvZfEf0y6CWUXtAI4WZAgKWgCLuY6IfF7XAkayfUXT0lBYyGErgCLPYehb7bU7dFQLgC1gPD6KPB50GnQuo5WzAqKh0M6NXLZ60riReiCGpDkIhSbJqQnqFUK2rJRqshCZy1wD/DrdDJnMkI8HCLyqh/smE4zbjQt7mvfh6TgAXBYd6wkJgEbjAVg+LW2fAVaTYvvOUMmBc1At64Yv7mB5jdfaRl2qLv7BBJa2+qBXt0cugYs1CITgYb7g1TWJvtddXsXS8/2kbsfA3BGClZ6ClKddF8+F2DfIvckDaxq1qVUA5zORahXlw6AEYDxgQeud2MPb3mNj3Q7kjWppaAGGFK3PG1zolDd1UOgsYWJp4+wPwfz+XSIqXwdmB68qYJOAXcovw2ZFsIVMilYBpxnfsyUgo70HFoP3kOvhOao0M3JoU7Vue0MGwLAEjVKbOAvEAem1HqUZG0ZKd3YnzYRAkBE7UH5x4GoafGa/9X+ARm+A2OM+F8GAAAAAElFTkSuQmCC");\
    }\
    .content {\
      margin:20px 20px 20px 30px;\
    }\
    .rtop *, .rbottom * {\
      display: block;\
      height: 1px;\
      overflow: hidden;\
      background:#d5330e;\
    }\
    .rbottom * { background:#ededed; }\
    .r1 { margin: 0 4px; }\
    .r2 { margin: 0 2px; }\
    .r3 { margin: 0 1px; height:2px; }\
    .content td {\
      padding-bottom:12px;\
      vertical-align:top;\
    }\
    .content table {\
      border-spacing: 0;\
    }\
    .content td.c1 {\
      padding-right:10px;\
      white-space:nowrap;\
    }\
    .content td.c2 span.red {\
      color:#d91f00;\
    }\
    .content td.c3 {\
      font-size: large;\
      text-align: center;\
    }\
    td, tr {\
      padding: 0;\
    }\
</style>\
</head>\
\
<body>\
  <div class="main">\
    <table class="main_t">\
      <tr class="top"></tr>\
      <tr><td><span class="rtop"><span class="r1"></span> <span class="r2"></span> <span class="r3"></span></span></td></tr>\
      <tr class="c">\
        <td class="left">&nbsp;</td>\
        <td class="container">\
            <div class="prodhead">ClamHTML Security</div>\
            <div class="redhead %redhead_ex%">\
              <div>ACCESS DENIED</div>\
            </div>\
            <div class="content">\
              <table>\
                <tr>\
                  <td><b>Details:</b></td>\
                </tr>\
                <tr>\
                  <td class="c1">Web page:</td>\
                  <td class="c2"><span class="red">{PageUrl}</span></td>\
                </tr>\
                <tr>\
                  <td class="c1">Threat:</td>\
                  <td class="c2"><span class="red">{VirusName}</span></td>\
                </tr>\
                <tr>\
                  <td></td>\
                  <td class="c3">Access to the web page/resource was blocked by ClamHTML Security.</td>\
                </tr>\
              </table>\
            </div>\
        </td>\
        <td class="right">&nbsp;</td>\
      </tr>\
      <tr class="bottom">\
        <td>\
          <div class="bl"></div>\
        </td>\
        <td>&nbsp;</td>\
        <td>\
          <div class="br"></div>\
        </td>\
      </tr>\
      <tr>\
        <td><span class="rbottom"><span class="r3"></span> <span class="r2"></span> <span class="r1"></span></span></td>\
      </tr>\
      <tr class="footer">\
        <td class="left">&nbsp;</td>\
        <td><a href="https://github.com/clamhtml/">Clam HTML on Github</a> &nbsp;|&nbsp; <a href="https://www.clamav.net/documents/clamav-community-threat-tracking-system">ClamAV Community Threat Tracking System</a> &nbsp;|&nbsp; <a href="https://www.clamav.net/">www.clamav.net</a></td>\
        <td class="right">&nbsp;</td>\
      </tr>\
    </table>\
  </div>\
</body>\
\
</html>';

function cat(a, b){
    var c = new (a.constructor)(a.length + b.length);
    c.set(a, 0);
    c.set(b, a.length);
    return c;
}

browser.webRequest.onBeforeRequest.addListener(
  function (details) {
    if( /^https?:\/\/127\.0\.0\.1:8080\//.test(details.url) || /^moz-extension:\/\//.test(details.documentUrl) )
      return {cancel: false};

    let filter = browser.webRequest.filterResponseData(details.requestId);
    let encoder = new TextEncoder();
    let encstr = new Uint8Array();

    filter.ondata = async event => {
      encstr = cat(encstr, new Uint8Array(event.data));
    };
    
    filter.onstop = async event => {
      let rslt = "";
      if(encstr.length != 0)
        rslt = await fetch('http://127.0.0.1:8080/', {
          headers: {
            'Accept': 'application/octet-stream',
            'Content-Type': 'application/octet-stream'
          },
          method: "POST",
          body: encstr
        }).then(res => {
          return res.text();
        }).catch((err) => {
          console.log(err);
          return err;
        });
      else
        rslt = "stream: EMPTY\0";

      if(rslt == "stream: OK\0"){
        filter.write(encstr);
      }else{
        let str = blocked.replace(/\{PageUrl\}/g, details.url);
        str = str.replace(/\{VirusName\}/g, rslt);
        filter.write(encoder.encode(str));
      }
      filter.disconnect();
    }
    return {};
  },
  {urls: ["<all_urls>"]},
  ["blocking", "requestBody"]
);
