package com.taobao.app.uitls;



import org.springframework.data.annotation.Reference;

import javax.annotation.Resource;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import static java.lang.annotation.RetentionPolicy.RUNTIME;

@Target(ElementType.ANNOTATION_TYPE)
@Retention(RUNTIME)
public @interface Reader{
    String[] value();
}
