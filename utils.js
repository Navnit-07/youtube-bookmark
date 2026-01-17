export async function getActiveTabURL() {
  const tabs = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  if (!tabs.length) {
    throw new Error("No active tab found");
  }

  return tabs[0];
}
