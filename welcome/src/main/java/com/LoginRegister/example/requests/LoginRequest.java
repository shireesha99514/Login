package com.LoginRegister.example.requests;


public class LoginRequest {
	private String userId;
	@Override
	public String toString() {
		return "LoginRequest [userId=" + userId + ", password=" + password + "]";
	}
	private String password;

	public LoginRequest() {
		
	}
	
	public LoginRequest(String userId, String password) {
		super();
		this.userId = userId;
		this.password = password;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	

}
