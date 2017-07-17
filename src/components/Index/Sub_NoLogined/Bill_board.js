import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
export default class Bill_board extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  };
	render() {
    var bills=[1,2,3,4,5,6,7]
		return (
          <div class="bills">
          {/*各个榜单*/}
            <div class="title">{this.props.title}</div>
            {bills.map((item,index)=>(
              <div key={index} className={(index!==0)?(index!==1)?'bills_pre':'second bills_pre':'first bills_pre'}>
                  <i>{index}</i>
                  <div class="detail">
                      <div class="float_left"><img src="./src/assets/images/remen_avator.png"/></div>
                      <div>
                          <p>伊黎</p>
                          <p class="font">人生海海，荒野流星</p>
                          <p class="font">累计活跃：<span>315.40</span></p>
                      </div>
                  </div>
              </div>
            ))}
          </div>
		);
	};
}
