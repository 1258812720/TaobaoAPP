package com.taobao.app.uitls;

import com.taobao.app.config.RedisConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;

import java.util.concurrent.TimeUnit;

@Component
public class RedisUtil {
    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    public RedisUtil(RedisTemplate<String, Object> redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    //过期时间 单位小时
    public boolean expire(String key, long time) {

        try {
            if (time > 0)
                redisTemplate.expire(key, time, TimeUnit.HOURS);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
