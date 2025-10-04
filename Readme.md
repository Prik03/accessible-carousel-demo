# Accessible Carousel

An accessible carousel component built with a focus on WCAG compliance, keyboard navigation, and screen reader support.  
This project demonstrates how to create a user-friendly carousel that is inclusive for all users.

## Features

- **Keyboard Accessible:** Navigate slides using <kbd>Tab</kbd>, <kbd>Arrow Keys</kbd>, and buttons.
- **Screen Reader Friendly:** Uses ARIA roles and aria-live regions for announcing slide changes.
- **Pointer Gesture Support:** Works with mouse and touch gestures for easy slide navigation.
- **Responsive Design:** Adjusts layout for different screen sizes.
- **Live Announcement:** Announces current slide changes to assistive technologies.

## WCAG References

This project primarily addresses the following WCAG success criteria:

- **2.1.1 Keyboard**
- **2.1.2 No Keyboard Trap**
- **2.5.1 Pointer Gestures**
- **4.1.2 Name, Role, Value**
- **4.1.3 Status Messages**

## 🚀 Demo

You can view the live demo here:  
[Live Demo Link](https://accessible-carousel-demo.vercel.app/)

## Installation

Clone the repository:

```bash
git clone https://github.com/Prik03/accessible-carousel-demo
cd accessible-carousel
```

Open `index.html` in your browser or use a local server to preview.

## Usage

1. Include the carousel HTML structure in your page.
2. Link the provided CSS for styling.
3. Add the JavaScript file to enable carousel functionality.
4. Ensure all slides include descriptive alt text for images.

## Keyboard Shortcuts

| Key                                 | Action                 |
| ----------------------------------- | ---------------------- |
| <kbd>Tab</kbd>                      | Move focus to buttons  |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | Activate buttons       |
| <kbd>←</kbd>                        | Move to previous slide |
| <kbd>→</kbd>                        | Move to next slide     |

## Project Structure

```
accessible-carousel/
│
├── index.html      # Main HTML file
├── style.css       # Styles for carousel
└── script.js       # Carousel functionality
```

## Accessibility Testing

Tested with:

- Keyboard-only navigation
- NVDA and JAWS screen readers
- VoiceOver on macOS and iOS
- ChromeVox for Chrome

## License

This project is licensed under the MIT License.
