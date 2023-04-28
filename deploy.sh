#!/user/bin/env sh

# 忽略错误
set -e 

# 构建
pnpm run docs:build

# 进入待发布的目录
cd .vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/GoogooFly/donut.git master:gh-pages

cd -

# 删除 dist 文件夹
rm -rf .vitepress/dist 