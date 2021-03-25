package com.taobao.app.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Search {
    private String link;//物品详情页连接
    private String name;//物品标题
    private String description;//文本描述
    private String img_url;//图片地址
    private double price;//价格
    private String pno;
}
