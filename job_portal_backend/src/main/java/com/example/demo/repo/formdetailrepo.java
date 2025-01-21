package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.jobfillformdata;

@Repository
public interface formdetailrepo extends JpaRepository<jobfillformdata, Integer> {

}
