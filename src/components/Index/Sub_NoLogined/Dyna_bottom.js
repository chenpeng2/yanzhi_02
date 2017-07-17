import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
export default class Dyna_Bottom extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  };
	render() {
		return (
			<div class="bottom">
				<div class="float_left"><i class="icon-pinlun"></i><span>100</span></div>
				<div class="float_left"><i class="icon-liwu"></i><span>100</span></div>
				<div class="float_left expecial"><i class="icon-xihuan"></i><span>100</span></div>
			</div>
		);
	};
}
