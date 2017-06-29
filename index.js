const Koa = require('koa');
const fetch = require('node-fetch');
const app = new Koa();
const port = process.env.PORT || 3000;

app.use(async (ctx, next) => {
    const response = await fetch('http://inspirobot.me/api?generate=true');
    const url = await response.text();
    const result = { 
        parse: "full", 
        response_type: "in_channel", 
        text: url, 
        attachments: [{ image_url: url }], 
        unfurl_media: true, 
        unfurl_links: true 
    };
    ctx.set('Content-Type', 'application/json');
    ctx.body = result;
});

if (!module.parent) app.listen(port);