import {createApp} from "vue";
import App from './App.vue';
import image1 from './assets/images/img1.png';
import Test from './assets/txt/test.txt';
const app = createApp(App);
const ab = () => {
    console.log('aaa');
}
ab();

app.mount('#app')
console.log('process.env.NODE_ENV', process.env.NODE_ENV)
console.log('txt文件---->', Test)