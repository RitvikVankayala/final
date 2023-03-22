async function getMessage() {
  const response = await fetch("http://localhost:5000/api/train");
  const data = await response.json();
  return data;
}
export default getMessage;
