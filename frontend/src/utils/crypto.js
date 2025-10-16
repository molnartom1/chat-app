const key = await window.crypto.subtle.generateKey(
  { name: "AES-GCM", length: 256 },
  true,
  ["encrypt", "decrypt"]
);

export async function encrypt(message) {
  const enc = new TextEncoder().encode(message);
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const cipher = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, enc);
  return btoa(JSON.stringify({ iv: Array.from(iv), data: Array.from(new Uint8Array(cipher)) }));
}

export async function decrypt(payload) {
  const parsed = JSON.parse(atob(payload));
  const iv = new Uint8Array(parsed.iv);
  const data = new Uint8Array(parsed.data);
  const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, data);
  return new TextDecoder().decode(plain);
}