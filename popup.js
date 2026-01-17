import { getActiveTabURL } from "./utils.js";

const bookmarksContainer = document.getElementById("bookmarks");
const emptyState = document.getElementById("empty-state");

const createActionButton = (icon, title, onClick) => {
  const btn = document.createElement("button");
  btn.className = "action-btn";
  btn.title = title;

  const img = document.createElement("img");
  img.src = `assets/${icon}.png`;
  img.alt = title;

  btn.appendChild(img);
  btn.addEventListener("click", onClick);

  return btn;
};

const createBookmarkElement = (bookmark) => {
  const item = document.createElement("div");
  item.className = "bookmark";
  item.dataset.time = bookmark.time;

  const info = document.createElement("div");
  info.className = "bookmark-info";

  const time = document.createElement("div");
  time.className = "bookmark-time";
  time.textContent = bookmark.desc;

  info.appendChild(time);

  const actions = document.createElement("div");
  actions.className = "actions";

  actions.appendChild(
    createActionButton("play", "Play bookmark", onPlay)
  );
  actions.appendChild(
    createActionButton("delete", "Delete bookmark", onDelete)
  );

  item.appendChild(info);
  item.appendChild(actions);

  return item;
};

const renderBookmarks = (bookmarks = []) => {
  bookmarksContainer.innerHTML = "";

  if (!bookmarks.length) {
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  bookmarks.forEach((bookmark) => {
    bookmarksContainer.appendChild(createBookmarkElement(bookmark));
  });
};

const onPlay = async (e) => {
  const time = e.currentTarget.closest(".bookmark").dataset.time;
  const activeTab = await getActiveTabURL();

  chrome.tabs.sendMessage(activeTab.id, {
    type: "PLAY",
    value: Number(time),
  });
};

const onDelete = async (e) => {
  const bookmarkEl = e.currentTarget.closest(".bookmark");
  const time = Number(bookmarkEl.dataset.time);
  const activeTab = await getActiveTabURL();

  bookmarkEl.remove();

  chrome.tabs.sendMessage(
    activeTab.id,
    {
      type: "DELETE",
      value: time,
    },
    renderBookmarks
  );
};

document.addEventListener("DOMContentLoaded", async () => {
  const activeTab = await getActiveTabURL();

  if (!activeTab?.url?.includes("youtube.com/watch")) {
    document.querySelector(".container").innerHTML =
      `<div class="empty">This is not a YouTube video.</div>`;
    return;
  }

  const url = new URL(activeTab.url);
  const videoId = url.searchParams.get("v");

  if (!videoId) return;

  chrome.storage.local.get([videoId], (data) => {
    renderBookmarks(data[videoId] || []);
  });
});
