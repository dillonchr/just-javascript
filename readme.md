# Just Javascript
It's nice to just get back to basics and understand how JS works in the vacuum from whence it came. Plus some of the niceties that have been plugged into browsers over the years of course. But no frameworks, no npm, bower, grunt. Just the browser and some text.

If you're just starting out on this repo, after you pull it down run `python -m SimpleHTTPServer` to start a local server now go to [localhost:8000/index.html](http://localhost:8000/index.html) :bridge_at_night:

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

Not really part of the DOM (right?) but JS has a few UI elements we can use (sparingly).

* console
* alert
* confirm
* prompt
* browser notifications
* navigation (well not UI but we could have a non-ui section I guess of just nav... heh)

### Asynchronicity
JS uses an event loop. No multithreading exists (`webworkers` are interesting but not necessary to dig into now). So we need to be careful about how we handle _render blocking_ code. The great thing about this is JS treats everything as a `function`. Well don't quote me on that bit there. What I'm trying to convey is that `functions` are like candy in JS. We pass them back and forth. We can encapsulate a bunch of work into a function and pass it forever and then something can run that function with some limited context.

Function scope is interesting. Let's play with it a skosche. Skoshe. Skosh. Scosche. Vim doesn't want me to try and spell that as I say it phonetically. A teency bit, play with it, we will.

```javascript
var oldVar = 3;
var newVar = "don't bring me here anymore, ahrite?";

function reduceReuseReinvigorate() {
    var newVar = ++oldVar;
    return newVar;
}

console.log(reduceReuseReinvigorate()); // -> ?
console.log(reduceReuseReinvigorate()); // -> ?
console.log(newVar); // -> ?
```

terrible example. Reflowed it once... let's run with it. As 3rd Eye would say, "how's it gonna be?"

```ruby
if [CORRECT ANSWER GIVEN]: Excellent!
elsif [INCORRECT ANSWER GIVEN]: Excellent! Your brain isn't as broken as JS function scope!
```

Most common use case for this type of maneuver is fetching data and then updating the display with it.

Let's learn good ol' fashioned [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started#Step_3_–_A_Simple_Example) before witnessing the beauty of [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

## ECMA and their so-called script standards
ES5 was a massive boom to Javascript. It totally stole the thunder from `jquery`. Actually if I remember correctly `jquery` is kind of part of the reason some of the features made it into ES5. I could be fabricating that entirely, but array methods and query selectors were game-changers (for browsers that implemented them early).

ES6+ was the next step. Oh right ES is the standard defined for JS which web browser makers are to follow in their JS engines. Yes everybody still has minor differences but thankfully the gap is much smaller today than 5 years ago.

Demo a few ES5 things
* array manips
* query selector
* localStorage

Then rewrite them with ES6
* lambda or arrow functions
* destructuring
* async awaits

