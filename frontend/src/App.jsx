import { useState } from 'react';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import './index.css';

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center text-white">
      {!user ? <Login onLogin={setUser} /> : <ChatRoom user={user} />}
    </div>
  );
}