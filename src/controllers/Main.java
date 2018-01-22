package controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class Main {
	@RequestMapping("/info")
	public String getInfo() {
		return "static/index.html";
	}
}
