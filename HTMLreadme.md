# HTML readme
Here are some examples of what I have done in HTML

## Create an Image Row with Div Classes
I needed to create a row of images, which required a div structure like the one you are seeing below. The overall container is the row, which is later styled in CSS, while the individual images are saved as images that we will later place inside the image-row with flex.
```html
<div class="image-row">
    <div class="image">
      <img src="img/san-francisco.jpg" alt="san-francisco">
      <div class="image-text">
        San Francisco
      </div>
    </div>
    <div class="image">
      <img src="img/new-york.jpg" alt="new-york">
      <div class="image-text">
        New York
      </div>
    </div>
    <div class="image">
      <img src="img/london.jpg" alt="london">
      <div class="image-text">
        London
      </div>
    </div>
  </div>
```
