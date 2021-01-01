<template>
  <div>
    <v-container>
      <v-row>
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
                  <!-- <v-btn
                    rounded
                    color="green accent-2"
                    class="px-3"
                    right
                    @click="search"
                  >
                    検索
                  </v-btn> -->
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
                  検索結果：{{this.searchLists.length}}件
                </v-col>
              </v-row>
            <v-card
              elevation="2"
              max-width="600"
              class="my-5"
              style="position: relative"
              v-for="(list ,index) in rangeFixedLists[page - 1]" :key="index"
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
                :length="rangeFixedLists.length"
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
import axios from 'axios'
export default {
  props: ["id"],
  data() {
    return {
      apiLists: [],
      page: 1,
      length: 0,
      total: 0,
      keyword: "",
    }
  },
  methods: {
    PostRev() {
      this.$router.push({name: "SightseeingPost", params: {id: this.id}})
    }
  },
  components: {
    SubContents,
  },
  //api取得(非同期)
  async created() {
    const response = await axios.get(`http://localhost:8001/api/prefectures/40`);
    this.apiLists.push(response.data.data.pref_data)
  },
  computed: {
    rangeFixedLists() {
      let array = [];
      const displayLists = [];
      for (let i = 1;  i < this.searchLists.length + 1; i++) {
        array.push(this.searchLists[ i - 1]);
        if ((i != 0 && i % 5 == 0) || i == this.searchLists.length) {
          displayLists.push(array);
          array = [];
        }
      }
      console.log(displayLists)
      return displayLists;
    },
    searchLists() {
      const array = [];
      for(const i in this.apiLists[0]) {
        const item = this.apiLists[0][i]
        if (item.place_name.includes(this.keyword)) {
          array.push(item)
        }
      }
      return array;
    },
  }
}
</script>