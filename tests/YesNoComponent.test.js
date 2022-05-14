import YesNoComponent from '../components/YesNoComponent'
import {
	mount
} from '@vue/test-utils'
import sinon from 'sinon'

it('Click on yes button calls our method with argument "yes"', async () => {
	var callback = sinon.fake();
	const wrapper = mount(YesNoComponent, {
		propsData: {
			callMe: callback
		}
	})
	
	expect(wrapper.isVueInstance()).toBeTruthy()
	
	await wrapper.find('button.yes').trigger('click')

	expect(callback.callCount).toBe(1);

	expect(callback.calledWith('yes')).toBe(true);
})
