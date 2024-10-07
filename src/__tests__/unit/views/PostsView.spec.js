import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PostsView from '@/views/PostsView.vue'
import App from '@/App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const postsDummy = [
  { id: 1, name: 'Post 1' },
  { id: 2, name: 'Post 2' },
  { id: 3, name: 'Post 3' },
  { id: 4, name: 'Post 4' }
]

describe('PostsView.vue', () => {
  it('renderizar lista', async () => {
    const wrapper = mount(PostsView)
    wrapper.vm.posts = postsDummy

    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('li')).toHaveLength(4)
  })

  it('Existe la ruta.', async () => {
    const routerPrueba = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/posts',
          name: 'posts',
          component: PostsView
        }
      ]
    })

    const wrapper = mount(App, {
      global: {
        plugins: [routerPrueba]
      }
    })

    routerPrueba.push({ name: 'posts' })

    await routerPrueba.isReady()

    expect(wrapper.findComponent(PostsView).exists()).toBeTruthy()
  })
})
