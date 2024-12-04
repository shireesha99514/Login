package com.LoginRegister.example.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.LoginRegister.example.entity.Users;

@Repository
public interface UsersRepo extends JpaRepository<Users, Integer> {
	
	
	public String findByName(String name);
	public Optional<Users> findByNameAndPassword(String userId, String password);
	

}
