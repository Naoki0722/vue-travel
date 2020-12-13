<template>
  <div class="Sightseeing d-flex">
    <SidePref></SidePref>
    <div class="sightseeing_contents">
      <v-card
        elevation="2"
        max-width="600"
        class="mt-5 pl-5"
      >
        <v-card-title>太宰府天満宮</v-card-title>
        <v-img
          src="https://spi-ra.jp/wp-content/uploads/2019/06/27537978_m-1080x720.jpg"
          alt=""
          height="100px"
          width="200"
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
            width="550"
          >
            <template v-slot:activator="{on, attrs}">
              <v-btn
                v-bind="attrs"
                v-on="on"
                class="my-4"
              >
                さらにみる
              </v-btn>
            </template>

            <v-card>
              <ul v-for="(data, index) in tttext" :key="index" class="pa-4">
                <v-card-title>{{data.title}}</v-card-title>
                <v-card-text class="py-2">
                  <truncate clamp="→さらに読む" :length="50" less="Show Less" :text="data.text"></truncate>
                </v-card-text>
              </ul>
              <v-divider></v-divider>
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
    </div>
    <SideContents></SideContents>
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
      tttext: [
        {
          id: 1,
          title: "楽しかったです",
          text: "テストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストでテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストでテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストですテストで"
        },
        {
          id: 2,
          title: "もう少し時間がほしかったです",
          text: "2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです2個目のテキストです。2個目のテキストです"
        }
      ],
      dialog: false
    }
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
    }
  },
  components: {
    SidePref,
    SideContents,
    truncate
  }
}
</script>