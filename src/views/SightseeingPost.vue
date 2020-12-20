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
                  v-model="name"
                  label="観光地"
                  clearable
                  clear-icon="mdi-close-circle"
                  class="pt-10 pb-5"
                  height="50"
                ></v-text-field>
                <v-textarea
                  outlined
                  v-model="description"
                  label="観光地の説明"
                  clearable
                  clear-icon="mdi-close-circle"
                  height="250"
                ></v-textarea>
                <v-text-field
                  label="名前"
                  clearable
                  clear-icon="mdi-close-circle"
                  class="py-5"
                  height="50"
                ></v-text-field>
                <v-textarea
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
                  v-model="files"
                  label="画像"
                  multiple
                  prepend-icon="mdi-paperclip"
                  class="my-5"
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
export default {
  props: ["id", "number"],
  components: {
    SidePref,
    SideContents
  },
  data() {
    return {
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
        this.$router.push({name: "Thanks"})
      ), 3000)      
    },
  },
}
</script>


<style scoped>

</style>