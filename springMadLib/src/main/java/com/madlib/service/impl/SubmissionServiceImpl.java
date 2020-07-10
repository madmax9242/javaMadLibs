package com.madlib.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.madlib.dao.SubmissionDao;
import com.madlib.model.Submission;
import com.madlib.service.SubmissionService;

@Service
public class SubmissionServiceImpl implements SubmissionService {
	
	@Autowired
	SubmissionDao submissionDao;

	@Override
	public Submission createSubmission(Submission sub) {
		return submissionDao.save(sub);
	}
	
	@Override
	public List<Submission> findAllSubmissions() {
		return submissionDao.findAll();
	}

	@Override
	public Submission findSubmissionById(Integer id) {
		return submissionDao.findById(id).get();
	}

	@Override
	public Submission updateSubmission(Submission sub) {
		return submissionDao.save(sub);
	}

	@Override
	public void deleteSubmissionById(Integer id) {
		submissionDao.deleteById(id);
		
	}

}
