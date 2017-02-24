// JavaScript Document
window.onload=function(){
	$.get('json/ne_110m_admin_0_scale_rank.json', function (chinaJson) {
    echarts.registerMap('world', chinaJson);
    var chart = echarts.init(document.getElementById('main'));
    chart.setOption({
        series: [{
            type: 'map',
            map: 'world'
        }]
    });
});	
}