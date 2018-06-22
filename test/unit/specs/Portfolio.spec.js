import Vue from 'vue'
import Portfolio from '@/components/portfolio/Portfolio'

describe('Portfolio.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Portfolio)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.description').textContent)
      .toEqual('CHARLIE GERARD Developer')
  })
})
