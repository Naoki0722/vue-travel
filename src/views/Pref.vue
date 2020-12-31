<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="3" md="3" lg="3" xl="3">
          <SidePref :parentData = "id"></SidePref>
        </v-col>
        <v-col cols="10" sm="6" md="6" lg="6" xl="6" class="mx-auto">
              <v-row align="center" class="mx-auto">
                <v-col cols="9" sm="6" md="6" lg="6" xl="3">
                  <v-text-field
                    label="検索キーワード"
                    width="40%"
                    prepend-icon="mdi-clipboard-search"
                    v-model="keyword"
                  ></v-text-field>
                </v-col>
                <v-col cols="2" sm="3" md="3" lg="3" xl="3">
                  <v-btn
                    rounded
                    color="green accent-2"
                    class="px-3"
                    right
                    @click="search"
                  >
                    検索
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="3" md="3" lg="3" xl="3" class="text-center">
                  <v-btn
                    rounded
                    color="green accent-2"
                    class="px-3"
                    right
                    @click="PostRev"
                  >
                    観光地追加
                  </v-btn>
                </v-col>
                <v-col cols="12"  class="text-center headline">
                  検索結果：{{total}}件
                </v-col>
              </v-row>
            <v-card
              elevation="2"
              max-width="600"
              class="my-5"
              style="position: relative"
              v-for="(list ,index) in displayLists" :key="index"
            >
              <v-card-title>{{list.place_name}}</v-card-title>
              <v-card-text class="pb-10">
                {{list.description}}
              </v-card-text>
              <v-card-actions>
                <v-btn absolute bottom right @click="$router.push({ name: 'Sightseeing', params: { number: list.id } })">続きをみる</v-btn>
              </v-card-actions>
            </v-card>
              <v-pagination
                v-model="page"
                :length="length"
                circle
                :total-visible="10"
              ></v-pagination>
        </v-col>
        <v-col cols="10" sm="3" md="3" lg="3" xl="3" class="mx-auto">
          <SubContents></SubContents>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SubContents from "../components/SubContents"
import SidePref from "../components/SidePref"
import axios from 'axios'
export default {
  props: ["id"],
  data() {
    return {
      displayLists: [],
      page: 1,
      length: 0,
      total: 0,
      keyword: "",
    }
  },
  methods: {
    //検索ボタンを押さない状態で実行は全数表示、検索ボタンを押して実行はkeywordに当てはままった物だけを実行する。
    async search() {
      let response = await axios.get(`http://localhost:8001/api/prefectures?pref=${this.id}&page=${this.page}&keyword=${this.keyword}`)
      let res = response.data.data
      this.displayLists = res.data
      this.length = res.last_page
      this.total = res.total
    },
    PostRev() {
      this.$router.push({name: "SightseeingPost", params: {id: this.id}})
    },
    pageChange(pageNumber) {
      this.displayLists = this.lists[0].slice( this.pageSize * (pageNumber - 1),this.pageSize * pageNumber )
    },
  },
  components: {
    SubContents,
    SidePref
  },
  mounted() {
    //初期表示
    this.search()
  },
  watch: {
    //ページネーションクリックによる監視を実施
    //クリックされたらsearch()を実行(その時はthis.pageが更新されている)
    page: function() {
      this.search();
    }
  },
}
</script>