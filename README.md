# es6-study-5-2-6
JavaScript 学習コース V > ファイルを分割しよう > 2.ファイルの分割（2）

### ファイルの分割
コードの量が増えてくると1つのファイルで管理するのが大変になるため、複数のファイルでコードを管理することがある。
今回は、メインのプログラムを実行する「script.js」とAnimalクラスを定義する「animal.js」、Dog クラスを定義する「dog.js」の3つのファイルにコードを分けてみる。

ファイルを分割して使用する場合は、それぞれのファイルを関連づけし、必要な値を渡す必要がある。
今回の場合「dog.js」でAnimalクラスを、「script.js」でDogクラスを使用できるように設定する。
```
script.js（プログラムの実行）
animal.js（Animalクラスの定義）
dog.js（Dogクラスの定義）
```

### export
クラスの定義の後で「export default クラス名」とすることで、そのクラスをエクスポート（出力）し、他のファイルへ渡すことができる。
```
class Aaa {
  ***
  }
}

↓ Aaaクラスを他のファイルでも使用できるようにする設定 ↓

export default Aaa;
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

