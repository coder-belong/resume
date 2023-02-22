<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";

import Header from "./childComps/Header/index.vue"; //用户信息
import Skill from "./childComps/Skill/index.vue"; //专业技能
import Works from "./childComps/Works/index.vue"; //作品集
import Education from "./childComps/Education/index.vue"; //教育经历
import Experiences from "./childComps/Experiences/index.vue"; //工作经历
import Projects from "./childComps/Projects/index.vue"; //项目经历

import TopTitle from "@/components/TopTitle/index.vue"; //标题

const data = ref<ResumeData>();

axios.get(location.href + `/resume.json?temp=${Math.random()}`).then((res) => {
  data.value = res.data;
});
</script>

<template>
  <div v-if="data" class="resume">
    <Header :data="data.user" />
    <TopTitle title="专业技能" />
    <Skill :data="data.skills" />
    <TopTitle title="作品集" />
    <Works :data="data.works" />
    <TopTitle title="教育经历" />
    <Education :data="data.education" />
    <TopTitle title="工作经历" />
    <Experiences :data="data.experiences" />
    <TopTitle title="项目经历" />
    <Projects :data="data.projects" />
  </div>
</template>

<style scoped lang="less">
@import url("./index.less");
</style>
