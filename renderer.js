const HOME_URLS = {
  left: 'https://duckduckgo.com/',
  right: 'https://www.sirch.ai/'
};

const PREVIEW_HOSTS = ['sirch.ai', 'www.sirch.ai'];

const HISTORY_ICON_SPACING = 56;
const HISTORY_LINE_COLORS = ['history-line-red', 'history-line-blue', 'history-line-green'];
const HISTORY_LINE_HEIGHT_OFFSETS = [0, 8, 16];

const SUGGESTED_TAGS = [
  'Technology',
  'Gadgets',
  'Software',
  'Hardware',
  'Design',
  'Architecture',
  'Interiors',
  'Lifestyle',
  'News',
  'Analysis',
  'Reviews',
  'Tutorials',
  'Guides',
  'Tips',
  'Insights',
  'Trends',
  'Resources',
  'Ideas',
  'Projects',
  'Recipes',
  'Cooking',
  'Baking',
  'Grilling',
  'Fitness',
  'Nutrition',
  'Wellbeing',
  'Skincare',
  'Beauty',
  'Fashion',
  'Style',
  'Apparel',
  'Footwear',
  'Accessories',
  'Decor',
  'Home Goods',
  'Furnishings',
  'Kitchen',
  'Bath',
  'Laundry',
  'Garden',
  'Gardening',
  'Landscaping',
  'Plants',
  'Parenting',
  'Pregnancy',
  'Childcare',
  'Learning',
  'Productivity',
  'Marketing',
  'Branding',
  'Entrepreneurship',
  'Startups',
  'Careers',
  'Leadership',
  'Management',
  'Remote Work',
  'Freelancing',
  'Finance',
  'Investing',
  'Budgeting',
  'Economics',
  'Ecommerce',
  'Retail',
  'Wholesale',
  'Logistics',
  'Supply Chain',
  'Automotive',
  'Motorsports',
  'Vehicles',
  'Transport',
  'Aviation',
  'Space',
  'Science',
  'Biology',
  'Chemistry',
  'Physics',
  'Mathematics',
  'Robotics',
  'Ai',
  'Machine Learning',
  'Data Science',
  'Cloud',
  'Cybersecurity',
  'Privacy',
  'Ethics',
  'Policy',
  'Government',
  'Civics',
  'Law',
  'Legal',
  'Compliance',
  'Risk',
  'Gaming',
  'Esports',
  'Streaming',
  'Movies',
  'Television',
  'Music',
  'Audio',
  'Podcasts',
  'Radio',
  'Art',
  'Illustration',
  'Graphic Design',
  'Animation',
  'Photography',
  'Video',
  'Film',
  'Writing',
  'Publishing',
  'Storytelling',
  'Comics',
  'Manga',
  'Literature',
  'Poetry',
  'Theater',
  'Dance',
  'Performance',
  'Events',
  'Festivals',
  'Travel',
  'Destinations',
  'Tourism',
  'Hospitality',
  'Adventure',
  'Camping',
  'Hiking',
  'Climbing',
  'Skiing',
  'Snowboarding',
  'Fishing',
  'Boating',
  'Sailing',
  'Diving',
  'Surfing',
  'Wildlife',
  'Conservation',
  'Environment',
  'Sustainability',
  'Energy',
  'Renewables',
  'Pets',
  'Dogs',
  'Cats',
  'Birds',
  'Reptiles',
  'Aquatics',
  'Equine',
  'Veterinary',
  'Agriculture',
  'Farming',
  'Food',
  'Beverages',
  'Coffee',
  'Tea',
  'Wine',
  'Beer',
  'Spirits',
  'Cocktails',
  'Desserts',
  'Chocolate',
  'Candy',
  'Snacks',
  'Health',
  'Medicine',
  'Medical',
  'Dental',
  'Pharmacy',
  'Mental Health',
  'Therapy',
  'Counseling',
  'Mindfulness',
  'Meditation',
  'Yoga',
  'Pilates',
  'Stretching',
  'Mobility',
  'Rehab',
  'Wellness',
  'Spa',
  'Self Care',
  'Product Updates',
  'Company News',
  'Press Releases',
  'Announcements',
  'Community',
  'Forums',
  'Support',
  'Documentation',
  'Faqs',
  'How-To',
  'Troubleshooting',
  'Security',
  'Devops',
  'Engineering',
  'Development',
  'Programming',
  'Coding',
  'Open Source',
  'Databases',
  'Analytics',
  'Visualization',
  'Dashboards',
  'Product Design',
  'Ux',
  'Ui',
  'Research',
  'Experiments',
  'Surveys',
  'Reports',
  'Case Studies',
  'Testimonials',
  'Case Law',
  'Real Estate',
  'Mortgages',
  'Rentals',
  'Property Management',
  'Home Improvement',
  'Diy',
  'Crafts',
  'Maker Projects',
  'Woodworking',
  'Metalwork',
  '3d Printing',
  'Electronics',
  'Drones',
  'Wearables',
  'Smart Home',
  'Iot',
  'Automation',
  'Sensors',
  'Telecom',
  'Networking',
  'Infrastructure',
  'Supply',
  'Hr',
  'Recruiting',
  'Talent',
  'Compensation',
  'Benefits',
  'Diversity',
  'Inclusion',
  'Culture',
  'Philanthropy',
  'Charity',
  'Volunteering',
  'Nonprofit',
  'Education',
  'Higher Education',
  'K12',
  'Language',
  'Linguistics',
  'Translation',
  'History',
  'Geography',
  'Archaeology',
  'Anthropology',
  'Sociology',
  'Psychology',
  'Philosophy',
  'Religion',
  'Spirituality',
  'Astrology',
  'Astronomy',
  'Horoscopes',
  'Home Theater',
  'Sound Systems',
  'Smartphones',
  'Tablets',
  'Laptops',
  'Desktops',
  'Servers',
  'Storage',
  'Backup',
  'Productivity Apps',
  'Note Taking',
  'Collaboration',
  'Crm',
  'Erp',
  'Marketing Automation',
  'Sales',
  'Support Tools',
  'Inventory',
  'Accounting',
  'Tax',
  'Auditing',
  'Governance',
  'Strategy',
  'Planning',
  'Roadmaps',
  'Prioritization',
  'Experiential',
  'Customer Success',
  'User Stories',
  'Personas',
  'Journeys',
  'Onboarding',
  'Activation',
  'Retention',
  'Loyalty',
  'Advocacy',
  'Referrals',
  'Influencer',
  'Social Media',
  'Community Building',
  'Email',
  'Sms',
  'Messaging',
  'Chatbots',
  'Virtual Reality',
  'Augmented Reality',
  'Mixed Reality',
  'Metaverse',
  'Blockchain',
  'Cryptocurrency',
  'Nfts',
  'Defi',
  'Fintech',
  'Insurtech',
  'Healthtech',
  'Edtech',
  'Cleantech',
  'Legaltech',
  'Proptech',
  'Martech',
  'Govtech',
  'Biotech',
  'Agtech',
  'Foodtech',
  'Sportstech',
  'Digital Technology',
  'Digital Gadgets',
  'Digital Software',
  'Digital Hardware',
  'Digital Design',
  'Digital Architecture',
  'Digital Interiors',
  'Digital Lifestyle',
  'Digital News',
  'Digital Analysis',
  'Digital Reviews',
  'Digital Tutorials',
  'Digital Guides',
  'Digital Tips',
  'Digital Insights',
  'Digital Trends',
  'Digital Resources',
  'Digital Ideas',
  'Digital Projects',
  'Digital Recipes',
  'Digital Cooking',
  'Digital Baking',
  'Digital Grilling',
  'Digital Fitness',
  'Digital Nutrition',
  'Digital Wellbeing',
  'Digital Skincare',
  'Digital Beauty',
  'Digital Fashion',
  'Digital Style',
  'Digital Apparel',
  'Digital Footwear',
  'Digital Accessories',
  'Digital Decor',
  'Digital Home Goods',
  'Digital Furnishings',
  'Digital Kitchen',
  'Digital Bath',
  'Digital Laundry',
  'Digital Garden',
  'Digital Gardening',
  'Digital Landscaping',
  'Digital Plants',
  'Digital Parenting',
  'Digital Pregnancy',
  'Digital Childcare',
  'Digital Learning',
  'Digital Productivity',
  'Digital Marketing',
  'Digital Branding',
  'Digital Entrepreneurship',
  'Digital Startups',
  'Digital Careers',
  'Digital Leadership',
  'Digital Management',
  'Digital Remote Work',
  'Digital Freelancing',
  'Digital Finance',
  'Digital Investing',
  'Digital Budgeting',
  'Digital Economics',
  'Digital Ecommerce',
  'Digital Retail',
  'Digital Wholesale',
  'Digital Logistics',
  'Digital Supply Chain',
  'Digital Automotive',
  'Digital Motorsports',
  'Digital Vehicles',
  'Digital Transport',
  'Digital Aviation',
  'Digital Space',
  'Digital Science',
  'Digital Biology',
  'Digital Chemistry',
  'Digital Physics',
  'Digital Mathematics',
  'Digital Robotics',
  'Digital Ai',
  'Digital Machine Learning',
  'Digital Data Science',
  'Digital Cloud',
  'Digital Cybersecurity',
  'Digital Privacy',
  'Digital Ethics',
  'Digital Policy',
  'Digital Government',
  'Digital Civics',
  'Digital Law',
  'Digital Legal',
  'Digital Compliance',
  'Digital Risk',
  'Digital Gaming',
  'Digital Esports',
  'Digital Streaming',
  'Digital Movies',
  'Digital Television',
  'Digital Music',
  'Digital Audio',
  'Digital Podcasts',
  'Digital Radio',
  'Digital Art',
  'Digital Illustration',
  'Digital Graphic Design',
  'Digital Animation',
  'Digital Photography',
  'Digital Video',
  'Digital Film',
  'Digital Writing',
  'Digital Publishing',
  'Digital Storytelling',
  'Digital Comics',
  'Digital Manga',
  'Digital Literature',
  'Digital Poetry',
  'Digital Theater',
  'Digital Dance',
  'Digital Performance',
  'Digital Events',
  'Digital Festivals',
  'Digital Travel',
  'Digital Destinations',
  'Digital Tourism',
  'Digital Hospitality',
  'Digital Adventure',
  'Digital Camping',
  'Digital Hiking',
  'Digital Climbing',
  'Digital Skiing',
  'Digital Snowboarding',
  'Digital Fishing',
  'Digital Boating',
  'Digital Sailing',
  'Digital Diving',
  'Digital Surfing',
  'Digital Wildlife',
  'Digital Conservation',
  'Digital Environment',
  'Digital Sustainability',
  'Digital Energy',
  'Digital Renewables',
  'Digital Pets',
  'Digital Dogs',
  'Digital Cats',
  'Digital Birds',
  'Digital Reptiles',
  'Digital Aquatics',
  'Digital Equine',
  'Digital Veterinary',
  'Digital Agriculture',
  'Digital Farming',
  'Digital Food',
  'Digital Beverages',
  'Digital Coffee',
  'Digital Tea',
  'Digital Wine',
  'Digital Beer',
  'Digital Spirits',
  'Digital Cocktails',
  'Digital Desserts',
  'Digital Chocolate',
  'Digital Candy',
  'Digital Snacks',
  'Digital Health',
  'Digital Medicine',
  'Digital Medical',
  'Digital Dental',
  'Digital Pharmacy',
  'Digital Mental Health',
  'Digital Therapy',
];

