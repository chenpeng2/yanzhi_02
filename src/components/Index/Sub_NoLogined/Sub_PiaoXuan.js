import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Title  from './title'
export default class Sub_PiaoXuan extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  };
	render() {
		var pics=[1,2,3,4,5,6,7,8,9,0]
		return (
						<div>
						{/*票选*/}
								<Title icon="icon-toupiao" title="票选"/>
								<div class="pics">
								{pics.map((item,index)=>(
									<div key={index}  className={(index+1)%5==0? 'class_a float_left pic_pre' : 'float_left pic_pre'}>
										<div class="avator"><img src="./src/assets/images/piao_avator.png"/></div>
										<p class="font_bold">伊利</p>
										<div class="vote">投票</div>
									</div>
								))}
								</div>
						</div>
		);
	};
}
