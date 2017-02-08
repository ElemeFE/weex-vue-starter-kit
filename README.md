# weex-vue-starter-kit

> 吐槽：复制粘贴了一波 weex-toolkit 的配置

## 概述

weexpack：方便生成 Native，启动模拟器进行效果预览，但没有对应 debug 指令，默认为 .we。

weex-toolkit: 方便 debug，官方手册指定方法，默认生成 Vue，但没有办法生成 Native 安装包。

```bash
yarn # 也可以使用npm install

# run ios
weexpack platform add ios
weexpack run ios

# dev
npm run dev
open http://0.0.0.0:8080/
```

## 显示二维码
```bash
open http://0.0.0.0:8080/qrcode.html
```

## 使用说明

可以使用所有的 `weex-pack` 和 `weex` 相关命令，可见：

- [weex-pack](https://github.com/weexteam/weex-pack)
- [weex-toolkit](https://github.com/weexteam/weex-toolkit)

## 目录结构

clone 之后只需要修改 src 目录下的文件即可，enjoy it!

```
├── yarn.lock
├── README.md
├── android.config.json
├── config.xml
├── hooks
│   └── README.md
├── ios.config.json
├── package.json
├── platforms     // 平台模版目录
├── plugins       // 插件下载目录
│   └── README.md
├── src           // 业务代码（vue文件）目录
│   └── index.vue
├── index.tpl
├── qrcode.tpl
└── webpack.config.js
```