<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          cols="11"
          sm="3"
          md="3" 
          lg="3"
          xl="3"
          class="mx-auto"
        >
          <SidePref :parentData="id"></SidePref>
        </v-col>
        <v-col
          cols="11"
          sm="6"
          md="6"
          lg="6"
          xl="6"
          class="mx-auto mb-5"
        >
          <div>
            <v-card
              elevation="2"
              width="600"
              class="mt-5 px-5"
            >
              <form>
                <v-text-field
                  v-model="place_name"
                  label="観光地"
                  clearable
                  clear-icon="mdi-close-circle"
                  class="pt-10 pb-5"
                  height="50"
                ></v-text-field>
                <v-file-input
                  type="file"
                  label="観光地画像"
                  name="image"
                  multiple
                  prepend-icon="mdi-paperclip"
                  class="my-5"
                  @change="tourImageSelected"
                >
                </v-file-input>
                <v-textarea
                  outlined
                  v-model="description"
                  label="観光地の説明"
                  clearable
                  clear-icon="mdi-close-circle"
                  height="250"
                ></v-textarea>
                <v-text-field
                  v-model="name"
                  label="名前"
                  clearable
                  clear-icon="mdi-close-circle"
                  class="py-1"
                  height="50"
                ></v-text-field>
                <v-text-field
                  v-model="title"
                  label="タイトル"
                  clearable
                  clear-icon="mdi-close-circle"
                  class="py-5"
                  height="50"
                ></v-text-field>
                <v-textarea
                  v-model="comment"
                  outlined
                  label="レビューを記載ください"
                  clearable
                  clear-icon="mdi-close-circle"
                  height="250"
                ></v-textarea>
                <v-rating
                  background-color="warning lighten-1"
                  color="warning"
                  half-increments
                  hover
                  length="5"
                  size="25"
                  v-model="rating"
                ></v-rating>
                <v-file-input
                  type="file"
                  label="画像"
                  name="image"
                  multiple
                  prepend-icon="mdi-paperclip"
                  class="my-5"
                  @change="imageSelected"
                >
                  <template v-slot:selection="{ text }">
                    <v-chip
                      small
                      label
                      color="primary"
                    >
                      {{ text }}
                    </v-chip>
                  </template>
                </v-file-input>
                <v-row>
                  <v-spacer></v-spacer>
                  <v-btn
                    rounded
                    color="green accent-2"
                    class="mr-4 my-10"
                    :loading="loading"
                    :disabled="loading"
                    @click="loader = 'loading'"
                  >
                    投稿する
                  </v-btn>
                </v-row>
              </form>
            </v-card>
          </div>
        </v-col>
        <v-col
          cols="10"
          sm="3"
          md="3"
          lg="3"
          xl="3"
          class="mx-auto"
        >
          <SideContents></SideContents>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import SidePref from "../components/SidePref"
import SideContents from "../components/SubContents"
import axios from 'axios'
export default {
  props: ["id", "number"],
  components: {
    SidePref,
    SideContents
  },
  data() {
    return {
      place_name: "",
      description: "",
      tourist_img: "",
      name: "",
      comment: "",
      title: "",
      img: "",
      rating: 0,
      loader: null,
      loading: false,
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (
        axios
          .post('https://desolate-chamber-49342.herokuapp.com/api/tourists', {
            place_name: this.place_name,
            description: this.description,
            tourist_img: this.tourist_img,
            pref_id: this.id,
            name: this.name,
            title: this.title,
            review: this.rating,
            comment: this.comment,
            img: this.img


          })
          .then((response) => {
            console.log(response);
            this.place_name = "",
            this.description = "",
            this.pref_id = "",
            this.name = "";
            this.review = "";
            this.title = "";
            this.rating = 0;
            this.tourist_img = "";
            this.img = "";
          }),
        this.$router.push({name: "Thanks",  params: { id: this.id}})
      ), 4000)      
    },
  },
  methods: {
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })
    },
    tourImageSelected(e) {
      const images = e
      console.log(images[0])
      this.getBase64(images[0])
        .then((response) => {
          this.tourist_img = response
        })
        .catch(e => {
          //エラー発生時
          console.log(e)
        })
        .finally(() => {
          console.log('１枚目の選択完了')
        })
    },
    imageSelected(e) {
      const images = e
      console.log(images[0])
      this.getBase64(images[0])
        .then((response) => {
          this.img = response
        })
        .catch(e => {
          //エラー発生時
          console.log(e)
        })
        .finally(() => {
          console.log('２枚目の選択完了')
        })
    }
  },
}
</script>


<style scoped>

</style>