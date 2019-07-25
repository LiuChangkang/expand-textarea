<template>
  <div :class="$style['text-area-wrapper']">
    <pre :class="$style['pre-area']">{{val}}&nbsp;<br></pre>
    <textarea
            v-model="areaText"
            v-on:input="$emit('input', areaText)"
            v-on:change="$emit('input', areaText)"
            :class="$style['text-area']"
            :placeholder="placeholder"
            :maxlength="maxlength"
            :autofocus="autofocus"
            :readonly="readonly"
            :required="required"
            :disable="disable"
            :title="title"
            :name="name"
            :cols="cols"
            :form="form"
            :id="id"
    ></textarea>
  </div>
</template>

<script>
  export default {
    name: "ExpandTextArea",
    data () {
      return {
        areaText: this.val
      }
    },
    watch: {
      val (newVal) {
        this.areaText = newVal;
      }
    },
    model: {
      prop: 'val',
      event: 'input'
    },
    props: {
      placeholder: {
        type: String,
        default: undefined
      },
      val: {
        type: String,
        default: ''
      },
      autofocus: {
        default: undefined
      },
      maxlength: {
        type: [String, Number],
        default: undefined
      },
      required: {
        default: undefined
      },
      readonly: {
        default: undefined
      },
      disable: {
        default: undefined
      },
      title: {
        default: ''
      },
      cols: {
        type: [String, Number],
        default: undefined
      },
      form: {
        default: undefined
      },
      name: {
        default: undefined
      },
      id: {
        default: undefined
      }
    },
    install(Vue, name = 'expand-textarea') {
      Vue.component(name, this);
    }
  }
</script>

<style module lang="scss">
  .text-area-wrapper{
    position: relative;
  }
  .text-area{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border: none;
    line-height: inherit;
    font-size: inherit;
    text-align: inherit;
    resize: none;
    background: none;
  }
  .pre-area{
    white-space: pre-wrap;
    word-wrap: break-word;
    font-size: inherit;
    line-height: inherit;
    opacity: 0;
    pointer-events: none;
  }
</style>
