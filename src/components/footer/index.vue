<template lang="pug">
  footer.footer__content
    .footer__content__about
    .footer__content__text Copyright &copy; {{ currentYear }} Eyvindove Reserved
</template>

<script>
export default {
  name: 'home-footer',

  computed: {
    currentYear: function () {
      return new Date().getFullYear()
    },
  },
}
</script>

<style lang="scss" scoped>
  @import './style';
</style>
