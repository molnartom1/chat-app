import { useEffect, useState } from 'react';
import { encrypt, decrypt } from '../utils/crypto';

export default function ChatRoom({ user }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const socket = new WebSocket(import.meta.env.VITE_WS_URL);

  useEffect(() => {
    socket.onmessage = async (event) => {
      const data = JSON.parse(event.data);
      const decrypted = await decrypt(data.text);
      setMessages((prev) => [...prev, { ...data, text: decrypted }]);
    };
  }, []);

  async function send() {
    if (!text) return;
    const encrypted = await encrypt(text);
    socket.send(JSON.stringify({ user: user.name, text: encrypted }));
    setText('');
  }

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-96">
      <h2 className="text-xl mb-2">Szoba</h2>
      <div className="h-64 overflow-y-auto border border-gray-700 p-2 mb-3">
        {messages.map((m, i) => (
          <p key={i}><b>{m.user}:</b> {m.text}</p>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 p-2 bg-gray-700 rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Írj üzenetet..."
        />
        <button onClick={send} className="bg-blue-600 px-3 rounded">
          ➤
        </button>
      </div>
    </div>
  );
}