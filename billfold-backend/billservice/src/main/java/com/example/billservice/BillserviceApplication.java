package com.example.billservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class BillserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(BillserviceApplication.class, args);
	}

}
