import Vue from 'vue'
import App from './App-new.vue'
import Announcement from './Announcement.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

new Vue({
  el: '#app',
  render: h => h(Announcement)
})
