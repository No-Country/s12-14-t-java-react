FROM amazoncorretto:17.0.9
RUN mkdir -p /app/src/main/resources/static/key

COPY /target/spring-trucking.jar /app/spring-trucking.jar

ENV SERVER_PORT=9698
ENV DATASOURCE_URL="jdbc:mysql://localhost:3306/bd_trucking?useSSL=false&useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&allowPublicKeyRetrieval=true"
ENV DATASOURCE_USERNAME=root
ENV DATASOURCE_PASSWORD=root

WORKDIR /app
CMD ["java","-Duser.timezone=America/Lima", "-jar", "cashier-app.jar"]
