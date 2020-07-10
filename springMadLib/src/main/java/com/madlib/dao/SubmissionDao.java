package com.madlib.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.madlib.model.Submission;

@Repository
public interface SubmissionDao extends JpaRepository<Submission, Integer> {

}