const titles = { left: '', right: '' };
let leftPane = null;
let rightPane = null;
let splitEnabled = true;

const splitEl = document.getElementById('split');

const MAX_HISTORY_ITEMS = 12;
const historyItems = [];
let historyClockInterval = null;
let isSyncingHistoryScroll = false;
let activeTag = null;

const getFilteredHistoryItems = () => {
  if (!activeTag) {
    return historyItems;
  }
  return historyItems.filter((item) => Array.isArray(item.tags) && item.tags.includes(activeTag));
};

const normalizeForMatch = (value) => {
  return (value || '').toLowerCase().replace(/[^a-z0-9\s]/g, ' ').trim();
};

const generateTagsForTitle = (title) => {
  const normalizedTitle = normalizeForMatch(title);
  if (!normalizedTitle) {
    return SUGGESTED_TAGS.slice(0, 3);
  }

  const titleTokens = normalizedTitle
    .split(/\s+/)
    .filter((token) => token.length > 1);

  const titleTokenSet = new Set(titleTokens);

  const scored = [];
  SUGGESTED_TAGS.forEach((tag) => {
    const normalizedTag = normalizeForMatch(tag);
    if (!normalizedTag) {
      return;
    }

    const tagTokens = normalizedTag.split(/\s+/).filter(Boolean);
    let score = 0;

    tagTokens.forEach((tagToken) => {
      titleTokenSet.forEach((titleToken) => {
        if (titleToken === tagToken) {
          score += 3;
        } else if (titleToken.startsWith(tagToken) || tagToken.startsWith(titleToken)) {
          score += 2;
        } else if (titleToken.includes(tagToken) || tagToken.includes(titleToken)) {
          score += 1;
        }
      });
    });

    if (score > 0) {
      scored.push({ tag, score, length: tagTokens.length });
    }
  });

  scored.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    if (a.length !== b.length) {
      return a.length - b.length;
    }
    return a.tag.localeCompare(b.tag);
  });

  const results = [];
  for (const entry of scored) {
    if (!results.includes(entry.tag)) {
      results.push(entry.tag);
    }
    if (results.length === 3) {
      break;
    }
  }

  if (results.length < 3) {
    const fallbackMatches = [];
    titleTokens.forEach((token) => {
      const match = SUGGESTED_TAGS.find((tag) => tag.toLowerCase().includes(token));
      if (match && !results.includes(match) && !fallbackMatches.includes(match)) {
        fallbackMatches.push(match);
      }
    });
    fallbackMatches.forEach((match) => {
      if (results.length < 3) {
        results.push(match);
      }
    });
  }

  if (results.length < 3) {
    for (const tag of SUGGESTED_TAGS) {
      if (!results.includes(tag)) {
        results.push(tag);
      }
      if (results.length === 3) {
        break;
      }
    }
  }

  return results.slice(0, 3);
};

