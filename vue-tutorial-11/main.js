Vue.component('tabs', {
     template: `
     <div>
        <div class="tabs">
          <ul>
           <li v-for="tab in tabs" :class="{'is-active': tab.isActive}">
                <a :href="tab.href" @click="selectTab(tab)">{{tab.name}}</a>
           </li>
          </ul>
        </div>

        <div class="table-details">
            <slot></slot>
        </div>
     </div>
     `
    // , mounted(){
    //     console.log(this.$children);
    // }
    , created(){
        this.tabs = this.$children;
    }, data(){
        return {
            tabs:[]
        }
    }, methods:{
        selectTab(selectedTab){
            //alert("selected");
            this.tabs.forEach(tab =>{
                tab.isActive = (tab.name==selectedTab.name);
            });
        }
    }
});


Vue.component('tab',{
    template:`
    <div v-show="isActive"><slot></slot></div>
    `,
    props:{
        name:{
            required: true
        },
        selected: {default: false}
    }, 
    data(){
        return{
            isActive: false
        }
    }, mounted(){
        this.isActive = this.selected;
    }, computed:{
        href(){
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    }
});

var app = new Vue({
    el: '#root'
    , data: {
        showModal: true
    }
    , methods: {
        showModal() {
            //alert("show");
            this.showModal = true;
        }
    }
});