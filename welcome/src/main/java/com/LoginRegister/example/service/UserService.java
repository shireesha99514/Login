package com.LoginRegister.example.service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.LoginRegister.example.entity.Users;
import com.LoginRegister.example.repository.UsersRepo;
import com.LoginRegister.example.requests.LoginRequest;

@Service
public class UserService {
	
	@Autowired 
	UsersRepo usersRepo;
	
	public Users addUser(Users user) {
		
		return usersRepo.save(user);
		
	}
	
	
//public Boolean loginUser(LoginRequest loginRequest) {
//		
//		Optional<Users> user = usersRepo.findById(loginRequest.getUserId());
//		Users user1 = user.get();
//		
//		if(user1 == null) {
//			return false;
//		}
//		
//		
//		
//		if(!user1.getPassword().equals(loginRequest.getPassword())) {
//			return false;
//		}
//		
//		return true;
//		
//		
//		
//	}
	
	
	public String loginUser(LoginRequest loginRequest) {
	    // Validate the login request
	    if (loginRequest.getUserId() == null || loginRequest.getPassword() == null) {
	        return "Invalid details: Username and password must not be null.";
	    }

	    // Find the user by name and password
	    Optional<Users> userOptional = usersRepo.findByNameAndPassword(
	        loginRequest.getUserId(), loginRequest.getPassword()
	    );

	    // If the user is not found, return "Invalid details"
	    if (userOptional.isEmpty()) {
	        return "Invalid details: Username or password is incorrect.";
	    }

	    // If the user exists, return their details as a formatted string
	    Users user = userOptional.get();
	    return "Login successful! User details: \n" +
	           "Name: " + user.getName() + "\n" +
	           "Email: " + user.getEmail();
	}


	public Optional<Users> getUserById(Integer name) {
		return usersRepo.findById(name);
	}
	
	// Update user details
	public Users updateUser(Integer name, Users userDetails) {
		Optional<Users> existingUser = usersRepo.findById(name);
		if(existingUser.isPresent()) {
			Users user = existingUser.get();
			// Update fields (you can add more fields as needed)
			user.setName(userDetails.getName());
			user.setEmail(userDetails.getEmail());
			user.setPassword(userDetails.getPassword());
			// You can update more fields like email, etc.
			return usersRepo.save(user);
		}
		return null;  // User not found
	}
	
	
	// Delete user by ID
		public Boolean deleteUser(Integer name) {
			Optional<Users> user = usersRepo.findById(name);
			if(user.isPresent()) {
				usersRepo.deleteById(name);
				return true;  // User deleted
			}
			return false;  // User not found
		}

		

}
