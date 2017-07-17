import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Topper from './topper'
export default class XieHou extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  };
	componentWillMount(){

	};
	render() {
		return (
			<div class="wrapper clearfix">
					<Topper xiehou='active'/>
			</div>
		);
	};
}
