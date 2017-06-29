const Koa = require('koa');
const fetch = require('node-fetch');
const app = new Koa();
const port = process.env.PORT || 3000;

app.use(async (ctx, next) => {
    var response = await fetch('http://inspirobot.me/api?generate=true');
    var url = await response.text();
    ctx.body = url;
});

if (!module.parent) app.listen(port);