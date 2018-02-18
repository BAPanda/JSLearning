package controllers;

import java.math.BigInteger;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import dao.ItemDAO;
import model.Item;

@Controller
public class ItemController {
	@Autowired
	private ItemDAO itemDAO;
	
	@RequestMapping(value = "/items") 
	@ResponseBody
	public List<Item> getItems(@RequestParam("groupId") BigInteger groupId) {
		
		return itemDAO.getByGroup(groupId);
	}
}
