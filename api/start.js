export default function handler(req, res) {
  const { placeId, gameInstanceId } = req.query;
  if (!placeId || !gameInstanceId) {
    return res.status(400).send("Missing placeId or gameInstanceId");
  }

  const robloxUri = `roblox://placeId=${encodeURIComponent(placeId)}&gameInstanceId=${encodeURIComponent(gameInstanceId)}`;
  const robloxUri2 = `roblox://experiences/start?placeId=${encodeURIComponent(placeId)}&gameInstanceId=${encodeURIComponent(gameInstanceId)}`;
  const webJoin = `https://www.roblox.com/games/start?placeId=${encodeURIComponent(placeId)}&gameInstanceId=${encodeURIComponent(gameInstanceId)}`;

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.status(200).send(`<!doctype html><html><head>
<meta http-equiv="refresh" content="0; url=${robloxUri}">
<script>
  // try new scheme first
  location.href = "${robloxUri2}";
  // then legacy scheme
  setTimeout(() => { location.href = "${robloxUri}"; }, 100);
  // fallback to web join (opens RobloxPlayer installer/launcher)
  setTimeout(() => { location.href = "${webJoin}"; }, 600);
</script>
</head><body>Joining server… If nothing happens, <a href="${webJoin}">click here</a>.</body></html>`);
}
