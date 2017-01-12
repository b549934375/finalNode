var express = require('express');
// var routes = express.Router();
var app = express();

var mockData = require('./mock/r-theme-data');
var promotionIndex = require('./mobile/promotion/index');
var upassIndex = require('./mobile/upass/index');


//路由
// app.use('/v6/mobile', routes);
app.use('/v6/mock', mockData);                   //假数据路由
app.use('/v6/mobile/promotions', promotionIndex);    //专题模板路由
app.use('/v6/mobile/upass', upassIndex);    //upass路由




module.exports = app;
