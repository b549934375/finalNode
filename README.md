# finalNode
项目描述：这是一个在后台和前端加上的中间层服务器，利用nginx来做反向代理和静态资源保存，本地用pm2做负载均衡以及服务器代码提交，
本地开发环境我选用的supervisor来实现热启动。在这个项目中我们暂时不用自己处理数据库，直接掉取后台接口来操作，做到前后端分离。
在服务器框架上我们最初选用express来渲染数据，后来看到handlebar框架又改用这个框架。
前端部分我们用到了Vue.js jquery.js juicer.js等框架。

运行环境  npm start

pm2运行  pm2 start processes.json
