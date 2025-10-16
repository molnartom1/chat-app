// frontend/src/utils/crypto.js
const key = await window.crypto.subtle.generateKey(
  { name: "AES-GCM", length: 256 },
  true,
  ["encrypt", "decrypt"]
);
