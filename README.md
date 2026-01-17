# YOUTUBE BOOKMARK

YouTube Bookmark is a lightweight and intuitive browser extension that allows users to save, manage, and revisit important timestamps from YouTube videos effortlessly. Designed to boost productivity and learning efficiency, it enables quick bookmarking of key moments without interrupting your viewing experience.

---

## PREVIEW

<p align="center">
  <img width="1321" height="802" alt="a"
       src="https://github.com/user-attachments/assets/aa5d787b-109a-4b16-b39d-1d0ba9208138" />
</p>


---

<p align="center">
  <img width="415" height="221" alt="b"
       src="https://github.com/user-attachments/assets/3933977a-242f-470d-9973-dbf8cbbeff25" />
</p>


---


<p align="center">
  <img width="399" height="87" alt="c"
       src="https://github.com/user-attachments/assets/1ace6e17-fd65-4aa6-b9ab-4d2e1582408b" />
</p>


---

## DESCRIPTION

The **YouTube Bookmark** project is built to solve a common problem faced by learners, developers, and content consumers—remembering important moments in long YouTube videos. Instead of scrubbing through timelines repeatedly, users can bookmark timestamps with custom notes and jump back to them instantly.

This extension integrates seamlessly with YouTube’s interface and stores bookmarks locally for fast access. Its clean UI, minimal permissions, and instant performance make it a practical productivity tool for everyday use.

---

## TECHNOLOGY STACK

YouTube Bookmark is built using modern, lightweight web technologies optimized for browser extensions.

### FRONTEND

* **HTML5**
  Provides the structure for the extension popup and UI elements with semantic and accessible markup.

* **CSS3**
  Clean, responsive styling for the popup interface, ensuring clarity and usability within a compact extension window.

* **JAVASCRIPT (ES6)**
  Core logic for detecting video timestamps, handling user interactions, storing bookmarks, and navigating to saved moments.

### BROWSER APIs

* **Chrome Extension APIs**
  Used for:

  * Content script injection into YouTube pages
  * Persistent storage via `chrome.storage`
  * Communication between popup and content scripts

---

## ARCHITECTURE OVERVIEW

```
┌───────────────────┐
│   YouTube Page    │
│ (Content Script)  │
└─────────▲─────────┘
          │
          │ Timestamp & Video Data
          ▼
┌───────────────────┐
│  Background Logic │
│  (Storage Layer)  │
└─────────▲─────────┘
          │
          │ Bookmark Data
          ▼
┌───────────────────┐
│ Extension Popup UI│
│ (HTML / CSS / JS) │
└───────────────────┘
```

---

## FEATURES

### CORE FUNCTIONALITY

* **One-Click Timestamp Bookmarking**
  Save the current video timestamp instantly while watching YouTube.

* **Custom Notes**
  Add meaningful descriptions to each bookmark for better recall.

* **Instant Navigation**
  Jump directly to saved timestamps with a single click.

* **Video-Specific Bookmarks**
  Bookmarks are automatically grouped by video ID.

### USER EXPERIENCE

* **Minimal & Clean UI**
  Focused design optimized for fast interactions.

* **Persistent Storage**
  Bookmarks remain saved even after browser restarts.

* **Real-Time Sync**
  Popup UI updates instantly when bookmarks are added or removed.

### PERFORMANCE & SAFETY

* **Lightweight**
  No external libraries or frameworks—fast and efficient.

* **Local Data Storage**
  All bookmarks are stored locally for privacy and speed.

* **Low Permissions**
  Works only on YouTube pages.

---

## PROJECT STRUCTURE

```
youtube-bookmark/
├── manifest.json        # Extension configuration
├── popup.html           # Popup UI
├── popup.css            # Popup styling
├── popup.js             # Popup logic
├── contentScript.js     # YouTube page interaction
├── background.js        # Storage & message handling
├── assets/              # Icons & screenshots
│   ├── icon.png
│   ├── icon.png
│   └── icon.png
└── README.md
```

---

## GETTING STARTED

### PREREQUISITES

* Google Chrome / Chromium-based browser
* Basic understanding of Chrome Extensions (optional)

### INSTALLATION (LOCAL)

1. Clone the repository:

```bash
git clone https://github.com/Navnit-07/youtube-bookmark.git
cd youtube-bookmark
```

2. Open Chrome and go to:

```
chrome://extensions/
```

3. Enable **Developer Mode** (top-right corner)

4. Click **Load unpacked**

5. Select the project folder

6. Open YouTube and start bookmarking

---

## HOW IT WORKS

1. Open any YouTube video
2. Click the **YouTube Bookmark extension**
3. Save the current timestamp with an optional note
4. Click any saved bookmark to jump back instantly

---

## BROWSER SUPPORT

* Chrome (Latest)
* Edge (Chromium-based)
* Brave
* Opera

---

## CONTRIBUTING

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

   ```bash
   git checkout -b feature/NewFeature
   ```
3. Commit your changes

   ```bash
   git commit -m "Add NewFeature"
   ```
4. Push to the branch

   ```bash
   git push origin feature/NewFeature
   ```
5. Open a Pull Request

---

## FUTURE ENHANCEMENTS

* [ ] Edit existing bookmarks
* [ ] Export / import bookmarks
* [ ] Search bookmarks by note
* [ ] Sync using Chrome account
* [ ] Dark mode UI
* [ ] Firefox support

---

## CONTACT

**Navnit**

* GitHub: [@Navnit-07](https://github.com/Navnit-07)
* Project Link:
  [https://github.com/Navnit-07/youtube-bookmark](https://github.com/Navnit-07/youtube-bookmark)

---

## ACKNOWLEDGMENTS

* Chrome Extensions Documentation
* YouTube Web Player API
* Open-source community

---

*Bookmark smarter. Learn faster. Never lose an important YouTube moment again.* 

