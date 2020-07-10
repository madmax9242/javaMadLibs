package com.madlib.service;

import java.util.List;

import com.madlib.model.Submission;

public interface SubmissionService {
	
	//POST
	public Submission createSubmission(Submission sub);
	
	//GET ALL
	public List<Submission> findAllSubmissions();
	
	//GET BY ID
	public Submission findSubmissionById(Integer id);
	
	//UPDATE
	public Submission updateSubmission(Submission sub);
	
	//DELETE
	public void deleteSubmissionById(Integer id);

}
