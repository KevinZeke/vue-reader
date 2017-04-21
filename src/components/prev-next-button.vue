<template>
  <div class="button-bar">
    <ul class="u-tab">
      <li id="prev_button">上一章</li>
      <li id="next_button">下一章</li>
    </ul>
  </div>
</template>

<script>
  export default{

  }
</script>

<style>
  .button-bar{
    width:60%;
    max-width: 700px;
    margin: 2rem auto;
  }
  .u-tab{
    /*height: 3.4rem;*/
    line-height: 3.4rem;
    background-color: #000;
    opacity: .8;
    border-radius: 1rem;
  }
  .u-tab li{
    text-align: center;
    display:inline-block;
    width:48%;
    color: #fff;
    cursor: pointer;
  }
  .u-tab li+li{
    border-left:1px solid #fff;
  }
</style>
