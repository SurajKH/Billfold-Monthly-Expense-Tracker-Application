FROM openjdk:17
# we will be pulling the openjdk image from the docker registry.
ARG JAR_FILE=target/*.jar
# now we have the corresponding jar file being created in the target folder.
COPY ${JAR_FILE} configserver.jar
# now we are copying the jar file contents, into the defined file.
ENTRYPOINT ["java","-jar","/configserver.jar"]
# now we are running the command.
EXPOSE 9296
#now lets expose the port, so that the microbased application will be accessible
#from  the mentioned port number.


