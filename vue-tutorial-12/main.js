Vue.component('coupon', {
    template:`
        <input type="text" placeholder="enter a coupon code" @blur="onCouponApplied"/>
    `,
    methods:{
        onCouponApplied(){
            //alert('component applied');
            this.$emit('applied');
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
});



