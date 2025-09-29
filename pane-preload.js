const { ipcRenderer } = require('electron');

const sendHoverUrl = (url) => {
  if (!url || typeof url !== 'string') {
    return;
  }

  try {
    const parsed = new URL(url, location.href);
    if (!/^https?:/i.test(parsed.protocol)) {
      return;
    }
    ipcRenderer.sendToHost('hn:item-hover', parsed.toString());
  } catch (error) {
    // ignore invalid URLs
  }
};

const extractAnchor = (node) => {
  if (!node) {
    return null;
  }
  if (node.tagName === 'A') {
    return node;
  }
  if (typeof node.closest === 'function') {
    return node.closest('a');
  }
  return null;
};

const handleEvent = (event) => {
  const anchor = extractAnchor(event.target);
  if (!anchor) {
    return;
  }

  // Ignore in-page anchors and comment links.
  if (anchor.hostname && anchor.hostname.includes('news.ycombinator.com')) {
    const path = anchor.pathname || '';
    if (path.includes('item') || path.includes('user')) {
      return;
    }
  }

  sendHoverUrl(anchor.href);
};

document.addEventListener('mouseover', handleEvent, true);
document.addEventListener('focusin', handleEvent, true);

const retargetBlankLinks = (event) => {
  const anchor = extractAnchor(event.target);
  if (!anchor || !anchor.target) {
    return;
  }
  if (anchor.target.toLowerCase() === '_blank') {
    anchor.target = '_self';
  }
};

document.addEventListener('click', retargetBlankLinks, true);

window.open = (url) => {
  if (url) {
    try {
      location.href = url;
    } catch (error) {
      // ignore navigation errors
    }
  }
  return null;
};
