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
          <v-card elevation="2">
            <v-card-title>{{title}}</v-card-title>
            <v-img
              :src="image"
              alt=""
              height="200"
              max-width="300"
              class="mx-auto"
            >
            </v-img>
            <!-- <v-card-subtitle>福岡県福岡市</v-card-subtitle> -->
            <v-card-text>{{description}}</v-card-text>
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
              <ul v-for="(data, index) in displayLists" :key="`first-${index}`">
                <li class="py-2">
                  <truncate clamp="read more" :length="50" less="Show Less" :text="data.comment"></truncate>
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
                  <div align="center" v-for="(data, index) in displayLists" :key="`second-${index}`" class="pa-4 hidden-md-and-up">
                      <v-img :src="data.image_path" max-width="70%" class="mx-auto"></v-img>
                      <v-card-title>{{data.title}}</v-card-title>
                      <v-card-text class="pb-7">
                        <truncate clamp="→さらに読む" :length="50" less="Show Less" :text="data.comment"></truncate>
                      </v-card-text>
                  </div>
                  <v-row align="center" v-for="(data, index) in displayLists" :key="`third-${index}`" class="pa-4 hidden-sm-and-down">
                    <v-col cols="11" sm="8" md="4" class="mx-auto">
                      <v-img :src="data.image_path" max-width="400" class="mx-auto"></v-img>
                    </v-col>
                    <v-col cols="11" sm="8" class="mx-auto">
                      <v-card-title>{{data.title}}</v-card-title>
                      <v-card-text class="py-4">
                        <truncate clamp="→さらに読む" :length="50" less="Show Less" :text="data.comment"></truncate>
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
          <SubContents @getChildText="showChildText"></SubContents>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<script>
import truncate from 'vue-truncate-collapsed'
import SidePref from "../components/SidePref"
import SubContents from "../components/SubContents"
import axios from 'axios'
export default {
  props: ["id","number"],
  data() {
    return {
      sendId: this.id,
      sendNumber: this.number,
      title: "",
      image: "",
      description: "",
      rating: 0,
      length: 0,
      lists: [],
      displayLists: [],
      pageSize: 3,
      page: 1,
      dialog: false,

    }
  },
  async created() {
    let item = await axios.get(
      'https://desolate-chamber-49342.herokuapp.com/api/tourists/' + this.sendNumber
    );
    // 観光地詳細情報
    this.title = item.data.data.item.place_name;
    this.image = item.data.data.item.place_image_path;
    this.description = item.data.data.item.description;

    // それに付随するコメント情報
    this.lists.push(item.data.data.comments);
    this.length = Math.ceil(this.lists[0].length / this.pageSize);

    this.displayLists = this.lists[0].slice(0, this.pageSize);
    let starValue = this.lists[0];
    
    let aveRaview = 0;
    // レビュー数の合計を算出
    for (let i = 0; i < starValue.length; i++) {
      aveRaview += parseFloat(starValue[i].review);
    }
    // レビュー数の平均を算出
    const starRev = Math.floor(aveRaview *10 / parseFloat(starValue.length))

    this.rating = starRev / 10;
  },
  methods: {
    async showChildText(listId) {
      this.sendNumber = listId;
      let item = await axios.get(
        'https://desolate-chamber-49342.herokuapp.com/api/tourists/' + this.sendNumber
      );
      // 観光地詳細情報
      this.title = item.data.data.item.place_name;
      this.image = item.data.data.item.place_image_path;
      this.description = item.data.data.item.description;

      // それに付随するコメント情報
      // 一度値が入っているので空にする
      this.lists.length = []
      this.lists.push(item.data.data.comments);
      this.length = Math.ceil(this.lists[0].length / this.pageSize);

      this.displayLists = this.lists[0].slice(0, this.pageSize);
      let starValue = this.lists[0];
      
      let aveRaview = 0;
      // レビュー数の合計を算出
      for (let i = 0; i < starValue.length; i++) {
        aveRaview += parseFloat(starValue[i].review);
      }
      // レビュー数の平均を算出
      const starRev = Math.floor(aveRaview *10 / parseFloat(starValue.length))

      this.rating = starRev / 10;
    },

    hyouka(rating) {
      this.rating = rating
    },
    PrefPage() {
      this.$router.push({name: "Pref", params: {id:this.id}})
    },
    PostRev() {
      this.$router.push({name: "ReviewPost", params: {id: this.id ,number: this.number}})
    },
    pageChange(pageNumber) {
      this.displayLists = this.lists[0].slice( this.pageSize * (pageNumber - 1),this.pageSize * pageNumber )
    }
  },
  components: {
    SidePref,
    SubContents,
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