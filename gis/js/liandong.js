var map1 = L.map("map1").setView([38, 114], 12);
var map2 = L.map('map2').setView([38, 114], 12);
var layer1 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
var layer2 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
layer1.addTo(map1);
layer2.addTo(map2);
var maps = [map1, map2];
// 监听事件触发后依次为地图对象设置视图，将触发事件的地图视图给到其他地图对象
function mapLink() {
    // debugger;
    var _this = this; // this指向触发事件的地图对象
    maps.map(function (t) {
        t.setView(_this.getCenter(), _this.getZoom())
    })
}
// 地图对象绑定缩放、平移监听事件
maps.map(function (t) {
    t.on({ drag: mapLink, zoom: mapLink })
})