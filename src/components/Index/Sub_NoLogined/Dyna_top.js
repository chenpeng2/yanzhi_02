import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
export default class Dyna_Top extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  };
	render() {
		return (
			<div class="top clearfix">
					<div class="float_left"><img src="./src/assets/images/remen_avator.png"/></div>
					<div class="float_right"><i class="icon-guanzhu"></i><span>关注</span></div>
					<div class="detail">
							<p class="font_bold">伊利</p>
							<p class="color">今日 15:00</p>
					</div>
			</div>
		);
	};
}
