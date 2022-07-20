export default function generateRandomId() {
  const randomString = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));
  return randomString() + Date.now() + randomString();
}
