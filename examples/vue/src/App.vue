<script setup>
import {ref,computed,onMounted,watch} from "vue";
import {listVariants,resolveVariant,DEFAULT_VARIANT,LAYOUT_ID} from "@tersanplay/gridctrl";
const themes=listVariants();const selected=ref(DEFAULT_VARIANT);
const theme=computed(()=>resolveVariant(selected.value));
onMounted(()=>{try{const stored=localStorage.getItem("gridctrl:vue:theme");if(themes.some(x=>x.id===stored))selected.value=stored}catch{};document.documentElement.setAttribute("data-gridctrl-variant",selected.value)});
watch(selected,(next)=>{document.documentElement.setAttribute("data-gridctrl-variant",next);try{localStorage.setItem("gridctrl:vue:theme",next)}catch{}});
const capabilities=[["Research","Mapear referências"],["Composition","Grid e hierarquia"],["Frontend","Código reutilizável"],["Validation","Qualidade e testes"]];
</script>
<template>
 <main class="gc-vue gc-theme">
  <header class="gc-vue-header"><strong>GRIDCTRL / VUE</strong><span>/ REAL DESIGN TOKENS</span></header>
  <section class="gc-vue-hero"><p class="gc-vue-kicker">/ 01 — UI/UX + FRONTEND</p><h1>MODULAR<br>INTERFACES_</h1><p class="gc-description">Um exemplo Vue 3 funcional que importa tokens do mesmo registry usado pela Skill e pelo CLI.</p><span class="gc-vue-badge">LAYOUT: {{LAYOUT_ID}}</span></section>
  <section class="gc-vue-block"><h2>/ 02 THEME SELECTOR</h2><div class="gc-vue-themes" role="group" aria-label="Escolher paleta"><button v-for="item in themes" :key="item.id" class="gc-button" :class="{selected:selected===item.id}" :aria-pressed="selected===item.id" @click="selected=item.id">{{item.label}}</button></div></section>
  <section class="gc-vue-block"><h2>/ 03 COMPONENTS</h2><div class="gc-vue-grid"><article v-for="item in capabilities" :key="item[0]" class="gc-card"><h3>{{item[0]}}</h3><p class="gc-description">{{item[1]}}</p></article></div><p class="gc-description">Active variant: {{theme.id}} · Version: {{theme.version}}. No random layout.</p></section>
 </main>
</template>
