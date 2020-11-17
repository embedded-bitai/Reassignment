<template>
<v-responsive class="wrapper">
  <v-main style="padding-top: 0vh;">
    <template>
      <Layout>
        <template #content>
          <v-row class="memberPics">
            <v-col class="col">
              <v-img src="@/assets/1.jpg" class="img" @click="show = 1" />
              <transition name="slide">
              <div v-if="show === 1" class="box1">
                  {{ tada1 }}
              </div>
              </transition>
            </v-col>
            <v-col>
              <v-img src="@/assets/3.jpg" class="img" @click="show = 2"/>
              <transition name="slide">
              <div v-if="show === 2" class="box2">
                  {{ tada1 }}
              </div>
              </transition>
            </v-col>
            <v-col>
              <v-img src="@/assets/4.jpg" class="img" @click="show = 3"/>
            <transition name="slide">
              <div v-if="show === 3" class="box3">
                  {{ tada1 }}
              </div>
            </transition>
            </v-col>
          </v-row>
          <transition name="slide">
            <div v-if="show === 0" class="box0"
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
      show: 0,
      tada1: 'tada',
      tada2: 'tada',
      tada3: 'tada'
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
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.memberPics {
  margin-top: 0%;
}
.box0 {
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 5% auto; /* Will not center vertically and won't work in IE6/7. */
  left: 0;
  right: 0;
}
.box1 {
  background-color: gainsboro;
  height: 100%;
  position: fixed;
  width: 30%;
  margin-top: 10px;
  right: 0px;
}
.box2 {
  background-color: whitesmoke;
  height: 750px;
  width: 100%;
  position: fixed;
  margin-top: 10px;
  right: 0px;
}
.box3 {
  background-color: aliceblue;
  height: 750px;
  width: 100%;
  position: fixed;
  margin-top: 10px;
  right: 0px;
}
#content {
  height: auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.img {
  border-radius: 50%;
  height: 200px;
  width: 200px;
}
.col {
  text-align: -webkit-center;
}
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
.wrapper {
  box-sizing: border-box;
  resize: horizontal;
  /* border: 1px dashed; */
  overflow: auto;
  max-width: 100%;
  height: calc(50vh - 16px);
}
</style>
