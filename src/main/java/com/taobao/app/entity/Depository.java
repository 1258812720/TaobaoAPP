package com.taobao.app.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

//商品搜索Pojo
@Data
@NoArgsConstructor
public class Depository {
    private int id;
    private String src;//图片店址
    private String name;//商品名字
    private String link;//跳转链接
    private String pno;//商品编号
    private Integer sale_quota;//销量
    private String type_no;//类型编号
    private int parcle;//是否包邮
    private String site;//原地址
    private String pic_no;//展示图编号
    private float price;//商品价格
    private String descript;//商品描述
}
