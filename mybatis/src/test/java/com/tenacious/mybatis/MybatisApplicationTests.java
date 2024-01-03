package com.tenacious.mybatis;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.tenacious.mybatis.pojo.User;
import java.util.List;
import com.tenacious.mybatis.mapper.*;

@SpringBootTest
class MybatisApplicationTests {

	@Autowired
	private Usermapper usermapper;
	@Autowired
	EmpMapper empmapper;

	@Test
	public void contextLoads() {
		List<User> userList = usermapper.list();
		userList.stream().forEach(user -> {
			System.out.println(user);
		});
	}

	@Test
	public void testdelete() {
		empmapper.delete(17);
	}

}
