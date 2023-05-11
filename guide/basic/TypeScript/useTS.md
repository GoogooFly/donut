<script setup lang="ts">
import { NImage } from 'naive-ui';
</script>

# TypeScript 初体验

## 安装编译 TS 的工具包

### 为什么要安装编译 TS 的工具包？

Node.js/浏览器，只认识 JS 代码，不认识 TS 代码，需要先将 TS 代码转化为 JS 代码，然后才能运行

<NImage src="../../../assets/images/ts-process.png" />

1. 安装 `typescript`

```bash
npm install -g typescript
```

2. 验证安装是否成功

```bash
tsc -v
```

3. 编译并运行 TypeScript 代码

```bash
tsc index.ts
node index.js
```

步骤图：

<NImage src="../../../assets/images/ts-step.png" />

4. 简化运行 TypeScript 代码的步骤

每次修改代码后，都要重复执行两个命令，才能运行 TS 代码，太繁琐

安装 `ts-node`

```bash
npm install -g ts-node
```

使用方式

```bash
ts-node index.ts
```

`ts-node` 会在内部对 ts 文件转化为 js 并运行