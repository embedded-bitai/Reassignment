<template>
<v-responsive style="aspect-ratio: 16:9">
  <v-main style="padding: 0px;">
    <template>
      <Layout>
        <template #content>
          <v-row align-content="center">
            <v-col>
              <v-img src="@/assets/1.jpg" class="img" @click="show = 1" />
            </v-col>
            <v-col>
              <v-img src="@/assets/3.jpg" class="img" @click="show = 2"/>
            </v-col>
            <v-col>
              <v-img src="@/assets/4.jpg" class="img" @click="show = 3"/>
            </v-col>
          </v-row>
          <transition name="slide">
          <div v-if="show === 1" class="box1">
              {{ tada1 }}
          </div>
          </transition>
          <transition name="slide">
          <div v-if="show === 2" class="box2">
              {{ tada1 }}
          </div>
          </transition>
          <transition name="slide">
          <div v-if="show === 3" class="box3">
              {{ tada1 }}
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
.box1 {
  background-color: gainsboro;
  height: 750px;
  position: fixed;
  width: 100%;
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
</style>
