package com.example.jantrikShop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration;

@SpringBootApplication(exclude = {JacksonAutoConfiguration.class})
public class JantrikShopApplication {

	public static void main(String[] args) {
		SpringApplication.run(JantrikShopApplication.class, args);
	}

}
