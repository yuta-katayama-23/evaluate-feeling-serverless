# Project Instructions

## Table of Contents

- [Explain](#Explain)
- [function](#function)
- [technology](#technology)
- [site](#site)

## Explain

This project is evaluate you feeling page and this running server-less.<br>
このプロジェクトは、英語で文章を入力すると、その文章からあなたの今の感情がどうであるか？を [meaningcloud.com の API ](https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc) を用いて判定するものです。また、server-less アーキテクチャを採用しています。

## function

- you can know your feeling condition by your input text<br>入力された文章から今のあなたの感情を分析しそれを画面上に描画します（ニコニコアイコンなどで）
- this project has validation, so you don't input any, input area will be red<br>入力時にはバリデーションチェックが走ります

## technology

### front end

- Vanilla JavaScript
- HTML5
- Scss(CSS) and bootstrap5

### back end

- node.js
- netlify-lambda

### Testing

- UnitTest : Jest
- API Test : Jest, supertest（mock を利用したテストも実装）<br>※supertest を利用しない API テスト(エリアスにして呼び出す)も実装

## site

以下からサイトを実際に動かす事ができます

- https://frosty-hoover-31a6e9.netlify.app/
