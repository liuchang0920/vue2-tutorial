Vue.component('progress-view', {
    data(){
      return {completionRate:10}
    }
});

//component should come before Vue 
new Vue({
    el:'#root'
});



