<template>
<div>

    <ul class="box-wrapper">
        <li class="top">top</li>
        <li class="bottom">bottom</li>
        <li class="left">left</li>
        <li class="right">right</li>
        <li class="front">front</li>
        <li class="back">back</li>
    </ul>
</div>
</template>

<script>
export default {
    name: "App",
}
</script>

<style lang="scss">
li {
    list-style: none;
}
.top,
.bottom,
.left,
.right,
.front,
.back {
    width: 200px;
    height: 200px;
    border: 1px solid #223322;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    line-height: 200px;
}
.top {
    background-color: rgba(225,234,222,0.5);
    transform: rotateX(90deg) translateZ(100px);
    //transform:  perspective(600px)  rotateX(90deg) translateZ(100px);
}
.bottom {
    background-color: rgba(225,234,100,0.5);
    transform:  rotateX(90deg) translateZ(-100px);
    //transform:  perspective(600px)  rotateX(90deg) translateZ(-100px);
}
.left {
    background-color: rgba(225,134,222,0.5);
    transform: rotateY(90deg) translateZ(-100px);
    //transform: perspective(600px)   rotateY(90deg) translateZ(-100px);
}
.right {
    background-color: rgba(125,234,222,0.5);
    transform: rotateY(90deg) translateZ(100px);
    //transform:  perspective(600px)  rotateY(90deg) translateZ(100px);
}
.front {
    background-color: rgba(200,234,189,0.5);
    transform: translateZ(100px);
    //transform:  perspective(600px)  translateZ(100px);
}
.back {
    background-color: rgba(100,234,222,0.5);
    transform: translateZ(-100px);
    //transform:  perspective(600px)  translateZ(-100px);
}

.box-wrapper {
    transform-style: preserve-3d; // flat 平面 preserve-3d 3D
    width: 200px;
    height: 200px;
    position: relative;
    //transform: rotateX(200deg) rotateY(100deg);
    //animation-name:xz;
    //animation-duration:10s;
    //animation-iteration-count:infinite;
    //animation-timing-function:linear;
    margin-left: 200px;
    margin-top: 200px;
    perspective: 300px;

    li {

        position: absolute;
        left: 0;
        top: 0;
        &:hover{
            opacity: 0.3;
        }
    }
    &:hover {
        animation-play-state: paused;
    }
}

@keyframes xz {
    0% {
        transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    100% {
        transform:rotateX(360deg) rotateY(720deg) rotateZ(1080deg);
    }
}


</style>