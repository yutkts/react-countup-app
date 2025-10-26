# CountUp App

シンプルで使いやすいカウンターアプリケーションです。数値のカウントアップ、カウントダウン、リセット機能を備えています。

## 機能

- ✅ カウントアップ（+1）
- ✅ カウントダウン（-1）
- ✅ リセット機能
- ✅ レスポンシブデザイン
- ✅ モダンなUI（Pico.css使用）

## 使用技術

- **フロントエンド**: React 18
- **言語**: TypeScript
- **ビルドツール**: Vite
- **スタイリング**: Pico.css
- **開発環境**: Docker + Docker Compose

## セットアップ

### 必要な環境

- Node.js 18以上
- npm または yarn

### インストール手順

1. リポジトリをクローン
   ```bash
   git clone https://github.com/YOUR_USERNAME/countup-app.git
   cd countup-app
   ```

2. 依存関係をインストール
   ```bash
   npm install
   ```

3. 開発サーバーを起動
   ```bash
   npm run dev
   ```

4. ブラウザで http://localhost:5173 にアクセス

## ビルド

プロダクションビルドを作成する場合：

```bash
npm run build
```

ビルドされたファイルは `dist/` ディレクトリに出力されます。

## Docker環境での実行

Docker Composeを使って実行する場合：

```bash
docker-compose up
```

## プロジェクト構成

```
countup-app/
├── src/
│   ├── App.tsx          # メインコンポーネント
│   ├── App.css          # スタイル
│   ├── main.tsx         # エントリーポイント
│   └── vite-env.d.ts    # 型定義
├── index.html           # HTMLテンプレート
├── vite.config.ts       # Vite設定
├── tsconfig.json        # TypeScript設定
└── package.json         # 依存関係
```

## ライセンス

MIT

## 作者

[@YOUR_USERNAME](https://github.com/YOUR_USERNAME)
