// script.js
// Sequential typing: each message types fully, stays visible, then the next appears below it.

document.addEventListener("DOMContentLoaded", () => {
  // --- highlight current page in nav (simple underline) ---
  const path = location.pathname.split("/").pop();
  const current = path === "" ? "index.html" : path;
  document.querySelectorAll("nav a").forEach((link) => {
    try {
      if (link.getAttribute("href") === current) link.style.textDecoration = "underline";
    } catch (e) { /* ignore */ }
  });

  // --- sequential typing block ---
  const dynamicText = document.getElementById("dynamicText");
  if (!dynamicText) return; // nothing to do if element missing

  const messages = [
    "✨ Master Physics with Real-Life Concepts!",
    "📘 Strengthen Your Basics in Science & Math.",
    "🧠 Learn Smarter with Hybrid Online + Offline Classes.",
    "🚀 Powered by Teachmint X Pro AI-Enabled Smart Panel!"
  ];

  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  (async function runTyping() {
    for (let i = 0; i < messages.length; i++) {
      const msg = messages[i];

      // create a line container, text span and cursor
      const lineDiv = document.createElement("div");
      lineDiv.className = "typed-line"; // uses your CSS for fade-in / styling

      const textSpan = document.createElement("span");
      textSpan.className = "typed-text-span";
      lineDiv.appendChild(textSpan);

      const cursorSpan = document.createElement("span");
      cursorSpan.className = "typing-cursor";
      cursorSpan.textContent = "|";
      lineDiv.appendChild(cursorSpan);

      dynamicText.appendChild(lineDiv);

      // type characters one-by-one into the textSpan
      for (let c = 0; c < msg.length; c++) {
        textSpan.textContent += msg.charAt(c);
        await sleep(55); // typing speed: 55ms per char (tweak if desired)
      }

      // finished this line: remove the cursor and pause a bit before next
      cursorSpan.remove();
      await sleep(450); // pause before next line begins (tweak if desired)
    }
    // All lines typed and visible permanently
  })();
});
