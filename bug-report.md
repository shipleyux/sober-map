## Bug Report

---
### Bug Fix: Modal Not Closing Automatically on Form Submission

**Issue:**  
The contact form submission correctly triggered the success modal using Bootstrap’s `Modal.show()` method. However, the modal stayed open indefinitely, with no auto-close or feedback to the user. This disrupted the flow and could confuse users.

**Cause:**  
- No timer was set to close the modal after form submission.  
- Custom CSS styles were also conflicting with Bootstrap modal defaults.

**Fix:**  
- Added a `setTimeout()` to automatically hide the modal after 5 seconds using `Modal.hide()`.  
- Removed conflicting custom CSS related to modal visibility.

**Files updated:**  
- `script.js`  
- `styles.css`

---

### Bug: Modal Tags Displaying as Raw Text

**Issue:**  
Venue modals were displaying HTML tags like `<strong>` as plain text, making the content difficult to read.

**Cause:**  
Used `textContent` in JavaScript, which escapes HTML tags instead of rendering them.

**Fix:**  
Switched from `textContent` to `innerHTML` to allow proper rendering of HTML within modal content.

```js
// Before (buggy)
modalBody.textContent = body;

// After (fixed)
modalBody.innerHTML = body;
```


**Files updated:**
- `script.js`

---

### Bug Fix: Responsive Map & Venue List Layout

**Issue:**  
On smaller screens, the map and venue list layout broke or became cramped due to fixed widths and inflexible containers.

**Fix:**  
- Replaced fixed inline styles with Bootstrap responsive utility classes.  
- Used `flex-column` on mobile and `flex-lg-row` on larger screens.  
- Enforced consistent map height with custom CSS.  
- Used `map.invalidateSize()` after layout shift to ensure correct rendering.

**Files updated:**
- `index.html`  
- `styles.css`  
- `script.js`

---

### Bug: Email Screen Refreshing Unexpectedly After Modal Close

**Issue:**  
After submitting the email form and closing the modal, the screen refreshed unexpectedly. This caused loss of user input or broke the flow.

**Fix:**  
- Prevented default form submission behaviour with `event.preventDefault()` in JavaScript.  
- Confirmed modal closes smoothly with no page reload using Bootstrap’s modal methods.

**Files updated:**
- `script.js`

### 🛠️ Bug Fix: Favicon 404 Error

**Issue:**  
Browsers were returning a 404 error when trying to fetch `/favicon.ico`, as no favicon file was present at the root level of the site.

**Fix:**  
- Converted the project's logo to `.ico` format using an online favicon generator.
- Placed `favicon.ico` in the root directory of the project.
- Added the following line to the `<head>` of all HTML pages:

```html
<link rel="icon" href="favicon.ico" type="image/x-icon" />


