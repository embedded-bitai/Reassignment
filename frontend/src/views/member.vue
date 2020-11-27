<template>
<v-responsive class="wrapper">
  <v-main style="padding-top: 0vh;">
    <template>
      <Layout>
        <template #content>
          <v-row class="memberPics">
            <v-col class="col">
              <v-img src="@/assets/python.png" class="img" @click="show = 1" />
              <transition name="slide">
                <div v-if="show === 1" class="box1">
                  <v-row no-gutters>
                    <v-col class="memberBox">
                      <h6>경완</h6>
                      <br/>
                      <h6>프론트 일부분과 파이썬으로 이미지 분석하는 코드를 만들었습니다.
                        이번에 flask를 사용하면서 많은 어려움이 있었지만 다행히 완성되어서 기쁩니다.</h6>
                    </v-col>
                  </v-row>
                </div>
              </transition>
            </v-col>
            <v-col>
              <v-img src="@/assets/vue.png" class="img" @click="show = 2" />
              <transition name="slide">
                <div v-if="show === 2" class="box2">
                  <v-row no-gutters>
                    <v-col class="memberBox">
                      <h6>문종후</h6>
                      <br/>
                      <h6>프론트를 전담하였고 자잘한 기능구현들을 했습니다. 많이 부족한 실력이였지만 프로젝트를 함으로써 프론트에 대한 이해도가 많이 늘었고 흥미로운 과제였던것 같습니다.</h6>
                    </v-col>
                  </v-row>
                </div>
              </transition>
            </v-col>
            <v-col>
              <v-img src="@/assets/java.svg" class="img" @click="show = 3" />
              <transition name="slide">
                <div v-if="show === 3" class="box3">
                  <v-row no-gutters>
                    <v-col class="memberBox">
                      <h6>이승준</h6>
                      <br/>
                      <h6>이 전에 배웠던 코드들을 재구성 하여 저희들만의 웹사이트에 이식 시킨다는것이 좋은 경험와 챌린지가 되었습니다.</h6>
                    </v-col>
                  </v-row>
                </div>
              </transition>
            </v-col>
          </v-row>
          <transition name="slide">
            <div v-if="show === 0" class="box0">
              Click on the image to see our detail!
            </div>
          </transition>
        </template>
      </Layout>
    </template>
  </v-main>
</v-responsive>
</template>

<script>
import Layout from '../components/Layout'
export default {
  data () {
    return {
      show: 0
    }
  },
  components: {
    Layout
  },
  methods: {
    transition: {}
  }
}
</script>

<style scoped>
#content {
  height: 100%;
}

div {
  /* border: 2px solid black; */
}

.memberBox {
  padding-left: 8%;
  padding-right: 8%;
  padding-top: 4%;
  text-align: left;
}

.memberPics {
  margin-top: 0%;
}

.box0 {
  margin-top: 10vh;
  width: 100%;
  text-align: center;
  font-size: 3vw;
}

.box1 {
  background-color: #e3debf;
  height: 50vh;
  position: sticky;
  width: 20vw;
  margin-top: 5vh;
}

.box2 {
  background-color: #bae0a8;
  height: 50vh;
  position: sticky;
  width: 20vw;
  margin-top: 5vh;
}

.box3 {
  background-color: #acb9e6;
  height: 50vh;
  position: sticky;
  width: 20vw;
  margin-top: 5vh;
}

.img {
  border-radius: 50%;
  height: 200px;
  width: 200px;
}

.col {
  text-align: -webkit-center;
}

.slide-item {
  display: inline-block;
  margin-right: 10px;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 1s;
}

.slide-enter,
.slide-leave-to

/* .slide-leave-active below version 2.1.8 */
  {
  opacity: 0;
  transform: translateY(150vh);
}
</style>
