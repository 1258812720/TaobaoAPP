package com.taobao.app.service.searchprev;

import com.taobao.app.entity.Result;
import org.springframework.stereotype.Service;

import java.util.LinkedList;

@Service
public interface PreviewService {
    LinkedList<Result> getResult(String keyword);
}
