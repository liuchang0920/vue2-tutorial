
//communicating between components
window.Event = new class{
    constructor(){
        this.vue = new Vue();
    }

    fire(event, data= null){
        this.vue.$emit(event, data);
    }

    listen(event, callback){
        this.vue.$on(event ,callback);
    }
}
Vue.component('coupon', {
    template:`
        <input type="text" placeholder="enter a coupon code" @blur="onCouponApplied"/>
    `,
    methods:{
        onCouponApplied(){
            //alert('component applied');
            Event.fire('applied');
        }
    }
});

//component should come before Vue 
new Vue({
    el:'#root',
    methods:{
        onCouponApplied(){
            this.couponApplied = true;
        }
    },
    data:{
        couponApplied: false
    }
    ,created (){
        Event.listen('applied', () => alert('handling.'));
    }
});



