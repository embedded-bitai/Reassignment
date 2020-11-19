<template>
<v-responsive class="wrapper">
  <v-main style="padding-top: 0%">
    <Layout>
      <template #content>
        <div class="firstDiv">
          <p class="headerText" :id="index">How It Works</p>
        </div>
        <v-tabs align-with-title
                background-color="transparent"
                fixed-tabs slider-color="#000080"
                >
          <v-tab style="color: black" :ripple="false">서론</v-tab>
          <v-tab-item>
            <v-card class="vCard">
              <h2>이 페이지에선 저희 서비스가 어떻게 작동하는지 설명하겠습니다.</h2>
            </v-card>
          </v-tab-item>
          <v-tab style="color: black" :ripple="false">디지털 신호처리</v-tab>
          <v-tab-item>
            <v-card class="vCard">
              <h1>이 페이지에선 저희 서비스가 어떻게 작동하는지 설명하겠습니다.</h1>
              <img src="@/assets/6.jpg"/>
            </v-card>
          </v-tab-item>
          <v-tab style="color: black" :ripple="false">양자화</v-tab>
          <v-tab-item>
             <v-card class="vCard">
              <h1>이 페이지에선 저희 서비스가 어떻게 작동하는지 설명하겠습니다.</h1>
              <img src="@/assets/6.jpg"/>
            </v-card>
          </v-tab-item>
          <v-tab style="color: black" :ripple="false">컨볼루션</v-tab>
          <v-tab-item>
            <v-card class="vCard">
              <h1>이 페이지에선 저희 서비스가 어떻게 작동하는지 설명하겠습니다.</h1>
              <img src="@/assets/6.jpg"/>
            </v-card>
          </v-tab-item>
          <v-tab style="color: black" :ripple="false">특징추출</v-tab>
          <v-tab-item>
            <v-card class="vCard">
              <h1>이 페이지에선 저희 서비스가 어떻게 작동하는지 설명하겠습니다.</h1>
              <img src="@/assets/6.jpg"/>
            </v-card>
          </v-tab-item>
          <v-tab style="color: black" :ripple="false">추론</v-tab>
          <v-tab-item>
            <v-card class="vCard">
              <h1>이 페이지에선 저희 서비스가 어떻게 작동하는지 설명하겠습니다.</h1>
              <img src="@/assets/6.jpg"/>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </template>
    </Layout>
  </v-main>
</v-responsive>
</template>

<script>
import Layout from '../components/Layout'

export default {
  data () {
    return {}
  },
  components: {
    Layout
  }
}
</script>

<style>
.headerText {
  background: linear-gradient(to bottom, rgba(238, 238, 238, 0.11), rgba(0, 0, 0, 0), #000000), url(../assets/bluecoding.jpg);
  background-attachment: fixed;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  font-size: 8vw;
  font-weight: bold;
  text-align: center;
}

.firstDiv {
}

.vCard {
  padding: 3%;
  position: fixed;
}
.wrapper {
  box-sizing: border-box;
  resize: horizontal;
  /* border: 1px dashed; */
  overflow: auto;
  max-width: 100%;
  height: auto;
}
</style>
