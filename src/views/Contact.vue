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
          <!-- <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class="px-4 mt-4"
            name="contact"
            @submit.prevent="onSubmit"
          >
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
            </v-card-actions>
          </v-form> -->
          <v-text-field
            v-model="name"
            label="お名前"
            required
          />
          <v-text-field
            v-model="email"
            label="メールアドレス"
            required
          />
          <v-textarea
            v-model="message"
            label="お問い合わせ内容"
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
            @click="submit"
            >
              送信
            </v-btn>
          </v-card-actions>

          <!-- <form name="contact" netlify netlify-honeypot="bot-field" hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"></textarea>
          </form> -->
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
      // loader: null,
      // loading: false,
      name: "",
      email: "",
      message: ""

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
    async submit() {
      const params = new URLSearchParams()
      params.append('form-name', 'contact2')
      params.append('name', this.name)
      params.append('email', this.email)
      params.append('content', this.message)

      axios
        .post('/', params)
        .then(() => {
          this.$router.push({name: "ContactThanks"})
        })
    }
  },
}
</script>