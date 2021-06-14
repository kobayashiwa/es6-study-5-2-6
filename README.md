# es6-study-5-2-6
JavaScript 学習コース V > ファイルを分割しよう > 2.ファイルの分割（2）






### コンストラクタのオーバーライド
メソッドと同じように、コンストラクタもオーバーライドすることができる。
例えば、子クラスにプロパティを追加したい場合などに用いられる。
ただし、コンストラクタをオーバーライドする際は1行目に「super()」と記述する必要がある。
```
class 親クラス {
  constructor() {
  *******
  }
}

↓ オーバーライド ↓

class 子クラス extends 親クラス {
  constructor() {
  super()　/** 1行目にsuper()が必要
  /** 子クラスのコンストラクタの処理
  }
}
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

