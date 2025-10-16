export default function Login({ onLogin }) {
  const login = () => {
    const name = prompt("Add meg a neved:");
    if (name) onLogin({ name });
  };
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4 font-bold">🔒 Chat App</h1>
      <button
        onClick={login}
        className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-500"
      >
        Belépés
      </button>
    </div>
  );
}