package com.nofriend.sonmandube.handwriting.application;

import com.nofriend.sonmandube.handwriting.controller.request.HandwritingApplicationRequest;
import com.nofriend.sonmandube.handwriting.controller.request.SearchConditionRequest;
import com.nofriend.sonmandube.handwriting.controller.response.SimpleHandwritingResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

public interface HandwritingService {

    void applyHandwriting(HandwritingApplicationRequest handwritingApplicationRequest, MultipartFile image);

    void saveFont(String name, MultipartFile font);

    List<SimpleHandwritingResponse> searchHandwriting(int start, int count, SearchConditionRequest condition);
}
