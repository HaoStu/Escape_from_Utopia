(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c212a"],{"496e":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mdl03"},[a("div",{ref:"chart"})])},n=[],r={name:"Mdl03",mounted:function(){this.resizeMyChartContainer(),this.initEchart()},methods:{resizeMyChartContainer:function(){var e=this.$refs.chart;e.style.height=.65*window.innerHeight+"px",e.style.width=.75*window.innerWidth+"px"},initEchart:function(){var e=this.$refs.chart;if(e){var t=this.$echarts.init(e),a={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},legend:{data:["总计中的房地产开发投资（亿元）","增速"]},xAxis:[{type:"category",data:["1979年","1980年","1981年","1982年","1983年","1984年","1985年","1986年","1987年","1988年","1989年","1990年","1991年","1992年","1993年","1994年","1995年","1996年","1997年","1998年","1999年","2000年","2001年","2002年","2003年","2004年","2005年","2006年","2007年","2008年","2009年","2010年","2011年","2012年","2013年","2014年","2015年","2016年","2017年","2018年","2019年"],axisPointer:{type:"shadow"}}],yAxis:[{type:"value",name:"总计中的房地产开发投资（亿元）",min:0,max:1e3,interval:250,axisLabel:{formatter:"{value}"}},{type:"value",name:"增速(%)",min:-30,max:220,interval:50,axisLabel:{formatter:"{value}"}}],series:[{name:"总计中的房地产开发投资（亿元）",type:"bar",data:["--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--",26.056,16.0709,19.7389,27.1667,33.1315,32.6967,34.2186,37.2099,38.8141,43.5476,51.2891,65.5896,132.6556,152.0896,168.4427,179.5101,255.6096,242.0776,272.5782,388.2999,524.1185,641.03,666.12,787.09,893.36]},{name:"增速",type:"line",yAxisIndex:1,data:["--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--",-38.3,22.8,37.6,22,-1.3,4.7,8.7,4.3,12.2,17.8,27.9,102.3,14.6,10.8,6.6,42.4,-5.3,12.6,42.5,35,22.3,3.9,18.2,13.5]}]};t.setOption(a)}}}},s=r,o=a("2877"),l=Object(o["a"])(s,i,n,!1,null,"638cfcad",null);t["default"]=l.exports}}]);