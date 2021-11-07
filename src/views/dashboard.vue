<template>
<div>
    <button @click="toHelloWorld">跳转到helloWorld</button>
</div>
</template>

<script>
import {useRouter} from 'vue-router'
export default {
    name: "dashboard",
    setup() {
        const router = useRouter();
        const toHelloWorld = () => {
            router.push({
                name: 'helloWorld'
            })
        }
        return {
            toHelloWorld
        }
    }
}
</script>

<style scoped>

</style>