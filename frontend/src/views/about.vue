<template>
<v-responsive class="wrapper">
  <v-main style="padding-top: 0%">
    <Layout>
      <template #content>
        <div class="firstDiv">
          <p class="headerText" :id="index">How It Works</p>
        </div>
        <v-tabs align-with-title background-color="transparent" fixed-tabs slider-color="#000080">
          <v-tab style="color: black" :ripple="false">서론</v-tab>
          <v-tab-item>
            <v-card class="vCard">
              <h1 style="text-decoration: underline">What do we do?</h1>
              <br />
              <h3>Bit Image가 제공하는 서비스의 메인기능은 유저가 업로드한 이미지를 머신러닝을 통해 학습된 CNN인 VGG16를 사용하여 분석하고 가장 근접한 Top 5를 퍼센트화해서 알려줍니다.</h3>
              <br /><br />
              <h1 style="text-decoration: underline">VGG란?</h1>
              <br />
              <v-row>
                <v-col>
                  <h3>VGG16은 옥스포드 대학의 연구팀인 VGG에 의해 개발된 모델으로써 VGG19과 함께 VGGNet의 한 종류입니다.
                    VGGNet은 2014년 이미지넷 이미지 인식 대회에서 준우승을 한 모델이며 16과 19은 각 모델의 층 갯수를 의미합니다.
                    비록 준우승을 하였지만 오히려 우승을 한 GoogleNet보다 간단한 구조와 단일 network에서 좋은 성능을 보인다는 이유로 더 많이 응용되고 있습니다.
                  </h3>
                  <br />
                  <h3>
                    VGGNet의 적은 에러와 좋은 성능의 이유를 돌어보자면 단연코 이 모델의 깊이를 꼽을수 있을것입니다. VGGNet는 모든 필터 커널의 사이즈를 3 x 3으로 설정 하였기 때문에 네트워크의 깊이를 더욱 깊게 만들수 있었다.
                    이 말은 즉슨 필터 커널의 사이즈가 크면 그만큼 이미지의 사이즈가 축소 되기 때문에 네트워크의 깊이를 깊게 만들수 없기 때문입니다.
                  </h3>
                  <br />
                  <h3>
                    옆 그림을 보면 3 x 3 필터로 두 차례 컨볼루션을 하는 것과 5 x 5 필터로 한 번 컨볼루션을 하는 것이 결과적으로 동일한 사이즈의 특성맵을 산출한다는 것을 알수 있습니다. 3 x 3 필터로 세 차례 컨볼루션 하는 것은
                    7 x 7 필터로 한 번 컨볼루션 하는 것과 같습니다. 그러면 이것이 어떻게 VGGNet의 성능 향상에 도움을 주는지 말을 해보자면 3 x 3 필터로 세 차례 컨볼루션 하는것을 7 x 7로 한 번 컨볼루션과 비교를 해보겠습니다.
                    3 x 3필터가 3개면 총 27개의 가중치를 가지는 것에 비해 7 x 7 필터 하나의 가중치는 49개입니다. CNN에서 가중치의 의미는 그만큼 훈련이 필요하다는 것을 의미하므로, 가중치가 적다는것은 학습시간이 짦다는것이고 동시에 층이 늘어남에 따라서
                    특성에 비선형을 더 증가 시킬수 있기 때문에 유용합니다.
                  </h3>
                </v-col>
                <v-col>
                  <img src="@/assets/vgg16map.png" />
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
          <v-tab style="color: black" :ripple="false">디지털 신호처리</v-tab>
          <v-tab-item>
            <v-card class="vCard">
              <h1 style="text-decoration: underline">디지털 신호처리란?</h1>
              <br /><br />
              <h3>
                디지털 신호 처리(Digital signal processing, DSP)란 디지털화된 신호를 원하는 방향으로 정보 신호를 수정하거나 개선할 목적으로 알고리즘에 의해 수치적으로 처리하는 것을 뜻합니다.
                DSP의 일반적인 목적은 연속적인 실세계 아날로그 신호를 측정하고 필터링해 압축을 하는 것입니다.
              </h3>
              <br />
              <h3>
                첫 단계는 샘플링이라는 과정으로 신호를 아날로그에서 디지털 형태로 변환을 하고, 그 뒤 ADC(Analog-to-digital converter)를 사용하여 아날로그 신호를 디지털화 하여 연속된 수로 변경합니다.
                하지만 필요한 출력 신호는 다른 아날로그 출력 신호인데 이 과정은 DAC(Digital-to-analog converter)를 요구합니다. 이 과정은 아날로그 처리보다 과정이 더 복잡하지만
                데이터 압축과 전송중 오류 검출 정정과 같은 여러 응용에서 아날로그 처리에 비해 수많은 이점을 가지고 있습니다.
              </h3>
              <v-row style="text-align: center; margin: 5%;">
                <v-col>
                  <img src="@/assets/dspPic.png" />
                </v-col>
                <v-col>
                  <img src="@/assets/dspPic2.jpeg" />
                </v-col>
              </v-row>
              <br />
              <v-row>
                <v-col>
                  <h1 style="text-decoration: underline">디지털 신호처리란의 응용분야</h1>
                  <br /><br />
                  <h3>DSP는 우리 실생활에서 널리 사용되고 있으며 우리가 잘 알지 못하는 전문적인 분야에서도 활용되어 왔습니다.</h3>
                  <br />
                  <ul>
                    <li class="list">영상 처리</li>
                    <h3>– 패턴인식, Robotic vision, Image enhancement, Facsimile 위성 기상도, Animation</h3>
                    <br />
                    <li class="list">계측/제어</li>
                    <h3>– 스펙트럼 분석, Noise reduction, 데이터 압축</h3>
                    <br />
                    <li class="list">음성/음향</li>
                    <h3>– 음성인식, 음성합성, Digital audio, 등화기, 음성 부호화</h3>
                    <br />
                    <li class="list">군사용</li>
                    <h3>– 비밀통신, 레이더 신호처리, Sonar 신호처리, 미사일 표적지시</h3>
                    <br />
                    <li class="list">통신</li>
                    <h3>– 모뎀, Echo 제거기, 적응 등화기, ADPCM transcoders, Spread spectrum, Video conferencing, 데이터 통신</h3>
                    <br />
                    <li class="list">생체 의학</li>
                    <h3>– 환자 모니터링, Scanners, 심전도 해석, X-ray storage/enhancement</h3>
                    <br />
                  </ul>
                </v-col>
                <v-col>
                  <div class="cover">
                    <img src="@/assets/siri.png">
                    <img src="@/assets/radar.jpg">
                  </div>
                  <div class="cover">
                    <img src="@/assets/monitoring.png">
                    <img src="@/assets/vision.png">
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
          <v-tab style="color: black" :ripple="false">표본화/양자화</v-tab>
          <v-tab-item>
            <v-card class="vCard">
              <h1 style="text-decoration: underline">표본화와 양자화의 정의</h1>
              <br /><br />
              <h3>표본화와 양자화란 쉽게 말해서 아날로그 신호를 디지털화 하는 과정의 한 부분이라고 할수 있고 더욱 정확하게 정의 하자면 표본화는 시간 축의 디지털화, 양자화는 진폭 값의 디지털화입니다.</h3>
              <br />
              <h2>1. 표본화(Sampling)</h2>
              <h3>표본화란 어날로그 신호를 디지털 신호로 바꿔주는 첫 번째 단게로 일정 시간 간격으로 아날로그 신호의 순간적인 값을 취하는 것을 의미 합니다.</h3>
              <br />
              <img src="@/assets/sampling.png" />
              <br /><br />
              <h3>위 그림에서 확인할수 있듯 왼쪽의 선형으로 이루어진 아날로그 신호를 일정 시간 간격으로 미세하게 나누어 각각 해당 점을 수로 표현하는 것입니다. 따라서 표본화를 시간 축의 디지털화라고 하며
                말 그대로 아날로그 파형을 디지털 형태로 변환하기 위한 표본 혹은 샘플링을 취하는것 입니다.
              </h3>
              <br />
              <h2>2. 양자화(Quantization)</h2>
              <br />
              <h3>표본화 과정을 통해 나뉘어진 값은 연속적인 값을 가지는데 이 값을 진폭(크기)에 따라 연속적이지 않은 각각의 대표값(정수)으로 변환하는 과정입니다.
                예를 들어 표본화를 통해 구해진 값이 4.32321···라고 가정했을때 이 값을 4로 정수화를 하는것을 양자화라고 정의합니다.</h3>
              <br />
              <img src="@/assets/quantization.png" />
              <br /><br />
              <h3>양자화 과정을 통해 구해진 값은 위에 그림처럼 단계화 되며 이 값은 정확한 값이 아니기 때문에 오차가 발생하며, 이때 발생하는 오차를 양자화 오차(Quantization error)라고 한다.</h3>
            </v-card>
          </v-tab-item>
          <v-tab style="color: black" :ripple="false">컨볼루션</v-tab>
          <v-tab-item>
            <v-card class="vCard">
              <h1 style="text-decoration: underline">CNN과 컨볼루션의 관계성</h1>
              <br /><br />
              <div style="text-align: center;">
                <img src="@/assets/conv.png"/>
              </div>
              <br/><br/><br/>
              <h3>컨볼루션은 고양이가 보는 것 마다 자극 받은 뇌의 위치가 다른 것을 보고 아이디어를 얻어 CNN을 만들었다고 합니다. 즉 이미지 전체를 보는것이 아니라 부분을 보는것이 핵심 아이디어 입니다.
                  이 '부분'을 convolution kernel 혹은 filter이라고 합니다.
              </h3>
              <br/>
              <h3>이러한 과정을 거쳐가므로 이미지 공간정보를 유지하면서 특징을 효과적으로 인식/분류 할수 있고 학습 파라미터가 적습니다.
              </h3>
              <br/>
            </v-card>
          </v-tab-item>
          <v-tab style="color: black" :ripple="false">특징추출</v-tab>
          <v-tab-item>
            <v-card class="vCard">
              <h1 style="text-decoration: underline">특징 추출 (Feature Extraction)</h1>
              <br/><br/>
              <h2 style="text-weight: bold;">1. 채널 (Channel)</h2>
              <br/>
              <div style="text-align: center;">
                <img src="@/assets/rgb.png"/>
              </div>
              <br/><br/>
              <h3>
                하나의 이미지는 컬러 이미지로 보통 RGC 3가지의 Channel로 이루어진 3차원 데이터로 볼 수 있습니다. (흑백 이미지는 1가지의 Channel로 된 2차원 데이터)
              </h3>
              <br/><br/>
              <h2 style="font-weight: bold;">2. 필터 & Stride</h2>
              <br/>
              <div style="text-align: center;">
                <img src="@/assets/stride.png"/>
                <img src="@/assets/filter.jpg"/>
              </div>
              <br/><br/>
              <h3>필터란 이미지의 특징을 추출하기 위한 행렬입니다. 보통 3 x 3 또는 4 x 4의 정사각행렬로 정의가 되며 데이터의 특징이 있으면 큰 값,
                특징이 없다면 0에 가까운 값으로 나오게 됩니다. 특징을 잘 찾을 수 있게 어떤 값의 필터가 필요한지 찾는 과정이 CNN의 학습과정 이라고 할수 있습니다.
              </h3>
              <br/>
              <h3>Stride는 필터가 순회하는 간격입니다. Stride=1이면 한칸씩 이동하며 Input data와 Filter의 합성곱을 수행하게 되는 식입니다.</h3>
              <br/>
              <h3>3개로 나눠진 채널(흑백의 경우는 1개) 별로 합성곱을 진행을 하여 Feature Map을 만들고 이들을 각 지정된 Stride만큼 이동시키면서 반복 수행해 Feature Map
                행렬을 만들게 됩니다. 최종 Feature Map은 각 채널별로 나온 Feature Map을 합한 것이 됩니다.</h3>
              <br/><br/>
              <h2 style="font-weight: bold;">3. 패딩</h2>
              <br/>
              <br/>
              <div style="text-align: center;">
                <img src="@/assets/padding.png"/>
              </div>
              <br/><br/>
              <h3>Feature map의 크기는 원래의 Input data의 크기보다 작습니다. 이대로 학습을 수행시키게 되면 최종적인 Convolution Layer의
                Output은 처음 Input보다 사이즈가 작게 되고, 이를 반복수행하면 결국 Neural Network을 적용시키기도 전에 많은 데이터가 유실될 것입니다. 충분한 특징값이
                추출되기도 전에 결과값이 유실되게 되는 것이죠. 따라서 Convolution Layer의 Output size를 Input data size와 같게 하기 위해 데이터의 외곽에 특정
                 값(주로 0)으로 채우는 과정을 거치고 이를 패딩(Padding)이라 합니다.</h3>
              <br/>
              <h3>Padding은 사이즈조절 기능 외에도 원본 데이터에 계속 0이라는 노이즈를 섞음으로서 Overfitting을 방지하는 효과가 있습니다.</h3>
              <br/><br/>
              <h2 style="font-weight: bold;">4. 활성함수</h2>
              <br/>
              <br/>
              <div style="text-align: center;">
                <img src="@/assets/actifunc.png"/>
              </div>
              <br/><br/>
              <h3>패딩까지 거친 데이터는 데이터가 가지고 있는 특징을 매우 큰값으로, 특징이 없는부분은 0에 가까운 값으로 나타내고 있습니다. 우리에겐 값의 크기가 중요한 것이 아니라 특징이
                 ‘‘있다”, “없다”가 중요하기 때문에 이를 바꿔주는 작업이 필요합니다. 이를 Activation function이 수행합니다.</h3>
              <br/>
              <h3>CNN에선 다양한 Activation function중에 ReLU를 주로 사용하는데 주로 알려진 Sigmoid는 학습 중 Back Propagation 과정에서 값이 희석되는 현상이 발생하기 때문입니다.</h3>
              <br/>
              <h3>Activation function을 적용한 데이터를 Activation map 이라 하며 이것이 최종적인 Convolution layer의 Output이 됩니다.</h3>
            </v-card>
          </v-tab-item>
          <v-tab style="color: black" :ripple="false">추론</v-tab>
          <v-tab-item>
            <v-card class="vCard">
              <h1>이 페이지에선 저희 서비스가 어떻게 작동하는지 설명하겠습니다.</h1>
              <img src="@/assets/6.jpg" />
            </v-card>
          </v-tab-item>
          <v-tab style="color: black" :ripple="false">피드백 제어</v-tab>
          <v-tab-item>
            <v-card class="vCard">
              <h1 style="text-decoration: underline">피드백 제어</h1>
              <br/><br/>
              <h3>피드백 제어란 더욱 더 좋은 output을 위한 조력이라고 생각하면 쉽습니다. </h3>
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

.vCard {
  position: fixed;
  padding-top: 5%;
  padding-left: 8%;
  padding-right: 8%;
  padding-bottom: 10%;
}
.wrapper {
  box-sizing: border-box;
  resize: horizontal;
  /* border: 1px dashed; */
  overflow: auto;
  max-width: 100%;
  height: auto;
}

.list {
  font-weight: bold;
  font-size: 1vw;
}

.cover {
  width: 40vw;
  height: 35vh;
  margin: 0 auto;
  display: flex;
}

.cover>img {
  float: left;
  width: 45%;
  margin: 1.66%;
}
</style>
