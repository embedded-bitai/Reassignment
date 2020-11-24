<template>
<v-responsive class="wrapper">
  <v-main style="padding-top: 0vh;">
    <template>
      <Layout>
        <template #content>
          <v-row class="memberPics">
            <v-col class="col">
              <v-img src="@/assets/10.jpg" class="img" @click="show = 1" />
              <transition name="slide">
              <div v-if="show === 1" class="box1">
                <v-row no-gutters>
                  <v-col class="memberBox">
                    <h6>프론트 일부분과 파이썬으로 이미지 분석하는 코드를 만들었습니다.
이번에 flask를 사용하면서 많은 어려움이 있었지만 다행히 완성되어서 기쁩니다. ? 같은 것들만 생각나네</h6>
                  </v-col>
                </v-row>
              </div>
              </transition>
            </v-col>
            <v-col>
              <v-img src="@/assets/6.jpg" class="img" @click="show = 2"/>
              <transition name="slide">
              <div v-if="show === 2" class="box2">
                <v-row no-gutters>
                  <v-col class="memberBox">
                    <h6>이름:</h6>
                  </v-col>
                  <v-col offset="-7">
                    <h6>경완~</h6>
                  </v-col>
                </v-row>
              </div>
              </transition>
            </v-col>
            <v-col>
              <v-img src="@/assets/mundo.jpg" class="img" @click="show = 3"/>
            <transition name="slide">
              <div v-if="show === 3" class="box3">
                <v-row no-gutters>
                  <v-col>
                    <h6>이름:</h6>
                  </v-col>
                  <v-col offset="-7">
                    <h6>경완~</h6>
                  </v-col>
                </v-row>
              </div>
            </transition>
            </v-col>
          </v-row>
          <transition name="slide">
            <div v-if="show === 0"
                 class="box0"
            >
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
    transition: {
    }
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
  background-color: gainsboro;
  height: 50vh;
  position: sticky;
  width: 20vw;
  margin-top: 5vh;
}
.box2 {
  background-color: whitesmoke;
  height: 50vh;
  position: sticky;
  width: 20vw;
  margin-top: 5vh;
}
.box3 {
  background-color: red;
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
.slide-enter-active, .slide-leave-active {
  transition: all 1s;
}
.slide-enter, .slide-leave-to /* .slide-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(150vh);
}
.wrapper {
  resize: horizontal;
  /* border: 1px dashed; */
  overflow: auto;
  max-width: 100%;
  height: calc(105vh - 16px);
}
</style>
