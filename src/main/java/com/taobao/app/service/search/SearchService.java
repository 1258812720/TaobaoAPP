package com.taobao.app.service.search;

import com.taobao.app.entity.Depository;
import com.taobao.app.entity.Search;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedList;

@Service
public interface SearchService {
    ArrayList<Search> SearchResult(String keyword);

    LinkedList<Depository> search(String word, String type, int index);
}