const getFaviconUrl = (url) => {
  if (!url) {
    return null;
  }

  try {
    const parsed = new URL(url);
    return `https://www.google.com/s2/favicons?sz=64&domain_url=${encodeURIComponent(parsed.origin)}`;
  } catch (error) {
    return `https://www.google.com/s2/favicons?sz=64&domain_url=${encodeURIComponent(url)}`;
  }
};

const formatHostDisplay = (url) => {
  if (!url) {
    return '';
  }

  try {
    const { hostname } = new URL(url);
    const trimmed = hostname.replace(/^www\./i, '');
    if (!trimmed) {
      return hostname || url;
    }

    return trimmed
      .split('.')
      .map((segment) => {
        if (!segment) {
          return segment;
        }
        return segment.charAt(0).toUpperCase() + segment.slice(1);
      })
      .join('.');
  } catch (error) {
    return url;
  }
};

const formatRelativeTime = (timestamp) => {
  if (!timestamp) {
    return '';
  }

  const now = Date.now();
  const diffSeconds = Math.max(0, Math.floor((now - timestamp) / 1000));

  if (diffSeconds < 60) {
    return 'Just now';
  }

  const MINUTE = 60;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const WEEK = 7 * DAY;
  const MONTH = 30 * DAY;
  const YEAR = 365 * DAY;

  if (diffSeconds < HOUR) {
    const minutes = Math.floor(diffSeconds / MINUTE);
    return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  }

  if (diffSeconds < DAY) {
    const hours = Math.floor(diffSeconds / HOUR);
    return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  }

  if (diffSeconds < WEEK) {
    const days = Math.floor(diffSeconds / DAY);
    return `${days} day${days === 1 ? '' : 's'} ago`;
  }

  if (diffSeconds < MONTH) {
    const weeks = Math.floor(diffSeconds / WEEK);
    return `${weeks} week${weeks === 1 ? '' : 's'} ago`;
  }

  if (diffSeconds < YEAR) {
    const months = Math.floor(diffSeconds / MONTH);
    return `${months} month${months === 1 ? '' : 's'} ago`;
  }

  const years = Math.floor(diffSeconds / YEAR);
  return `${years} year${years === 1 ? '' : 's'} ago`;
};

