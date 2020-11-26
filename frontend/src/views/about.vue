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
              <h1 style="text-decoration: underline">What do we do?</h1>
              <br/>
              <h3>Bit Image가 제공하는 서비스의 메인기능은 유저가 업로드한 이미지를 머신러닝을 통해 학습된 CNN인 VGG16를 사용하여 분석하고 가장 근접한 Top 5를 퍼센트화해서 알려줍니다.</h3>
              <br/><br/>
              <h1 style="text-decoration: underline">VGG란?</h1>
              <br/>
              <v-row>
                <v-col>
              <h3>VGG16은 옥스포드 대학의 연구팀인 VGG에 의해 개발된 모델으로써 VGG19과 함께 VGGNet의 한 종류입니다.
                  VGGNet은 2014년 이미지넷 이미지 인식 대회에서 준우승을 한 모델이며 16과 19은 각 모델의 층 갯수를 의미합니다.
                  비록 준우승을 하였지만 오히려 우승을 한 GoogleNet보다 간단한 구조와 단일 network에서 좋은 성능을 보인다는 이유로 더 많이 응용되고 있습니다.
              </h3>
              <br/>
              <h3>
                VGGNet의 적은 에러와 좋은 성능의 이유를 돌어보자면 단연코 이 모델의 깊이를 꼽을수 있을것입니다. VGGNet는 모든 필터 커널의 사이즈를 3 x 3으로 설정 하였기 때문에 네트워크의 깊이를 더욱 깊게 만들수 있었다.
                이 말은 즉슨 필터 커널의 사이즈가 크면 그만큼 이미지의 사이즈가 축소 되기 때문에 네트워크의 깊이를 깊게 만들수 없기 때문입니다.
              </h3>
              <br/>
              <h3>
                옆 그림을 보면 3 x 3 필터로 두 차례 컨볼루션을 하는 것과 5 x 5 필터로 한 번 컨볼루션을 하는 것이 결과적으로 동일한 사이즈의 특성맵을 산출한다는 것을 알수 있습니다. 3 x 3 필터로 세 차례 컨볼루션 하는 것은
                7 x 7 필터로 한 번 컨볼루션 하는 것과 같습니다. 그러면 이것이 어떻게 VGGNet의 성능 향상에 도움을 주는지 말을 해보자면 3 x 3 필터로 세 차례 컨볼루션 하는것을 7 x 7로 한 번 컨볼루션과 비교를 해보겠습니다.
                3 x 3필터가 3개면 총 27개의 가중치를 가지는 것에 비해 7 x 7 필터 하나의 가중치는 49개입니다. CNN에서 가중치의 의미는 그만큼 훈련이 필요하다는 것을 의미하므로, 가중치가 적다는것은 학습시간이 짦다는것이고 동시에 층이 늘어남에 따라서
                특성에 비선형을 더 증가 시킬수 있기 때문에 유용합니다.
              </h3>
                </v-col>
                <v-col>
                  <img src="@/assets/vgg16map.png"/>
                </v-col>
              </v-row>
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
