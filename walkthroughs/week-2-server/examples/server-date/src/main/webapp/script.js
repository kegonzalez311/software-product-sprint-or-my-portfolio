/** Fetches the current date from the server and adds it to the page. */
async function showGreet() {
  const responseFromServer = await fetch('/hi');
  const textFromResponse = await responseFromServer.text();

  const greetContainer = document.getElementById('greeting-container');
  greetContainer.innerText = textFromResponse;
}
