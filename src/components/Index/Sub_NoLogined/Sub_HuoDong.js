import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Title  from './title'
export default class Sub_HuoDong extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  };
	render() {
		return (
			<div class="acti">
				{/*活动*/}
				<img src="./src/assets/images/huodong.png"/>
			</div>
		);
	};
}
