# adeqing-common-utils
adeqing-common-utils 使用webpack打包自己写的一个JavaScript类库并上传至NPM。

NPM发布看到的包:https://www.npmjs.com/package/adeqing-common-utils

## 简介

此 library 目前只有1个方法（首字母大写）：  
titleCase('hello world)  
等待进一步完善

## 发布到 npm

```
npm login
npm publish

npm version <update_type>
npm run build // 先webpack打包类库，之后再发布
npm publish
```

## 使用方式

### 浏览器

1. 加载 Using Script Tag

```
<script src="../dist/index.js"></script>
```

1. 使用 Usage In Web

```
Utils.version
Utils.titleCase('hello world)  
```

### NODE

1. 安装 Using npm:

```
npm install adeqing-common-utils --save-dev
```

2. 使用 Usage In Node

```
const Utils =  require('adeqing-common-utils')
Utils.titleCase('hello world)  
```
