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
                  検索結果：{{listCount}}件
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
                @input="pageChange"
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
      keyword: "",
      page: 1,
      length: 0,
      lists: [],
      listCount: "",
      displayLists: [],
      pageSize: 5,
      detail: "",
      pagelists: []
    }
  },
  async created() {
    let item = await axios.get(
      'http://localhost:8001/api/prefectures/40'
    );
    this.lists.push(item.data.data.pref_data);
    // console.log(item.data.data.pref_data);
    // console.log(this.lists[0]);
    this.listCount = this.lists[0].length;

    this.length = Math.ceil(this.lists[0].length / this.pageSize)
    this.displayLists = this.lists[0].slice(0, this.pageSize)
  },
  components: {
    SubContents,
    SidePref
  },
  methods: {
    PostRev() {
      this.$router.push({name: "SightseeingPost", params: {id: this.id}})
    },
    pageChange(pageNumber) {
      this.displayLists = this.lists[0].slice( this.pageSize * (pageNumber - 1),this.pageSize * pageNumber )
    },
    search() {
      let lists = []
      let all = this.lists[0]
      for (let i in all) {
        let list = all[i]
        if(list.place_name.indexOf(this.keyword) !== -1) {
          lists.push(list)
          this.pagelists.push(list)
        }
        
      }
      //検索件数の表示
      this.listCount = lists.length;
      //表示する観光地を変更するため、一度displayListsを空に
      this.displayLists.length = 0;
      this.displayLists = lists.slice(0, this.pageSize)

      return lists
    }
  },
}
</script>