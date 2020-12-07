<template>
  <div class="home">
    <p>見たい観光地の県を表示</p>
    <div class="chartdiv"></div>
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
    // カーソルが乗ったら件名を表示
    var polygonTemplate = polygonSeries.mapPolygons.template;
    console.log(polygonTemplate.tooltipText)
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#74B266");
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#367B25");
    console.log(polygonTemplate.tooltipText)
    
    // クリックしたら拡大メソッド
    polygonSeries.mapPolygons.template.events.on("hit", function(ev) {
      if(ev.target.dataItem.dataContext.name === "Oita") {
        console.log("大分県です")
        // this.$router.push('/about')
      } else {
        console.log("大分県ではありません")
      }
    })
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
.chartdiv {
  height: 90vh;
  width: 70vw;
  margin: 0 auto;
}
</style>