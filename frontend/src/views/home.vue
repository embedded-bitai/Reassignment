<template>
<v-responsive class="wrapper">
  <v-main>
    <Layout>
      <template #content>
        <v-container class="header">
          <v-row class="firstDiv">
            <v-col class="col">
              <div class="text">
                <p v-scrollanimation>BIT IMAGE는 기계 학습을 통해</p>
                <p v-scrollanimation>당신의 이미지를 분석합니다.</p>
                <br />
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
              <v-parallax src="@/assets/6.jpg" height="1000" />
            </v-col>
          </v-row>
          <div class="secondSection">
            <v-parallax src="@/assets/7.png">
              <v-row>
                <v-col style="text-align: center;">
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
          <div class="para">
              <h1>WHY US?</h1>
          </div>
          <div class="thirdSection">
            <v-flex>
              <div class="paras">
                <div class="para2">
                  <h3>ACCURACY</h3>
                </div>
                <div class="para3">
                  <h3>SIMPLICITY ACCURACY</h3>
                </div>
                <div class="para4">
                  <h3>ACCURACY SIMPLICITY PRACTICAL</h3>
                </div>
              </div>
              <v-row>
                <v-col>
                  <h1 class="headerDesc">정확도</h1>
                  <h4 class="bodyDesc">이미 검증된 라이브러리를 활용한 정확성</h4>
                  <img src="@/assets/dog.jpg" class="imgs" v-scrollanimation>
                  <h6 v-scrollanimation>dog</h6>
                </v-col>
                <v-col>
                  <h1 class="headerDesc">간편함</h1>
                  <h4 class="bodyDesc">버튼 하나로 사용하는 서비스</h4>
                  <img src="@/assets/beach.jpg" class="imgs" v-scrollanimation />
                  <h6 v-scrollanimation>beach</h6>
                </v-col>
                <v-col>
                  <h1 class="headerDesc">실용성</h1>
                  <h4 class="bodyDesc">다양한 분야에 사용이 가능</h4>
                  <img src="@/assets/macbook.jpg" class="imgs" v-scrollanimation />
                  <h6 v-scrollanimation>laptop</h6>
                </v-col>
                <v-col col="2" offset="8" class="descCol">
                  <h1 class="headerDesc">속도</h1>
                  <h4 class="bodyDesc">몇초안에 이뤄지는 분석</h4>
                  <img src="@/assets/pizza.jpg" class="imgs" v-scrollanimation />
                  <h6 v-scrollanimation>pizza</h6>
                </v-col>
              </v-row>
            </v-flex>
          </div>
        </v-container>
        <footerComp class="footer"/>
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
  /* border: 2px solid black; */
}

#text {
  height: 60px;
  padding: 20px;
  color: black;
}

#content {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

h6 {
  font-size: 20px;
}

.thirdSection {
  margin-top: 35vh;
  text-align: center;
}

.imgs {
  margin-top: 0vh;
  height: 30vh;
  width: 23vw;
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
  margin-top: 25vh;
}

.headerDesc {
  font-size: 1.5vw;
  letter-spacing: 10px;
  border-bottom: 1px dotted #000000;
}

.bodyDesc {
  font-size: 0.9vw;
  margin-top: 0.7vh;
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
  left: 49vw;
  margin-top: 10vh;
  font-size: 9.5vh;
  display: flex;
  letter-spacing: 10px;
}

.para2 {
  position: absolute;
  left: 3vw;
  margin-top: 50vh;
  font-size: 6vh;
}

.para3 {
  position: absolute;
  left: 3vw;
  margin-top: 58vh;
  font-size: 8vh;
}

.para4 {
  position: absolute;
  left: 3vw;
  margin-top: 70vh;
  font-size: 6vh;
}

.text {
  font-size: 75px;
  font-weight: 900;
  padding-top: 5vh;
  padding-right: 5vw;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.wrapper {
  box-sizing: border-box;
  resize: horizontal;
  /* border: 1px dashed; */
  overflow: auto;
  max-width: 100%;
  height: calc(350vh - 16px);
}
</style>
