import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
export default class Title extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  };
	render() {
		return (
			<div class="clearfix title">
					<div class="float_left"><i class={this.props.icon}></i><span style={{position:'relative',left:'-10px'}}>{this.props.title}</span></div>
					<div class="float_right">更多></div>
			</div>
		);
	};
}
