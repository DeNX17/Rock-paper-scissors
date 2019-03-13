import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue';
import Vuex from 'vuex'

import AppComp from '@/App.vue';
import GameComp from '@/components/game.vue';

import logicModule from '@/store/modules/logic.js';
import settingModule from '@/store/modules/settings.js';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('App.vue', () => {
  let store, stateLogic, actionsLogic,gettersLogic;
  let stateSettings, actionsSettings, gettersSettings;

	beforeEach(() => {
    // Logic module
    stateLogic = {

    }

    actionsLogic = {

    }

    gettersLogic = {
      GameModes: () => { 
        return [{
          name: 'Standart',
          value: 1
        },
        {
          name: 'Best of 3',
          value: 2
        }]
      }
    }
  
    // Settings module
    stateSettings = {

    }
    
    actionsSettings = {

    }

    gettersSettings = {
      
    }

    store = new Vuex.Store({
      modules: {
        logic: {
          namespaced: true,
          getters: gettersLogic,
          actions: actionsLogic,
          state: stateLogic
        },
        settings: {
          namespaced: true,
          state: stateSettings,
          getters: gettersSettings,
          actions: actionsSettings
        }
      }
    })

  });


  it('renders', () => {
  	const wrapper = shallowMount(AppComp, {store, localVue});
    const items = wrapper.findAll('.interfaceText');

    expect(items.at(0).text()).toBe('Standart');
    expect(items.at(1).text()).toBe('Best of 3');
    expect(items.at(2).text()).toBe('Settings');
  })

  it('click on mode', () => {
    const wrapper = shallowMount(AppComp, {store, localVue});
    expect(wrapper.contains('app-type-standart-stub')).toBe(true);

    const ArrLi = wrapper.findAll('li');
    const Bo3Mode = ArrLi.at(1);

    Bo3Mode.trigger('click');
    
    expect(wrapper.contains('app-type-three-stub')).toBe(true);

   // console.log(wrapper.html())
  })
})

describe('Game.vue', () => {
  let store, stateLogic, actionsLogic,gettersLogic;

  beforeEach(() => {
    // Logic module
    stateLogic = {

    }

    actionsLogic = {
      checkResult: jest.fn()
    }

    gettersLogic = {
      items: () => { 
        return [{
          name: 'Rock',
          imgY: './img/Rock.png',
          imgC: './img/Rock.png'
        },
        {
          name: 'Paper',
          imgY: './img/Paper.png',
          imgC: './img/Paper.png'
        },
        {
          name: 'Scissors',
          imgY: './img/Scissors.png',
          imgC: './img/Scissors.png'
        }]
      }
    }

    store = new Vuex.Store({
      modules: {
        logic: {
          namespaced: true,
          getters: gettersLogic,
          actions: actionsLogic,
          state: stateLogic
        }
      }
    })

  });


  it('Renders', () => {
    const wrapper = shallowMount(GameComp, {store, localVue});
    const buttonsArr = wrapper.findAll('button');
    expect(buttonsArr.length).toBe(3);
    buttonsArr.at(0).trigger('click');
    buttonsArr.at(1).trigger('click');

    console.log(wrapper.emitted().pick)
  })
})