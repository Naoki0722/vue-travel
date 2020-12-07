<template>
  <div class="home">
    <div class="main_contents">
      <p>見たい観光地の県を表示</p>
      <div class="chartdiv"></div>
    </div>
    <v-divider
      class="ma-4"
      vertical
    ></v-divider>
    <div class="sub_contents">
      <v-card class="mx-auto">
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
import * as am4core from "@amcharts/amcharts4/core"
import * as am4maps from "@amcharts/amcharts4/maps"
// 日本地図を表示
import am4geodata_japanlow from "@amcharts/amcharts4-geodata/japanLow"
export default {
  name: 'Home',
  mounted() {
    
    let map = am4core.create("chartdiv", am4maps.MapChart)
    map.geodata = am4geodata_japanlow
    map.projection = new am4maps.projections.Miller()
    var polygonSeries = map.series.push(new am4maps.MapPolygonSeries())
    polygonSeries.useGeodata = true
    polygonSeries.include = [
      "JP-40",
      "JP-41",
      "JP-42",
      "JP-43",
      "JP-44",
      "JP-45",
      "JP-46",
    ]
    // カーソルが乗ったら県名を表示
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#74B266");
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#367B25");
    // console.log(hs.properties.fill)

    // クリックしたら拡大メソッド
    polygonSeries.mapPolygons.template.events.on("hit", function(ev) {
      let pref = ev.target.dataItem.dataContext.name
      if(pref === "Oita") {
        console.log("大分県です")
        window.open(pref);
        // this.prefecture(pref)
      } else {
        console.log("大分県ではありません")
      }
    })
  },
  methods: {
    // prefecture(a) {
    //   this.$router.push(a)
    // }
  },
  beforeDestroy() {
    if(this.map) {
      // オブジェクト削除
      this.map.dispose()
    }
  },

}
</script>


<style scoped>
.home {
  display: flex;
  width: 100%;
}
.chartdiv {
  height: 80vh;
  width: 70vw;
  margin: 0 auto;
}
</style>