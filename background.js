let activeTab;
let startTime;
let timeData = {};

chrome.storage.local.get(["timeData"], (result) => {
  if (result.timeData) timeData = result.timeData;
});

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  await trackTime();
  activeTab = await getActiveTabUrl();
  startTime = Date.now();
});

chrome.windows.onFocusChanged.addListener(async () => {
  await trackTime();
  activeTab = await getActiveTabUrl();
  startTime = Date.now();
});

chrome.tabs.onRemoved.addListener(() => { trackTime(); });

async function getActiveTabUrl() {
  let tabs = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  return tabs[0]?.url ? new URL(tabs[0].url).hostname : "Unknown";
}

async function trackTime() {
  if (activeTab && startTime) {
    let duration = (Date.now() - startTime) / 1000;
    if (!timeData[activeTab]) timeData[activeTab] = 0;
    timeData[activeTab] += duration;
    chrome.storage.local.set({ timeData });
  }
}