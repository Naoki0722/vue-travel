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
          <SidePref></SidePref>
        </v-col>
        <v-col
          cols="11"
          sm="6"
          md="6"
          lg="6"
          xl="6"
          class="mx-auto mb-5"
        >
          <v-card elevation="2">
            <v-card-title>太宰府天満宮</v-card-title>
            <v-img
              src="https://spi-ra.jp/wp-content/uploads/2019/06/27537978_m-1080x720.jpg"
              alt=""
              height="200"
              max-width="300"
              class="mx-auto"
            >
            </v-img>
            <v-card-subtitle>福岡県福岡市</v-card-subtitle>
            <v-card-text>
              説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文
            </v-card-text>
            <v-card-text>
              <span class="grey--text text--lighten-2 caption mr-2">
                ({{ rating }})
              </span>
              <v-rating
                background-color="warning lighten-1"
                color="warning"
                half-increments
                hover
                length="5"
                size="25"
                v-model="rating"
                readonly
              ></v-rating>
            </v-card-text>
            <v-card-text>
              <p>レビュー</p>
              <ul v-for="(data, index) in tttext" :key="index">
                <li class="py-2">
                  <truncate clamp="read more" :length="50" less="Show Less" :text="data.text"></truncate>
                </li>
              </ul>
              <!-- ダイアログボックスでレビューを表示↓ -->
              <v-dialog
                v-model="dialog"
                width="700"
              >
                <template v-slot:activator="{on, attrs}">
                  <v-btn
                    v-bind="attrs"
                    v-on="on"
                  >
                    さらにみる
                  </v-btn>
                </template>

                <v-card>
                  <div align="center" v-for="(data, index) in displayLists" :key="index" class="pa-4 hidden-md-and-up">
                      <v-img :src="data.img" max-width="70%" class="mx-auto"></v-img>
                      <v-card-title>{{data.title}}</v-card-title>
                      <v-card-text class="pb-7">
                        <truncate clamp="→さらに読む" :length="50" less="Show Less" :text="data.text"></truncate>
                      </v-card-text>
                  </div>
                  <v-row align="center" v-for="(data, index) in displayLists" :key="index" class="pa-4 hidden-sm-and-down">
                    <v-col cols="11" sm="8" md="4" class="mx-auto">
                      <v-img :src="data.img" max-width="400" class="mx-auto"></v-img>
                    </v-col>
                    <v-col cols="11" sm="8" class="mx-auto">
                      <v-card-title>{{data.title}}</v-card-title>
                      <v-card-text class="py-4">
                        <truncate clamp="→さらに読む" :length="50" less="Show Less" :text="data.text"></truncate>
                      </v-card-text>
                    </v-col>
                  </v-row>
                  <v-pagination
                    v-model="page"
                    :length="length"
                    circle
                    @input="pageChange"
                  ></v-pagination>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="primary"
                      text
                      @click="dialog = false"
                    >
                      閉じる
                    </v-btn>
                  </v-card-actions>
                </v-card>
                <!-- <v-card>
                  <v-row align="center" v-for="(data, index) in displayLists" :key="index" class="pa-4">
                    <v-col cols="11" sm="8" md="4" class="mx-auto">
                      <v-img :src="data.img" max-width="400" class="mx-auto"></v-img>
                    </v-col>
                    <v-col cols="11" sm="8" class="mx-auto">
                      <v-card-title>{{data.title}}</v-card-title>
                      <v-card-text class="py-4">
                        <truncate clamp="→さらに読む" :length="50" less="Show Less" :text="data.text"></truncate>
                      </v-card-text>
                    </v-col>
                  </v-row>
                  <v-pagination
                    v-model="page"
                    :length="length"
                    circle
                    @input="pageChange"
                  ></v-pagination>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="primary"
                      text
                      @click="dialog = false"
                    >
                      閉じる
                    </v-btn>
                  </v-card-actions>
                </v-card> -->
              </v-dialog>
              <!-- ↑ダイアログボックスでレビューを表示 -->
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  rounded
                  color="green accent-2"
                  class="mr-10 px-3"
                  right
                  @click="PostRev"
                >
                  評価投稿
                </v-btn>
                <v-btn
                  rounded
                  color="green accent-2"
                  @click="PrefPage"
                >
                  一覧へ戻る
                </v-btn>
              </v-card-actions>
            </v-card-text>
          </v-card>
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
import truncate from 'vue-truncate-collapsed'
import SidePref from "../components/SidePref"
import SideContents from "../components/SubContents"
export default {
  props: ["number"],
  data() {
    return {
      rating: 3,
      length: 0,
      lists: [],
      displayLists: [],
      pageSize: 3,
      dialog: false
    }
  },
  mounted() {
    this.lists = [
        {
          id: 1,
          title: "楽しかったです",
          img: "https://spi-ra.jp/wp-content/uploads/2019/06/27537978_m-1080x720.jpg",
          text: "テストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストでテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストでテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストで"
        },
        {
          id: 2,
          title: "もう少し時間がほしかったです",
          img: "https://spi-ra.jp/wp-content/uploads/2019/06/27537978_m-1080x720.jpg",
          text: "2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです"
        },
        {
          id: 3,
          title: "もう少し時間がほしかったです",
          img: "https://spi-ra.jp/wp-content/uploads/2019/06/27537978_m-1080x720.jpg",
          text: "2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです"
        },
        {
          id: 4,
          title: "もう少し時間がほしかったです",
          img: "https://spi-ra.jp/wp-content/uploads/2019/06/27537978_m-1080x720.jpg",
          text: "2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです"
        },
        {
          id: 5,
          title: "もう少し時間がほしかったです",
          img: "https://spi-ra.jp/wp-content/uploads/2019/06/27537978_m-1080x720.jpg",
          text: "2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです"
        },
        {
          id: 6,
          title: "もう少し時間がほしかったです",
          img: "https://spi-ra.jp/wp-content/uploads/2019/06/27537978_m-1080x720.jpg",
          text: "2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです"
        },
        {
          id: 7,
          title: "もう少し時間がほしかったです",
          img: "https://spi-ra.jp/wp-content/uploads/2019/06/27537978_m-1080x720.jpg",
          text: "2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです"
        }
    ],

    this.length = Math.ceil(this.lists.length / this.pageSize)

    this.displayLists = this.lists.slice(0, this.pageSize)
  },
  methods: {
    hyouka(rating) {
      this.rating = rating
      console.log(this.rating)
    },
    PrefPage() {
      this.$router.push({name: "Pref", params: {id:1}})
    },
    PostRev() {
      this.$router.push({name: "ReviewPost", params: {id:1,number:2}})
    },
    pageChange(pageNumber) {
      this.displayLists = this.lists.slice( this.pageSize * (pageNumber - 1),this.pageSize * pageNumber )
    }
  },
  components: {
    SidePref,
    SideContents,
    truncate
  }
}
</script>


<style scoped>
html,
html.overflow-y-hidden {
  overflow-x: scroll !important;
}
</style>