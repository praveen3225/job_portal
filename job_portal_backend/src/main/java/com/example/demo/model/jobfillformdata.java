package com.example.demo.model;

import java.util.Arrays;

import org.springframework.context.annotation.Scope;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
@Scope("prototype")
public class jobfillformdata {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	String job_id;
	String job_title;
	String first_name;
	String last_name;
	String email;
	String father_name;
	long mobile_number;
	String address[];
	String gender;
	String state;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getJob_id() {
		return job_id;
	}
	public void setJob_id(String job_id) {
		this.job_id = job_id;
	}
	public String getJob_title() {
		return job_title;
	}
	public void setJob_title(String job_title) {
		this.job_title = job_title;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getFather_name() {
		return father_name;
	}
	public void setFather_name(String father_name) {
		this.father_name = father_name;
	}
	public long getMobile_number() {
		return mobile_number;
	}
	public void setMobile_number(long mobile_number) {
		this.mobile_number = mobile_number;
	}
	public String[] getAddress() {
		return address;
	}
	public void setAddress(String[] address) {
		this.address = address;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	
	@Override
	public String toString() {
		return "jobfillformdata [id=" + id + ", job_id=" + job_id + ", job_title=" + job_title + ", first_name="
				+ first_name + ", last_name=" + last_name + ", email=" + email + ", father_name=" + father_name
				+ ", mobile_number=" + mobile_number + ", address=" + Arrays.toString(address) + ", gender=" + gender
				+ ", state=" + state + "]";
	}
	
}
