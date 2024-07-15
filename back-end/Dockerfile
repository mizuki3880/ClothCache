# ベースイメージとしてOpenJDK 17を使用
FROM openjdk:17

# 作業ディレクトリの設定
WORKDIR /app

# JARファイルのコピー
COPY target/back-end-0.0.1-SNAPSHOT.jar app.jar

# ポート番号を公開
EXPOSE 8080

# アプリケーションの起動
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
