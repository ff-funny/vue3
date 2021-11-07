<template>
<div>
    <span>Hello World</span>
    <ul>
        <li v-for="author in femaleAuthors" :key="author.value">
            {{author.value}}
        </li>
    </ul>
</div>
</template>

<script>
import {ref, computed, onMounted, toRefs} from "vue";
import {authors} from "../mock/data.js";

export default {
    name: "hello-world",
    props: {
        text: String,
    },

    // 模板中需要使用的数据和函数，需要在setUp 返回
    // 触发在 beforeCreate 之前
    // 只能是同步的
    setup(props, context) {
        // props 包含传递给组件的所有props，不能使用es6解构，可以使用toRefs解构
        // context 包含 attrs slot 和 emit
        // setup 执行时，实例尚未创建
        const timerCount = ref(0);
        // ref 返回一个响应式对象
        console.log('props----->', props);
        console.log('context---->', context)
        const {text} = toRefs(props);
        console.log('响应式的props', text);

        const femaleAuthors = computed( () => {
            return authors.filter( item => {
                return item.sex === '女';
            })
        })

        onMounted( () => {
            console.log('mounted')
        })

        return {
            timerCount,
            femaleAuthors,
        }
    }
}
</script>

<style scoped>

</style>