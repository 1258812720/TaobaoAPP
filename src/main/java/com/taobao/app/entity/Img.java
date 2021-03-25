package com.taobao.app.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Img {
    private int id;
    private String link;
    private String img_url;
    private String title;
    private Integer type;
}
