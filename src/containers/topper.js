import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router';
export default class Topper extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
				this.state={
					logined:false
				}
  };
	componentWillMount(){

	};
	render() {
		const show_login=this.state.logined
		?
		<div class="float_left">fdsd</div>
		:
		<div class="float_left">
			<a href="#" class="person"><span class="geren_bg"></span><span class="name">骚猪</span></a>
		</div>
		return (
			<div>
        <div class="topper">
						<div class="float_right">招募</div>
						<div class="float_right v_line" style={{padding:'0 20px'}}>|</div>
						<div class="float_right">客服</div>
						<div class="float_right v_line" style={{padding:'0 20px'}}>|</div>
						<div class="float_right">FAQ</div>
				</div>
				<div class="header">
						<div class="content clearfix">
								<div class="logo float_left"><img src="./src/assets/images/logo.png"/></div>
								<div class="float_left download"><i class="icon-xiazai"></i>下载APP</div>
								<div class="float_left title_left">
										<ul>
											<li className={this.props.shouye?'active':''}><Link to={`/`} >首页</Link></li>
											<li className={this.props.remen?'active':''}><Link to={`remen`} >热门</Link></li>
											<li className={this.props.xiehou?'active':''}><Link to={`xiehou`} >邂逅</Link></li>
											<li className={this.props.piaoxuan?'active':''}><Link to={`piaoxuan`} >票选</Link></li>
											<li className={this.props.huati?'active':''}><Link to={`huati`} >话题</Link></li>
										</ul>
								</div>
								<div class="float_left searcher">
										<input type="text" placeholder="搜索用户名/ID/话题"/>
										<i class="icon-sousuo"></i>
								</div>
								<div class="float_right login">
									{show_login}
										<div class="float_right">
												<span><a href="#" style={{color:'#F39700'}}>充值</a></span>
												<span class="v_line" style={{position:'relative',top:'-2px'}}>|</span>
												<span><a href="#">提现</a></span>
										</div>
								</div>
						</div>
				</div>
			</div>
		);
	};
}
