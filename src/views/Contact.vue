<template>
  <div>
    <v-row>
      <v-col
        cols="10"
        sm="8"
        md="7"
        lg="6"
        xl="6" 
        class="mx-auto"
      >
        <v-card
          class="mx-auto mt-10 px-10"
          elevation="5"
        >
          <v-card-title class="d-block text-center display-1">お問い合わせフォーム</v-card-title>
            <!-- <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  rounded
                  color="green accent-2"
                  class="mr-4 my-10"
                  :loading="loading"
                  :disabled="loading"
                  @click="submit"
                >
                  投稿する
                </v-btn>
            </v-card-actions> -->
          <v-text-field
            v-model="name"
            label="お名前"
            required
            clearable
            clear-icon="mdi-close-circle"
          />
          <v-text-field
            v-model="email"
            label="メールアドレス"
            required
            clearable
            clear-icon="mdi-close-circle"
          />
          <v-textarea
            v-model="message"
            label="お問い合わせ内容"
            clearable
            clear-icon="mdi-close-circle"
          />
          <v-text-field
            v-model="botfield"
            label="人間は入力しないでください"
            v-show="false"
          />
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
            rounded
            color="green accent-2"
            class="mr-4 my-10"
            :loading="loading"
            :disabled="loading"
            @click="submit"
            >
              送信
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      loading: false,
      name: "",
      email: "",
      message: ""

    }
  },
  methods: {
    async submit () {
      this.loading = true
      setTimeout(() => {
        const params = new URLSearchParams()
        params.append('form-name', 'contact2')
        params.append('name', this.name)
        params.append('email', this.email)
        params.append('content', this.message)

        axios
          .post('/', params)
          .then(() =>{
            this.loading = false
            this.$router.push({name: "ContactThanks"})
          })
      }, 3000)
    },
  },
  // methods: {
  //   async submit() {
  //     const params = new URLSearchParams()
  //     params.append('form-name', 'contact2')
  //     params.append('name', this.name)
  //     params.append('email', this.email)
  //     params.append('content', this.message)

  //     axios
  //       .post('/', params)
  //       .then(() => {
  //         this.$router.push({name: "ContactThanks"})
  //       })
  //   }
  // },
}
</script>