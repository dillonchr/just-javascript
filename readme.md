# Just Javascript
It's nice to just get back to basics and understand how JS works in the vacuum from whence it came. Plus some of the niceties that have been plugged into browsers over the years of course. But no frameworks, no npm, bower, grunt. Just the browser and some text.

## LINER NOTES: (disregard or hopefully these help in some way)

#   What is Javascript?
Good question. If you wanted to know that though you'd probably just google it. Okay but really quick, it's a browser language that allows you to manipulate content on the page. Javascript can create content but HTML elements are what we're talking about here. HTML and CSS are the only things that matter. Even when you get into 3D you're still using an HTML `<canvas />` element to display all the wonders of webGL. But I literally know nothing more than that right there about 3D. So let's lean back into what I do want to share.

## Work Plan
* learn about the Document Object Model (DOM)
* asynchronousity and data fetching (and hazarads therein)
* ES5 et al
* function scope

### DOM
HTML is all that the browser renders when loading a webpage. Javascript is just some extra instruction that can modify the HTML on the fly. So we need to understand the most common elements and the things available to manipulate with them in JS.

* layout tags
* text tags
* forms
* images
* video and audio

All of these tags also have specific `Events` that JS has access to.

* `change`
* `focus`
* `load`
* `error`

### Asynchronicity
JS uses an event loop. No multithreading exists (`webworkers` are interesting but not necessary to dig into now). So we need to be careful about how we handle _render blocking_ code. The great thing about this is JS treats everything as a `function`. Well don't quote me on that bit there. What I'm trying to convey is that `functions` are like candy in JS. We pass them back and forth. We can encapsulate a bunch of work into a function and pass it forever and then something can run that function with some limited context.

Function scope is interesting. Let's play with it a skosche. Skoshe. Skosh. Scosche. Vim doesn't want me to try and spell that as I say it phonetically. A teency bit, play with it, we will.

```javascript
var oldVar = 3;

function reduceReuseReinvigorate() {
    var newVar = ++oldVar;
    return newVar;
}

console.log(reduceReuseReinvigorate()); // -> ?
console.log(reduceReuseReinvigorate()); // -> ?
```

terrible example. But as 3rd Eye would say, "how's it gonna be?"

[CORRECT ANSWER GIVEN]: Excellent!
[INCORRECT ANSWER GIVEN]: Excellent! Your brain isn't as broken as JS function scope!


