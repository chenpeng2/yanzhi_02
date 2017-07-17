import React from 'react';
import ImageLoader from 'react-imageloader';
import LazyLoad from 'react-lazyload';
export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			current: 'top',
			modalVisible: false,
			action: 'login',
			hasLogined: false,
			userNickName: '',
			userid: 0
		};
	};
	componentWillMount(){
		sessionStorage.lastname="Smith";
	};
	click(){
		console.log(sessionStorage.lastname)
	}
	render() {
		return (
			<div onClick={this.click.bind(this)}>
        dsdf3
				<LazyLoad height={100}  placeholder={<img src="http://cppics.b0.upaiyun.com/vue/logo.png"/>}>
				<img alt="" src='http://cppics.b0.upaiyun.com/testdemos/demo1.png'/>
				</LazyLoad>
				<ImageLoader src="http://cppics.b0.upaiyun.com/testdemos/demo1.png" wrapper={React.DOM.div} preloader={this.preloader}> Image load failed! </ImageLoader>
			</div>
		);
	};
	preloader() { return <img src="http://cppics.b0.upaiyun.com/vue/logo.png" />; }
}
