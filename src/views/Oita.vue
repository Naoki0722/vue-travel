<template>
  <div>
    <h2>basic</h2>
    <star-rating v-model="rating"></star-rating>
    <v-card
      elevation="2"
      max-width="600"
    >
      <v-card-title>太宰府天満宮</v-card-title>
      <v-img
        src="https://lh3.googleusercontent.com/proxy/ut2MTHOiN4NpsTPPrfiaB0e8jWqFlK7pO0i_MXsNmQBM5cmbPMfZTyNIKCHZuMKZK_I1eiH5ZT-URDWDx1yeWJ4hIrePYVxOVrQaTIv_tiEF28sAEDM9kg5SBph-Fjxzeffc"
        alt=""
        
        height="100px"
        width="200"
      >
      </v-img>
      <v-card-subtitle>福岡県福岡市</v-card-subtitle>
      <v-card-text>説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文</v-card-text>
    </v-card>

    <v-card
      elevation="16"
      max-width="400"
      class="mx-auto"
    >
      <v-virtual-scroll
        :bench="benched"
        :items="items"
        height="300"
        item-height="100"
      >
        <template v-slot:default="{ item }">
          <v-list-item :key="item">
            <v-list-item-content>
              <v-list-item-title>
                User Database Record <strong>ID {{ item }}</strong>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
        </template>
      </v-virtual-scroll>
    </v-card>


    <v-card
      elevation="16"
      max-width="400"
      class="mx-auto"
      height="500"
    >
      <v-virtual-scroll
        :bench="benched"
        :items="items"
        height="300"
        item-height="300"
      >
        <v-img
          src="https://lh3.googleusercontent.com/proxy/ut2MTHOiN4NpsTPPrfiaB0e8jWqFlK7pO0i_MXsNmQBM5cmbPMfZTyNIKCHZuMKZK_I1eiH5ZT-URDWDx1yeWJ4hIrePYVxOVrQaTIv_tiEF28sAEDM9kg5SBph-Fjxzeffc"
          alt=""
          class="align-end"
          height="100px"
        ></v-img>
         <v-card-subtitle >太宰府天満宮</v-card-subtitle>
        <v-card-text>３号線沿いにある人気観光地</v-card-text>
        <v-card-actions>
          <v-btn>詳しくみる</v-btn>
        </v-card-actions>

          <v-divider></v-divider>
      </v-virtual-scroll>
    </v-card>

    <div class="sub_contents">
      <v-card  width="70%" class="mt-5 mx-auto">
        <v-img
          src="https://lh3.googleusercontent.com/proxy/ut2MTHOiN4NpsTPPrfiaB0e8jWqFlK7pO0i_MXsNmQBM5cmbPMfZTyNIKCHZuMKZK_I1eiH5ZT-URDWDx1yeWJ4hIrePYVxOVrQaTIv_tiEF28sAEDM9kg5SBph-Fjxzeffc"
          alt=""
          class="align-end"
          
        >
          <v-card-title>太宰府天満宮</v-card-title>
        </v-img>
        <v-card-subtitle>福岡県太宰府市</v-card-subtitle>
        <v-card-text>３号線沿いにある人気観光地</v-card-text>
        <v-card-actions>
          <v-btn>詳しくみる</v-btn>
        </v-card-actions>
      </v-card>
      <v-card  width="70%" class="mt-5 mx-auto">
        <v-img
          src="https://lh3.googleusercontent.com/proxy/ut2MTHOiN4NpsTPPrfiaB0e8jWqFlK7pO0i_MXsNmQBM5cmbPMfZTyNIKCHZuMKZK_I1eiH5ZT-URDWDx1yeWJ4hIrePYVxOVrQaTIv_tiEF28sAEDM9kg5SBph-Fjxzeffc"
          alt=""
          class="align-end"
        >
          <v-card-title>太宰府天満宮</v-card-title>
        </v-img>
        <v-card-subtitle>福岡県太宰府市</v-card-subtitle>
        <v-card-text>３号線沿いにある人気観光地</v-card-text>
        <v-card-actions>
          <v-btn>詳しくみる</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
    data: () => ({
      benched: 0,
      items: ["りんご","ごりら","らっぱ","ぱんつ","つみき","キリスト教","うんこ"]
  }),
}
</script>