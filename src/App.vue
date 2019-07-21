<template>
  <div class="container App">
    <div class="navigation">
      <ul class="menu">
        <li v-for="(mode, index) in modes"
            :key="index"
            @click="pickMode(mode.value)" 
            class="interfaceText">
          {{ mode.name }}
        </li>
        <li @click="showSettings = true" class="interfaceText">Settings</li>
      </ul>
    </div>
    <app-type-standart v-if="showModeComponent == 1"></app-type-standart>
    <app-type-three v-if="showModeComponent == 2"></app-type-three>
    <app-setting v-show="showSettings" @closeSettings="onCloseSettings"></app-setting> 
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

import AppTypeStandart from './components/standart.vue';
import AppTypeThree from './components/BO3.vue';
import AppSetting from './components/settings.vue';

export default {
    data () {
      return {
        showModeComponent: 1,
        showSettings: false
      }
    },
    mounted(){ // Получение из локального хранилища цвета фона
      if(window.localStorage.getItem("BGColor") !== null){
        let color = window.localStorage.getItem("BGColor");
      
       this.changeColorBG(color);
      }
    },
    methods: {
      ...mapActions('settings', {
        changeColorBG: 'changeColorBG'
      }),
      pickMode(modeValue){
        this.showModeComponent = modeValue;
      },
      onCloseSettings(){
        this.showSettings = false;
      }
    },
    computed: {
      ...mapGetters('logic', {
        modes: 'GameModes'
      })
    },
    components: {
      AppTypeStandart,
      AppTypeThree,
      AppSetting
    }
  }
</script>