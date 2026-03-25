function deepClone(array) {
  if (!Array.isArray(array)) return null;
  return JSON.parse(JSON.stringify(array));
}

/*
 fisher-yates shuffle algorithm
 https://www.youtube.com/watch?v=FGAUekwri1Q
*/

function shuffle(array) {
  if (!Array.isArray(array)) return null;
  let newArray = deepClone(array);
  for (let i = newArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function showNotification(message, type) {
  if (type !== 'success' && type !== 'error') return;
  const el = document.createElement("div");
  if(type === "success"){
    el.classList.add("green-notice", "notify-slide");
  }
  else if(type === "error"){
    el.classList.add("red-notice", "notify-slide");
  }
  el.innerText = message;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

export { shuffle, showNotification };