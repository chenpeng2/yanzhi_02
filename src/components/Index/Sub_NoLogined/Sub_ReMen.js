import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Title  from './title'
export default class Sub_ReMen extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  };
	render() {
		var videos=[1,2,3,4,5,6,7,8,9,0,1,2]
		return (
			<div class="middle_remen">
					<Title icon="icon-duanshipin" title="热门短视频"/>
					{/*视频*/}
					<div class="videos">
							{videos.map((item,index)=>(
								<div key={index}  className={(index+1)%4==0? 'class_a float_left video_pre' : 'float_left video_pre'}>
									<img src="./src/assets/images/video_default.png"/>
									<div class="detail">
										<p class="text">冲浪啦，清凉一夏！</p>
										<div class="message clearfix">
											<span class="touxiang"><img src="./src/assets/images/touxiang.png"/></span>
											<span class="name">伊利</span>
											<p class="float_right"><i class="icon-looked"></i><span style={{verticalAlign:'middle'}}>3K</span></p>
										</div>
									</div>
								</div>
							))}
					</div>
			</div>
		);
	};
}
