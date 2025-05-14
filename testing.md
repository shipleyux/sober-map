## Manual Testing Report

During development, I carried out manual testing across different features of the site to make sure everything worked smoothly, especially after resolving some layout and modal bugs. Issues were tracked and documented in the [Bug Fix Report](#bug-report), and this section outlines how I tested each fix and feature to confirm they were resolved.

---

### Contact Form Modal Auto-Close

- **Issue flagged:** Modal didn’t auto-close after submitting the contact form, which could confuse users. I noticed this during manual testing when trying out the form myself.
- **Fix applied:** Added a `setTimeout()` to auto-close the modal after 5 seconds.
- **Tested by:** Submitting the form multiple times with valid inputs.
- **Result:** Modal opens, confirms the message was sent, then closes automatically without refreshing the page.
- Confirmed working after fix.

---

### Venue Info Modals Displaying HTML Tags

- **Issue flagged:** I noticed HTML tags like `<strong>` were showing as raw text in the modal instead of rendering correctly.
- **Fix applied:** Replaced `.textContent` with `.innerHTML` in the JavaScript.
- **Tested by:** Clicking "More Info" on several venue cards to check formatting.
- **Result:** Content now appears properly formatted in all modals.
- Confirmed working after fix.

---

### Responsive Layout (Map + Venue List)

- **Issue flagged:** On mobile, the map was being pushed awkwardly to the bottom or squashed due to fixed layout styling.
- **Fix applied:** Used Bootstrap responsive classes like `flex-column` on smaller screens and `flex-row` on larger ones. Added custom CSS to define consistent height in `rem` units and used `map.invalidateSize()` to fix rendering after layout shifts. Ensured that scroll behavior on the venue list was retained.
- **Testing process:** 
  - Used Chrome DevTools to simulate various mobile screen sizes (iPhone, Pixel, Galaxy).
  - Manually resized the browser window to observe map and card behavior at different breakpoints.
  - Applied `overflow-y: auto` to the venue container and adjusted max-heights.
- **Outcome:** 
  - The venue list and map now stack correctly on mobile and appear side-by-side on desktop.
  - Venue list is scrollable with appropriate spacing, and the map is readable and interactive across all tested devices.
  - Despite some challenges adjusting map height perfectly on desktop, the current implementation meets usability and responsiveness goals.

**Final Result:** Confirmed working after fix. The layout is now clean, functional, and accessible across mobile and desktop.


---

### Search Functionality

- **Tested** the live search bar with multiple venue names.
- **Expected Result:** Matching cards should appear in real-time.
- **Result:** Worked as expected — search is responsive and accurate.
- No issues found.

---

### Map Markers & Popups

- **Tested** that each venue loads on the map and displays correct info when clicked.
- **Expected Result:** Popups should show title, rating, and area.
- **Result:** All markers loaded and displayed info correctly.
- No issues found.

---

**Devices/Browsers Used:**  
- Desktop (Chrome, Firefox)  
- Mobile view via Chrome DevTools (iPhone 13, Galaxy S20 breakpoints)  

---

### Hero Image Removal for Performance Improvement

To improve the site's performance metrics—particularly **Largest Contentful Paint (LCP)** and **First Contentful Paint (FCP)**—the hero background image on the contact page was removed and replaced with a solid background color.

Hero images, especially large or uncompressed ones, can significantly delay the time it takes for meaningful content to appear on screen. By removing the image, I reduced the overall **page weight**, improved **load speed**, and provided a faster, more responsive experience, particularly on mobile devices or slower connections.

This change contributed to an increase in the Lighthouse **Performance** score without negatively affecting the user experience or design clarity.


Overall, manual testing helped me catch and fix a few key issues with modals and layout. Everything now works as expected across devices, and all bug fixes are documented in detail in the [Bug Fix Report](bug-report.md).
