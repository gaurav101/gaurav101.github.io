# Spring Boot 4 New Features

Spring Boot 4 is a major generation of Spring Boot. It builds on Spring Framework 7 and brings many new features across web APIs, HTTP clients, testing, observability, data, messaging, build tools, and project structure.

This page covers the stable Spring Boot 4.x line available at the time of writing: Spring Boot 4.0.x and Spring Boot 4.1.x. The latest stable documentation currently points to Spring Boot 4.1.1. Spring Boot 4.2.0-M1 exists as a preview milestone, but preview features are not included here as production features.

## Quick Feature List

| Version | Feature |
| --- | --- |
| 4.0 | Modular Spring Boot jars and starters |
| 4.0 | New test-specific modules and test starters |
| 4.0 | Classic starters for easier migration |
| 4.0 | Spring Framework 7 foundation |
| 4.0 | Java 25 support while keeping Java 17 compatibility |
| 4.0 | Jakarta EE 11 and major dependency upgrades |
| 4.0 | Gradle 9 support |
| 4.0 | Milestones and release candidates available from Maven Central |
| 4.0 | HTTP Service Client auto-configuration |
| 4.0 | API versioning auto-configuration for MVC and WebFlux |
| 4.0 | `JmsClient` auto-configuration |
| 4.0 | Multiple `TaskDecorator` support |
| 4.0 | New OpenTelemetry starter |
| 4.0 | Configuration metadata for external types |
| 4.0 | Kotlin Serialization JSON starter and auto-configuration |
| 4.0 | Jackson 3 as the preferred JSON library |
| 4.0 | `RestTestClient` support |
| 4.0 | Redis static master/replica auto-configuration |
| 4.0 | Redis observability improvements |
| 4.0 | MongoDB health indicators without requiring Spring Data MongoDB |
| 4.0 | SSL health reporting improvements |
| 4.0 | JDK HTTP client virtual-thread support |
| 4.0 | New `logging.console.enabled` property |
| 4.0 | Elasticsearch API key property |
| 4.0 | AWS ECS cloud platform detection |
| 4.1 | Spring gRPC support |
| 4.1 | Better Jackson read, write, factory, and customizer configuration |
| 4.1 | Encoding support in `spring.config.import` |
| 4.1 | Cookie handling configuration for HTTP clients |
| 4.1 | HTTP client SSRF protection with `InetAddressFilter` |
| 4.1 | Better observability and OpenTelemetry support |
| 4.1 | RabbitMQ Streams SSL and service connections |
| 4.1 | Log4j file rotation properties |
| 4.1 | Embedded LDAP SSL support |
| 4.1 | Simple JMS listener container configuration support |
| 4.1 | Better Docker Compose failure logs |
| 4.1 | OAuth2 resource server JWT authority extraction using SpEL |
| 4.1 | MongoDB support for Spring Batch job repositories |
| 4.1 | Lazy JDBC connection fetching |
| 4.1 | `@RedisListener` auto-configuration |
| 4.1 | More process details in the Actuator info endpoint |
| 4.1 | Gradle plugin `bootBuildImage --environment` support |
| 4.1 | Maven plugin layers configuration from the classpath |
| 4.1 | Spock support restored |

## 1. Modular Spring Boot Jars and Starters

Before Spring Boot 4, a lot of auto-configuration lived in one large `spring-boot-autoconfigure` jar. In Spring Boot 4, the codebase is split into smaller and more focused modules.

In simple words: your application can now depend on only the Spring Boot parts it really uses. This can make dependencies clearer, reduce classpath noise, and make auto-configuration more intentional.

For example, a Spring MVC application should now use the more specific web MVC starter:

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-webmvc</artifactId>
</dependency>
```

If you use Flyway, add the Flyway starter instead of only adding Flyway's own library:

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-flyway</artifactId>
</dependency>
```

Why this matters: Spring Boot can understand your application's intention better. If you only need an HTTP client, you do not have to accidentally bring in web server auto-configuration.

Documentation:

- [Spring Boot 4.0 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes)
- [Modularizing Spring Boot](https://spring.io/blog/2025/10/28/modularizing-spring-boot/)
- [Spring Boot migration guide](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Migration-Guide)

## 2. New Test Modules and Test Starters

Spring Boot 4 also modularized test auto-configuration. Test support is now split into focused `-test` modules.

For example, if your app uses Spring MVC, you can add the matching MVC test starter:

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-webmvc-test</artifactId>
  <scope>test</scope>
</dependency>
```

This keeps test dependencies aligned with the main application dependencies.

Documentation:

- [Spring Boot test modules](https://docs.spring.io/spring-boot/reference/testing/test-modules.html)
- [Spring Boot test slices](https://docs.spring.io/spring-boot/appendix/test-auto-configuration/slices.html)
- [Modularizing Spring Boot](https://spring.io/blog/2025/10/28/modularizing-spring-boot/)

## 3. Classic Starters for Easier Migration

Spring Boot 4 changed many starter and module names. To make migration easier, it provides classic starters.

Use them when you want to first get the application running on Spring Boot 4 and clean up the dependency list later:

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-classic</artifactId>
</dependency>

<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-test-classic</artifactId>
  <scope>test</scope>
</dependency>
```

In simple words: classic starters are a bridge. They help you upgrade first and optimize your dependencies later.

Documentation:

- [Modularizing Spring Boot](https://spring.io/blog/2025/10/28/modularizing-spring-boot/)
- [Spring Boot 4.0 migration guide](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Migration-Guide)

## 4. Spring Framework 7 Foundation

Spring Boot 4 is based on Spring Framework 7. This is important because many new features in Spring Boot 4 come from Spring Framework 7.

Examples include:

- API versioning support
- HTTP client improvements
- `RestTestClient`
- better null-safety support
- updated web infrastructure

You do not usually configure this directly. You get it by using Spring Boot 4:

```xml
<parent>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-parent</artifactId>
  <version>4.1.1</version>
</parent>
```

Documentation:

- [Spring Boot 4.0 announcement](https://spring.io/blog/2025/11/20/spring-boot-4-0-0-available-now/)
- [Spring Framework documentation](https://docs.spring.io/spring-framework/reference/)
- [Spring Boot reference documentation](https://docs.spring.io/spring-boot/reference/)

## 5. Java 25 Support and Java 17 Compatibility

Spring Boot 4 keeps Java 17 as the baseline, but it also adds first-class support for Java 25.

In simple words: you can still run Spring Boot 4 on Java 17, but Spring Boot 4 is ready for newer Java versions too.

Example Gradle toolchain using Java 25:

```groovy
java {
  toolchain {
    languageVersion = JavaLanguageVersion.of(25)
  }
}
```

Example Maven compiler setting:

```xml
<properties>
  <java.version>25</java.version>
</properties>
```

Use Java 17 if your project or production platform is not ready for Java 25 yet.

Documentation:

- [Spring Boot 4.0 announcement](https://spring.io/blog/2025/11/20/spring-boot-4-0-0-available-now/)
- [Spring Boot system requirements](https://docs.spring.io/spring-boot/reference/getting-started/system-requirements.html)

## 6. Jakarta EE 11 and Major Dependency Upgrades

Spring Boot 4 upgrades many important dependencies. Some examples from the 4.0 generation are:

- Spring Framework 7
- Spring Security 7
- Spring Data 2025.1
- Spring Batch 6
- Spring GraphQL 2
- Jackson 3
- Hibernate 7
- Tomcat 11
- Jakarta Servlet 6.1
- Jakarta Persistence 3.2
- Jakarta Validation 3.1
- Testcontainers 2

In simple words: Spring Boot 4 refreshes the foundation of the whole stack.

Example:

```java
import jakarta.validation.constraints.NotBlank;

public record CreateUserRequest(@NotBlank String name) {
}
```

Spring Boot 3 already moved from `javax.*` to `jakarta.*`. Spring Boot 4 continues that modern Jakarta direction with newer Jakarta versions.

Documentation:

- [Spring Boot 4.0 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)
- [Spring Boot dependency versions](https://docs.spring.io/spring-boot/appendix/dependency-versions/index.html)

## 7. Gradle 9 Support

Spring Boot 4 supports Gradle 9 for building applications.

Example:

```groovy
plugins {
  id 'java'
  id 'org.springframework.boot' version '4.1.1'
}
```

Why this matters: if your build system is moving to Gradle 9, Spring Boot 4 can work with it.

Documentation:

- [Spring Boot 4.0 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes)
- [Spring Boot Gradle plugin documentation](https://docs.spring.io/spring-boot/gradle-plugin/)

## 8. Milestones and Release Candidates from Maven Central

Starting with Spring Boot 4.0 milestones, Spring Boot milestone and release-candidate artifacts are published to Maven Central as well as the Spring repository.

In simple words: it is easier to try future Spring Boot 4.x milestone builds because they are available from the standard Maven Central ecosystem.

Documentation:

- [Spring Boot 4.0 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes)
- [Maven Central](https://central.sonatype.com/)

## 9. HTTP Service Client Auto-Configuration

HTTP Service Clients let you write a Java interface and let Spring create the HTTP client implementation for you.

This is useful when your application calls another REST API. Instead of writing `RestClient` calls everywhere, you describe the remote API as an interface.

Example:

```java
package com.example.clients;

import java.util.Map;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.service.annotation.GetExchange;
import org.springframework.web.service.annotation.HttpExchange;

@HttpExchange
public interface ProductClient {

  @GetExchange("/products/{id}")
  Map<String, Object> getProduct(@PathVariable Long id);
}
```

Import the client:

```java
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.service.registry.ImportHttpServices;

@SpringBootApplication
@ImportHttpServices(group = "catalog", basePackages = "com.example.clients")
public class MyApplication {
}
```

Configure the base URL:

```properties
spring.http.serviceclient.catalog.base-url=https://api.example.com
spring.http.serviceclient.catalog.connect-timeout=2s
spring.http.serviceclient.catalog.read-timeout=2s
```

Now you can inject `ProductClient` like any other Spring bean.

Documentation:

- [Calling REST services in Spring Boot](https://docs.spring.io/spring-boot/reference/io/rest-client.html)
- [Spring Boot 4.0 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes)
- [Spring Framework REST clients](https://docs.spring.io/spring-framework/reference/integration/rest-clients.html)

## 10. API Versioning for Spring MVC and WebFlux

API versioning lets one application support multiple versions of the same API.

Example: version 1 of `/orders/{id}` returns basic fields. Version 2 returns more fields. Both can exist at the same time.

Spring Boot 4 can configure API versioning through properties.

For Spring MVC:

```properties
spring.mvc.apiversion.default=1.0
spring.mvc.apiversion.use.header=X-Version
```

For Spring WebFlux:

```properties
spring.webflux.apiversion.default=1.0
spring.webflux.apiversion.use.header=X-Version
```

Example controller idea:

```java
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
class OrderController {

  @GetMapping(path = "/orders/{id}", version = "1.0")
  String getOrderV1(@PathVariable Long id) {
    return "Order " + id;
  }

  @GetMapping(path = "/orders/{id}", version = "2.0")
  String getOrderV2(@PathVariable Long id) {
    return "Order " + id + " with extra details";
  }
}
```

Client request:

```bash
curl -H "X-Version: 2.0" http://localhost:8080/orders/10
```

Documentation:

- [Spring Boot MVC API versioning](https://docs.spring.io/spring-boot/reference/web/servlet.html#web.servlet.spring-mvc.api-versioning)
- [Spring Boot WebFlux API versioning](https://docs.spring.io/spring-boot/reference/web/reactive.html#web.reactive.webflux.api-versioning)
- [Spring Framework MVC API versioning](https://docs.spring.io/spring-framework/reference/web/webmvc-versioning.html)
- [Spring Framework WebFlux API versioning](https://docs.spring.io/spring-framework/reference/web/webflux-versioning.html)
- [Spring Boot 4.0 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes)

## 11. `JmsClient` Auto-Configuration

Spring Boot 4 auto-configures Spring Framework's newer `JmsClient` API.

In simple words: `JmsClient` is a modern, fluent way to send and receive JMS messages.

Example:

```java
import org.springframework.jms.core.JmsClient;
import org.springframework.stereotype.Service;

@Service
class InvoiceSender {

  private final JmsClient jmsClient;

  InvoiceSender(JmsClient jmsClient) {
    this.jmsClient = jmsClient;
  }

  void sendInvoice(String invoiceJson) {
    this.jmsClient.destination("invoices").send(invoiceJson);
  }
}
```

If you already use `JmsTemplate`, it still works. Spring Boot 4 adds `JmsClient` support without removing the older style.

Documentation:

- [Spring Boot 4.0 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes)
- [Spring Framework JMS documentation](https://docs.spring.io/spring-framework/reference/integration/jms.html)
- [Spring Boot JMS documentation](https://docs.spring.io/spring-boot/reference/messaging/jms.html)

## 12. Multiple `TaskDecorator` Beans

A `TaskDecorator` lets you wrap work that runs in another thread. This is useful for copying logging context, security context, tracing context, or custom values.

Spring Boot 4 supports multiple `TaskDecorator` beans. If you define more than one, Spring Boot combines them.

Example:

```java
import org.springframework.context.annotation.Bean;
import org.springframework.core.task.TaskDecorator;

class TaskConfig {

  @Bean
  TaskDecorator loggingTaskDecorator() {
    return runnable -> () -> {
      System.out.println("Before async task");
      runnable.run();
    };
  }

  @Bean
  TaskDecorator cleanupTaskDecorator() {
    return runnable -> () -> {
      try {
        runnable.run();
      }
      finally {
        System.out.println("After async task");
      }
    };
  }
}
```

In simple words: you no longer need to manually combine task decorators yourself.

Documentation:

- [Spring Boot 4.0 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes)
- [Spring Boot task execution and scheduling](https://docs.spring.io/spring-boot/reference/features/task-execution-and-scheduling.html)

## 13. New OpenTelemetry Starter

Spring Boot 4 adds `spring-boot-starter-opentelemetry`.

This starter brings the dependencies needed to use OpenTelemetry with OTLP for traces and metrics.

Example dependency:

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-opentelemetry</artifactId>
</dependency>
```

Example properties:

```properties
management.tracing.sampling.probability=1.0
management.opentelemetry.tracing.export.otlp.endpoint=http://localhost:4318/v1/traces
management.otlp.metrics.export.url=http://localhost:4318/v1/metrics
```

In simple words: it is easier to send application traces and metrics to an OpenTelemetry collector.

Documentation:

- [Spring Boot tracing documentation](https://docs.spring.io/spring-boot/reference/actuator/tracing.html)
- [Spring Boot observability documentation](https://docs.spring.io/spring-boot/reference/actuator/observability.html)
- [Spring Boot metrics OTLP documentation](https://docs.spring.io/spring-boot/reference/actuator/metrics.html#actuator.metrics.export.otlp)
- [Spring Boot 4.0 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes)

## 14. Configuration Metadata for External Types

Spring Boot can generate configuration metadata for classes annotated with `@ConfigurationProperties`. This metadata helps IDEs show autocomplete and documentation for properties.

Spring Boot 4 improves this for types that live in another module. You can mark those types with `@ConfigurationPropertiesSource`.

Example:

```java
import org.springframework.boot.context.properties.ConfigurationPropertiesSource;

@ConfigurationPropertiesSource
public class ExternalServerOptions {

  private String host;
  private int port;

  public String getHost() {
    return this.host;
  }

  public void setHost(String host) {
    this.host = host;
  }

  public int getPort() {
    return this.port;
  }

  public void setPort(int port) {
    this.port = port;
  }
}
```

In simple words: IDE autocomplete can be more complete when your configuration classes refer to external classes.

Documentation:

- [Configuration metadata documentation](https://docs.spring.io/spring-boot/specification/configuration-metadata/)
- [ConfigurationPropertiesSource API](https://docs.spring.io/spring-boot/api/java/org/springframework/boot/context/properties/ConfigurationPropertiesSource.html)
- [Spring Boot 4.0 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes)

## 15. Kotlin Serialization JSON Support

Spring Boot 4 adds Kotlin Serialization JSON support through a new module and starter.

Example dependency:

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-kotlinx-serialization-json</artifactId>
</dependency>
```

Example Kotlin model:

```kotlin
import kotlinx.serialization.Serializable

@Serializable
data class UserResponse(
  val id: Long,
  val name: String
)
```

Example property:

```properties
spring.kotlinx.serialization.json.pretty-print=true
```

In simple words: Kotlin applications can use Kotlin's own serialization library more easily.

Documentation:

- [Spring Boot JSON documentation](https://docs.spring.io/spring-boot/reference/features/json.html)
- [Spring Boot 4.0 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes)
- [Kotlin Serialization documentation](https://kotlinlang.org/docs/serialization.html)

## 16. Jackson 3 as the Preferred JSON Library

Spring Boot 4 prefers Jackson 3 by default. Jackson 2 support is still present in a deprecated form to help migration, but new Spring Boot 4 applications should plan for Jackson 3.

Example Jackson 3 imports:

```java
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.json.JsonMapper;

class JsonExample {

  void readJson() throws Exception {
    JsonMapper mapper = JsonMapper.builder().build();
    JsonNode node = mapper.readTree("{\"name\":\"Spring\"}");
    System.out.println(node.get("name").stringValue());
  }
}
```

In simple words: if you have custom Jackson code, check your imports and APIs during migration.

Documentation:

- [Spring Boot JSON documentation](https://docs.spring.io/spring-boot/reference/features/json.html)
- [Spring Boot 4.0 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes)
- [Introducing Jackson 3 support in Spring](https://spring.io/blog/2025/10/07/introducing-jackson-3-support-in-spring/)

## 17. `RestTestClient` Support

`RestTestClient` is a testing client for Spring MVC applications. It feels similar to `WebTestClient`, but it is built around the blocking `RestClient` style.

Example:

```java
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.client.RestTestClient;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class HelloControllerTests {

  @Autowired
  RestTestClient restTestClient;

  @Test
  void helloReturnsOk() {
    this.restTestClient.get()
      .uri("/hello")
      .exchange()
      .expectStatus().isOk()
      .expectBody(String.class).isEqualTo("Hello");
  }
}
```

In simple words: MVC integration tests get a clean fluent API for making requests and checking responses.

Documentation:

- [Spring Framework RestTestClient documentation](https://docs.spring.io/spring-framework/reference/testing/resttestclient.html)
- [RestTestClient API](https://docs.spring.io/spring-framework/docs/7.0.x/javadoc-api/org/springframework/test/web/servlet/client/RestTestClient.html)
- [Spring Boot 4.0 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes)

## 18. Redis Static Master/Replica Auto-Configuration

Spring Boot 4 adds auto-configuration for Redis static master/replica setups when using Lettuce.

Example:

```properties
spring.data.redis.masterreplica.nodes[0]=redis-master.example.com:6379
spring.data.redis.masterreplica.nodes[1]=redis-replica-1.example.com:6379
spring.data.redis.masterreplica.nodes[2]=redis-replica-2.example.com:6379
```

In simple words: if your Redis deployment has a known master and known replicas, Spring Boot can configure that more directly.

Documentation:

- [Spring Boot Redis documentation](https://docs.spring.io/spring-boot/reference/data/nosql.html#data.nosql.redis)
- [Redis master/replica properties API](https://docs.spring.io/spring-boot/api/java/org/springframework/boot/data/redis/autoconfigure/DataRedisProperties.Masterreplica.html)
- [Spring Boot 4.0 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes)

## 19. Redis Observability Improvements

Spring Boot 4 improves Redis observability by using Micrometer's Observation API for Redis tracing and metrics.

In simple words: Redis calls can be easier to observe in the same way as HTTP calls, database calls, and messaging operations.

Example:

```properties
management.tracing.sampling.probability=1.0
management.otlp.metrics.export.url=http://localhost:4318/v1/metrics
management.opentelemetry.tracing.export.otlp.endpoint=http://localhost:4318/v1/traces
```

Then normal Redis usage can participate in metrics and traces:

```java
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

@Service
class CacheService {

  private final StringRedisTemplate redis;

  CacheService(StringRedisTemplate redis) {
    this.redis = redis;
  }

  void saveName(String id, String name) {
    this.redis.opsForValue().set("user:" + id, name);
  }
}
```

Documentation:

- [Spring Boot observability documentation](https://docs.spring.io/spring-boot/reference/actuator/observability.html)
- [Spring Data Redis observability](https://docs.spring.io/spring-data/redis/reference/observability.html)
- [Spring Boot 4.0 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes)

## 20. MongoDB Health Indicators Without Spring Data MongoDB

Spring Boot 4 reworks MongoDB health indicators so they no longer require Spring Data MongoDB.

In simple words: if your app uses the MongoDB Java driver directly, the health endpoint can still report MongoDB health.

Example:

```properties
management.endpoint.health.show-details=always
```

Then call:

```bash
curl http://localhost:8080/actuator/health
```

Spring Boot 4 also adds a property for controlling how Spring Data MongoDB stores `BigDecimal` and `BigInteger`.

Documentation:

- [Spring Boot MongoDB documentation](https://docs.spring.io/spring-boot/reference/data/nosql.html#data.nosql.mongodb)
- [Spring Boot Actuator health documentation](https://docs.spring.io/spring-boot/reference/actuator/endpoints.html#actuator.endpoints.health)
- [Spring Boot 4.0 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes)

## 21. SSL Health Reporting Improvements

Spring Boot 4 changes how soon-to-expire SSL certificates are reported.

Earlier, a certificate could use a status like `WILL_EXPIRE_SOON`. In Spring Boot 4, expiring certificate chains are reported in health details through an `expiringChains` entry.

Example:

```properties
management.health.ssl.certificate-validity-warning-threshold=30d
management.endpoint.health.show-details=always
```

In simple words: the health endpoint gives clearer certificate details without changing the whole health status wording in the old way.

Documentation:

- [Spring Boot SSL documentation](https://docs.spring.io/spring-boot/reference/features/ssl.html)
- [Spring Boot Actuator health documentation](https://docs.spring.io/spring-boot/reference/actuator/endpoints.html#actuator.endpoints.health)
- [Spring Boot 4.0 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes)

## 22. JDK HTTP Client Uses Virtual Threads When Enabled

Spring Boot 4 configures auto-configured JDK HTTP clients to use virtual threading when virtual threads are enabled.

Example:

```properties
spring.threads.virtual.enabled=true
```

In simple words: when you choose virtual threads, Boot applies that choice to the JDK HTTP client too.

Documentation:

- [Spring Boot virtual threads documentation](https://docs.spring.io/spring-boot/reference/features/spring-application.html#features.spring-application.virtual-threads)
- [Spring Boot REST client documentation](https://docs.spring.io/spring-boot/reference/io/rest-client.html)
- [Spring Boot 4.0 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes)

## 23. New `logging.console.enabled` Property

Spring Boot 4 adds a simple property to disable console logging.

Example:

```properties
logging.console.enabled=false
logging.file.name=app.log
```

In simple words: if you only want file logging, you can turn console logging off with one property.

Documentation:

- [Spring Boot logging documentation](https://docs.spring.io/spring-boot/reference/features/logging.html)
- [Spring Boot 4.0 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes)

## 24. Elasticsearch API Key Property

Spring Boot 4 adds support for authenticating with Elasticsearch using an API key.

Example:

```properties
spring.elasticsearch.uris=https://search.example.com:9200
spring.elasticsearch.api-key=${ELASTICSEARCH_API_KEY}
```

In simple words: you can use API-key authentication without writing custom Elasticsearch client setup.

Documentation:

- [Spring Boot Elasticsearch documentation](https://docs.spring.io/spring-boot/reference/data/nosql.html#data.nosql.elasticsearch)
- [Spring Boot 4.0 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes)

## 25. AWS ECS Cloud Platform Detection

Spring Boot 4 can recognize Amazon Elastic Container Service as a cloud platform.

In simple words: Boot can better understand that the application is running inside AWS ECS and can apply cloud-platform behavior where relevant.

Example use in config activation:

```yaml
spring:
  config:
    activate:
      on-cloud-platform: aws-ecs

app:
  running-on: ecs
```

Documentation:

- [Spring Boot external configuration activation](https://docs.spring.io/spring-boot/reference/features/external-config.html#features.external-config.files.activation-properties)
- [Spring Boot 4.0 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes)

## 26. Spring gRPC Support

Spring Boot 4.1 adds built-in support for Spring gRPC.

You can write:

- gRPC server applications
- gRPC client applications
- tests for gRPC services
- Netty-based standalone gRPC servers
- Servlet-based gRPC over HTTP/2

Example dependency for a server:

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-grpc-server</artifactId>
</dependency>
```

Example service:

```java
import io.grpc.stub.StreamObserver;
import org.springframework.grpc.server.service.GrpcService;

@GrpcService
class HelloGrpcService extends HelloWorldGrpc.HelloWorldImplBase {

  @Override
  public void sayHello(HelloRequest request, StreamObserver<HelloReply> responseObserver) {
    HelloReply reply = HelloReply.newBuilder()
      .setMessage("Hello " + request.getName())
      .build();

    responseObserver.onNext(reply);
    responseObserver.onCompleted();
  }
}
```

By default, a Netty gRPC server listens on port `9090`.

Example client setup:

```java
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.grpc.client.ImportGrpcClients;

@SpringBootApplication
@ImportGrpcClients(target = "hello", types = HelloWorldGrpc.HelloWorldBlockingStub.class)
class MyApplication {
}
```

Example channel property:

```properties
spring.grpc.client.channel.hello.target=static://grpc.example.com:9090
```

Documentation:

- [Spring Boot gRPC documentation](https://docs.spring.io/spring-boot/reference/io/grpc.html)
- [Spring gRPC reference documentation](https://docs.spring.io/spring-grpc/reference/)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

## 27. Better Jackson Read, Write, and Factory Configuration

Spring Boot 4.1 adds more Jackson configuration properties.

You can now configure common Jackson read and write features under `spring.jackson.read.*` and `spring.jackson.write.*`. You can also still configure normal serialization features:

```properties
spring.jackson.serialization.indent-output=true
```

You can also configure Jackson factory constraints:

```properties
spring.jackson.factory.constraints.read.max-string-length=1000000
spring.jackson.factory.constraints.read.max-nesting-depth=100
spring.jackson.factory.constraints.write.max-nesting-depth=100
```

Spring Boot 4.1 also adds customizer callbacks such as:

- `JsonFactoryBuilderCustomizer`
- `CborFactoryBuilderCustomizer`
- `XmlFactoryBuilderCustomizer`

Example:

```java
import org.springframework.boot.jackson.autoconfigure.JsonFactoryBuilderCustomizer;
import org.springframework.context.annotation.Bean;

class JacksonConfig {

  @Bean
  JsonFactoryBuilderCustomizer jsonFactoryCustomizer() {
    return builder -> {
      // Customize the auto-configured JsonFactoryBuilder here.
    };
  }
}
```

In simple words: Jackson customization is more powerful and more consistent.

Documentation:

- [Spring Boot JSON documentation](https://docs.spring.io/spring-boot/reference/features/json.html)
- [JacksonProperties API](https://docs.spring.io/spring-boot/api/java/org/springframework/boot/jackson/autoconfigure/JacksonProperties.html)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

## 28. Encoding Support in `spring.config.import`

Spring Boot 4.1 lets you specify the character encoding when importing configuration files.

Example:

```properties
spring.config.import=classpath:messages.properties[encoding=utf-8]
```

In simple words: if your imported config file contains non-English text or UTF-8 characters, you can tell Spring Boot how to read it.

Documentation:

- [Spring Boot externalized configuration documentation](https://docs.spring.io/spring-boot/reference/features/external-config.html#features.external-config.files.importing)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

## 29. Cookie Handling for HTTP Clients

Spring Boot 4.1 adds cookie handling configuration for `TestRestTemplate`, `RestTemplateBuilder`, `HttpClientSettings`, and auto-configured HTTP clients.

Example:

```properties
spring.http.clients.cookie-handling=enable-when-possible
```

In simple words: you can control whether your HTTP client keeps and sends cookies between requests.

This is useful in tests or when calling services that use cookie-based sessions.

Common modes are `enable-when-possible`, `enable`, and `disable`.

Documentation:

- [Spring Boot REST client documentation](https://docs.spring.io/spring-boot/reference/io/rest-client.html)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

## 30. HTTP Client SSRF Protection with `InetAddressFilter`

SSRF means Server-Side Request Forgery. It happens when an attacker tricks your server into making requests to places it should not access, like internal IP addresses.

Spring Boot 4.1 adds `InetAddressFilter` support for blocking or allowing target addresses in HTTP clients.

Example: allow only external addresses:

```java
import org.springframework.boot.http.client.ClientHttpRequestFactoryBuilder;
import org.springframework.boot.http.client.HttpClientSettings;
import org.springframework.boot.http.client.InetAddressFilter;
import org.springframework.http.client.ClientHttpRequestFactory;
import org.springframework.web.client.RestClient;

class SafeClientFactory {

  RestClient create() {
    HttpClientSettings settings = HttpClientSettings.defaults()
      .withInetAddressFilter(InetAddressFilter.externalAddresses());

    ClientHttpRequestFactory requestFactory =
      ClientHttpRequestFactoryBuilder.jdk().build(settings);

    return RestClient.builder()
      .requestFactory(requestFactory)
      .baseUrl("https://api.example.com")
      .build();
  }
}
```

Example: define one filter for auto-configured clients:

```java
import org.springframework.boot.http.client.InetAddressFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration(proxyBeanMethods = false)
class HttpClientSecurityConfig {

  @Bean
  InetAddressFilter httpClientInetAddressFilter() {
    return InetAddressFilter.externalAddresses();
  }
}
```

In simple words: you can make outgoing HTTP calls safer by limiting where they are allowed to go.

Documentation:

- [Spring Boot REST client SSRF protection](https://docs.spring.io/spring-boot/reference/io/rest-client.html#io.rest-client.clienthttprequestfactorybuilder)
- [InetAddressFilter API](https://docs.spring.io/spring-boot/api/java/org/springframework/boot/http/client/InetAddressFilter.html)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

## 31. Better Observability and OpenTelemetry Support

Spring Boot 4.1 improves observability in several ways:

- `@Async` methods can propagate observation context.
- Kafka and Rabbit observation convention beans are applied automatically.
- JVM meter convention beans are applied automatically.
- OpenTelemetry can be disabled with `management.opentelemetry.enabled=false`.
- More OpenTelemetry environment variables are mapped to Spring Boot properties.
- OTLP logging, metrics, and tracing exporters can use SSL bundles.
- OpenTelemetry sampler and limits can be configured.

Example: propagate context into `@Async` methods:

```properties
spring.task.execution.propagate-context=true
```

Example: configure OpenTelemetry from properties:

```properties
management.opentelemetry.enabled=true
management.opentelemetry.tracing.sampler=parent-based-trace-id-ratio
management.tracing.sampling.probability=0.25
```

Example: use an OpenTelemetry environment variable:

```bash
OTEL_EXPORTER_OTLP_ENDPOINT=http://collector:4318 java -jar app.jar
```

In simple words: tracing and metrics work better across threads, messaging systems, and OpenTelemetry setups.

Documentation:

- [Spring Boot observability documentation](https://docs.spring.io/spring-boot/reference/actuator/observability.html)
- [Spring Boot tracing documentation](https://docs.spring.io/spring-boot/reference/actuator/tracing.html)
- [Spring Boot metrics documentation](https://docs.spring.io/spring-boot/reference/actuator/metrics.html)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

## 32. RabbitMQ Streams SSL and Service Connections

Spring Boot 4.1 adds SSL auto-configuration for RabbitMQ Streams.

Example:

```properties
spring.rabbitmq.stream.host=rabbitmq.example.com
spring.rabbitmq.stream.port=5552
spring.rabbitmq.stream.ssl.enabled=true
```

Or use an SSL bundle:

```properties
spring.rabbitmq.stream.ssl.bundle=rabbit-streams
```

Spring Boot 4.1 also supports service connections to RabbitMQ Streams with Testcontainers and Docker Compose.

In simple words: RabbitMQ Streams are easier to use securely and easier to wire into local development and tests.

Documentation:

- [Spring Boot AMQP documentation](https://docs.spring.io/spring-boot/reference/messaging/amqp.html)
- [RabbitStreamConnectionDetails API](https://docs.spring.io/spring-boot/api/java/org/springframework/boot/amqp/autoconfigure/RabbitStreamConnectionDetails.html)
- [Spring Boot service connections](https://docs.spring.io/spring-boot/reference/testing/testcontainers.html#testing.testcontainers.service-connections)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

## 33. Log4j File Rotation Properties

Spring Boot 4.1 adds configurable file rotation support for Log4j2.

Supported strategies include:

- `size`
- `time`
- `size-and-time`
- `cron`

Example:

```properties
logging.file.path=logs
logging.log4j2.rollingpolicy.strategy=size-and-time
logging.log4j2.rollingpolicy.max-file-size=20MB
logging.log4j2.rollingpolicy.time-interval=1
logging.log4j2.rollingpolicy.max-history=14
```

In simple words: if you use Log4j2, you can manage log rotation from Spring Boot properties instead of writing more Log4j XML.

Documentation:

- [Spring Boot logging documentation](https://docs.spring.io/spring-boot/reference/features/logging.html)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

## 34. Embedded LDAP SSL Support

Spring Boot 4.1 lets the embedded LDAP server use SSL.

Example:

```properties
spring.ldap.embedded.ssl.bundle=ldap-server
```

In simple words: local or test LDAP setups can run with LDAPS more easily.

Documentation:

- [Spring Boot LDAP documentation](https://docs.spring.io/spring-boot/reference/data/nosql.html#data.nosql.ldap)
- [Spring Boot SSL documentation](https://docs.spring.io/spring-boot/reference/features/ssl.html)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

## 35. Simple JMS Listener Container Configuration Support

Spring Boot 4.1 improves JMS support by providing a configurer for `SimpleJmsMessageListener`.

In simple words: if you use the simpler JMS listener container style, Boot can help configure it in the same spirit as the default JMS listener container factory.

Example listener:

```java
import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Component;

@Component
class InvoiceListener {

  @JmsListener(destination = "invoices")
  void receive(String message) {
    System.out.println("Received invoice " + message);
  }
}
```

Documentation:

- [Spring Boot JMS documentation](https://docs.spring.io/spring-boot/reference/messaging/jms.html)
- [Spring Framework JMS documentation](https://docs.spring.io/spring-framework/reference/integration/jms.html)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

## 36. Better Docker Compose Failure Logs

Spring Boot can start Docker Compose services for local development. In Spring Boot 4.1, when `docker compose up` or `docker compose start` fails, Boot logs Docker Compose logs.

Example:

```properties
spring.docker.compose.start.log-level=debug
```

In simple words: when Docker Compose startup fails, you get more useful logs without manually running `docker compose logs`.

Documentation:

- [Spring Boot Docker Compose documentation](https://docs.spring.io/spring-boot/reference/features/dev-services.html#features.dev-services.docker-compose)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

## 37. OAuth2 Resource Server JWT Authorities from SpEL

Spring Boot 4.1 can extract authorities from JWTs using one or more SpEL expressions.

This helps when your identity provider stores roles in a custom JWT structure.

Example:

```properties
spring.security.oauth2.resourceserver.jwt.issuer-uri=https://idp.example.com
spring.security.oauth2.resourceserver.jwt.authorities-claim-expressions[0]=claims['realm_access']['roles']
spring.security.oauth2.resourceserver.jwt.authority-prefix=ROLE_
```

In simple words: you can map custom JWT role data to Spring Security authorities with configuration instead of custom code.

Documentation:

- [Spring Boot OAuth2 documentation](https://docs.spring.io/spring-boot/reference/security/oauth2.html)
- [Spring Security JWT resource server documentation](https://docs.spring.io/spring-security/reference/servlet/oauth2/resource-server/jwt.html)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

## 38. MongoDB Support for Spring Batch

Spring Boot 4.1 can auto-configure Spring Batch to use MongoDB as its job repository store.

Example dependency:

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-batch-data-mongodb</artifactId>
</dependency>
```

Example property:

```properties
spring.batch.data.mongodb.schema.initialize=true
```

In simple words: Spring Batch metadata can live in MongoDB, not only JDBC or in-memory storage.

Documentation:

- [Spring Boot Spring Batch documentation](https://docs.spring.io/spring-boot/reference/io/spring-batch.html)
- [Spring Batch documentation](https://docs.spring.io/spring-batch/reference/)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

## 39. Lazy JDBC Connection Fetching

Spring Boot 4.1 adds `spring.datasource.connection-fetch`.

When set to `lazy`, Spring Boot wraps the auto-configured pooled `DataSource` so a real database connection is fetched only when a JDBC statement is actually needed.

Example:

```properties
spring.datasource.connection-fetch=lazy
```

Why this matters:

- Some transactions do not actually need the database.
- A connection can be taken from the pool later.
- It can reduce unnecessary connection usage.

Example service:

```java
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
class AuditService {

  @Transactional
  void doWork(boolean needsDatabase) {
    if (!needsDatabase) {
      return;
    }

    // A JDBC connection is needed only when database work starts.
  }
}
```

Documentation:

- [Spring Boot SQL database documentation](https://docs.spring.io/spring-boot/reference/data/sql.html#data.sql.datasource.lazy-connection-proxy)
- [LazyConnectionDataSourceProxy API](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/jdbc/datasource/LazyConnectionDataSourceProxy.html)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

## 40. `@RedisListener` Auto-Configuration

Spring Boot 4.1 can auto-configure Spring Data Redis `@RedisListener` endpoints.

Example:

```java
import org.springframework.data.redis.annotation.RedisListener;
import org.springframework.stereotype.Component;

@Component
class OrderEventsListener {

  @RedisListener("order-events")
  void receive(String message) {
    System.out.println("Redis message: " + message);
  }
}
```

If no `RedisMessageListenerContainer` bean exists, Spring Boot registers a default one.

In simple words: receiving Redis Pub/Sub messages is simpler.

Documentation:

- [Spring Boot Redis documentation](https://docs.spring.io/spring-boot/reference/data/nosql.html#data.nosql.redis)
- [Spring Data Redis annotated listener documentation](https://docs.spring.io/spring-data/redis/reference/redis/pubsub-annotated.html)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

## 41. More Process Details in the Actuator Info Endpoint

Spring Boot 4.1 adds more process information to the Actuator `info` endpoint.

The response can include fields such as:

- process uptime
- process start time
- current time
- timezone
- locale
- working directory

Example:

```properties
management.endpoints.web.exposure.include=info
management.info.process.enabled=true
```

Call the endpoint:

```bash
curl http://localhost:8080/actuator/info
```

Example output shape:

```json
{
  "process": {
    "uptime": "PT12.4S",
    "startTime": "2026-08-17T10:44:46.810Z",
    "timezone": "Etc/UTC",
    "workingDirectory": "/app"
  }
}
```

In simple words: the info endpoint can tell you more about the running Java process.

Documentation:

- [Actuator info endpoint API](https://docs.spring.io/spring-boot/api/rest/actuator/info.html)
- [Spring Boot Actuator endpoints documentation](https://docs.spring.io/spring-boot/reference/actuator/endpoints.html)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

## 42. Gradle Plugin `bootBuildImage --environment`

Spring Boot 4.1 lets the Gradle `bootBuildImage` task accept environment variables from the command line.

Example:

```bash
./gradlew bootBuildImage --environment BP_JVM_VERSION=25
```

Multiple values can be passed by using `--environment` more than once:

```bash
./gradlew bootBuildImage \
  --environment BP_JVM_VERSION=25 \
  --environment BP_HEALTH_CHECKER_ENABLED=true
```

In simple words: it is easier to change build-image environment values without editing `build.gradle`.

Documentation:

- [Spring Boot Gradle plugin documentation](https://docs.spring.io/spring-boot/gradle-plugin/)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

## 43. Gradle BuildInfo Task Updates

Spring Boot 4.1 changes the default output of the Gradle `BuildInfo` task to `META-INF/build-info.properties`.

Example:

```groovy
springBoot {
  buildInfo {
    properties {
      name = 'orders-service'
    }
  }
}
```

In simple words: build info is placed where Spring Boot expects metadata resources to live, and Gradle gets better task dependency information.

Documentation:

- [Spring Boot Gradle plugin documentation](https://docs.spring.io/spring-boot/gradle-plugin/)
- [Spring Boot Actuator info endpoint documentation](https://docs.spring.io/spring-boot/reference/actuator/endpoints.html#actuator.endpoints.info)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

## 44. Maven Plugin Layers Configuration from the Classpath

Spring Boot 4.1 lets the Maven plugin load custom layers configuration from the classpath.

Custom layer files can be placed at:

```text
META-INF/spring/layers/<name>.xml
```

In simple words: organizations can share packaging layer rules through a dependency instead of copying the same XML file into every service.

Documentation:

- [Spring Boot Maven plugin documentation](https://docs.spring.io/spring-boot/maven-plugin/)
- [Spring Boot layering documentation](https://docs.spring.io/spring-boot/maven-plugin/packaging.html#packaging.layers)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

## 45. Spock Support Restored

Spring Boot 4.1 restores Spock support now that Spock supports the newer Groovy version used by Spring Boot 4.

Example Spock-style test:

```groovy
import org.springframework.boot.test.context.SpringBootTest
import spock.lang.Specification

@SpringBootTest
class ApplicationSpec extends Specification {

  def "context loads"() {
    expect:
    true
  }
}
```

In simple words: teams that like Groovy and Spock can use them again with Spring Boot 4.1.

Documentation:

- [Spring Boot testing documentation](https://docs.spring.io/spring-boot/reference/testing/)
- [Spock Framework](https://spockframework.org/)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

## 46. Other Useful Spring Boot 4.0 Improvements

Spring Boot 4.0 also includes many smaller improvements.

### `@MeterTag` and `@ObservationKeyValue` Support

Spring Boot improves Micrometer metric and observation annotation support.

Example:

```java
import io.micrometer.observation.annotation.Observed;
import org.springframework.stereotype.Service;

@Service
class PaymentService {

  @Observed(name = "payment.process")
  void processPayment() {
    // payment logic
  }
}
```

Documentation:

- [Spring Boot observability documentation](https://docs.spring.io/spring-boot/reference/actuator/observability.html)
- [Spring Boot 4.0 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes)

### Better Configuration Binding Error Message

When property binding fails because a class cannot be found, Spring Boot 4.0 gives a clearer error message.

Documentation:

- [Spring Boot external configuration documentation](https://docs.spring.io/spring-boot/reference/features/external-config.html)
- [Spring Boot 4.0 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes)

### Tomcat Static Resource Cache Size Property

Spring Boot 4.0 adds:

```properties
server.tomcat.resource.cache-max-size=20MB
```

Documentation:

- [Spring Boot embedded web server documentation](https://docs.spring.io/spring-boot/reference/web/servlet.html#web.servlet.embedded-container)
- [Spring Boot 4.0 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes)

### Development Tool Jar Type

Spring Boot 4.0 lets a dependency mark itself as a development tool using the `Spring-Boot-Jar-Type` manifest entry. This helps exclude development-only tools from executable jars.

Documentation:

- [Spring Boot executable jar documentation](https://docs.spring.io/spring-boot/specification/executable-jar/)
- [Spring Boot 4.0 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes)

## 47. Other Useful Spring Boot 4.1 Improvements

Spring Boot 4.1 also includes many smaller improvements.

### Web Server Temporary Directories Are Cleaned Up

When the application context closes, web server temporary directories are deleted.

Documentation:

- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

### Extra MIME Types for Compression

You can add extra response MIME types that should be compressed:

```properties
server.compression.enabled=true
server.compression.additional-mime-types=application/vnd.myapp+json
```

Documentation:

- [Spring Boot embedded web server documentation](https://docs.spring.io/spring-boot/reference/web/servlet.html#web.servlet.embedded-container)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

### WebFlux Default HTML Escaping

Spring Boot 4.1 adds:

```properties
spring.webflux.default-html-escape=true
```

Documentation:

- [Spring Boot WebFlux documentation](https://docs.spring.io/spring-boot/reference/web/reactive.html)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

### Better Optional Binding in Configuration Properties

Constructor-bound configuration value objects now bind `Optional` parameters as `Optional.empty()` instead of `null`.

Example:

```java
import java.util.Optional;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("app")
public record AppProperties(Optional<String> region) {
}
```

Documentation:

- [Spring Boot type-safe configuration properties](https://docs.spring.io/spring-boot/reference/features/external-config.html#features.external-config.typesafe-configuration-properties)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

### Empty YAML Objects Are Retained

Spring Boot 4.1 keeps empty objects in YAML property sources.

Example:

```yaml
app:
  feature: {}
```

Documentation:

- [Spring Boot YAML configuration documentation](https://docs.spring.io/spring-boot/reference/features/external-config.html#features.external-config.yaml)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

### `FailureAnalyzedException`

Spring Boot 4.1 adds `FailureAnalyzedException` for exceptions that can provide their own failure analysis.

In simple words: libraries can throw an exception that explains the failure in a Boot-friendly way.

Documentation:

- [Spring Boot failure analyzer documentation](https://docs.spring.io/spring-boot/reference/features/spring-application.html#features.spring-application.application-startup-failure)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

### Spring Data REST Return Body on Delete

Spring Boot 4.1 adds:

```properties
spring.data.rest.return-body-on-delete=true
```

Documentation:

- [Spring Boot data REST documentation](https://docs.spring.io/spring-boot/reference/data/rest.html)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

### OAuth2 Resource Server in Non-Web Applications

Spring Boot 4.1 can configure OAuth2 resource servers in non-web applications.

Documentation:

- [Spring Boot OAuth2 documentation](https://docs.spring.io/spring-boot/reference/security/oauth2.html)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

### Async JPA Bootstrap Property

Spring Boot 4.1 adds:

```properties
spring.jpa.bootstrap=deferred
```

This can configure async background bootstrapping of the auto-configured `LocalContainerEntityManagerFactoryBean`.

Documentation:

- [Spring Boot JPA documentation](https://docs.spring.io/spring-boot/reference/data/sql.html#data.sql.jpa-and-spring-data)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

### Better Testcontainers Failure Analysis

Spring Boot 4.1 adds a failure analyzer that gives more details when Testcontainers cannot find a usable Docker environment.

Documentation:

- [Spring Boot Testcontainers documentation](https://docs.spring.io/spring-boot/reference/testing/testcontainers.html)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

### New `@AutoConfigureWebServer` Test Annotation

Spring Boot 4.1 adds a test annotation for adding the embedded web server factory bean in tests.

Documentation:

- [Spring Boot test modules](https://docs.spring.io/spring-boot/reference/testing/test-modules.html)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)

## Important Upgrade Notes

Spring Boot 4 is a major release. Do not upgrade a large application casually. A good upgrade path is:

1. Upgrade to the latest Spring Boot 3.5.x first.
2. Fix deprecations and warnings.
3. Read the Spring Boot 4.0 migration guide.
4. Update starter names and test starter names.
5. Check custom auto-configuration imports.
6. Check Jackson 2 custom code and migrate to Jackson 3 where possible.
7. Run your full test suite.

Spring Boot 4.1 also removes some things that were deprecated in Spring Boot 4.0, so read the 4.1 release notes before moving from 4.0 to 4.1.

Documentation:

- [Spring Boot 4.0 migration guide](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Migration-Guide)
- [Spring Boot 4.0 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes)
- [Spring Boot 4.1 release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes)
- [Spring Boot current reference documentation](https://docs.spring.io/spring-boot/reference/)

## Final Summary

Spring Boot 4 is not only a normal feature release. It is a new foundation for the Spring Boot ecosystem.

The biggest changes are modularization, Spring Framework 7, Jackson 3, Java 25 support, HTTP Service Clients, API versioning, better observability, and new gRPC support in 4.1.

For everyday developers, the most useful features are:

- smaller and clearer dependencies
- better REST client support
- built-in API versioning
- easier OpenTelemetry setup
- better test clients
- easier Redis, RabbitMQ, MongoDB, and JDBC configuration
- better production diagnostics through Actuator

If you are starting a new project, Spring Boot 4.1.x is the best stable Spring Boot 4 line to begin with. If you are upgrading an existing project, first move to Spring Boot 3.5.x, then follow the official Spring Boot 4 migration guide carefully.
