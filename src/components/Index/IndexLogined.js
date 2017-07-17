import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
export default class IndexLogined extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  };
	componentWillMount(){

	};
	render() {

		return (
			<div class="containers">

			</div>
		);
	};
}
