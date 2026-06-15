# ToDo List Application

## プロジェクト概要

ユーザーがタスクを登録し、完了・編集・削除できるほか、ブラウザを再起動してもデータが保持されるレスポンシブWebアプリケーションです。

## 主な機能

### 1. タスク追加機能

* テキスト入力後、「追加」ボタンをクリック、または Enter キーを押してタスクを追加
* 入力内容をリアルタイムでリストに反映

### 2. タスク完了機能

* 完了ボタンをクリックするとタスクの状態を切り替え
* 取り消し線や文字色変更による視覚的フィードバックを実装

### 3. タスク編集機能

* `prompt()` を利用して既存タスクの内容を編集
* 編集内容を即座に画面へ反映

### 4. タスク削除機能

* JavaScript の `splice()` メソッドを活用して不要なタスクを削除

### 5. データ永続化機能

* LocalStorage を利用し、ブラウザを再起動してもデータを保持
* ユーザーが入力したタスク情報を永続的に管理

## 使用技術

### Front-End

* HTML5
* CSS3
* JavaScript (ES6)

### JavaScriptで活用した技術

* DOM Manipulation

  * `document.querySelector()`
  * `innerHTML`
  * `onclick`
  * `onkeydown`
* LocalStorage

  * `localStorage.getItem()`
  * `localStorage.setItem()`
* JSON

  * `JSON.stringify()`
  * `JSON.parse()`
* Template Literals

  * 動的なHTML生成

## 学んだこと

本プロジェクトを通じて、DOM操作による画面更新の仕組みや、LocalStorageを利用したデータ永続化の方法を学びました。また、JavaScriptの配列操作やイベント処理について理解を深めることができました。

## GitHub

https://github.com/acesnack4950/todoList_app

## Demo URL

https://acesnack4950.github.io/todoList_app/

