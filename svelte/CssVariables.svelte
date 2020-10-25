<script>

    // action to allow setting css custom properties
    // from the `script` tag
    // simply add use:cssVariables={{cssPropertyName: variableName}}
    // then, in the style block, refer to the cssPropertyName in your css where you need it ex: `margin: var(--cssPropertyName)`
    // if you need to convert from numbers to pixel values in your css you can use ex:
    // `font-size: calc(var(--cssPropertyName) * 1px)` for an easy conversion
    // credit goes to Tan Li Hau (https://twitter.com/lihautan, https://lihautan.com/)

    function cssVariables(node, variables) {
        setCssVariables(node, variables);

        return {
            update(variables) {
                setCssVariables(node, variables);
            }
        }
    }

    function setCssVariables(node, variables) {
        for(const name in variables) {
            node.style.setProperty(`--${name}`, variables[name]);
        }
    }

    // example:
    let whateverMargin = 1;
    let fontSize = 16;
</script>

<div class="whatever-div" use:cssVariables={{marginVar: whateverMargin}}>
    <!-- you can also use shorthand -->
    <p class="whatever-paragraph" use:cssVariables={{fontSize}}>This is a paragraph.</p>
</div>

<style>
    .whatever-div {
        margin: calc(var(--marginVar) * 1px); /* convert from number to css string w/pixel vals */
    }
    .whatever-paragraph {
        font-size: calc(var(--fontSize) * 1em); /* convert from number to em value */
    }
</style>