# vue_js_tutorial

## Project setup (Vue CLI)
参考：https://wk-partners.co.jp/homepage/blog/hpseisaku/javascript/vuejs/
```
npm install -g @vue/cli
vue ui
```
説明：
Vue.jsプロジェクトをGUIを用いて簡単に作成出来る。
さらに、serveの実行や管理も出来る。

コンパイルとwebの開き方<br>
タスク＞タスクの実行＞アプリを開く

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### VScode install package
参考：https://qiita.com/newt0/items/aeddc6a179ea3a464ed5

---

# チュートリアル一覧
## チュートリアル(練習1、練習2)
参考：https://blog.brainpad.co.jp/entry/2018/04/13/160000

## Propsについて
参考：https://reffect.co.jp/vue/vue-js-master-props-for-beginner

## カレンダーで参考にした文献
参考：https://reffect.co.jp/vue/javascript-vue-js-create-calendar#i
<br>
参考：https://reffect.co.jp/vue/vue-js-original-calendar

---
# Pagesにて公開
参考：https://zenn.dev/catch/articles/install_vuejs
```
// vue.config.jsに追加で記述します。
module.exports = {
  outputDir: 'docs',
  assetsDir: './',
  publicPath: './',
}
```
下記のコマンドを実行。静的ファイルを生成する。
```
yarn build
```
※yarnのインストールは[npm install -g yarn]（npm\node_modules\yarnに生成される）<br>
詳しい用途は調べ見てください。npmよりインストールが早いのは理解しました。<br>
公開ページ：https://bignrn.github.io/Practice_VueJS_Tutorial/
