package com.taobao.app.service.searchprev;

import com.taobao.app.entity.Result;
import com.taobao.app.mapper.PriviewMapper;
import com.taobao.app.service.searchprev.PreviewService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.LinkedList;

@Service
public class PreviewServiceImpl implements PreviewService {
    @Resource
    protected PriviewMapper priviewMapper;
    @Override
    public LinkedList<Result> getResult(String keyword){
        return priviewMapper.getResult(keyword);
    }
}
