import React, { Component } from 'react';

class FileUpload extends Component{

	constructor () {
		super();
		this.state = {
			uploadValue: 0
		};
	}

	render () {
		return (
			<div>
				
				<br/>
				<input type="file" onChange={this.props.onUpload}/>
				<br/>
				<img with='320' src={this.state.picture} alt=''/>
			</div>
		)
	}

}

export default FileUpload;