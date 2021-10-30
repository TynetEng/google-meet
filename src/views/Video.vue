<template>
  <main class="row">
      <main class="col-sm">
          <div class="panel row">
                <div class="case col-sm-2 py-2">
                    <div class="d-flex align-items-center">
                        <h3 class="admin">{{admin}}</h3>
                        <span class="fa fa-user-circle-o px-2" style="font-size:25px"></span>
                    </div>
                    <video  class="vid"></video>
                    <button class="snap" @click="fullScreen">FULL SCREEN</button>
                </div>
                <div class="parent col-sm-10">
                    <div v-bind="groupVideo">

                    </div>
                </div>            
            </div>
            <div class="but">
                <button @click="startSpeaker">
                    <span v-if="unmute">
                        <i class="fa fa-microphone"></i>
                    </span>
                    <span v-else>
                        <i class="fa fa-microphone-slash"></i>
                    </span>
                </button>
                <div>
                    <button @click="startVideo">
                        <span v-if="showVideo">
                            <i class="fa fa-pause"></i>
                        </span>
                        <span v-else>
                            <i class="fa fa-video-camera"></i>
                        </span>
                    </button>
                </div>
                <button><i class="fa fa-phone"></i></button>
                <button><i class="fa fa-cc"></i></button>
                <button @click="addUser"><i class="fa fa-user-plus"></i></button>
            </div>
      </main>

      <!-- <Gallery /> -->
  </main>
</template>

<script>
// import Gallery from '@/views/Gallery.vue'
export default {
    // components:{
    //     Gallery
    // },
    data(){
        return{
            admin: 'YOU',
            showVideo :false,
            unmute: true,
            groupVideo: [],
            videoPlayer: ''
        }
    },
    methods: {
        startVideo (){
            this.showVideo = !this.showVideo;
            console.log(this.showVideo);
            if(this.showVideo == true){
                if('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices){
                    navigator.mediaDevices.getUserMedia({video:true}).then(stream=>{
                        this.videoPlayer = document.querySelector("video");
                        this.videoPlayer.srcObject = stream;
                        this.videoPlayer.play()
                    })
                }
            }
            else {
                this.videoPlayer = document.querySelector("video")
                this.videoPlayer.src = null
            }
            console.log(this.showVideo);
        },
        
        fullScreen(){
            alert()
        },
        startSpeaker(){
            this.unmute = !this.unmute
            console.log(this.unmute);
        },
        addUser(){
            alert()
        }
    },
    Mounted (){
        this.startVideo()
    }
}
</script>

<style lang="scss">
    .panel{
        display: flex;
        width: 100%;
        height: 80vh;
        .parent{
        width: 80%;
        height: 80vh;
        border: 2px solid green;
        border-radius: 2%;
        }
        .case{
            margin-left: 20px !important;
            margin: auto;
            .admin{
                color: red;
            }
            .vid{
                width: 60%;
                height: 60%;
                margin-top: 20px;
                box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.35);
                background-color: #171717;
            }
            .snap{
                display: block;
                justify-content: center;
                padding: 5px 15px;
                font-size: 12px;
                background-color: springgreen;
                border: none;
                border-radius: 5px;
                margin: auto;
                &:hover{
                    background-color: transparentize($color: springgreen, $amount: 0.2);
                }
                &:active{
                    background-color: transparentize($color: red, $amount: 0.2);
                }
            }
        }
    }
    .but{
        display: flex;
        margin: auto;
        margin-left: 33%;
        margin-top: 20px;
        button{
            border: 0px;
            margin-left: 10px;
            background-color: red;
            color: white;
            border-radius: 50%;
            width: 40px;
            height: 40px;
        }
    }
</style>