# CSS readme
Here are some examples of what I have done in CSS.

## Create Centered Overlay Text on an Image
Essentially what we are doing here is setting the background image's position to relative. This will allow for us to set the image-text to absolute within this image. From there, we set a series of instructions that constrain the text to fit in the center of the image.
```css
.image {
  position: relative;
}

.image-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 25px;
  font-weight: 700;
  white-space: nowrap;
}
```

## Create an Airbnb Style Button
This was created as a DIV as opposed to a regular button, because regular HTML style buttons come with a lot of pre-set settings. We want our button to be much prettier, so we gave these properties to a DIV and made this DIV clickable in JS.
```css
.button {
  display: flex;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: dimgray;
  font-size: 14px;
  width: 250px;
  height: 25px;
  border: 1px solid dimgray;
  background-color: white;
  align-self: center;
  justify-content: center;
  margin-block-start: 3em;
  text-align: center;
  padding-top: 5px;
  border-radius: 2px;
}
```

## Create a Tic-Tac-Toe Grid
I created a Tic-Tac-Toe Grid by setting a container to hold all of our boxes in HTML. From there we set the container to grid, but then the boxes to flex, which will allow for us to set them with centered alignment and justification.

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}

.box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  margin-bottom: 5px;
  border: 3px solid black;
  background-color: whitesmoke;
}
```
