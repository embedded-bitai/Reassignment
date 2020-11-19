<template>
  <v-responsive style="aspect-ratio: 16:9">
    <v-main>
      <Layout>
        <template #content>
          <div align-center>
              <img
                    src="@/assets/cara.png"
                    max-width=250px
                    max-height=250x
                    align-content="center"
              />
              <div>
                <h1>어서오세요 당신의 이미지를 올려주세요</h1>
                <h1>이미지를 올리면 물체를 파악하여 결과값을 보여줍니다.</h1>
              </div>
          </div>
            <div>
              <file-pond
                    name="bin"
                    ref="pond"
                    allow-multiple="false"
                    max-files="1"
                    accepted-file-types="image/*"
                    :server="server"
                  />
                  <v-btn @click="onUpload">upload</v-btn>
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
  methods: {
    onUpload (nick) {
      this.inputpoto = false
      // console.log('myFiles : ' + nick)
      const file = this.$refs.pond.getFile()
      nick = file.filename
      console.log('file Name : ' + nick)
      axios.post('http://127.0.0.1:5000/img', { nick })
        .then(res => {
          console.log('res.data : ' + res.data)
          this.pylistrember(res.data)
          this.gra = res.data
          this.file = res.data.join('-')
          console.log('file : ' + this.file)
          this.grapclick(0, 0)
          this.router.push('result')
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
  border: 2px solid black;
}
</style>
