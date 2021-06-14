# es6-study-5-2-6
JavaScript 学習コース V > ファイルを分割しよう > 2.ファイルの分割（2）

### ファイルの分割
コードの量が増えてくると1つのファイルで管理するのが大変になるため、複数のファイルでコードを管理することがある。
今回は、メインのプログラムを実行する「script.js」とAnimalクラスを定義する「animal.js」、Dog クラスを定義する「dog.js」の3つのファイルにコードを分けてみる。
```
script.js（プログラムの実行）
animal.js（Animalクラスの定義）
dog.js（Dogクラスの定義）
```










### 実際の例
子クラスのコンストラクタ内の「super()」では、その部分で親クラスのコンストラクタを呼び出している。
そのため、親クラスのコンストラクタが引数を受け取る場合には、「super」の後ろの丸括弧「( )」に引数を渡す必要がある。
例では親クラスのコンストラクタを呼び出したあとに、「ccc」プロパティを追加している。
```
class 親クラス {
  constructor(aaa, bbb) {
  this.aaa = aaa;
  this.bbb = bbb;
  }
}

↓ オーバーライド ↓

class 子クラス extends 親クラス {
  constructor(aaa, bbb, ccc) {
  super(aaa, bbb)
  this.ccc = ccc;
  }
}
```

## コーディングトレーニング
「ファンプレックス株式会社」のレイアウト構造をレスポンシブで写経する。

#### サイト構造
- header > logo - nav/toggle
- main > section（top-mv） - section（top-about） - section（top-service） - section（top-recruit）
- footer

#### ブレイクポイント
- desktop（768px ↑）
- tablet（---）
- smartDevice（767px ↓）

## チャレンジ
- ハンバーガーメニューに画像やSVGを使わずcssで描画する
- ヘッダーをスクロール開始でcssを切り替えて上部固定にする

