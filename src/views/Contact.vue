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
          <v-form  ref="form">
            <v-text-field
              v-model="name"
              label="お名前"
              :rules="nameRules"
              :counter="15"
              required
              clearable
              clear-icon="mdi-close-circle"
            />
            <v-text-field
              v-model="email"
              label="メールアドレス"
              :rules="emailRules"
              required
              clearable
              clear-icon="mdi-close-circle"
            />
            <v-textarea
              v-model="message"
              label="お問い合わせ内容"
              :rules="messageRules"
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
          </v-form>
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
      message: "",
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 15) || 'Name must be less than 15 characters'
      ],
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid'
      ],
      messageRules: [
        v => !!v || 'Message is required',
      ],
      
    }
  },
  methods: {
    async submit () {
      if(this.$refs.form.validate()) {
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
      } else {
        window.alert("入力しろ");
      }
      
    },
  },
}
</script>