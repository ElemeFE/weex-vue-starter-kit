# weex-vue-starter-kit

> 吐槽：复制黏贴了一波 weex-toolkit 的配置

weex-pack：方便生成 Native，启动模拟器进行效果预览，但没有对应 debug 指令，默认为 .we。

weex-toolkit: 方便 debug，官方手册指定方法，默认生成 Vue，但没有办法生成 Native 安装包。

```bash
yarn # 也可以使用npm install

# run ios
weexpack platform add ios
weexpack run ios

# dev
npm run dev
npm run serve # 按需在根目录配置 config.js
```
