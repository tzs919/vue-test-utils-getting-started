import Vue from 'vue';

// 错误不会被捕获
it('will time out', done => {
	Vue.nextTick(() => {
		expect(true).toBe(false)
		done()
	})
})

// 接下来的三项测试都会如预期工作
it('will catch the error using done', done => {
	Vue.config.errorHandler = done
	Vue.nextTick(() => {
		expect(true).toBe(false)
		done()
	})
})

it('will catch the error using a promise', () => {
	return Vue.nextTick().then(function() {
		expect(true).toBe(false)
	})
})

it('will catch the error using async/await', async () => {
	await Vue.nextTick()
	expect(true).toBe(false)
})
