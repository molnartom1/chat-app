export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/ws") {
      const pair = new WebSocketPair();
      const [client, server] = Object.values(pair);
      handleSession(server);
      return new Response(null, { status: 101, webSocket: client });
    }
    return new Response("Chat Worker active 🚀");
  },
};

const sessions = new Set();

function handleSession(ws) {
  ws.accept();
  sessions.add(ws);

  ws.addEventListener("message", (msg) => {
    for (const s of sessions) s.send(msg.data);
  });

  ws.addEventListener("close", () => sessions.delete(ws));
}