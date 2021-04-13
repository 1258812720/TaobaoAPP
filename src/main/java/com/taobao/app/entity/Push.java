package com.taobao.app.entity;

import lombok.Data;

@Data
public class Push {
    private int id;
    private String link;
    private String src;
    private String description;
    private String title;
    private int appraise;
}
