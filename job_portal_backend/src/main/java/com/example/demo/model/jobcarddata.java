package com.example.demo.model;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Component
@Entity
@Scope("prototype")
public class jobcarddata {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	String job_id;
	String job_title;
	String location;
	String job_type;
	String role_description;
	String domain;
	String experience;
	String posted_time;
	boolean is_saved;
	String[] skill;
	
	public String[] getSkill() {
		return skill;
	}
	
	public void setSkill(String[] skill) {
		this.skill = skill;
	}
	public int getId() {
		return id;
	}
	public String getJob_title() {
		return job_title;
	}
	public void setJob_title(String job_title) {
		this.job_title = job_title;
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
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getJob_type() {
		return job_type;
	}
	public void setJob_type(String job_type) {
		this.job_type = job_type;
	}
	public String getRole_description() {
		return role_description;
	}
	public void setRole_description(String role_description) {
		this.role_description = role_description;
	}
	public String getDomain() {
		return domain;
	}
	public void setDomain(String domain) {
		this.domain = domain;
	}
	public String getExperience() {
		return experience;
	}
	public void setExperience(String experience) {
		this.experience = experience;
	}
	public String getPosted_time() {
		return posted_time;
	}
	public void setPosted_time(String posted_time) {
		this.posted_time = posted_time;
	}
	public boolean isIs_saved() {
		return is_saved;
	}
	public void setIs_saved(boolean is_saved) {
		this.is_saved = is_saved;
	}
	@Override
	public String toString() {
		return "jobcarddata [id=" + id + ", job_id=" + job_id + ", location=" + location + ", job_type=" + job_type
				+ ", role_description=" + role_description + ", domain=" + domain + ", experience=" + experience
				+ ", posted_time=" + posted_time + ", is_saved=" + is_saved + "]";
	}
	
	
	
}


