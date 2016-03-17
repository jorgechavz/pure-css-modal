# Pure CSS modal
CSS modal. No javascript.


## DEMO
See the demo: http://jorgechavz.github.io/pure-css-modal/


## Installation
Via bower
```
bower install pure-css-modal
```

Add the CSS file to your project
```html
<link rel="stylesheet"bower_components/pure-css-modal/css/modal.css"/>
```

Add this basic HTML to your site.
```html
<div class="modal">
  <input id="modal-trigger" class="checkbox" type="checkbox">
  <div class="modal-overlay">
    <label for="modal-trigger" class="o-close"></label>
    <div class="modal-wrap">
      <label for="modal-trigger" class="close">&#10006;</label>
      <h2>This is the modal content</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique cum sequi maxime officia provident voluptatibus aut! Non autem asperiores repellat architecto laboriosam officiis ab libero enim illo animi, error alias.
      </p>
    </div>
  </div>
</div>
```

Use a label as a trigger
```html
<label for="modal_trigger">Launch modal</label>
```


## Customize
Add entrance direction to the modal by adding any of this classes to the `modal-wrap` div

| Class         |
| ------------- |
| from-top      |
| from-bottom   |
| from-left     |
| from-right    |

You can center the modal in the middle of the screen by adding the class `a-center` to the `modal-wrap`

| Class    |
|----------|
| a-center |


For example:

```html
<div class="modal">
  <input id="modal_trigger" class="checkbox" type="checkbox">  
  <div class="modal_overlay">
    <label for="modal-trigger" class="o-close"></label>
    <div class="modal_wrap from_top">
      <label for="modal_trigger" class="close">&#10006;</label>
      <!-- YOUR CONTENT HERE -->

    </div>
  </div>
</div>

```



### Modal in a 'CLOSE' state
<img src="http://i653.photobucket.com/albums/uu259/chikinflue/Captura%20de%20pantalla%202015-06-18%20a%20las%2018.18.03_zpsq85cq4bo.png">

### Modal in a 'OPEN' state
<img src="http://i653.photobucket.com/albums/uu259/chikinflue/Captura%20de%20pantalla%202015-12-28%20a%20las%2012.55.43%20p.m._zpspi75mkct.png">


### Author
Jorge Chavez https://github.com/jorgechavz

## Licence
The MIT License (MIT)

See [LICENCE](https://github.com/jorgechavz/pure-css-modal/blob/master/LICENSE) for details.
