<script setup lang="ts">
import { onMounted, ref } from "vue";

import $animate from "@/utils";

interface Props {
  data: Resume.Work[];
}
defineProps<Props>();

const boxs = ref([]);

onMounted(() => {
  boxs.value.forEach((item) => {
    $animate(item, "hide");
  });
});
</script>

<template>
  <div class="works">
    <div v-for="(item, index) in data" :key="index" ref="boxs">
      <div class="work hide" :style="'--b:' + index">
        <img class="icon" :src="item.icon" :alt="item.label" />
        <span class="label">{{ item.label }}：</span>
        <a class="value" :href="item.value" target="_blank">{{ item.value }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import url("./index.less");
</style>
