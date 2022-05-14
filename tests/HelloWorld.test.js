import { mount } from '@vue/test-utils'
import HelloWorld from '../components/HelloWorld'

test('HelloWorld', () => {
	// 渲染这个组件
	const wrapper = mount(HelloWorld)

	// `username` 在除去头尾空格之后不应该少于 7 个字符
	wrapper.setData({
		username: ' '.repeat(7)
	})

	// 确认错误信息被渲染了
	expect(wrapper.find('.error').exists()).toBe(true)

	// 将名字更新至足够长
	wrapper.setData({
		username: 'Lachlan'
	})

	// 断言错误信息不再显示了
	expect(wrapper.find('.error').exists()).toBe(false)
})
