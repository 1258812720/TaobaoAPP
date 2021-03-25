package com.taobao.app.uitls;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.junit.Test;

import java.util.Date;
import java.util.NoSuchElementException;

public class JWTUtils {
    private static final String SUBJECT = "position";

    private static final long TIME = 1000 * 60 * 60 * 24;
    private static final String SCRIPT="xd666";
    //加密
    public static String Encode(String u_id, String u_pd) {
        String token = null;
        if (!"".equalsIgnoreCase(u_id) && !"".equalsIgnoreCase(u_pd)) {
            token = Jwts.builder().setSubject(SUBJECT)
                    .claim("u_id", u_id).claim("u_pd", u_pd).setIssuedAt(new Date())
                    .setExpiration(new Date(System.currentTimeMillis() + TIME)).signWith(SignatureAlgorithm.HS256, SCRIPT)
                    .compact();
        }
        return token;
    }

    //解密
    public static Claims Decode(String token) {
        if ("".equalsIgnoreCase(token)) {
            throw new NoSuchElementException();
        }
        return Jwts.parser().setSigningKey(SCRIPT)
                .parseClaimsJws(token).getBody();
    }

    @Test
    public void fun() {
        String s = "张三";
        String s1 = Encode(s, s);
        System.out.println("B\t" + s1);
        Claims claims = Decode(s1);
        System.out.println("A\t" + claims.get("u_id"));
    }
}
