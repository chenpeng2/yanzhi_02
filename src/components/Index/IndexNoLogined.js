import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReMen from './Sub_NoLogined/Sub_ReMen'
import HuoDong from './Sub_NoLogined/Sub_HuoDong'
import PiaoXuan from './Sub_NoLogined/Sub_PiaoXuan'
import ReMen_Dyna from './Sub_NoLogined/Sub_ReMen_Dyna'
import Bill_board from './Sub_NoLogined/Bill_board'
import {Slider} from 'amazeui-react'
export default class IndexNoLogined extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  };
	componentDidMount(){

	};
	render() {
		var data = ['http://cppics.b0.upaiyun.com/yanzhi_02/activity_default.png',
		'http://cppics.b0.upaiyun.com/yanzhi_02/activity_default.png'];

var themes = ['b1'];

		var sliderIntance = (
		  <div>
		    {themes.map(function(t, i) {
		      return (
		        <div key={i} className="am-margin-bottom">
		          <Slider theme={t}>
		            {data.map(function(item, i) {
		              return (
		                <Slider.Item key={i}>
		                  <img src={item} />
		                </Slider.Item>
		              );
		            })}
		          </Slider>
		        </div>
		      );
		    })}
		  </div>
		);

		return (
			<div class="containers">
					<div class="left_content">
							<div class="titles">
									<ul class="title">
										<li class="active">热门短视频</li>
										<li>活动</li>
										<li>票选</li>
										<li>热门动态</li>
									</ul>
									<div class="scan_code">
										<img src="./src/assets/images/scan_code.png"/>
										<p>扫一扫，加入高颜值玩转颜值圈</p>
									</div>
							</div>
							<div class="activities">
								{sliderIntance}
							</div>
					</div>

					<div class="middle_content">
							<ReMen/>
							<HuoDong/>
							<PiaoXuan/>
							<ReMen_Dyna/>
					</div>
					<div class="right_content">
						<div class="top font_bold">申请会员，加入颜值圈</div>
						<Bill_board title="人气榜"/>
						<Bill_board title="新人榜"/>
						<Bill_board title="贡献榜"/>
					</div>
			</div>
		);
	};
}
