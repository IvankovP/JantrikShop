FROM openjdk:8-jdk-alpine

WORKDIR /app

EXPOSE 8080

COPY ./build/libs/*.war /app/shop.war

ENTRYPOINT ["java", "-jar", "/app/shop.war"]