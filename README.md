# HamburgerDelivery
## 使い方
１．HamburgerDeliveryrのmodulesをインストール npm install

２．起動 npm start

## 詳細
Reactで作ったスマートフォンサイトです。
実現した機能：
１．データ(状態)の共有とデータ(状態)の受け渡し
２．キーワード検索　＞キーワードを含まれている商品だけ表示する
３．カート　＞　共有データを計算し、画面に表示）

## 開発の経緯・ストーリー
Reactのフレームワークreduxの練習作品です。
ReactのコンポーネントとコンポーネントのState或いはデータの共有は、親コンポーネントと子コンポーネントでしたら簡単ですが
逆に子から親、或いは親から孫コンポーネントなどは手間がかかります。
それを解決するための方法はお主に四種類あります：
１．Pub/Sub
２．Props
３．状態管理ライブラリ　：redux or event
４．conText
今回は大量なデータを扱えるreduxを用い、ハンバーガー注文システムを作りました。

## 使用した技術
フロント・クライアント技術 -JavaScript、React、redux
