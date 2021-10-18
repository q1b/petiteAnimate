# petiteAnimate
##### A transition Component for petite-vue which works without any css libraries and using web animation api under the hood,

### brotli Size ~ 0.34kb
### Size over CDN ~ 1Kb

```javascript
npm i petite-animate@latest
```

(Check out Example)[https://codepen.io/Sacarvy/pen/WNOLMBx]

#### To install it through npm

```javascript
npm i petite-aniamte
```

```yarn
yarn add petite-aniamte
```

#### CDN URLs

##### The short CDN URL is meant for prototyping. For production usage, use a fully resolved CDN URL to avoid resolving and redirect cost:

- ESM build: `https://unpkg.com/browse/petite-animate/dist/petite-animate.es.js`

then in your html script where you defined your petite-vue instance  
```html
<script type="module">
import { createApp } from 'petite-vue'
import { state } from 'vue-petite-transition'
// register the directive
createApp(Animate).mount()
</script>
```
Now Have Fun !
