<template>
  <div class="form-group" :class="{ hidden: isHidden }">
    <of-label v-if="label" :text="label"></of-label>
    <input type="checkbox" />
  </div>
</template>

<script>
import Field from "../Field"
import Label from "../Label"

import merge from "../utils/merge.js"

function $switch(vm) {
  return $(vm.$el).find("input")
}

function options(vm) {
  return merge(
    {
      onText: "Sim",
      offText: "Não",
      size: "mini"
    },
    ["animate", "baseClass", "disabled", "handleWidth", "indeterminate", "inverse", "labelText", "labelWidth", "offColor", "offText", "onColor", "onInit", "onSwitchChange", "onText", "radioAllOff", "readonly", "size", "state", "wrapperClass"],
    vm.options
  )
}

export default {
  name: "of-switch",
  components: {
    [Label.name]: Label
  },
  extends: Field,
  props: {
    isMultiple: {
      type: Boolean,
      default: false
    },
    isSecret: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  methods: {
    focus() {
      this.$el.getElementsByTagName("select")[0].focus()
    }
  },
  destroyed() {
    $switch(this)
      .off()
      .bootstrapSwitch("destroy")
  },
  mounted() {
    const self = this
    $switch(self)
      .bootstrapSwitch(options(self))
      .bootstrapSwitch("state", Boolean(self.value), true)
      .on("switchChange.bootstrapSwitch", (event, state) => {
        self.set(state)
      })
  },
  watch: {
    value() {
      $switch(this)
        .bootstrapSwitch("state", Boolean(this.value), true)
    }
  }
}
</script>

<style lang="scss" scoped>
.form-group {
  div.input-group {
    width: 100%;
  }
  &.hidden {
    display: none;
  }
}
</style>