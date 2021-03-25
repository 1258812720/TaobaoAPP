package com.taobao.app.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Picture {
    private int id;
    private String link;
    private String src;
    private int weight;
    private String pno;
}
