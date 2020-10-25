## Example
Generally, trying to use css custom properties in SVG won't work if you're only setting your custom properties in the `:root` context.

As an example, I have a pretty long `colors.css` file that I keep around (I'll have to add that to my helpers) so that I don't have to look up hex colors all the time.

I was recently trying to apply some of those pre-defined colors to some inline svg and it just wasn't happening.

```css
:root {
    --red: #ff443a;
    --yellow: #ffda44;
    --blue: #41b3ff;
    --green: #38d1ab;
    --dark-gray: #1a1a1a;
}

.red-rect {
    fill: var(--red);
}
```

The problem, is that `svg` contains its own `DOM`, so custom properties applied to the `:root` of the document won't be picked up by elements in the SVG's `DOM`.

One solution is to add your custom properties and styling to a `<style>` tag _inside_ the SVG. This works, but it means that you have to go back to the SVG's style tag to make those changes. That's fine for an SVG you want to use throughout a project but it gets to be a pain to set colors all over the place if you're using inline SVG a lot in your document.

```xml
<svg viewBox="0 0 50 50">
    <style>
    :root {
        --red: #ff443a;
        --yellow: #ffda44;
        --blue: #41b3ff;
        --green: #38d1ab;
        --dark-gray: #1a1a1a;
    }

    .red-rect {
        fill: var(--red);
    }
    </style>
    <rect class="red-rect" width="50" height="50" x="0" y="0" />
</svg>
```

The easy solution, if you want your custom properties to just apply to your inline SVG automatically, is to just add `svg` to the selector list where you define your custom properties.

```css
:root, svg {
    --red: #ff443a;
    --yellow: #ffda44;
    --blue: #41b3ff;
    --green: #38d1ab;
    --dark-gray: #1a1a1a;
}
```