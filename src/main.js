import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import axios from 'axios';
import app from './App';
import jsonp from 'fetch-jsonp';


Vue.use(Vuex);
//Vuex数据管理
let store = new Vuex.Store({
  state:{
    navShow:false,
    fontSize:20,
    curBgColor:'#e9dfc7',
    bgChangeBtn:[
      {color:'#FFF0F5',cur:false},
      {color:'#D8BFD8',cur:true},
      {color:'#FAF0E6',cur:false},
      {color:'#F5DEB3',cur:false},
      {color:'#696969',cur:false}
    ]
  },
  getters:{
    getNavShow(state) {
      return state.navShow;
    },
    getBgChangeBtn(state) {
      return state.bgChangeBtn;
    },
    getCurBgColor(state){
      return state.curBgColor;
    },
    getFontSize(state){
      return state.fontSize;
    }
  },
  mutations:{
    toggleNav(state) {
      state.navShow = !state.navShow;
    },
    changeBgBtn(state,idx) {
      state.bgChangeBtn.forEach((item) => {item.cur = false;});
      state.bgChangeBtn[idx].cur = true;
      state.curBgColor = state.bgChangeBtn[idx].color;
    },
    changeFontSize(state,i){
      console.log(i);
      if(state.fontSize>=20&&i>0){
        return;
      }else if(state.fontSize<=13&&i<0){
        return;
      }
        state.fontSize+=i;
    }
  }
})

//处理localstorage数据
let storage = (function () {
  var prefix = "h5_reader_";
  var get = function (key) {
    return localStorage.getItem(prefix + key);
  };
  var set = function (key,val) {
    return localStorage.setItem(prefix + key,val);
  };
  return {
    get:get,
    set:set,
  }
})();


//获取后台数据
let getFiction = (function () {
  let info = function (callback) {
    axios.get('./mock/chapter.json').then(function (res) {
      if(res.status == 200){
        callback(res.data);
      }
    });
  }
  let curChapterContent = function (chapter_id,callback) {
    axios.get('./mock/data'+chapter_id+'.json').then(function (res) {
      callback && callback(res.data);
    })
  }
  let getJSONP = function (url,callback) {
  }
  return {info,curChapterContent,getJSONP};
})();


//实例化的Vue
new Vue({
  el:'#app',
  store,
  mounted() {
    this.$nextTick(function () {
      //添加屏幕滚动隐藏事件
      window.addEventListener('scroll',() => {this.$store.state.navShow = false});
      //初始化页面字体/背景颜色
      this.$store.state.fontSize = parseInt(storage.get('font-size')) || 14;
      this.$store.state.curBgColor = storage.get('curBgColor') || '#e9dfc7';

      getFiction.info(function (data) {
        let chapter_id = data.chapters[1].chapter_id;
        getFiction.curChapterContent(chapter_id,function (res) {
          // getFiction.getJSONP(res.jsonp);
        })
      });

    })
  },
  components:{
    app
  },
  watch:{
    '$store.state.curBgColor':function () {
      storage.set('curBgColor',this.$store.state.curBgColor);
    },
    '$store.state.fontSize':function () {
      storage.set('font-size',this.$store.state.fontSize);
    }
  }
})

