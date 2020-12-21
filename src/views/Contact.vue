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
          class="mx-auto mt-10"
          elevation="5"
        >
          <v-card-title class="d-block text-center display-1">お問い合わせフォーム</v-card-title>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class="px-4 mt-4"
            name="contact"
            @submit.prevent="onSubmit"
          >
          <input type="hidden" name="form-name" value="contact" />
            <v-text-field
              v-model="name"
              name="name"
              :counter="10"
              :rules="nameRules"
              clearable
              clear-icon="mdi-close-circle"
              label="名前"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              name="email"
              label="メールアドレス"
              clearable
              clear-icon="mdi-close-circle"
              required
            ></v-text-field>
            <v-textarea
              v-model="content"
              name="content"
              label="お問い合わせ内容"
              clearable
              clear-icon="mdi-close-circle"
              required
            ></v-textarea>
            <v-card-actions>
                <v-spacer></v-spacer>
                <!-- <v-btn
                  rounded
                  color="green accent-2"
                  class="mr-4 my-10"
                  :loading="loading"
                  :disabled="loading"
                  @click="loader = 'loading'"
                >
                  投稿する
                </v-btn> -->
                <v-btn
                  rounded
                  color="green accent-2"
                  class="mr-4 my-10"
                  type="submit"
                >
                  投稿する
                </v-btn>
            </v-card-actions>
          </v-form>
          <form name="contact" netlify netlify-honeypot="bot-field" hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="content"></textarea>
          </form>
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
      loader: null,
      loading: false,
      name: "",
      email: "",
      content: ""

    }
  },
  // watch: {
  //   loader () {
  //     const l = this.loader
  //     this[l] = !this[l]
  //     const params = new URLSearchParams()
  //     params.append('form-name', 'contact')
  //     params.append('name', this.name)
  //     params.append('email', this.email)
  //     params.append('content', this.content)
  //     console.log(params.getAll('message'))

        
  //     setTimeout(() => (
  //     axios
  //       .post('/', params)
  //       .then(() => {
  //         this.$router.push({name: "ContactThanks"})
  //       })
  //     ), 3000)      
  //   },
  // },
  methods: {
    onSubmit() {
      const params = new URLSearchParams()
      params.append('form-name', 'contact')
      params.append('name', this.name)
      params.append('email', this.email)
      params.append('content', this.content)
      console.log(params.getAll('message'))

      axios
        .post('/', params)
        .then(() => {

        })
    }
  },
}
</script>