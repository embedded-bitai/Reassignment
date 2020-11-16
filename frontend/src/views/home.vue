<template>
<v-responsive class="wrapper">
  <v-main>
    <Layout>
      <template #content>
          <v-container class="header">
          <v-row class="firstDiv">
          <v-col class="col">
            <div class="text" style="padding-top: 100px;">
              <p v-scrollanimation>BIT IMAGE는 기계 학습을 통해</p>
              <p v-scrollanimation>당신의 이미지를 분석합니다.</p>
              <br/>
              <h6 v-scrollanimation>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum non consectetur a erat nam at lectus urna. Massa eget egestas purus viverra accumsan in nisl. Integer enim neque volutpat ac tincidunt. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Est sit amet facilisis magna etiam tempor orci. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Et pharetra pharetra massa massa. Et magnis dis parturient montes nascetur ridiculus. Tempus iaculis urna id volutpat lacus laoreet non curabitur. Elementum facilisis leo vel fringilla est. Ut morbi tincidunt augue interdum velit. Ullamcorper dignissim cras tincidunt lobortis feugiat. Vel facilisis volutpat est velit egestas. Sodales ut etiam sit amet nisl purus in mollis. Libero enim sed faucibus turpis in eu mi bibendum. Aliquam vestibulum morbi blandit cursus risus at.
              </h6>
              <transition name="button>">
              <div class="button">
                <v-btn next to="/upload">시작하기</v-btn>
              </div>
              </transition>
            </div>
          </v-col>
          <v-col class="col" md="5">
            <v-parallax
            src="@/assets/6.jpg"
            height="1000"
            />
          </v-col>
          </v-row>
        <div class="secondSection">
          <v-parallax src="@/assets/7.png">
            <v-row align="left" justify="left" text-align="left">
              <v-col class="text-center" cols="12">
                <h1>
                  딥러닝 기반으로한 이미지 분석 사이트
                </h1>
                <h4>
                  1500000개 이상의 데이터를 사용하여 사물을 인식합니다.
                </h4>
              </v-col>
            </v-row>
          </v-parallax>
        </div>
        <div class="paras">
        <div class="para"><h1>Why Us?</h1></div>
        <div class="para2"><h3>accuracy</h3></div>
        <div class="para3"><h3>simplicity accuracy</h3></div>
        <div class="para4"><h3>accuracy simplicity practical</h3></div>
        </div>
        <div class="thirdSection">
        <v-flex>
        <v-row>
          <v-col>
            <h1 style="border-bottom: 1px solid #000000">정확도</h1>
            <h4 style="margin-top: 10px">이미 검증된 라이브러리를 활용한 정확성</h4>
            <img src="@/assets/dog.jpg" class="dogPics" v-scrollanimation>
            <h6 v-scrollanimation>dog</h6>
          </v-col>
          <v-col style="margin-top: 200px">
            <h1 style="border-bottom: 1px solid #5e5e5e">간편함</h1>
            <h4 style="margin-top: 10px">버튼 하나로 사용하는 서비스</h4>
            <img src="@/assets/beach.jpg" class="dogPics" v-scrollanimation/>
            <h6 v-scrollanimation>beach</h6>
          </v-col>
          <v-col style="margin-top: 410px">
            <h1 style="border-bottom: 1px solid #a3a3a3">실용성</h1>
            <h4 style="margin-top: 10px">다양한 분야에 사용이 가능</h4>
            <img src="@/assets/macbook.jpg" class="dogPics" v-scrollanimation/>
            <h6 v-scrollanimation>laptop</h6>
          </v-col>
        </v-row>
        </v-flex>
        </div>
        </v-container>
      </template>
    </Layout>
  </v-main>
</v-responsive>
</template>

<script>
import Layout from '../components/Layout'

import {
  mapState,
  mapGetters
} from 'vuex'

export default {
  data () {
    return {
      test: ''
    }
  },
  components: {
    Layout
  },
  computed: {
    ...mapState({
      lists: state => state.lists
    }),
    ...mapGetters([
      'isLogedin'
    ])
  }
}
</script>

<style>
div {
  /* border: 2px solid x zblack; */
}

#text {
  height: 60px;
  padding: 20px;
  color: black;
}

#info {
  height: 150px;
  padding: 20px;
  color: #90A4AE;
}

#content {
  height: auto;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
h6 {
  font-size: 20px;
}
.thirdSection {
  margin-top: 10px;
  text-align: center;
}
.dogPics {
  margin-top: 25px;
  max-width: 500px;
  max-height: 300px;
}
.header {
  max-width: 100%;
  height: 37%;
  text-align: left;
  padding: 0px;
  margin: 0px;
}
.button {
  height: 60px;
  text-align: center;
  margin-top: 9%;
}
.before-enter {
  opacity: 0;
  transform: translateY(300px);
  transition: all 2.5s ease-out;
}
.enter {
  opacity: 1;
  transform: translateX(0px);
}
.secondSection {
  padding-top: 20vh;
  background-size: 100% auto;
}
.para {
  position: absolute;
  margin-top: 5vh;
  margin-left: 120vh;
  font-size: 80px;
}
.para2 {
  position: absolute;
  margin-top: 30%;
  font-size: 60px;
}
.para3 {
  position: absolute;
  margin-top: 39%;
  font-size: 60px;
}
.para4 {
  position: absolute;
  margin-top: 48%;
  font-size: 60px;
}
.text {
  font-size: 75px;
  font-weight: 900;
}
.wrapper {
  padding: 10px;
  background: white;
  box-sizing: border-box;
  resize: horizontal;
  border: 1px dashed;
  overflow: auto;
  max-width: 100%;
  height: calc(350vh - 16px);
}
</style>
