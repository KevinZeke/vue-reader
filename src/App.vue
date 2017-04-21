<template>
  <div class="root">
    <mid-action></mid-action>
    <top-nav v-if="$store.getters.getNavShow">
      <!--顶部返回栏组件-->
    </top-nav>
    <chapter-content>
      <!--文章主题组件-->
    </chapter-content>
    <button-bar></button-bar>
    <bottom-nav v-if="$store.getters.getNavShow">
      <!--底部控制栏组件-->
    </bottom-nav>
  </div>
</template>

<script>
  import topNav from './components/top-nav';
  import chapterContent from './components/chapter-content';
  import buttonBar from './components/prev-next-button';
  import bottomNav from './components/bottom-nav';
  import midAction from './components/mid-action';

export default {
  name: 'app',
  components:{
      topNav,
      chapterContent,
      bottomNav,
      buttonBar,
      midAction
  },
  data() {
      return {

      }
  },
  methods:{
      test() {
          console.log(store);
      }
  }
}
</script>

<style>
.root{
  height:100%;
}
</style>
