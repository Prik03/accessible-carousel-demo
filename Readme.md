# Accessible Carousel – WCAG 2.5.1 Pointer Gestures

An accessible carousel component built to demonstrate WCAG 2.5.1 (Pointer Gestures) compliance.

The project includes two carousels:

- **Success Example** – Carousel with buttons (meets WCAG 2.5.1 by providing simple alternative input methods).
- **Failure Example** – Carousel without buttons (relies only on swipe gestures and intentionally fails WCAG 2.5.1).

It also illustrates other accessibility practices like keyboard navigation, live region announcements, and descriptive alt text.

## Features

- **Success & Failure Examples:** Demonstrates how design decisions impact compliance with WCAG 2.5.1.
- **Keyboard Accessible (Success Example):** Navigate slides using Tab, Arrow Keys, and buttons.
- **Screen Reader Friendly:** Uses semantic HTML, ARIA roles, and aria-live regions to announce slide changes.
- **Pointer Gesture Support:** Supports mouse, keyboard, and touch gestures for slide navigation.
- **Responsive Design:** Adjusts layout across different screen sizes.
- **Live Announcements:** Announces current slide changes for assistive technologies.

## WCAG References

This project highlights the following WCAG 2.1 success criteria:

- **2.1.1 Keyboard** – Interactive elements are operable via keyboard.
- **2.1.2 No Keyboard Trap** – Focus is never trapped in the carousel.
- **2.5.1 Pointer Gestures** – Success example provides simple buttons; failure example relies only on gestures.
- **4.1.2 Name, Role, Value** – UI elements expose appropriate information to assistive tech.
- **4.1.3 Status Messages** – Slide changes are announced without moving focus.

## Demo

Explore the live demo here:  
[Live Demo Link](https://accessible-carousel-demo.vercel.app/)

## Installation

Clone the repository:

```bash
git clone https://github.com/Prik03/accessible-carousel-demo.git
cd accessible-carousel-demo
```

Open `index.html` directly in your browser or serve it locally.

## Usage

- Use the provided HTML structure for carousels.
- Include the provided CSS for layout and styling.
- Link the JavaScript file to enable keyboard, swipe, and live-announcement functionality.
- Provide meaningful alt text for all images to support screen readers.

## Keyboard Shortcuts

(Applicable to the Success Example – Carousel with Buttons)

| Key         | Action                 |
| ----------- | ---------------------- |
| Tab         | Move focus to controls |
| Enter/Space | Activate buttons       |
| ←           | Previous slide         |
| →           | Next slide             |

## Project Structure

```
accessible-carousel-demo/
│
├── index.html      # Main HTML file with both carousels
├── style.css       # Styles for carousels and announcements
└── script.js       # Carousel behavior (keyboard, swipe, live region)
```

## Accessibility Testing

Tested with:

- Keyboard-only navigation
- NVDA and JAWS screen readers (Windows)
- VoiceOver (macOS / iOS)
- ChromeVox (Chrome)

## License

This project is licensed under the MIT License.

## Notes

- The Success Example (with buttons) demonstrates how to meet WCAG 2.5.1 by providing an easy alternative input method in addition to swipe gestures.
- The Failure Example (without buttons) is intentionally included to illustrate what happens when only complex gestures are required.
