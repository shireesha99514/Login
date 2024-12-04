FROM  openjdk:21-jdk

EXPOSE  8080

ARG   JAR_FILE=target/*.jar

COPY  ${JAR_FILE}  welcome.jar

ENTRYPOINT [ "java" ,"-jar", "/welcome.jar" ]