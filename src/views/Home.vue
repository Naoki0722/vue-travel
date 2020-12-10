<template>
  <div class="home">
    <div class="main_contents">
      <h2>見たい観光地の県を表示！！</h2>
      <div class="chartdiv"></div>
    </div>
    <v-divider
      class="ma-4"
      vertical
    ></v-divider>
    <SubContents></SubContents>
  </div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core"
import * as am4maps from "@amcharts/amcharts4/maps"
import SubContents from "../components/SubContents"
// 日本地図を表示
import am4geodata_japanlow from "@amcharts/amcharts4-geodata/japanLow"
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
.home {
  display: flex;
  width: 100%;
}
.chartdiv {
  height: 80vh;
  width: 70vw;
  margin: 0 auto;
}

.main_contents {
  text-align: center;
}

.main_contents h2 {
  font-size: 1.5rem;
  padding: 5% 0;
}
</style>