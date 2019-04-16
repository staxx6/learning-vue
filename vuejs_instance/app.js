Vue.component('hello', {
  template: '<h1>Hello!2222<h1>'
});

let vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.myButton.innerText = 'Test';
    },
    updateTitle(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

// vm1.$mount('#app1');

setTimeout(() => {
  vm1.title = 'Changed by timer';
  vm1.$refs.heading.innerText = 'Something else';
  vm1.show();
}, 3000);

let vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The second Instance'
  },
  methods: {
    onChange() {
      vm1.title = 'Changed!';
    }
  }
});

let vm3 = new Vue({
  template: '<h1>Hello!</h1>'
});

vm3.$mount();
document.getElementById('app3').appendChild(vm3.$el);
