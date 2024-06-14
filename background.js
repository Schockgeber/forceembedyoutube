// background.js

function modifyYouTubeLink(details) {
  const url = new URL(details.url);
  if (url.hostname === 'www.youtube.com' && url.pathname === '/watch') {
    url.pathname = '/embed/' + url.searchParams.get('v');
    url.search = '';
    return { redirectUrl: url.href };
  }
}

browser.webRequest.onBeforeRequest.addListener(
  modifyYouTubeLink,
  { urls: ["*://www.youtube.com/watch*"], types: ["main_frame"] },
  ["blocking"]
);
