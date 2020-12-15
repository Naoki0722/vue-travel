<template>
  <div class="home" v-scroll-lock="look">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="8"
          md="9"
          lg="9"
          l="7"
        >
          <h2 class="text-center">見たい観光地の県を表示！！</h2>
          <div class="chartdiv"></div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col
          cols="10"
          sm="4"
          md="3"
          lg="3"
          xl="3"
          class="mx-auto d-none d-sm-block"
        >
        <SubContents></SubContents>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core"
import * as am4maps from "@amcharts/amcharts4/maps"
import SubContents from "../components/SubContents"
// 日本地図を表示
import am4geodata_japanlow from "@amcharts/amcharts4-geodata/japanHigh"
export default {
  name: 'Home',
  components: {
    SubContents
  },
  mounted() {
    
    let map = am4core.create("chartdiv", am4maps.MapChart)
    map.geodata = am4geodata_japanlow
    map.projection = new am4maps.projections.Miller()
    var polygonSeries = map.series.push(new am4maps.MapPolygonSeries())
    map.seriesContainer.draggable = false;
    map.seriesContainer.resizable = false;
    map.maxZoomLevel = 1;
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
    // クリックしたら各都道府県の観光地一覧に飛ばす
    polygonSeries.mapPolygons.template.events.on("hit", this.prefecture)
  },
  methods: {
    prefecture(ev) {
      let pref_code = ev.target.dataItem.dataContext.id
      let pref = pref_code.replace('JP-', '')
      this.$router.push({ name: "Pref", params: { id: pref } })
    }
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
body {
  overflow: hidden;
}

.chartdiv {
  height: 65vh;
  margin: 0 auto;
}

.border_line {
  margin: 0 auto;
}

/* デザインC(スマホ) */
@media screen and (max-width: 600px) {
/* スマホ用レイアウト 600px以下の範囲 */
  .chartdiv {
    height: 70vh;
  }
}
</style>