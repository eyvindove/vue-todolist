<template lang="pug">
  .home
    .title {{ upperCaseTitle }}
    main.main
      .input
        input.input__input(
          type="text"
          placeholder="Add new todo task..."
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
        .list__empty(v-if="!showContentListLength")
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
              .list__item__edit(@click.stop="editItemById(item.id)")
                .list__item__edit__icon
              .list__item__delete(@click.stop="deleteContent(item.id)")
                .list__item__delete__icon
    .nav
      router-link.nav__button(to='/about') About TodoList
    home-footer
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Store from '@/store'
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
    inputNewTask: '',
    nextId: 0,
  }),

  computed: {
    ...mapState([
      'contentList',
    ]),

    ...mapGetters([
      'filterAllList',
      'filterTodoList',
      'filterCompletedList',
    ]),

    upperCaseTitle () {
      return this.title.toUpperCase()
    },

    emptyText () {
      return this.tabList.find(item => item.id === this.activeTab).label
    },

    showContentList () {
      return this.activeTab === 0 ? this.filterTodoList :
        this.activeTab === 1 ? this.filterCompletedList :
        this.filterAllList
    },

    showContentListLength () {
      return this.showContentList.length
    },
  },

  watch: {
    'contentList': 'setItemToLocalStorage',
  },

  created () {
    this.checkLocalStorage()
    this.setItemToLocalStorage()
    this.checkNextId()
  },

  methods: {
    checkLocalStorage () {
      let existed = JSON.parse(window.localStorage.getItem('vue-todo-list:content'))
      if (existed) Store.commit('SET_CONTENT_LIST', existed)
    },

    checkNextId () {
      if (!this.contentList.length) return
      for (let item of this.contentList) this.nextId = this.nextId < item.id && item.id || this.nextId
      this.nextId++
    },

    toggleActiveTab (selectedId) {
      this.activeTab = selectedId
    },

    setItemToLocalStorage () {
      window.localStorage.setItem('vue-todo-list:content', JSON.stringify(this.contentList))
    },

    editItemById (editId) {
      let target = this.contentList.find(item => item.id === editId)
      Store.commit('SET_EDIT_ITEM', target)
      Store.commit('TOGGLE_POPUP_EDIT', true)
    },

    deleteContent (deleteId) {
      Store.commit('SET_CONTENT_LIST', this.contentList.filter(item => item.id !== deleteId))
      this.setItemToLocalStorage()
    },

    toggleStatus (toggleId) {
      for (let item of this.contentList) if (item.id === toggleId) item.status = item.status ? 0 : 1
      Store.commit('SET_CONTENT_LIST', this.contentList)
      this.setItemToLocalStorage()
    },

    addNewTask () {
      if (!this.inputNewTask.trim()) return this.inputNewTask = ''
      let newTask = {
        id: this.nextId,
        status: 0,
        text: this.inputNewTask,
      }

      Store.commit('SET_CONTENT_LIST', [ newTask, ...this.contentList ])
      this.inputNewTask = ''
      this.nextId++
    },
  },
}
</script>

<style lang="scss" scoped>
  @import './style';
</style>
