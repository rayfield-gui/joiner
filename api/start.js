export default function handler(req, res) {
  const { placeId, gameInstanceId } = req.query;

  if (!placeId || !gameInstanceId) {
    return res.status(400).json({ ok: false, error: "Missing placeId or gameInstanceId" });
  }

  // If you want to redirect somewhere, replace the JSON with res.redirect(302, targetUrl)
  return res.status(200).json({ ok: true, placeId, gameInstanceId, receivedAt: Date.now() });
}