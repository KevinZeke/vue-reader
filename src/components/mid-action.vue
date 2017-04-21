<template>
    <div class="article-action-mid" id="action_mid" @click="$store.commit('toggleNav')">
    </div>
</template>

<script>
  export default{

  }
</script>

<style>
  .article-action-mid{
    width: 100%;
    height:40%;
    top:30%;
    position: fixed;
    z-index: 9999;
  }
</style>
