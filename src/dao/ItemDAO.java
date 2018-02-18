package dao;

import java.math.BigInteger;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.RowMapper;

import model.Item;

public class ItemDAO {
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	
	public List<Item> getByGroup(BigInteger group) {
		String query = "SELECT * FROM \"Entity\" WHERE \"Group\" = ?";
		
		return jdbcTemplate.query(query, new ItemRowMapper(),group.intValue());
	}
	
	private class ItemRowMapper implements RowMapper<Item>{

		@Override
		public Item mapRow(ResultSet rs, int i) throws SQLException {
			Item item = new Item();
			
			item.setId(rs.getBigDecimal("ID").toBigInteger());
			item.setName(rs.getString("Name"));
			item.setGroup(rs.getBigDecimal("Group").toBigInteger());
			item.setDescription(rs.getString("Description"));
			
			return item;
		}
		
	}
	
	private class ItemResultSetExtractor implements ResultSetExtractor<Item> {

		@Override
		public Item extractData(ResultSet arg0) throws SQLException, DataAccessException {
			// TODO Auto-generated method stub
			return null;
		}
		
	}
}
