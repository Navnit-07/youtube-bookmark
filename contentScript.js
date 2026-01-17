(() => {
  let player;
  let leftControls;
  let currentVideoId = null;
  let bookmarks = [];

  // Utilities
  const getTime = (seconds) => {
    const date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substring(11, 19);
  };

  const getVideoBookmarks = (videoId) =>
    new Promise((resolve) => {
      chrome.storage.local.get([videoId], (result) => {
        resolve(result[videoId] || []);
      });
    });

  const saveVideoBookmarks = (videoId, bookmarks) => {
    chrome.storage.local.set({ [videoId]: bookmarks });
  };

//   Bookmark Logic
  const addBookmark = async () => {
    if (!player || !currentVideoId) return;

    const time = Math.floor(player.currentTime);

    // prevent duplicates (±1s)
    if (bookmarks.some((b) => Math.abs(b.time - time) <= 1)) return;

    const newBookmark = {
      time,
      desc: `Bookmark at ${getTime(time)}`,
    };

    bookmarks = [...bookmarks, newBookmark].sort((a, b) => a.time - b.time);
    saveVideoBookmarks(currentVideoId, bookmarks);
  };

//   UI Injection
  const injectBookmarkButton = () => {
    if (document.querySelector(".bookmark-btn")) return;

    leftControls = document.querySelector(".ytp-left-controls");
    player = document.querySelector("video");

    if (!leftControls || !player) {
      setTimeout(injectBookmarkButton, 500);
      return;
    }

    const btn = document.createElement("button");
    btn.className = "ytp-button bookmark-btn";
    btn.title = "Save bookmark";

    btn.innerHTML = `
        <img 
            src="${chrome.runtime.getURL("assets/bookmark.png")}"
            class="bookmark-icon"
        />
    `;

    btn.addEventListener("click", addBookmark);
    leftControls.appendChild(btn);
  };

  //Message Handling 

  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === "NEW") {
      currentVideoId = msg.videoId;
      getVideoBookmarks(currentVideoId).then((data) => {
        bookmarks = data;
      });
      injectBookmarkButton();
    }

    if (msg.type === "PLAY") {
      if (player) player.currentTime = msg.value;
    }

    if (msg.type === "DELETE") {
      bookmarks = bookmarks.filter((b) => b.time !== msg.value);
      saveVideoBookmarks(currentVideoId, bookmarks);
      sendResponse(bookmarks);
    }

    return true;
  });

  injectBookmarkButton();
})();
