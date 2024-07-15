# ベースイメージ
FROM node:14-alpine

# 作業ディレクトリ
WORKDIR /app

# 依存関係のコピー
COPY package.json ./
COPY yarn.lock ./

# 依存関係のインストール
RUN npm install --legacy-peer-deps

# ソースコードのコピー
COPY . ./

# アプリケーションのビルド
RUN npm build

# サーバーの設定
EXPOSE 3000
CMD ["npm", "start"]
