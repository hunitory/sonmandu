package com.nofriend.sonmandube.handwriting.application;

import com.nofriend.sonmandube.handwriting.controller.request.HandwritingApplicationRequest;
import org.springframework.web.multipart.MultipartFile;

public interface HandwritingService {

    void applyHandwriting(HandwritingApplicationRequest handwritingApplicationRequest, MultipartFile image);
}
