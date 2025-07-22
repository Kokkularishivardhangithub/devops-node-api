const lines = document.querySelectorAll('.code');
let i = 0;

function revealLine() {
  if (i < lines.length) {
    const block = lines[i];
    const text = block.getAttribute('data-code');
    let j = 0;
    block.style.opacity = 1;
    block.innerHTML = "";

    const interval = setInterval(() => {
      block.innerHTML += text[j] === "\n" ? "<br>" : text[j];
      j++;
      if (j >= text.length) {
        clearInterval(interval);
        i++;
        setTimeout(revealLine, 1000);
      }
    }, 25);
  }
}

revealLine();
