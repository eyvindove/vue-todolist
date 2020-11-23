<template lang="pug">
  .app
    transition(name="fade" mode="out-in")
      router-view.app-container
    transition(name="fade" mode="out-in")
      .app__mask(v-if="isPopupEditOpen")
        popup-edit
</template>

<script>
import { mapState } from 'vuex'
import popupEdit from '@/components/popup'

export default {
  name: 'app',

  components: {
    popupEdit,
  },

  computed: {
    ...mapState([
      'isPopupEditOpen',
    ]),
  },
}
</script>

<style lang="scss">
  @import '@/assets/scss/generic';
</style>
