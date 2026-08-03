# Pure CSS Modal

A lightweight, accessible modal built with **pure CSS** — no JavaScript required — with an
**optional React component** for a first-class React experience.

Under the hood it uses the classic "checkbox hack": a hidden checkbox holds the open/closed
state and `<label>` elements act as triggers, so the modal works anywhere HTML and CSS do.
The React wrapper renders the exact same markup and can either drive it with `isOpen`/`onClose`
or fall back to the zero-JS checkbox behavior.

**[Live demo →](http://jorgechavz.github.io/pure-css-modal/)**

## Features

- 🚫 **Zero JavaScript** core — pure HTML + CSS
- ⚛️ **Optional React component** — `import { Modal } from 'pure-css-modal'`
- 🪶 **Tiny** — one small CSS file, no runtime dependencies
- 🎬 **Animated entrances** — slide in from top, bottom, left, or right
- 📐 **Configurable sizing** — normal, `small`, or `full` screen
- 📱 **Responsive** — adapts to tablet and phone widths
- ♿ **Accessible** — `role="dialog"`, Esc-to-close, and click-outside to dismiss (React)

---

## Use with React

### Install

```bash
npm install pure-css-modal
```

`react >= 18` is a peer dependency.

### Import the stylesheet once

Do this at your app entry (or wherever you set up global styles):

```js
import 'pure-css-modal/modal.css';
```

### Controlled (recommended)

Drive the modal with your own state via `isOpen` and `onClose`:

```tsx
import { useState } from 'react';
import { Modal } from 'pure-css-modal';
import 'pure-css-modal/modal.css';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open modal</button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        direction="bottom"
        center
        aria-label="Example dialog"
      >
        <h2>Hello from React</h2>
        <p>Put anything you want in here.</p>
      </Modal>
    </>
  );
}
```

The modal closes on the ✖ button, a backdrop click, or the `Escape` key — each calls `onClose`.

### Uncontrolled (zero-JS)

Omit `isOpen` and pass a `trigger`. This renders the pure-CSS checkbox hack — no state, no
JavaScript needed to open or close it:

```tsx
import { Modal } from 'pure-css-modal';
import 'pure-css-modal/modal.css';

function Example() {
  return (
    <Modal trigger={<span className="open-modal">Open modal</span>} size="small" direction="top">
      <h2>Hello</h2>
      <p>Closes with the ✖ or by clicking the backdrop — all in CSS.</p>
    </Modal>
  );
}
```

### Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `children` | `ReactNode` | — | Modal content. |
| `isOpen` | `boolean` | — | Controlled open state. Presence switches to controlled mode. |
| `defaultOpen` | `boolean` | `false` | Initial state for uncontrolled usage. |
| `onClose` | `() => void` | — | Called on close (button, backdrop, or Esc). |
| `direction` | `'top' \| 'bottom' \| 'left' \| 'right'` | — | Entrance animation direction. |
| `center` | `boolean` | `false` | Vertically center the modal. |
| `size` | `'small' \| 'full'` | — | Modal size. |
| `showClose` | `boolean` | `true` | Render the built-in ✖ close button. |
| `closeOnBackdropClick` | `boolean` | `true` | Close when the backdrop is clicked. |
| `closeOnEsc` | `boolean` | `true` | Close on `Escape` (controlled mode). |
| `trigger` | `ReactNode` | — | Uncontrolled only: element that opens the modal. |
| `id` | `string` | auto | Explicit id linking trigger/labels to the checkbox. |
| `className` | `string` | — | Extra classes on the modal panel. |
| `aria-label` | `string` | — | Accessible label for the dialog. |

---

## Use with plain HTML / pure CSS

No build step, no framework — just the stylesheet and some markup.

### Install

Copy [`css/modal.css`](css/modal.css) into your project (or `bower install pure-css-modal`) and link it:

```html
<link rel="stylesheet" href="css/modal.css">
```

### Markup

The trigger's `for` attribute must match the checkbox `id`.

```html
<!-- Modal -->
<div class="pure-modal">
  <input id="modal-trigger" class="checkbox" type="checkbox">
  <div class="pure-modal-overlay">
    <label for="modal-trigger" class="o-close"></label>
    <div class="pure-modal-wrap">
      <label for="modal-trigger" class="close">&#10006;</label>
      <h2>This is the modal content</h2>
      <p>Put anything you want in here.</p>
    </div>
  </div>
</div>

<!-- Trigger (place anywhere) -->
<label for="modal-trigger">Open modal</label>
```

> **Multiple modals?** Give each `.checkbox` input a unique `id` and match it in every
> `for` attribute (e.g. `modal-trigger-signup`, `modal-trigger-terms`).

### Structure

| Element | Class | Role |
| ------- | ----- | ---- |
| Container | `.pure-modal` | Wraps the whole component |
| State | `.checkbox` | Hidden checkbox that stores open/closed state |
| Backdrop | `.pure-modal-overlay` | Full-screen dimmed layer |
| Click-outside | `.o-close` | Invisible element; closes the modal on backdrop click |
| Content box | `.pure-modal-wrap` | The visible modal panel |
| Close button | `.close` | The `✖` that closes the modal |

### Customization

Add modifier classes to **`.pure-modal-wrap`** (or use the matching React props above).

| Category | Classes |
| -------- | ------- |
| Direction | `from-top`, `from-bottom`, `from-left`, `from-right` |
| Position | `a-center` (vertically center) |
| Size | `small` (30%), `full` (fills viewport); default is 60% |

Combine them freely, e.g. a small, centered modal that slides up from the bottom:

```html
<div class="pure-modal-wrap a-center small from-bottom">
  <!-- ... -->
</div>
```

---

## Browser support

Works in all modern browsers. It relies on the `:checked` pseudo-class, the general sibling
combinator (`~`), CSS transforms, and transitions.

## Author

Jorge Chavez — https://github.com/jorgechavz

## License

Released under the [MIT License](LICENSE).