const createHistoryFallbackIcon = (label, className) => {
  const fallbackEl = document.createElement('span');
  fallbackEl.className = `${className} fallback`;
  const initial = (label || '?').trim().charAt(0).toUpperCase() || '?';
  fallbackEl.textContent = initial;
  return fallbackEl;
};

const createHistoryFavicon = (faviconUrl, label, className) => {
  if (!faviconUrl) {
    return createHistoryFallbackIcon(label, className);
  }

  const faviconEl = document.createElement('img');
  faviconEl.src = faviconUrl;
  faviconEl.alt = '';
  faviconEl.className = className;
  faviconEl.referrerPolicy = 'no-referrer';
  faviconEl.addEventListener('error', () => {
    faviconEl.replaceWith(createHistoryFallbackIcon(label, className));
  });
  return faviconEl;
};

const syncHistoryScrollPositions = (source, target) => {
  if (!source || !target) {
    return;
  }

  if (isSyncingHistoryScroll) {
    return;
  }

  isSyncingHistoryScroll = true;
  target.scrollLeft = source.scrollLeft;
  window.requestAnimationFrame(() => {
    isSyncingHistoryScroll = false;
  });
};

const renderHistoryHeadlines = () => {
  if (!historyHeadlineEl) {
    return;
  }

  historyHeadlineEl.innerHTML = '';
  const items = getFilteredHistoryItems();

  if (!items.length) {
    historyHeadlineEl.classList.add('empty');
    return;
  }

  historyHeadlineEl.classList.remove('empty');
  const latestUrl = items[items.length - 1]?.url;

  items.forEach((item) => {
    const displayHost = formatHostDisplay(item.url) || item.url;
    const displayTitle = (item.title && item.title.trim()) || displayHost;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'history-headline-item';
    button.dataset.url = item.url;

    if (item.url === latestUrl) {
      button.classList.add('active');
    }

    const faviconEl = createHistoryFavicon(getFaviconUrl(item.url), displayHost, 'history-headline-favicon');
    button.appendChild(faviconEl);

    const titleEl = document.createElement('span');
    titleEl.className = 'history-headline-title';
    titleEl.textContent = displayTitle;
    button.appendChild(titleEl);

    historyHeadlineEl.appendChild(button);
  });

  if (!activeTag) {
    historyHeadlineEl.scrollLeft = historyHeadlineEl.scrollWidth;
    if (historyStripEl) {
      syncHistoryScrollPositions(historyHeadlineEl, historyStripEl);
    }
  }
};

const createHistoryLineSegments = (count) => {
  const segments = [];
  if (!count) {
    return segments;
  }

  let current = null;
  for (let index = 0; index < count; index += 1) {
    const colorIndex = Math.floor(index / 3) % HISTORY_LINE_COLORS.length;

    if (current && current.colorIndex === colorIndex) {
      current.end = index;
    } else {
      if (current) {
        segments.push(current);
      }
      current = {
        colorIndex,
        start: index,
        end: index,
      };
    }
  }

  if (current) {
    segments.push(current);
  }

  return segments;
};

const renderHistoryStrip = () => {
  if (!historyStripEl) {
    return;
  }

  historyStripEl.innerHTML = '';
  const items = getFilteredHistoryItems();

  if (!items.length) {
    const emptyEl = document.createElement('div');
    emptyEl.className = 'history-empty';
    emptyEl.textContent = activeTag
      ? `No pages tagged "${activeTag}" yet.`
      : 'Browse around to build your history.';
    historyStripEl.appendChild(emptyEl);
    return;
  }

  const latestUrl = items[items.length - 1]?.url;

  const viewportEl = document.createElement('div');
  viewportEl.className = 'history-favicon-viewport';

  const iconRowEl = document.createElement('div');
  iconRowEl.className = 'history-favicon-row';

  const lineLayerEl = document.createElement('div');
  lineLayerEl.className = 'history-line-layer';

  items.forEach((item, index) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'history-item';
    wrapper.dataset.index = String(index);

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'history-thumb';
    button.dataset.url = item.url;

    const displayHost = formatHostDisplay(item.url) || item.url;
    const displayTitle = (item.title && item.title.trim()) || displayHost;
    const relativeTime = formatRelativeTime(item.capturedAt);

    const ariaParts = [displayTitle];
    if (relativeTime) {
      ariaParts.push(relativeTime);
    }
    button.setAttribute('aria-label', ariaParts.join(' — '));
    button.title = displayTitle;

    const faviconEl = createHistoryFavicon(getFaviconUrl(item.url), displayHost, 'history-favicon');
    button.appendChild(faviconEl);

    if (item.url === latestUrl) {
      button.classList.add('active');
    }

    wrapper.appendChild(button);
    iconRowEl.appendChild(wrapper);
  });

  const trackWidth = items.length > 0 ? items.length * HISTORY_ICON_SPACING - 8 : 0;
  if (trackWidth > 0) {
    viewportEl.style.width = `${trackWidth}px`;
    lineLayerEl.style.width = `${trackWidth}px`;
    iconRowEl.style.minWidth = `${trackWidth}px`;
  }

  viewportEl.appendChild(lineLayerEl);
  viewportEl.appendChild(iconRowEl);
  historyStripEl.appendChild(viewportEl);

  const lineSegments = createHistoryLineSegments(items.length);
  lineSegments.forEach((segment) => {
    const lineEl = document.createElement('div');
    lineEl.className = `history-line ${HISTORY_LINE_COLORS[segment.colorIndex]}`;

    const left = segment.start * HISTORY_ICON_SPACING - 20;
    const width = (segment.end - segment.start + 1) * HISTORY_ICON_SPACING - 24 + 40;
    const heightOffset = HISTORY_LINE_HEIGHT_OFFSETS[segment.colorIndex % HISTORY_LINE_HEIGHT_OFFSETS.length] || 0;

    lineEl.style.left = `${left}px`;
    lineEl.style.width = `${width}px`;
    lineEl.style.top = `${heightOffset}px`;

    lineLayerEl.appendChild(lineEl);
  });

  if (!activeTag) {
    historyStripEl.scrollLeft = historyStripEl.scrollWidth;
    if (historyHeadlineEl) {
      syncHistoryScrollPositions(historyStripEl, historyHeadlineEl);
    }
  }
};

