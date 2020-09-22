<template>
  <view>
    <view class="uni-padding-wrap uni-common-mt">
      <view>
        <video
        style="width: 100%;"
          id="myVideo"
          :src="src"
          @error="videoErrorCallback"
          enable-danmu
          danmu-btn
          controls
        ></video>
      </view>
    </view>
  </view>
</template>

<script>
import polyv from "./polyv.js";
export default {
  data() {
    return {
      src: "",
      danmuValue: "",
    };
  },
  onReady: function (res) {
    let vid = "3828390191faee6d7d4f9b9acb8b646d_3";
    /*获取视频数据*/
    let obj = {
      vid: vid,
      viewerInfo: {
        viewerId: "38770077709", // 播放观看日志学员ID
        viewerName: "polyv", // 播放观看日志学员昵称
      },
      callback: (videoInfo) => {
        if (videoInfo.type === "error") {
          console.log("videoInfo", videoInfo);
          return;
        }
        console.log(videoInfo.src[0])
        this.src = videoInfo.src[0];
      },
    };
    polyv.getVideo(obj);
    this.videoContext = uni.createVideoContext("myVideo");
  },
  methods: {
    sendDanmu: function () {
      this.videoContext.sendDanmu({
        text: this.danmuValue,
        color: this.getRandomColor(),
      });
      this.danmuValue = "";
    },
    videoErrorCallback: function (e) {
      // uni.showModal({
      //   content: e.target.errMsg,
      //   showCancel: false,
      // });
    },
    getRandomColor: function () {
      const rgb = [];
      for (let i = 0; i < 3; ++i) {
        let color = Math.floor(Math.random() * 256).toString(16);
        color = color.length == 1 ? "0" + color : color;
        rgb.push(color);
      }
      return "#" + rgb.join("");
    },
  },
};
</script>

<style lang="scss">
#myVideo {
  width: 100% !important;
  height: 422upx !important;
}
</style>