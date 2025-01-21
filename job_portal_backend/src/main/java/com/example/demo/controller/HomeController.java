package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.jobcarddata;
import com.example.demo.model.jobfillformdata;
import com.example.demo.service.HomeService;

@CrossOrigin
@RestController
public class HomeController {
	
	@Autowired
	HomeService service;

	public HomeService getService() {
		return service;
	}

	public void setService(HomeService service) {
		this.service = service;
	}
	
	@GetMapping("/get-jobs")
	List<jobcarddata> getJobFromService()
	{
		return service.getJobsFromRepo();
		
	}
		
	@PatchMapping("/update-saved-job/{id}")
	void updateSavedJobToService(@PathVariable int id)
	{
		service.updateSavedJob(id);
	}
	
	@PostMapping("/save-form")
	void saveFormDetailsToRepo(@RequestBody jobfillformdata data)
	{
		service.saveDetailsToRepo(data);
	}
	
}