const formatHistoryClockTime = (date) => {
  try {
    return new Intl.DateTimeFormat(undefined, {
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  } catch (error) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
};

const startHistoryClock = () => {
  if (!historyClockEl) {
    return;
  }

  if (historyClockInterval) {
    clearInterval(historyClockInterval);
  }

  const updateClock = () => {
    historyClockEl.textContent = formatHistoryClockTime(new Date());
  };

  updateClock();
  historyClockInterval = window.setInterval(updateClock, 30000);
};

const renderHistoryTags = () => {
  if (!historyTagsEl) {
    return;
  }

  historyTagsEl.innerHTML = '';

  const tagCounts = new Map();
  historyItems.forEach((item) => {
    (item.tags || []).forEach((tag) => {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    });
  });

  const createButton = (label, options = {}) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'tag-chip';
    button.textContent = label;
    if (options.datasetTag) {
      button.dataset.tag = options.datasetTag;
    }
    if (options.isActive) {
      button.classList.add('active');
    }
    if (options.disabled) {
      button.disabled = true;
      button.classList.add('disabled');
    }
    if (options.extraClass) {
      button.classList.add(options.extraClass);
    }
    historyTagsEl.appendChild(button);
  };

  createButton('All', { datasetTag: '__all__', isActive: !activeTag, extraClass: 'all-chip' });

  SUGGESTED_TAGS.forEach((tag) => {
    const count = tagCounts.get(tag) || 0;
    createButton(tag, {
      datasetTag: tag,
      isActive: activeTag === tag,
      disabled: count === 0,
    });
  });
};

const renderHistoryUI = () => {
  // Removed back overlay functionality
};

const setActiveTag = (tag, force = false) => {
  const normalized = typeof tag === 'string' ? tag : null;
  let nextTag = normalized;
  if (!force && normalized && normalized === activeTag) {
    nextTag = null;
  }
  if (!force && nextTag === activeTag) {
    return;
  }
  activeTag = nextTag;
  renderHistoryUI();
};

const addHistoryItem = (item) => {
  if (!item || !item.url || !item.dataUrl) {
    return;
  }

  for (let index = historyItems.length - 1; index >= 0; index -= 1) {
    if (historyItems[index].url === item.url) {
      historyItems.splice(index, 1);
    }
  }

  const tags = generateTagsForTitle(item.title || titles.right || '');

  historyItems.push({
    ...item,
    tags,
    capturedAt: Date.now(),
  });

  if (historyItems.length > MAX_HISTORY_ITEMS) {
    historyItems.splice(0, historyItems.length - MAX_HISTORY_ITEMS);
  }

  renderHistoryUI();
};

const isCaptureCandidateUrl = (url) => {
  return typeof url === 'string' && /^https?:/i.test(url);
};

const captureSnapshotForRightPane = async () => {
  if (!rightPane) {
    return;
  }

  const url = rightPane.getURL();
  if (!isCaptureCandidateUrl(url)) {
    return;
  }

  try {
    const image = await rightPane.capturePage();
    if (!image || image.isEmpty()) {
      return;
    }

    const dataUrl = image.toDataURL();
    addHistoryItem({ url, dataUrl, title: titles.right });

    if (window.browseAPI && typeof window.browseAPI.saveSnapshot === 'function') {
      window.browseAPI
        .saveSnapshot({ url, dataUrl })
        .catch((error) => {
          console.error('Failed to persist snapshot', error);
        });
    }
  } catch (error) {
    console.error('Failed to capture snapshot for', url, error);
  }
};
const shouldShowPreviewForUrl = (url) => {
  if (!url) {
    return false;
  }
  try {
    const parsed = new URL(url);
    return PREVIEW_HOSTS.includes(parsed.hostname);
  } catch (error) {
    return false;
  }
};

const updatePreviewVisibilityForUrl = (url) => {
  const shouldShow = shouldShowPreviewForUrl(url);
  setSplitEnabled(shouldShow);
};

const refreshNavigationState = () => {
  // No-op now that there is no dedicated back button.
};

const updateWindowTitle = () => {
  if (!window.browseAPI || typeof window.browseAPI.setWindowTitle !== 'function') {
    return;
  }

  const parts = [];
  if (splitEnabled && titles.left) {
    parts.push(titles.left);
  }
  if (titles.right) {
    parts.push(titles.right);
  }

  const suffix = parts.length ? ` — ${parts.join(' | ')}` : '';
  window.browseAPI.setWindowTitle(`browse${suffix}`);
};

const ensureHomeLoaded = (webview, paneKey) => {
  if (!webview) {
    return;
  }

  const current = webview.getURL();
  if (!current || current === 'about:blank') {
    const fallback = HOME_URLS[paneKey] || HOME_URLS.left;
    webview.loadURL(fallback);
  }
};

const loadOnLeft = (url) => {
  if (!leftPane || !url || !splitEnabled) {
    return;
  }
  try {
    if (leftPane.getURL && leftPane.getURL() === url) {
      return;
    }
  } catch (error) {
    // Ignore getURL errors (e.g., not ready yet)
  }
  leftPane.loadURL(url);
};

const attachHandlers = (webview, paneKey) => {
  if (!webview) {
    return;
  }

  webview.addEventListener('dom-ready', () => {
    ensureHomeLoaded(webview, paneKey);
    if (paneKey === 'right') {
      updatePreviewVisibilityForUrl(webview.getURL());
      refreshNavigationState();
    }
  });

  const openInPane = (targetUrl) => {
    if (!targetUrl) {
      return;
    }

    const urlToLoad = String(targetUrl);
    try {
      if (paneKey === 'left') {
        loadOnLeft(urlToLoad);
        return;
      }
      webview.loadURL(urlToLoad);
    } catch (error) {
      console.error('Failed to open URL in pane', urlToLoad, error);
    }
  };

  if (typeof webview.setWindowOpenHandler === 'function') {
    webview.setWindowOpenHandler(({ url }) => {
      openInPane(url);
      return { action: 'deny' };
    });
  }

  webview.addEventListener('page-title-updated', (event) => {
    titles[paneKey] = event.title || '';
    updateWindowTitle();
  });

  webview.addEventListener('new-window', (event) => {
    event.preventDefault();
    openInPane(event.url);
  });

  if (paneKey === 'right') {
    const syncPreview = (event) => {
      updatePreviewVisibilityForUrl(event.url);
      refreshNavigationState();
    };

    webview.addEventListener('did-navigate', syncPreview);
    webview.addEventListener('did-navigate-in-page', syncPreview);
    webview.addEventListener('did-stop-loading', captureSnapshotForRightPane);

    webview.addEventListener('ipc-message', (event) => {
      if (event.channel !== 'hn:item-hover') {
        return;
      }

      const [url] = event.args || [];
      loadOnLeft(url);
    });
  }
};

const setSplitEnabled = (nextState) => {
  splitEnabled = nextState;
  if (splitEl) {
    splitEl.classList.toggle('collapsed', !splitEnabled);
  }
  updateWindowTitle();
};

const webviews = document.querySelectorAll('.browser-view');
webviews.forEach((webview) => {
  const paneKey = webview.dataset.pane === 'right' ? 'right' : 'left';
  if (paneKey === 'left') {
    leftPane = webview;
  } else {
    rightPane = webview;
  }
  attachHandlers(webview, paneKey);
});

// Removed back overlay and history UI event listeners

// Ensure initial title is set
updateWindowTitle();

// Removed history clock cleanup

// Favicon Footer Implementation
const FAVICON_DATA = [
  { name: "Google", url: "https://www.google.com/favicon.ico" },
  { name: "GitHub", url: "https://github.com/favicon.ico" },
  { name: "Twitter", url: "https://twitter.com/favicon.ico" },
  { name: "Facebook", url: "https://facebook.com/favicon.ico" },
  { name: "YouTube", url: "https://youtube.com/favicon.ico" },
  { name: "LinkedIn", url: "https://linkedin.com/favicon.ico" },
  { name: "Instagram", url: "https://instagram.com/favicon.ico" },
  { name: "Reddit", url: "https://reddit.com/favicon.ico" },
  { name: "Amazon", url: "https://amazon.com/favicon.ico" },
  { name: "Netflix", url: "https://netflix.com/favicon.ico" },
  { name: "Spotify", url: "https://spotify.com/favicon.ico" },
  { name: "Apple", url: "https://apple.com/favicon.ico" },
  { name: "Microsoft", url: "https://microsoft.com/favicon.ico" },
  { name: "Stack Overflow", url: "https://stackoverflow.com/favicon.ico" },
  { name: "Medium", url: "https://medium.com/favicon.ico" },
  { name: "Vercel", url: "https://vercel.com/favicon.ico" },
  { name: "Discord", url: "https://discord.com/favicon.ico" },
  { name: "Slack", url: "https://slack.com/favicon.ico" },
  { name: "Zoom", url: "https://zoom.us/favicon.ico" },
  { name: "Dropbox", url: "https://dropbox.com/favicon.ico" },
  { name: "Notion", url: "https://notion.so/favicon.ico" },
  { name: "Figma", url: "https://figma.com/favicon.ico" },
  { name: "Adobe", url: "https://adobe.com/favicon.ico" },
  { name: "Canva", url: "https://canva.com/favicon.ico" },
  { name: "Trello", url: "https://trello.com/favicon.ico" },
  { name: "Asana", url: "https://asana.com/favicon.ico" },
  { name: "Shopify", url: "https://shopify.com/favicon.ico" },
  { name: "Stripe", url: "https://stripe.com/favicon.ico" },
  { name: "PayPal", url: "https://paypal.com/favicon.ico" },
  { name: "Airbnb", url: "https://airbnb.com/favicon.ico" },
  { name: "Uber", url: "https://uber.com/favicon.ico" },
  { name: "Lyft", url: "https://lyft.com/favicon.ico" },
  { name: "Pinterest", url: "https://pinterest.com/favicon.ico" },
  { name: "TikTok", url: "https://tiktok.com/favicon.ico" },
  { name: "Snapchat", url: "https://snapchat.com/favicon.ico" },
  { name: "WhatsApp", url: "https://whatsapp.com/favicon.ico" },
  { name: "Telegram", url: "https://telegram.org/favicon.ico" },
  { name: "Signal", url: "https://signal.org/favicon.ico" },
  { name: "Twitch", url: "https://twitch.tv/favicon.ico" },
  { name: "Steam", url: "https://store.steampowered.com/favicon.ico" },
  { name: "Epic Games", url: "https://epicgames.com/favicon.ico" },
  { name: "PlayStation", url: "https://playstation.com/favicon.ico" },
  { name: "Xbox", url: "https://xbox.com/favicon.ico" },
  { name: "Nintendo", url: "https://nintendo.com/favicon.ico" },
  { name: "Wikipedia", url: "https://wikipedia.org/favicon.ico" },
  { name: "BBC", url: "https://bbc.com/favicon.ico" },
  { name: "CNN", url: "https://cnn.com/favicon.ico" },
  { name: "The New York Times", url: "https://nytimes.com/favicon.ico" },
  { name: "ESPN", url: "https://espn.com/favicon.ico" },
  { name: "IMDb", url: "https://imdb.com/favicon.ico" }
];

const COLORS = ["line-red", "line-blue", "line-green"];
const HEIGHT_OFFSETS = [0, 8, 16];
const ICON_SPACING = 56;
const TIME_SCROLL_RATIO = 100;
const LINE_EXTENSION = 20;

const WORD_MAPPINGS = {
  0: { word: "work", className: "word-red" },
  1: { word: "play", className: "word-blue" },
  2: { word: "rest", className: "word-green" }
};

class FaviconFooter {
  constructor() {
    this.currentTime = "";
    this.displayTime = "";
    this.currentWord = "work";
    this.wordColor = "word-red";
    this.baseTime = new Date();
    this.cursorX = null;
    this.isMouseInBottomSection = false;
    this.footerVisible = false;
    this.hideTimeout = null;

    this.footer = document.getElementById('favicon-footer');
    this.iconContainer = document.getElementById('icon-container');
    this.lineContainer = document.getElementById('line-container');
    this.footerContent = document.getElementById('footer-content');
    this.cursorLine = document.getElementById('cursor-line');
    this.displayTimeEl = document.getElementById('display-time');
    this.currentWordEl = document.getElementById('current-word');

    if (
      !this.footer ||
      !this.iconContainer ||
      !this.lineContainer ||
      !this.footerContent ||
      !this.cursorLine ||
      !this.displayTimeEl ||
      !this.currentWordEl
    ) {
      this.isReady = false;
      return;
    }

    this.init();
    this.isReady = true;
  }

  init() {
    this.setupEventListeners();
    this.setupFooterVisibility();
    this.renderFavicons();
    this.renderLines();
    this.startTimeClock();
  }

  setupFooterVisibility() {
    const ACTIVATION_THRESHOLD = 20;
    const DEACTIVATION_MARGIN = 10; // Extra margin to prevent flicker
    let cachedFooterHeight = null;

    // Cache footer height on first show, recalculate on resize
    const getFooterHeight = () => {
      if (!cachedFooterHeight) {
        cachedFooterHeight = this.footer.offsetHeight;
      }
      return cachedFooterHeight;
    };

    window.addEventListener('resize', () => {
      cachedFooterHeight = null; // Invalidate cache
    });

    document.addEventListener('mousemove', (e) => {
      const windowHeight = window.innerHeight;
      const mouseY = e.clientY;

      if (!this.footerVisible) {
        // Show: simple threshold
        if (mouseY >= windowHeight - ACTIVATION_THRESHOLD) {
          this.showFooter();
        }
      } else {
        // Hide: must move above footer + margin
        const footerHeight = getFooterHeight();
        const hideThreshold = windowHeight - footerHeight - DEACTIVATION_MARGIN;

        if (mouseY < hideThreshold) {
          this.hideFooter();
        }
      }
    });
  }

  showFooter() {
    if (!this.footerVisible) {
      this.footerVisible = true;
      this.footer.classList.add('visible');
    }
  }

  hideFooter() {
    if (this.footerVisible) {
      this.footerVisible = false;
      this.footer.classList.remove('visible');
    }
  }

  formatTime(date) {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  generateLineSegments() {
    const lines = [];
    let currentGroup = { color: -1, start: 0, end: 0 };

    FAVICON_DATA.forEach((_, index) => {
      const colorGroupIndex = Math.floor(index / 3) % COLORS.length;

      if (currentGroup.color === colorGroupIndex) {
        currentGroup.end = index;
      } else {
        if (currentGroup.color !== -1) {
          lines.push({
            color: COLORS[currentGroup.color],
            left: currentGroup.start * ICON_SPACING - LINE_EXTENSION,
            width: (currentGroup.end - currentGroup.start + 1) * ICON_SPACING - 24 + LINE_EXTENSION * 2,
            height: HEIGHT_OFFSETS[currentGroup.color],
          });
        }
        currentGroup = { color: colorGroupIndex, start: index, end: index };
      }
    });

    // Handle final group
    if (currentGroup.color !== -1) {
      lines.push({
        color: COLORS[currentGroup.color],
        left: currentGroup.start * ICON_SPACING - LINE_EXTENSION,
        width: (currentGroup.end - currentGroup.start + 1) * ICON_SPACING - 24 + LINE_EXTENSION * 2,
        height: HEIGHT_OFFSETS[currentGroup.color],
      });
    }

    return lines;
  }

  renderFavicons() {
    const iconScrollArea = document.getElementById('icon-scroll-area');
    if (!iconScrollArea) {
      return;
    }

    iconScrollArea.style.width = `${FAVICON_DATA.length * ICON_SPACING - 24}px`;

    FAVICON_DATA.forEach((site) => {
      const item = document.createElement('div');
      item.className = 'favicon-item';

      const img = document.createElement('img');
      img.src = site.url;
      img.alt = `${site.name} favicon`;
      img.className = 'favicon-img';
      img.loading = 'lazy';
      img.onerror = () => {
        img.src = './generic-website-icon.png';
      };

      item.appendChild(img);
      iconScrollArea.appendChild(item);
    });
  }

  renderLines() {
    const lineScrollArea = document.getElementById('line-scroll-area');
    if (!lineScrollArea) {
      return;
    }

    lineScrollArea.style.width = `${FAVICON_DATA.length * ICON_SPACING - 24}px`;

    const lineSegments = this.generateLineSegments();

    lineSegments.forEach((line) => {
      const lineElement = document.createElement('div');
      lineElement.className = `color-line ${line.color}`;
      lineElement.style.left = `${line.left}px`;
      lineElement.style.width = `${line.width}px`;
      lineElement.style.top = `${line.height}px`;

      lineScrollArea.appendChild(lineElement);
    });
  }

  setupEventListeners() {
    if (!this.iconContainer || !this.lineContainer || !this.footerContent) {
      return;
    }

    // Scroll synchronization
    const createScrollSyncHandler = (source, target) => {
      let isScrolling = false;

      return () => {
        if (isScrolling) return;
        isScrolling = true;

        target.scrollLeft = source.scrollLeft;

        const scrollLeft = source.scrollLeft;
        const containerWidth = source.clientWidth;

        let referencePosition;
        if (this.isMouseInBottomSection && this.cursorX !== null) {
          referencePosition = scrollLeft + this.cursorX;
        } else {
          referencePosition = scrollLeft + containerWidth / 2;
        }

        this.updateTimeAndWord(referencePosition);

        requestAnimationFrame(() => {
          isScrolling = false;
        });
      };
    };

    const handleIconScroll = createScrollSyncHandler(this.iconContainer, this.lineContainer);
    const handleLineScroll = createScrollSyncHandler(this.lineContainer, this.iconContainer);

    this.iconContainer.addEventListener('scroll', handleIconScroll, { passive: true });
    this.lineContainer.addEventListener('scroll', handleLineScroll, { passive: true });

    // Mouse tracking within footer
    this.footerContent.addEventListener('mousemove', (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      this.cursorX = e.clientX - rect.left;

      // Update cursor line position
      const footerRect = this.footerContent.getBoundingClientRect();
      const lineX = e.clientX - footerRect.left;
      if (this.cursorLine) {
        this.cursorLine.style.transform = `translateX(${lineX - footerRect.width / 2}px)`;
      }

      if (this.iconContainer) {
        const scrollLeft = this.iconContainer.scrollLeft;
        const referencePosition = scrollLeft + this.cursorX;
        this.updateTimeAndWord(referencePosition);
      }
    });

    this.footerContent.addEventListener('mouseleave', () => {
      this.cursorX = null;
      if (this.cursorLine) {
        this.cursorLine.style.transform = 'translateX(0px)';
      }
    });
  }

  updateTimeAndWord(referencePosition) {
    // Time manipulation based on position
    const timeOffsetMinutes = Math.floor(referencePosition / TIME_SCROLL_RATIO);
    const adjustedTime = new Date(this.baseTime.getTime() - timeOffsetMinutes * 60000);
    this.displayTime = this.formatTime(adjustedTime);
    if (this.displayTimeEl) {
      this.displayTimeEl.textContent = this.displayTime;
    }

    // Word/color detection based on position
    const iconIndex = Math.floor(referencePosition / ICON_SPACING);
    const colorGroupIndex = Math.floor(iconIndex / 3) % COLORS.length;
    const mapping = WORD_MAPPINGS[colorGroupIndex] || WORD_MAPPINGS[0];

    this.currentWord = mapping.word;
    this.wordColor = mapping.className;

    if (this.currentWordEl) {
      this.currentWordEl.textContent = this.currentWord;
      this.currentWordEl.className = `time-word ${this.wordColor}`;
    }
  }

  startTimeClock() {
    if (!this.displayTimeEl) {
      return;
    }

    const updateTime = () => {
      const now = new Date();
      this.currentTime = this.formatTime(now);
      this.baseTime = now;
      this.displayTime = this.currentTime;
      this.displayTimeEl.textContent = this.displayTime;
    };

    updateTime();
    setInterval(updateTime, 1000);
  }
}

// Initialize the favicon footer
let faviconFooterInstance = null;
const initFaviconFooter = () => {
  if (faviconFooterInstance) {
    return;
  }

  const instance = new FaviconFooter();
  if (instance && instance.isReady) {
    faviconFooterInstance = instance;
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFaviconFooter);
} else {
  initFaviconFooter();
}
