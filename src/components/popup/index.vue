<template lang="pug">
  .popup
    .popup__content
      input.popup__content__input(
        v-model="editText"
        type="text"
        placeholder="Please type something..."
      )
      .popup__content__prompt(v-if="isError") {{ errorPromptText }}
      .popup__content__button
        .popup__content__button__confirm(@click="confirmContent") Confirm
        .popup__content__button__cancel(@click="closeEdit") Cancel
</template>

<script>
import { mapState } from 'vuex'
import Store from '@/store'

export default {
  name: 'popup-edit',

  data: () => ({
    errorPromptText: '* Please type something',
    editText: '',
  }),

  computed: {
    ...mapState([
      'contentList',
      'editItem',
    ]),

    'isError': function () {
      return this.editText === ''
    },
  },

  created () {
    this.editText = this.editItem.text
  },

  methods: {
    confirmContent () {
      if (this.editText === '') return
      let confirmedContentList = this.contentList.map(item => {
        if (item.id === this.editItem.id) item.text = this.editText
        return item
      })
      Store.commit('SET_CONTENT_LIST', confirmedContentList)
      Store.commit('TOGGLE_POPUP_EDIT', false)
    },

    closeEdit () {
      Store.commit('TOGGLE_POPUP_EDIT', false)
    },
  },
}
</script>

<style lang="scss" scoped>
  @import './style';
</style>
