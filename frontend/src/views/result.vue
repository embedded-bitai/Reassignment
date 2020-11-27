<template>
<v-responsive class="wrapper">
  <v-main style="padding-top: 2%">
    <Layout>
      <template #content>
        <div style="text-align: center;">
          <img src="@/assets/botPic.jpg" width=300vw height=200vh/>
        </div>
        <div class="botTalk">
          <h1>당신의 이미지 분석 결과입니다.</h1>
          <h1 style="text-transform: uppercase;">가장 큰 확률인 {{ id[0][0][1] }}% 로 당신의 이미지는 {{ id[0][0][0] }} 입니다.</h1>
        </div>
        <v-row>
          <v-col style="text-align: -webkit-right;">
            <v-img :src="require(`/Users/richardmoon/Desktop/Project/real/Reassignment/proj/python/`+$route.params.image)" class="resultImage"></v-img>
          </v-col>
          <v-col style="text-transform: uppercase;">
            <h4>{{ id[0][0][0] }}: {{ id[0][0][1] }}%</h4>
            <h4>{{ id[0][1][0] }}: {{ id[0][1][1] }}%</h4>
            <h4>{{ id[0][2][0] }}: {{ id[0][2][1] }}%</h4>
            <h4>{{ id[0][3][0] }}: {{ id[0][3][1] }}%</h4>
            <h4>{{ id[0][4][0] }}: {{ id[0][4][1] }}%</h4>
          </v-col>
        </v-row>
        <div style="text-align: -webkit-center;">
          <v-btn next to="/upload">다시하기</v-btn>
        </div>
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
  },
  methods: {
    nickTest () {
      console.log('efte' + this.image)
    }
  },
  props: {
    image: String,
    id: Array
  }
}
</script>

<style>
div {
  /* border: solid 1px black; */
}
.wrapper {
  box-sizing: border-box;
  resize: horizontal;
  /* border: 1px dashed; */
  overflow: auto;
  max-width: 100%;
  height: auto;
}

.botTalk {
  margin: 5%;
  text-align: center;
  vertical-align: middle;
}

.resultImage {
  height: 20vh;
  width: 15vw;
}
</style>
