function getDashboard() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://www.inforge.net/xi/');
    request.send(null);
}

chrome.tabs.onUpdated.addListener(function(tab_id, info, tab) {
  if (tab.url.match(/^(https?:\/\/)(www.\)?inforge\.net(?!.*\/xi\/?$)(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)$/)) {
    if (info['status'] == 'loading') {
      getDashboard();
    }
  }
});
