import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Topper from './topper'
import IndexLogined from '../components/Index/IndexLogined'
import IndexNoLogined from '../components/Index/IndexNoLogined'
export default class Index extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
				this.state={
					logined:false
				}
  };
	componentWillMount(){
			document.title="首页"
	};
	render() {
		const IndexContent= this.state.logined
		?<IndexLogined/>
		:<IndexNoLogined/>
		return (
			<div class="wrapper clearfix">
					<Topper shouye='active'/>
					{IndexContent}
			</div>
		);
	};
}
