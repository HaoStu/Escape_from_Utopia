(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7ea5"],{"799f":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wdy01"},[i("div",{ref:"chart"})])},n=[],r={name:"Wdy01",mounted:function(){this.resizeMyChartContainer(),this.initEchart()},methods:{resizeMyChartContainer:function(){var t=this.$refs.chart;t.style.height=.65*window.innerHeight+"px",t.style.width=.75*window.innerWidth+"px"},initEchart:function(){var t=this.$refs.chart;if(t){var e=this.$echarts.init(t),i={title:{text:"三大产业历年占比"},tooltip:{trigger:"axis"},legend:{data:["第一产业","第二产业","第三产业"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["1979年","1980年","1981年","1982年","1983年","1984年","1985年","1986年","1987年","1988年","1989年","1990年","1991年","1992年","1993年","1994年","1995年","1996年","1997年","1998年","1999年","2000年","2001年","2002年","2003年","2004年","2005年","2006年","2007年","2008年","2009年","2010年","2011年","2012年","2013年","2014年","2015年","2016年","2017年","2018年","2019年"]},yAxis:{name:"单位:%",type:"value"},series:[{name:"第一产业",type:"line",data:[38.6,36.4,34.9,32.7,31.7,26.4,21.8,23.4,22.9,19.6,15.7,14.4,10.1,6.4,5,5.9,5.9,5.7,5.2,4.9,4.7,4.5,4.5,4.7,4.4,3.7,3.5,3.3,2.9,2.8,2.8,2.6,2.6,2.6,2.5,2.3,2.3,2,1.8,1.7,1.7]},{name:"第二产业",type:"line",data:[30.6,31.8,34.2,34.6,35.1,38.4,41.6,39.9,40.1,40.9,46.3,43.6,43.7,49.1,52.7,51,51.5,50,49.9,49.6,50.5,52.5,51.8,50.9,51.4,51.7,53.7,55.8,55.6,55,52.8,55.2,54.8,52,50.9,50.8,50.2,49.2,48.1,49.2,44.5]},{name:"第三产业",type:"line",data:[30.8,31.8,30.9,32.8,33.2,35.1,36.5,36.7,37.1,39.5,38,42,46.2,44.5,42.3,43,42.6,44.3,44.9,45.4,44.8,43,43.7,44.5,44.3,44.6,42.7,40.8,41.5,42.1,44.4,42.2,42.6,45.5,46.7,46.8,47.4,48.8,50.1,49.1,53.8]}]};e.setOption(i)}}}},s=r,o=i("2877"),d=Object(o["a"])(s,a,n,!1,null,"6c790f16",null);e["default"]=d.exports}}]);