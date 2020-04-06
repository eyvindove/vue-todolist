<template lang="pug">
  .home
    .title {{ upperCaseTitle }}
    main.main
      .input
        input.input__input(
          type="text"
          placeholder="Add new task..."
          v-model="inputNewTask"
          v-focus
          @keyup.enter="addNewTask()"
        )
      .tab
        .tab__item(
          v-for="item in tabList"
          :key="item.id"
          :class="{ 'active': activeTab === item.id }"
          @click="toggleActiveTab(item.id)"
        )
          .tab__item__label {{ item.label }}
      .list
        .list__empty(v-if="!contentListLength")
          .list__empty__icon
          .list__empty__text This {{ emptyText }} list is empty...
        template(v-else)
          transition-group(name="flip-list" tag="div")
            .list__item(
              v-for="item in showContentList"
              :key="item.id"
              :class="{ 'completed': item.status }"
              @click="toggleStatus(item.id)"
            )
              .list__item__check
                .list__item__check__box
              .list__item__text {{ item.text }}
              .list__item__delete(@click="deleteContent(item.id)")
                .list__item__delete__icon
    .nav
      router-link.nav__button(to='/about') About TodoList
    home-footer
</template>

<script>
import { mapState } from 'vuex'
import HomeFooter from '@/components/footer'

export default {
  name: 'home',

  components: {
    HomeFooter,
  },

  data: () => ({
    title: 'No work, no leisure',
    tabList: [
      { id: 2, label: 'All' },
      { id: 0, label: 'To Do' },
      { id: 1, label: 'Completed' },
    ],
    activeTab: 2,
    showContentList: [],
    inputNewTask: '',
    nextId: 0,
  }),

  computed: {
    ...mapState([
      'contentList',
    ]),
    
    upperCaseTitle: function () {
      return this.title.toUpperCase()
    },

    contentListLength: function () {
      return this.showContentList.length
    },

    emptyText () {
      return this.tabList.find(item => item.id === this.activeTab).label
    },
  },

  watch: {
    'activeTab': 'filterContentList',
    'contentList': 'filterContentList',
  },

  created () {
    this.filterContentList()
    this.checkNextId()
  },

  methods: {
    checkNextId () {
      if (!this.contentList.length) return
      for (let item of this.contentList) this.nextId = this.nextId < item.id && item.id || this.nextId
      this.nextId++
    },

    toggleActiveTab (selectedId) {
      this.activeTab = selectedId
    },

    filterContentList () {
      this.showContentList = this.activeTab === 2 ? this.contentList : this.contentList.filter(item => item.status === this.activeTab)
    },

    deleteContent (deleteId) {
      this.$store.commit('SET_CONTENT_LIST', this.contentList.filter(item => item.id !== deleteId))
      this.filterContentList()
    },

    toggleStatus (toggleId) {
      for (let item of this.contentList) if (item.id === toggleId) item.status = item.status ? 0 : 1
      this.$store.commit('SET_CONTENT_LIST', this.contentList)
      this.filterContentList()
    },

    addNewTask () {
      if (!this.inputNewTask.trim()) return this.inputNewTask = ''
      let newTask = {
        id: this.nextId,
        status: 0,
        text: this.inputNewTask,
      }
      this.$store.commit('SET_CONTENT_LIST', [ newTask, ...this.contentList ])
      this.inputNewTask = ''
      this.nextId++
    },
  },
}
</script>

<style lang="scss" scoped>
  @import './style';
</style>
