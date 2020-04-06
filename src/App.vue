<template lang="pug">
  .app
    transition(name="fade" mode="out-in")
      router-view
</template>

<style lang="scss">
  @import '@/assets/scss/generic';
</style>
