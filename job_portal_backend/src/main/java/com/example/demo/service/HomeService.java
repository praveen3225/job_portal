package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.jobcarddata;
import com.example.demo.model.jobfillformdata;
import com.example.demo.repo.HomeRepo;
import com.example.demo.repo.formdetailrepo;

@Service
public class HomeService {
	@Autowired
	HomeRepo repo;
	@Autowired
	formdetailrepo formrepo;

	public formdetailrepo getFormrepo() {
		return formrepo;
	}

	public void setFormrepo(formdetailrepo formrepo) {
		this.formrepo = formrepo;
	}

	public HomeRepo getRepo() {
		return repo;
	}

	public void setRepo(HomeRepo repo) {
		this.repo = repo;
	}

	public List<jobcarddata> getJobsFromRepo() {
		
		return repo.findAllByOrderById();
	}

	public void updateSavedJob(int id) {
		// TODO Auto-generated method stub
		jobcarddata temp = repo.findById(id).get();
		temp.setIs_saved(!temp.isIs_saved());
		repo.save(temp);
	}

	public void saveDetailsToRepo(jobfillformdata data) {
		// TODO Auto-generated method stub
		formrepo.save(data);
		
	}
	
}
