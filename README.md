# weex-vue-starter-kit

> 吐槽：复制粘贴了一波 weex-toolkit 的配置

## 概述

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
├── start
├── start.bat
├── index.html
├── web // Web 版资源文件
│   ├── assets
│   ├── index.html
│   ├── index.js
│   └── js
│       └── init.js
└── webpack.config.js
```