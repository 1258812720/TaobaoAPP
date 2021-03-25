package com.taobao.app.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Table {
    private int id;
    private String title;
    private String link;
    private String img;
    private String table;
}
