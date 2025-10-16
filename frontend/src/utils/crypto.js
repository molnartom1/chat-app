// frontend/src/utils/crypto.js
// Secure AES-GCM encryption/decryption helper for Chat App
// ✅ Cloudflare-compatible (no top-level await)

let key; // will be initialized lazily

async function initKey() {
  if (!key) {
    key = await window.crypto.subtle.generateKey(
      { name: "AES-GCM", length: 256 },
      true,
      ["encrypt", "decrypt"]
    );
  }
  return key;
}

export async function encrypt(message) {
  const k = await initKey();
  const enc = new TextEncoder().encode(message);
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const cipher = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, k, enc);

  return btoa(
    JSON.stringify({
      iv: Array.from(iv),
      data: Array.from(new Uint8Array(cipher))
    })
  );
}

export async function decrypt(payload) {
  const k = await initKey();
  const parsed = JSON.parse(atob(payload));
  const iv = new Uint8Array(parsed.iv);
  const data = new Uint8Array(parsed.data);
  const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, k, data);
  return new TextDecoder().decode(plain);
}
