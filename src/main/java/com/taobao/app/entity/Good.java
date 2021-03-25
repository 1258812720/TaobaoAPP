package com.taobao.app.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Good {
    private int id;
    private String name;
    private int weight;
    private String link;
    private String descript;
    private String price;
    private double discount;
    private int s_vol;
}
