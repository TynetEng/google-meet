<template>
  <main class="row">
    <main class="col">
      <main class="parent">
        <!-- NAVBAR -->
        <div class="navbar shadow-sm">
          <img src="@\assets\googlemeet.png" alt="">
          <ul class="nav">
              <li class="nav-link">
                
              </li>
              <li class="nav-link">
                <i class="fa fa-question-circle-o"></i>
              </li>
              <li class="nav-link">
                <i class="fa fa-exclamation-triangle"></i>
              </li>
              <li class="nav-link">
                <i class="fa fa-gear"></i>
              </li>
              <li class="nav-link">
                <i class="fa fa-th"></i>
              </li>
              <li class="nav-link">
                <i class="fa fa-question-mark"></i>
              </li>
            </ul>
        </div>

        <!-- MAIN -BODY -->
        <div class="main-body">
          <div class="row">
            <div class="up">
              <h3> Premium video meetings. <br>
               Now free for everyone.
              </h3>
              <p>
                  We re-engineered the service we built for secure business meetings.
                  Google Meet, to make it free and available for all.
              </p>
              <div class="but">
                <button @click="showVideo">
                  <i class="fa fa-video-camera"></i>
                  <span>New Meeting</span>
                </button>
                <div class="inp">
                  <i class="fa fa-keyboard-o"></i>
                  <input type="text" placeholder="Enter a code or link">
                </div>
              </div>
            </div>

            <div class="down">
              <div></div>
              <div>
                <h5> Get a link you can share </h5>
                <p> Click <span style="font-weight:bold"> New meeting </span> to get a link you can send 
                  to people you want to meet with. </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </main>
  </main>
</template>

<script>

export default {
  data(){
    return{
      name: 'TY'
    }
  },
  methods: {
    showVideo(){
      this.$router.push('/Video')
    }
  }
}
</script>

<style lang="scss">
$text: rgb(39, 38, 38);
$prim: blue;
  .row, .col-sm, .col{
   margin: 0px;
   padding: 0px;
  }
  .parent{
    .navbar{
      display: flex !important;
      padding: 10px;
    }
    img{
      width: 20%;
    }
    .nav-link{
      color: $text;
    }
    .main-body{
      padding-top: 20vh;
      .up{
        width: 60%;
        padding-bottom: 20px;
        text-align: center;
        margin: 20px auto;
        border-bottom: 2px solid lightgray;
        .but{
          display: flex;
          justify-content: center;
          margin: auto !important;
          text-align: center !important;
          button{
            background-color: $prim;
            border: 0px;
            color: white;
            font-size: 12px;
            padding: 5px 10px;
            border-radius: 3px;
            span{
              padding-left: 5px;
            }
          }
          .inp{
            border: 1px solid lightgrey;
            margin-left: 10px;
            padding: 5px 10px;
            border-radius: 3px;            
            input{
              border: 0px;
              font-size: 12px;
              outline: 0px;
              padding-left: 5px;
            }
          }
        }
      }
      .down{
        width: 60%;
        margin: 20px auto;
        text-align: center;
      }
    }
  }
</style>
