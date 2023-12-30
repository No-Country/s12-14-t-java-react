FROM amazoncorretto:17.0.9
LABEL author=backend.luispeche.me
RUN mkdir -p /app/src/main/resources/static/key

COPY target/spring-trucking.jar /app/spring-trucking.jar

ENV SERVER_PORT=9896
ENV DATASOURCE_URL=''
ENV DATASOURCE_USERNAME='root'
ENV DATASOURCE_PASSWORD=''

WORKDIR /app
CMD ["java","-Duser.timezone=America/Lima", "-jar", "spring-trucking.jar"]
