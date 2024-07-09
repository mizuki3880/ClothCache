# ベースイメージとしてOpenJDK 17を使用
FROM openjdk:17-jdk-slim

# 作業ディレクトリの設定
WORKDIR /app

# jarファイルのコピー
COPY target/*.jar app.jar

# ポート番号を公開
EXPOSE 8080

# アプリケーションの起動
ENTRYPOINT ["java", "-jar", "app.jar"]
