import Router from "vue-router"
import Vue from "vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Hello",
      component: (resolve) => require(["@/pages/Hello"], resolve)
    },
    {
      path: "/field",
      name: "Field",
      component: (resolve) => require(["@/pages/fields/field"], resolve)
    },
    {
      path: "/fields/input",
      name: "Input",
      component: (resolve) => require(["@/pages/fields/input/input"], resolve)
    },
    {
      path: "/fields/datetime-picker",
      name: "DateTime Picker",
      component: (resolve) => require(["@/pages/fields/input/datetimePicker"], resolve)
    }
  ]
})
