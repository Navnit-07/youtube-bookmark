chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    tab.url &&
    tab.url.includes("youtube.com/watch")
  ) {
    try {
      const url = new URL(tab.url);
      const videoId = url.searchParams.get("v");

      if (videoId) {
        chrome.tabs.sendMessage(tabId, {
          type: "NEW",
          videoId,
        });
      }
    } catch (err) {
      console.error("Invalid URL:", err);
    }
  }
});
