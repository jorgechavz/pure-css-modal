# Pure CSS Modal

A lightweight, accessible modal box built with **pure CSS** — no JavaScript required.

It uses the classic "checkbox hack": a hidden checkbox holds the open/closed state and `<label>` elements act as triggers, so the modal works anywhere HTML and CSS do.

**[Live demo →](http://jorgechavz.github.io/pure-css-modal/)**

## Features

- 🚫 **Zero JavaScript** — pure HTML + CSS
- 🪶 **Tiny** — one small CSS file, no dependencies
- 🎬 **Animated entrances** — slide in from top, bottom, left, or right
- 📐 **Configurable sizing** — normal, `small`, or `full` screen
- 📱 **Responsive** — adapts to tablet and phone widths
- ✅ **Click-outside & close button** to dismiss

## Installation

### Option 1 — Copy the file

Download [`css/modal.css`](css/modal.css) and add it to your project:

```html
<link rel="stylesheet" href="css/modal.css">
```

### Option 2 — Bower

```bash
bower install pure-css-modal
```

```html
<link rel="stylesheet" href="bower_components/pure-css-modal/css/modal.css">
```

> `modal.css` is the only file you need. `styles.css` only styles the demo page.

## Quick start

Add the modal markup and a trigger. The trigger's `for` attribute must match the checkbox `id`.

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

That's it — clicking the trigger opens the modal. It closes when the user clicks the
`&#10006;` button (`.close`) or the dark backdrop (`.o-close`).

> **Multiple modals?** Give each one a unique `id` on the `.checkbox` input and match it
> in every `for` attribute (e.g. `modal-trigger-signup`, `modal-trigger-terms`).

## Structure

| Element | Class | Role |
| ------- | ----- | ---- |
| Container | `.pure-modal` | Wraps the whole component |
| State | `.checkbox` | Hidden checkbox that stores open/closed state |
| Backdrop | `.pure-modal-overlay` | Full-screen dimmed layer |
| Click-outside | `.o-close` | Invisible label; closes the modal on backdrop click |
| Content box | `.pure-modal-wrap` | The visible modal panel |
| Close button | `.close` | The `✖` label that closes the modal |

## Customization

Add modifier classes to the **`.pure-modal-wrap`** element.

### Entrance direction

| Class | Effect |
| ----- | ------ |
| `from-top` | Slides down from the top |
| `from-bottom` | Slides up from the bottom |
| `from-left` | Slides in from the left |
| `from-right` | Slides in from the right |

### Position

| Class | Effect |
| ----- | ------ |
| `a-center` | Centers the modal vertically (default is top-aligned) |

### Size

| Class | Effect |
| ----- | ------ |
| _(none)_ | Default width (60%) |
| `small` | Narrow modal (30%) |
| `full` | Fills the entire viewport |

### Example

Combine modifiers freely — here a small, vertically centered modal that slides up from the bottom:

```html
<div class="pure-modal">
  <input id="modal-trigger" class="checkbox" type="checkbox">
  <div class="pure-modal-overlay">
    <label for="modal-trigger" class="o-close"></label>
    <div class="pure-modal-wrap a-center small from-bottom">
      <label for="modal-trigger" class="close">&#10006;</label>
      <!-- YOUR CONTENT HERE -->
    </div>
  </div>
</div>
```

## Browser support

Works in all modern browsers. It relies on the `:checked` pseudo-class, the general
sibling combinator (`~`), CSS transforms, and transitions.

## Author

Jorge Chavez — https://github.com/jorgechavz

## License

Released under the [MIT License](LICENSE).
