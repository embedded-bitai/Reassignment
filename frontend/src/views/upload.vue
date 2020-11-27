<template>
<v-responsive class="wrapper">
  <v-main style="padding-top: 2%">
    <Layout>
      <template #content>
        <div style="text-align: center;">
          <img src="@/assets/botPic.jpg" width=300vw height=200vh align-content="center" />
        </div>
        <div class="botTalk">
          <h1>어서오세요 당신의 이미지를 올려주세요</h1>
          <h1>이미지를 올리면 물체를 파악하여 결과값을 보여줍니다.</h1>
        </div>
        <div>
          <file-pond name="bin" ref="pond" allow-multiple="false" max-files="1" accepted-file-types="image/*" :server="server" class="filePond" />
          <v-btn @click="onUpload(nick)">upload</v-btn>
        </div>
      </template>
    </Layout>
  </v-main>
</v-responsive>
</template>

<script>
import axios from 'axios'
import Layout from '../components/Layout'
import vueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'

const FilePond = vueFilePond(FilePondPluginFileValidateType)
export default {
  data () {
    return {
      selectedFile: null,
      nick: '',
      idlist: [],
      server: {
        url: 'http://localhost:1234/file',
        process: {
          url: '/file'
        },
        revert: {
          url: '/remove',
          method: 'POST'
        }
      }
    }
  },
  components: {
    Layout,
    FilePond
  },
  mounted () {
    console.log(this.$store.state.nick)
  },
  methods: {
    onUpload (nick) {
      // console.log('myFiles : ' + nick)
      const file = this.$refs.pond.getFile()
      nick = file.filename
      console.log('file Name : ' + nick)
      axios.post('http://localhost:5000/img', {
        nick
      })
        .then(res => {
          console.log(res.data)
          for (let i = 0; i < res.data.length; i++) {
            this.idlist[i] = res.data[i]
          }
          this.$router.push({
            name: 'result',
            params: {
              id: this.idlist,
              image: nick
            }
          })
        })
        .catch(err => {
          alert(err)
        })
    }
  }
}
</script>

<style scoped>
div {
  /* border: 2px solid black; */
}

.wrapper {
  box-sizing: border-box;
  resize: horizontal;
  /* border: 1px dashed; */
  overflow: auto;
  max-width: 100%;
  height: calc(100vh - 16px);
}

.botTalk {
  margin: 5%;
  text-align: center;
  vertical-align: middle;
}

.filepond--item {
  width: 10px;
}

.filepond--drop-label {
  color: #555;
}
</style>
