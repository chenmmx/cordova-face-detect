/* eslint-disable no-undef */
import React, { Component } from 'react';
import './style.less';

const { width } = window.screen;
const { height } = window.screen;
// 摄像机配置
const options = {
  x: 0,
  y: 0,
  width,
  height,
  toBack: true,
  tapPhoto: true,
  tapFocus: false,
  previewDrag: false
};

class FaceCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgBase64: '',
      timer: null
    };
  }

  componentDidMount() {
    this.startCamera();
  }

  componentWillUnmount() {
    if (this.state.timer !== null) {
      clearInterval(this.state.timer);
    }
  }

  // 启动摄像头
  startCamera() {
    if (window.CameraPreview) {
      window.CameraPreview.startCamera(options);
      this.state.timer = setInterval(() => {
        this.takeSnapshot();
      }, 500);
    } else {
      console.log('error');
    }
  }

  // 快照
  takeSnapshot() {
    window.CameraPreview.takeSnapshot({ quality: 85 }, (data) => {
      this.setState({
        imgBase64: `data:image/jpeg;base64,${data}`
      });
    });
  }

  render() {
    const { imgBase64 } = this.state;
    return (
      <div id="face-check">
        <p>face-check</p>
        <div className="face-check-header">
          <img src={imgBase64} alt="" />
        </div>
      </div>
    );
  }
}

export default FaceCheck;
