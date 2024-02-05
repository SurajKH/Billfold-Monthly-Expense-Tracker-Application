FROM openjdk:17-jdk-slim AS builder

WORKDIR /app

# Copy only the POM file first to leverage Docker cache
COPY pom.xml .
# Copy the rest of the source code
COPY src ./src

RUN apt-get update && \
    apt-get install -y maven

# Build the application
RUN mvn clean install 

# Final Stage
FROM eclipse-temurin:17-jre-alpine


WORKDIR /app

# Copy the JAR file from the build stage
COPY --from=builder /app/target/serviceregistry-0.0.1-SNAPSHOT.jar support-service-docker.jar

EXPOSE 8080

# Specify the default command to run on container startup
CMD ["java", "-jar", "support-service-docker.jar"]
