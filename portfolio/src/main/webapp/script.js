// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings = "Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way. - Michael Scott";

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greetings;
}

/** Fetches the current date from the server and adds it to the page. */
async function showHi() {
  const responseFromServer = await fetch('/hi');
  const textFromResponse = await responseFromServer.text();

  const hiContainer = document.getElementById('hi-container');
  hiContainer.innerText = textFromResponse;
}

/** Fetches stats from the server and adds them to the page. */
async function getPhrases() {
  const responseFromServer = await fetch('/hi');
  // The json() function returns an object that contains fields that we can
  // reference to create HTML.
  const myPhrases = await responseFromServer.json();
  console.log(myPhrases);
}
