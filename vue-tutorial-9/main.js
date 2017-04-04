Vue.component('modal', {
    props: ['title', 'body']
    , template: `
   <div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-content">
    <!-- Any other Bulma elements you want -->
        <div class="box">
            <p>sdflxczvkcxlkvjxfsd</p>
        </div>
  </div>
  <button class="modal-close" @click="$emit('close')"></button>
</div>
`
    , data() {
        return {
            isVisible: true
        }
    }
    , methods: {
        hideModal() {
            this.isVisible = !this.isVisible;
        }, showModal() {
            alert("show");
            this.showModal = true;
        }
    }
});
new Vue({
    el: '#root'
    , data: {
        showModal: true
    }
    , methods: {
        showModal() {
            alert("show");
            this.showModal = true;
        }
    }
});