<template lang="pug">
  .about
    .title About TodoList
    .content
      .content__description {{ content.description }}

    .ref
      p Icons is made by
        | &nbsp;
        a(
          href="https://www.flaticon.com/authors/freepik"
          title="Freepik"
          target="_blank"
        ) Freepik &
        a(
          href="https://www.flaticon.com/authors/those-icons"
          title="Those Icons"
          target="_blank"
        ) Those Icons
        | &nbsp;from
        a(
          href="https://www.flaticon.com/"
          title="Flaticon"
          target="_blank"
        ) www.flaticon.com

    nav.nav
      router-link(to='/').nav__button Back To Home
    home-footer
</template>

<script>
import HomeFooter from '@/components/footer'

export default {
  name: 'about',

  components: {
    HomeFooter,
  },

  data: () => ({
    content: {
      description: 'This TodoList is created by Vue CLI, used Vue.js Vuex, Vue Router etc. related technologies.',
    },
  }),
}
</script>

<style lang="scss" scoped>
  @import './style';
</style>
