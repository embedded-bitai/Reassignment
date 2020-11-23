<template>
  <v-responsive class="wrapper">
    <v-main style="padding-top: 2%">
      <Layout>
        <template #content>
          <div style="text-align: center;">
              <img
                    src="@/assets/cara.png"
                    max-width=250px
                    max-height=250x
                    align-content="center"
              />
          </div>
              <div class="botTalk">
                <h1>당신의 이미지 분석 결과입니다.</h1>
              </div>
              <div style="border: solid 1px black">
                {{$route.params.id[0]}}
              </div>
              <v-btn next to="/upload">다시하기</v-btn>
        </template>
      </Layout>
    </v-main>
  </v-responsive>
</template>

<script>
import Layout from '../components/Layout'
export default {
  data () {
    return {
    }
  },
  components: {
    Layout
  },
  methods: {
  }
}
</script>

<style>
.wrapper {
  box-sizing: border-box;
  resize: horizontal;
  /* border: 1px dashed; */
  overflow: auto;
  max-width: 100%;
  height: calc(100vh - 16px);
}

.botTalk {
  margin: 10%;
  text-align: center;
  vertical-align: middle;
}
</style>
