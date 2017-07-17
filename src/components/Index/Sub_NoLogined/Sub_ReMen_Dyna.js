import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Title  from './title'
import Dyna_Top from './Dyna_top'
import Dyna_Bottom from './Dyna_bottom'
export default class Sub_ReMen_Dyna extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  };
	render() {
		var dynas=[1,2,3,4]
		return (
			<div>
					<Title icon="icon-remen_dyna" title="热门动态"/>
					{/*热门动态*/}
					<div class="dynas">
							{dynas.map((item,index)=>(
								<div key={index}  className={(index+1)%4==0? 'class_a float_left dynas_pre' : 'float_left dynas_pre'}>
									<div class="txt">
										<Dyna_Top/>
										<div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
										Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </div>
										<div class="operate float_right">
												<i class="icon-gengduo" style={{marginRight:'10px'}}></i>
												<i class="icon-looked"></i>
												<span>180</span>
										</div>
									</div>
									<Dyna_Bottom/>
								</div>
							))}
					</div>
			</div>
		);
	};
}
