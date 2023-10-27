<!-- <script setup lang="ts">
// import useModelData from '@/lib/vueComposes';
import { useSDKData } from '@/lib/vueComposes';
import { Chat } from '@/index';

const chatListLength = useSDKData(Chat.chatListLength);

function onClickbtn() {
  Chat.sendChat('vue test');
}

</script>

<template>
  <div>
    Vue3
    {{ chatListLength }}
    <button @click="onClickbtn">change a</button>
  </div>
</template>

<style scoped>
</style> -->
