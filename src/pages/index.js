import React,{Component} from 'react'
import videojs from 'video.js';
import 'videojs-flash'
import 'video.js/dist/video-js.css'
class index extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    start = () => {
        this.honkon()
        this.player.play()
    }
    start2 = () => {
        this.america()
        this.player.play()
    }
    pause = () => {
        this.player.pause()
    }
    honkon = () => {
        this.player.reset(); //重置 video
        this.player.src([
            {
                // type: 'application/x-mpegURL',
                src: 'rtmp://58.200.131.2:1935/livetv/hunantv'
            },
        ]);
        this.player.load();
        this.player.play();
        console.log('切换湖南卫视')
    }

    america = () => {
        this.player.reset(); //重置 video
        this.player.src([
            {
                // type: 'application/x-mpegURL',
                src: 'rtmp://202.69.69.180:443/webcast/bshdlive-pc'
            },
        ]);
        this.player.load();
        this.player.play();
        console.log('切换美国中文')
    }
    componentDidMount() {
        this.config = {
            controls: true,
            width:'500px',
            height:'500px',
            sources: [{
                src:'rtmp://202.69.69.180:443/webcast/bshdlive-pc'
                // type: 'application/x-mpegURL'
            }]
        };
        this.player = videojs(
            this.videoNode, 
            this.config, 
            function onPlayerReady() {
            console.log('onPlayerReady', this);
        });
        // this.player.play();
    }
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }

    render(){
        return(
            <div>
                
                <video 
                    ref={ node => this.videoNode = node } 
                    className="video-js vjs-default-skin video"
                    >

                </video>
                <br/>
                <button
                    onClick={this.start}
                >
                    开始1
                </button>--------
                <button
                    onClick={this.start2}
                >
                    开始2
                </button>--------
                <button
                    onClick={this.pause}
                >
                    暂停
                </button><br/>
                <button
                    onClick={this.honkon}
                >
                    香港
                </button>--------
                <button
                    onClick={this.america}
                >
                    美国中文
                </button>
            </div>
        )
    }

}
export default index