<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built-in Directives</h1>
        <p v-text="'Some Text'"></p>
        <p v-html="'<strong> Strong text</strong>'"></p>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-highlight:background.delay="'red'">Color this</p>
        <p v-local-highligth:background.delay.blink="{ maincolor: 'orange', secondColor: 'yellow', delay: 500 }">Color this two</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "local-highligth": {
      // eslint-disable-next-line
      bind(el, binding, vnode) {
        let delay = 0;
        if (binding.modifiers["delay"]) {
          delay = 3000;
        }

        if (binding.modifiers["blink"]) {
          let maincolor = binding.value.maincolor;
          let secondColor = binding.value.secondColor;
          let currentColor = maincolor;

          setTimeout(() => {
            setInterval(() => {
              currentColor === secondColor
                ? (currentColor = maincolor)
                : (currentColor = secondColor);

              if (binding.arg === "background") {
                el.style.background = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg === "background") {
              el.style.background = binding.value.maincolor;
            } else {
              el.style.color = binding.value.maincolor;
            }
          }, delay);
        }
      }
    }
  }
};
</script>