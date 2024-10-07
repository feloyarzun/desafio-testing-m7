import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'

describe('HomeView.vue', () => {
  it('Contrasta Snapshot del HTML', () => {
    const wrapper = mount(HomeView)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Existe la ruta.', async () => {
    const routerPrueba = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/home',
          name: 'home',
          component: HomeView
        }
      ]
    })

    const wrapper = mount(App, {
      global: {
        plugins: [routerPrueba]
      }
    })

    routerPrueba.push({ name: 'home' })

    await routerPrueba.isReady()

    expect(wrapper.findComponent(HomeView).exists()).toBeTruthy()
  })
})
