import $ from "jquery"
export default (vm) => {
  const $select = $(vm.$el).find("select")
  return $select
}

