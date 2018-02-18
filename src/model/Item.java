package model;

import java.math.BigInteger;

public class Item {
	private BigInteger id;
	private String name;
	private BigInteger group;
	private String description;
	
	public Item() {
		
	}
	
	public BigInteger getId() {
		return id;
	}
	public void setId(BigInteger id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public BigInteger getGroup() {
		return group;
	}
	public void setGroup(BigInteger group) {
		this.group = group;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
}
