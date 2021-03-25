/*
 Navicat Premium Data Transfer

 Source Server         : 本地数据库
 Source Server Type    : MySQL
 Source Server Version : 80012
 Source Host           : localhost:3306
 Source Schema         : taobao

 Target Server Type    : MySQL
 Target Server Version : 80012
 File Encoding         : 65001

 Date: 25/03/2021 21:47:26
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for day_tell
-- ----------------------------
DROP TABLE IF EXISTS `day_tell`;
CREATE TABLE `day_tell`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `link` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `create_date` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of day_tell
-- ----------------------------
INSERT INTO `day_tell` VALUES (1, '淘宝618大促报名', 'https://market.m.taobao.com/app/qn/toutiao-new/index-pc.html?spm=a21bo.2017.201865.1.5af911d9wFmsEZ&acm=lb-zebra-634493-8610090.1003.4.8191155&_k=2tdfm8&scm=1003.4.lb-zebra-634493-8610090.OTHER_15917303771311_8191155#/detail/10633210?_k=2tdfm8', '2021-01-04 15:56:06');
INSERT INTO `day_tell` VALUES (2, '从麒麟到獬豸，古人为何将这些“神', 'https://www.chinanews.com/cul/2021/03-21/9437105.shtml', '2021-03-21 11:41:54');
INSERT INTO `day_tell` VALUES (5, '冰岛火山持续喷发 熔岩不断喷涌裂', 'https://www.chinanews.com/tp/hd2011/2021/03-21/976369.shtml', '2021-03-21 11:41:52');
INSERT INTO `day_tell` VALUES (6, '去年乳制品消费增速达8% 今年乳', 'https://www.chinanews.com/cj/2021/03-21/9437018.shtml', NULL);
INSERT INTO `day_tell` VALUES (7, '互联网时代的网红打卡地', 'https://www.chinanews.com/cj/2021/03-21/9437019.shtml', NULL);

-- ----------------------------
-- Table structure for good_type
-- ----------------------------
DROP TABLE IF EXISTS `good_type`;
CREATE TABLE `good_type`  (
  `id` int(11) NOT NULL,
  `type_no` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '商品编号（外键）',
  `type_name` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '类型名',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of good_type
-- ----------------------------

-- ----------------------------
-- Table structure for left_lead
-- ----------------------------
DROP TABLE IF EXISTS `left_lead`;
CREATE TABLE `left_lead`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `link` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 42 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of left_lead
-- ----------------------------
INSERT INTO `left_lead` VALUES (1, '女装', 'https://huodong.taobao.com/wow/a/act/tao/dailyact/2633/wupr?spm=a21bo.2017.201867-main.1.5af911d9wFmsEZ&wh_pid=dailyAct-214753&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_15917466927491_8193767');
INSERT INTO `left_lead` VALUES (2, '内衣', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.2.5af911d9wFmsEZ&q=%E5%86%85%E8%A1%A3&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_15917466927491_8193767');
INSERT INTO `left_lead` VALUES (3, '家居', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.3.5af911d9wFmsEZ&q=%E5%AE%B6%E5%B1%85&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_15917466927491_8193767');
INSERT INTO `left_lead` VALUES (4, '女鞋', 'https://huodong.taobao.com/wow/a/act/tao/dailyact/2772/wupr?spm=a21bo.2017.201867-main.4.5af911d9wFmsEZ&wh_pid=dailyAct-216657&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_15917463080002_8193767');
INSERT INTO `left_lead` VALUES (5, '男鞋', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.5.5af911d9wFmsEZ&sourceId=tb.index&q=%E7%94%B7%E9%9E%8B&imgfile=&initiative_id=tbindexz_20170306&commend=all&acm=lb-zebra-634493-8613077.1003.4.8193767&ie=utf8&scm=1003.4.lb-zebra-634493-8613077.OTHER_15917463080002_8193767&ssid=s5-e&search_type=item');
INSERT INTO `left_lead` VALUES (6, '箱包', 'https://www.taobao.com/markets/bao/xiangbao?spm=a21bo.2017.201867-main.6.5af911d9wFmsEZ&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_15917463080002_8193767');
INSERT INTO `left_lead` VALUES (7, '母婴', 'https://www.taobao.com/markets/qbb/index?spm=a21bo.2017.201867-main.7.5af911d9wFmsEZ&pvid=b9f2df4c-6d60-4af4-b500-c5168009831f&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_15917474622463_8193767');
INSERT INTO `left_lead` VALUES (8, '童装', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.8.5af911d9wFmsEZ&q=%E7%AB%A5%E8%A3%85&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_15917474622463_8193767');
INSERT INTO `left_lead` VALUES (9, '玩具', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.9.5af911d9wFmsEZ&q=%E7%8E%A9%E5%85%B7&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_15917474622463_8193767');
INSERT INTO `left_lead` VALUES (10, '男装', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.10.5af911d9wFmsEZ&q=%E7%94%B7%E8%A3%85&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_15917476522384_8193767');
INSERT INTO `left_lead` VALUES (11, '运动', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.11.5af911d9wFmsEZ&q=%E8%BF%90%E5%8A%A8%E6%88%B7%E5%A4%96&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_15917476522384_8193767');
INSERT INTO `left_lead` VALUES (12, '美妆', 'https://mei.taobao.com/?spm=a21bo.2017.201867-main.12.5af911d9wFmsEZ&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_15917457284965_8193767');
INSERT INTO `left_lead` VALUES (13, '彩妆', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.13.5af911d9wFmsEZ&q=%E5%BD%A9%E5%A6%86&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_15917457284965_8193767');
INSERT INTO `left_lead` VALUES (14, '个护', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.14.5af911d9wFmsEZ&q=%E4%B8%AA%E6%8A%A4&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_15917457284965_8193767');
INSERT INTO `left_lead` VALUES (15, '手机', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.15.5af911d9wFmsEZ&q=%E6%89%8B%E6%9C%BA&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_15917453437486_8193767');
INSERT INTO `left_lead` VALUES (16, '数码', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.16.5af911d9wFmsEZ&q=%E6%95%B0%E7%A0%81&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_15917453437486_8193767');
INSERT INTO `left_lead` VALUES (17, '企业', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.17.5af911d9wFmsEZ&q=%E5%8A%9E%E5%85%AC&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_15917453437486_8193767');
INSERT INTO `left_lead` VALUES (18, '大家电', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.18.5af911d9wFmsEZ&q=%E5%A4%A7%E5%AE%B6%E7%94%B5&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_15917464979967_8193767');
INSERT INTO `left_lead` VALUES (19, '电器', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.19.5af911d9wFmsEZ&q=%E7%94%9F%E6%B4%BB%E7%94%B5%E5%99%A8&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_15917464979967_8193767');
INSERT INTO `left_lead` VALUES (20, '零食', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.20.5af911d9wFmsEZ&q=%E9%9B%B6%E9%A3%9F&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_15917461132498_8193767');
INSERT INTO `left_lead` VALUES (21, '生鲜', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.21.5af911d9wFmsEZ&q=%E7%94%9F%E9%B2%9C&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_15917461132498_8193767');
INSERT INTO `left_lead` VALUES (22, '茶酒', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.22.5af911d9wFmsEZ&q=%E8%8C%B6%E9%85%92&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_15917461132498_8193767');
INSERT INTO `left_lead` VALUES (23, '厨具', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.23.5af911d9wFmsEZ&q=%E5%8E%A8%E5%85%B7&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_15917441895059_8193767');
INSERT INTO `left_lead` VALUES (24, '收纳', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.24.5af911d9wFmsEZ&q=%E6%94%B6%E7%BA%B3&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_15917441895059_8193767');
INSERT INTO `left_lead` VALUES (25, '清洁', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.25.5af911d9wFmsEZ&q=%E6%B8%85%E6%B4%81&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_15917441895059_8193767');
INSERT INTO `left_lead` VALUES (26, '家纺', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.26.5af911d9wFmsEZ&q=%E5%AE%B6%E7%BA%BA&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_159174380475710_8193767');
INSERT INTO `left_lead` VALUES (27, '家饰', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.27.5af911d9wFmsEZ&q=%E5%AE%B6%E9%A5%B0&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_159174380475710_8193767');
INSERT INTO `left_lead` VALUES (28, '鲜花', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.28.5af911d9wFmsEZ&q=%E9%B2%9C%E8%8A%B1&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_159174380475710_8193767');
INSERT INTO `left_lead` VALUES (29, '图书', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.29.5af911d9wFmsEZ&q=%E5%9B%BE%E4%B9%A6%E9%9F%B3%E5%83%8F&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_159174495900511_8193767');
INSERT INTO `left_lead` VALUES (30, '文具', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.30.5af911d9wFmsEZ&sourceId=tb.index&q=%E6%96%87%E5%85%B7&imgfile=&initiative_id=tbindexz_20170306&commend=all&acm=lb-zebra-634493-8613077.1003.4.8193767&ie=utf8&scm=1003.4.lb-zebra-634493-8613077.OTHER_159174495900511_8193767&ssid=s5-e&search_type=item');
INSERT INTO `left_lead` VALUES (31, '医药', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.31.5af911d9wFmsEZ&q=%E5%8C%BB%E8%8D%AF%E4%BF%9D%E5%81%A5&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_159174457425712_8193767');
INSERT INTO `left_lead` VALUES (32, '进口', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.32.5af911d9wFmsEZ&stats_click=search_radio_all%3A1&q=%E8%BF%9B%E5%8F%A3&imgfile=&initiative_id=staobaoz_20201113&js=1&acm=lb-zebra-634493-8613077.1003.4.8193767&ie=utf8&scm=1003.4.lb-zebra-634493-8613077.OTHER_159174457425712_8193767');
INSERT INTO `left_lead` VALUES (33, '汽车', 'https://car.tmall.com/wow/car/act/carfp?spm=a21bo.2017.201867-main.33.5af911d9wFmsEZ&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_159174265051413_8193767');
INSERT INTO `left_lead` VALUES (34, '二手车', 'https://www.taobao.com/markets/paimai/ali2car?spm=a21bo.2017.201867-main.34.5af911d9wFmsEZ&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_159174265051413_8193767');
INSERT INTO `left_lead` VALUES (35, '用品', 'https://car.tmall.com/wow/car/act/carfp?spm=a21bo.2017.201867-main.35.5af911d9wFmsEZ&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_159174265051413_8193767');
INSERT INTO `left_lead` VALUES (36, '房产', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.36.5af911d9wFmsEZ&stats_click=search_radio_all%3A1&q=%E5%A4%A9%E7%8C%AB%E5%A5%BD%E6%88%BF&imgfile=&initiative_id=staobaoz_20200925&js=1&acm=lb-zebra-634493-8613077.1003.4.8193767&ie=utf8&scm=1003.4.lb-zebra-634493-8613077.OTHER_159174226576614_8193767');
INSERT INTO `left_lead` VALUES (37, '装修', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.37.5af911d9wFmsEZ&q=%E8%A3%85%E4%BF%AE&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_159174226576614_8193767');
INSERT INTO `left_lead` VALUES (38, '建材', 'https://car.tmall.com/wow/car/act/carfp?spm=a21bo.2017.201867-main.35.5af911d9wFmsEZ&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_159174265051413_8193767');
INSERT INTO `left_lead` VALUES (39, '手表', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.39.5af911d9wFmsEZ&q=%E6%89%8B%E8%A1%A8&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_159174342001415_8193767');
INSERT INTO `left_lead` VALUES (40, '眼镜', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.40.5af911d9wFmsEZ&q=%E7%9C%BC%E9%95%9C&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_159174342001415_8193767');
INSERT INTO `left_lead` VALUES (41, '珠宝', 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.41.5af911d9wFmsEZ&q=%E7%8F%A0%E5%AE%9D%E9%A5%B0%E5%93%81&acm=lb-zebra-634493-8613077.1003.4.8193767&scm=1003.4.lb-zebra-634493-8613077.OTHER_159174342001415_8193767');

-- ----------------------------
-- Table structure for pageimg
-- ----------------------------
DROP TABLE IF EXISTS `pageimg`;
CREATE TABLE `pageimg`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `img_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` int(11) NULL DEFAULT NULL,
  `link` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of pageimg
-- ----------------------------
INSERT INTO `pageimg` VALUES (1, '123', 'https://img.alicdn.com/imgextra/i2/1699911/O1CN014qCvto2N5I3bPm1BZ_!!1699911-0-lubanu.jpg_290x290q90.jpg', 2, 'https://pages.tmall.com/wow/a/act/tmall/dailygroup/2367/wupr?spm=a21bo.2017.201860.1.5af911d9wFmsEZ&wh_pid=daily-229553');
INSERT INTO `pageimg` VALUES (2, '123', 'https://aecpm.alicdn.com/imgextra/i3/2208926733562/O1CN01FCkjwh1cBRQUp2Jbu_!!2208926733562-0-alimamazszw.jpg', 2, 'https://click.mz.simba.taobao.com/ecpm?spm=a21bo.2017.201861.1&e=A%2BPdEnk0CzcPO53EdXrfSxsQmLP5zomMRv9MPepkwpAiNVXQULOGbjMqgaMAeobxGqxX58l3HcuRrr2wUjIWok9%2BQfFhoGaftbR9sxq9q4gLhIFrJfzXOZxvsIw%2Biy5zIMunY1jRPJ7pLRF75Vo%2BsvyhIDy34miKVbowjaJe108wvP7PBaJ0dg2GMBZKyEpzivpyZ29WPjgi4M96WdViVO6EvXrt65NNm16XHRGztJx%2BviG5zz2TA9ow%2FgiDlafq6nkUJ60opfep89ifoL%2F8IpiZZYQhTPGq0Lixx9WId0PG6eJl78XMEeTMBWSIAy47cyXOcG9nCrZpTvIh6trnMyInRZMiSuhtnufBxF40AFkiNiMmkJyF%2F5sKTPbseDxwRPIvqwCJthzsuxOFkQYyuZMTk0MISPGFCzVhKe5h%2B8tqJkk1dyEoKKe8KDSxZf2jseh%2FfCgCdTX7l9%2BHRPej3M4EylWLh3F1OwZmYf9mgetIUdFhXUxHbM11oEZFEkpb0Reyncoe44hJCKV0cF%2F6tmxHUbv9PKwAe258DoMd5EQjPRjq65V%2BMUekr3rG%2BGcrYNPaWOWOSq2OipbHeWOrpe9O7nAdXCy2UQiuZMkFnTgmGZzGiaWTB%2BOxmF9%2Fo5EEpXd5XPOMSluBZPFtYimErtqOa4IK1HmcvvNhBIX5umArPgwdUk4bom66rqbX6%2F5zT%2FA5T0iiBP0%3D&u=https%3A%2F%2Fdetail.tmall.com%2Fitem.htm%3Fid%3D627212215127&k=717');

-- ----------------------------
-- Table structure for storehouse_one
-- ----------------------------
DROP TABLE IF EXISTS `storehouse_one`;
CREATE TABLE `storehouse_one`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `link` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `description` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of storehouse_one
-- ----------------------------
INSERT INTO `storehouse_one` VALUES (1, '1', '1', '1');

-- ----------------------------
-- Table structure for tb_banner
-- ----------------------------
DROP TABLE IF EXISTS `tb_banner`;
CREATE TABLE `tb_banner`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `link` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `img_url` varchar(2550) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` int(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_banner
-- ----------------------------
INSERT INTO `tb_banner` VALUES (1, 'https://click.mz.simba.taobao.com/ecpm?spm=a21bo.2017.201880.1&e=LCZfeFJ2RpYPO53EdXrfSxsQmLP5zomMloKeAH5yYBzCfuyyWDdyrwrFfhc1c1ok%2FfcNzV1U8wOgGyyV4D%2F0gmheuDxZoquNtbR9sxq9q4hbP149m5qBPD7zafLYqSDvBzc0G8byMzbdDtmXJlqwIMmCoJr055hEm40GZdK5w%2B2B%2ByMQxLFuHJtMj7ztAAG4vbxQGcga2R59fplDkGFny4PFkKVO%2FA3SQlN2TQyg%2FZgEzaS6wjvnhkXaoDD%2BcWBi3eMB5CM19kn599noLEvH5uLMbwZoJzzhs6dzQyIq5XXiWrJEw2MaUvr50rbzcvchebiz%2BlKoGgg%2BUzoarLEkPu23HvcveufMEV86Eq5LNELBrpZGbKKARD3jMX8BRyFxf8EN0UZ45U8LPUot3GIK7w62CdoSWtkXSeOC%2FWDsvYEyfheT5o8B1TcHNFCv%2Fv87Kz4MHVJOG6KJdfWbQCR3o8NWMDrIZtwj&u=https%3A%2F%2Falimarket.tmall.com%2Fmarkets%2Falimama%2Fmingdian%3Fali_trackid%3D19_d5de4f43182ead734b54141aa705f0a9&k=481', 'https://img.alicdn.com/simba/img/TB1XlOHeekJL1JjSZFmSuww0XXa.jpg', '广告', 1);

-- ----------------------------
-- Table structure for tb_media
-- ----------------------------
DROP TABLE IF EXISTS `tb_media`;
CREATE TABLE `tb_media`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `link` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `src` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `pno` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_media
-- ----------------------------
INSERT INTO `tb_media` VALUES (1, 'https://huodong.taobao.com/wow/pm/act/daily/a70424?spm=a21bo.2017.201862-5.d201405060021.5af911d9C626yU', 'https://img.alicdn.com/imgextra/i3/2206686532409/O1CN017jWuet1TfMmpflDDV_!!2206686532409-0-lubanimage.jpg', 1);
INSERT INTO `tb_media` VALUES (2, 'https://click.mz.simba.taobao.com/ecpm?spm=a21bo.2017.201862-4.1&e=uEfhc4LXpH8PO53EdXrfSxsQmLP5zomMloKeAH5yYByMCQZdgTlfp2FFLEyvFXIvD%2BTMkSbGqrcTHUVCwt9Ac3AVoRTfGNK4tbR9sxq9q4hbP149m5qBPJPRH1ggI8FUReYFkxB17pJkCAzqTo8u5TMN8WTXaraHmScanS04T5eTfaYlUDD%2B9ZbVG%2FM80hfWAclg1IJUZZhIkkjvsHahacmoJw4GIshL5UdTCyUbaH5NBKG9FhEkX%2BUz%2BQS9jTYJADFK7edTSrgI4rILRNAGGZss4PKsZTi1R29c%2B3keNzhPekGKi1mqPIDHPmm245U8JEBKBysookhY7a5%2FtQENXkil%2BTjjWgbqILfqZHgtrhHOhNEoVLmf%2BGLmftcaW2Q5W5DKMr8z8gRyDlZSzOBIZ7t40AalsdoH9%2FOabqf7V8CETN56VbqDR928lrsDhB4KHsjb%2Fv8H%2FKBqrzWOLykH8FYtORf938yE5zfN7VyKFTTQ5sEAtuUK%2F4wJhfKOThcEM8fdT4n8GEAoFYqiq0MxLk6ASqo4ss9vtFA8YtBRdYmaLf39BQDZ0k48k4zWX8qo7ImKoxFuj1eO9xn9gWe8aHHIwYOHkV%2FJ5wp0oDxQAmNwkCarO1W7hnXbVxr%2BBxTPpdX8OCU8aA8hy%2B5yTN%2B3VqYDitoWhg83X8d8ESBdVYLUFZTqs35r8gviZ5%2BuqQ9MY6NLATB8hxrOmPRFjwon%2Bw%3D%3D&u=https%3A%2F%2Fshop57300897.taobao.com&k=729', 'https://aecpm.alicdn.com/imgextra/i3/118266366/O1CN01GcMGqX1wtg10LvMmI_!!118266366-0-alimamazszw.jpg', 2);
INSERT INTO `tb_media` VALUES (3, 'https://click.mz.simba.taobao.com/ecpm?spm=a21bo.2017.201862-3.1&e=FSWT5jCC8GYPO53EdXrfSxsQmLP5zomMqK0EWs2KVHM2gCc4GT%2F4sZXRK%2F9oUiQ%2BswGQut3vtdfPCTuwXgB8pp4ssn7JGsFDtbR9sxq9q4hbP149m5qBPAUxj5B42Iyf5xIvOwrTwiU70Vn7T5zZUKXQCZSk7vwrXZfGu7%2F4Qi5BNEcvAdmyjcxgvb2XzsqnAclg1IJUZZgvIkm10lL9CGsfttft7%2BepzJVcgdRExN4HTD8Q%2FVA1R1ukADMc2%2BLwAz0%2FzuYXumOp89ifoL%2F8IpiZZYQhTPGq0Lixx9WId0PG6eJl78XMEeMn%2B0Wpwk5MGw%2B1b3la%2BWxzJc5wb2cKtmb6VYCf2gFQIidFkyJK6G2e58HEXjQAWSI2IyaQnIX%2FmwpM9ux4PHBE8i%2BrAIm2HOy7E4WRBjK5vnuJXNOeHikLNWEp7mH7y2omSTV3ISgop7woNLFl%2FaOx6H98KAJ1NdDgE3aUe5bHuIAJzisxbG87BmZh%2F2aB60hR0WFdTEdszXWgRkUSSlvRF7Kdyh7jiEkIpXRwX%2Fq2bEdRu%2F08rAB7bnwOgx3kRCM9GOrrlX4x2kYN8AUTtU2r6Ppj8lIo7YS1USzsQ%2BELDigbvIJHKTCg76jlexqyR%2F6s9QxDG08pEQ6jeu4SEHV1cLs94TaY%2BZ1pB88fTloG2MSMxH2ilwmwwKVFWydTjXIhnfXC1iABzVf1ua09JHp4tlYKirgxVFlLAL581Ssp&u=https%3A%2F%2Fdetail.tmall.com%2Fitem.htm%3Fid%3D635684796136%26scene%3Dtaobao_shop%26sku_properties%3D122216431%3A27772&k=737', 'https://aecpm.alicdn.com/imgextra/i4/370627083/O1CN019oGHEJ22C3zfcwHtR_!!370627083-0-alimamazszw.jpg', 3);
INSERT INTO `tb_media` VALUES (4, 'https://pages.tmall.com/wow/a/act/tmall/dailyact/3309/wupr?spm=a21bo.2017.201862-1.d201405060011.5af911d9C626yU&wh_pid=dailyAct-235715', 'https://img.alicdn.com/imgextra/i3/2206686532409/O1CN01R6aP4k1TfMmny0nfL_!!2206686532409-0-lubanimage.jpg', 5);
INSERT INTO `tb_media` VALUES (5, 'https://pages.tmall.com/wow/a/act/tmall/dailyact/1541/wupr?spm=a21bo.2017.201862-https://click.mz.simba.taobao.com/ecpm?spm=a21bo.2017.201862-2.1&e=0x3GLLWn9%2FsPO53EdXrfSxsQmLP5zomMKeg0QwDZS8P6ezl3uxbr9mQwhrQ4v9Ts6T4fGADWgcPBHnxzb1prOCoBWAvrxaAXtbR9sxq9q4hbP149m5qBPDmKjytsVhuCGX4xQeXbOO0X1NaIpHQq1KHbp%2BDiwhxOUq2agOLTInkcwPM1CjSU9eK8uDv6mS8iEF7odZvIwIlvGz2VBpdNEVJDm2CzMVhwvjPscu7KRwJJqxyfqNHEmG7SG1Vv4ZhleZYTEumSkYMI4rILRNAGGZss4PKsZTi1R29c%2B3keNzglTc58GZdwWYDHPmm245U8JEBKBysookhY7a5%2FtQENXkil%2BTjjWgbqILfqZHgtrhHOhNEoVLmf%2BL6vHPKJEUz2W5DKMr8z8gRyDlZSzOBIZ7t40AalsdoHZsH2T1SLIy2%2BrBFjn15zz2C0Fj2AF%2FVrHsjb%2Fv8H%2FKBqrzWOLykH8FYtORf938yE08M%2F3RHzU%2FPQ5sEAtuUK%2F2gfA8PsfdEaM8fdT4n8GEAoFYqiq0MxLk6ASqo4ss9vtFA8YtBRdYmaLf39BQDZ0k48k4zWX8qo7ImKoxFuj1fmMfMV6BdPPX51YRIwrsvy5wp0oDxQAmNwkCarO1W7hnXbVxr%2BBxTPpdX8OCU8aA8vqdO5GkbgvTcynM%2Bi23%2FHX8d8ESBdVYL2Bv4wWXPKpwviZ5%2BuqQ9MUgfjBY%2F8uUMh%2BYFCWJDA5A%3D%3D&u=https%3A%2F%2Fxiaoyijiaju.tmall.com%2Fsearch.htm%3Fsearch%3Dy&k=729228980', 'https://gw.alicdn.com/imgextra/i2/1725301/O1CN01VFJi701p1uC6B4xfA_!!1725301-0-https://aecpm.alicdn.com/imgextra/i3/3974170080/O1CN01msrJhu1CSgKTpJgZ8_!!3974170080-0-alimamazszw.jpg', 4);

-- ----------------------------
-- Table structure for tb_more
-- ----------------------------
DROP TABLE IF EXISTS `tb_more`;
CREATE TABLE `tb_more`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `link` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `img` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `price` int(11) NULL DEFAULT 10 COMMENT '价格',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 47 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_more
-- ----------------------------
INSERT INTO `tb_more` VALUES (1, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.1.5af911d9jkaHHk&scm=1007.12493.92624.100200300000001&id=542807824833&pvid=013b63cf-8d23-4cf2-9fbd-095ca87c3880', 'https://img.alicdn.com/bao/uploaded/i2/644970537/TB1kKQ8a8TH8KJjy0FiXXcRsXXa_!!0-item_pic.jpg_200x200q90.jpg_.webp', 29, '塑料鞋架简易门口门后经济型多层宿舍大学生寝室鞋子收纳家用鞋柜');
INSERT INTO `tb_more` VALUES (2, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.3.5af911d9jkaHHk&scm=1007.12493.92624.100200300000001&id=539156785785&pvid=013b63cf-8d23-4cf2-9fbd-095ca87c3880', 'https://img.alicdn.com/bao/uploaded/i4/TB1khBiNXXXXXcsXXXXXXXXXXXX_!!0-item_pic.jpg_200x200q90.jpg_.webp', 12, 'TP-LINK TL-WAR308 企业级300M无线VPN路由器');
INSERT INTO `tb_more` VALUES (3, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.5.5af911d9jkaHHk&scm=1007.12493.92624.100200300000001&id=565532224049&pvid=013b63cf-8d23-4cf2-9fbd-095ca87c3880', 'https://img.alicdn.com/bao/uploaded/i2/685905182/TB2h_I5fH1YBuNjSszeXXablFXa_!!685905182.jpg_200x200q90.jpg_.webp', 10, '家用浴室置物架卫生间落地式角架厕所洗手间收纳架厨房塑料储物架');
INSERT INTO `tb_more` VALUES (4, 'https://srd.simba.taobao.com/rd?spm=a21bo.2017.201876.7.5af911d9jkaHHk&w=mmp4ptest&f=http%3A%2F%2Fre.taobao.com%2Faction_ecpm_home%3Fkeyword%3D%26catid%3D50228001%26refpid%3D430628_1007%26crtid%3D1628919229%26itemid%3D596910109333%26adgrid%3D1931988138%26elemtid%3D1%26clk1info%3D1393533153%2C64%2C27zj2RiYSjxyh6h3v0o3y4HVOoBPOlJa6O2P1wzUNkHUAfQ4UUssOLi1pX48ANjk%26sbid%3D%3B%3B%2C%3B38295%2C41331%2C260257%2C3286081%26qtype%3D5%26tagvalue%3D6750769323389490295_0_100%26isf%3D0%26templateid%3D100&k=85dde844b820e934&pvid=46dd5c0b7b7fe7006047016e077dcb56&p=430628_1007&scm=1007.12493.92624.100200300000007', 'https://img.alicdn.com/bao/uploaded/i4/50438999/O1CN01woAu8T2GLam2vpKRa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp', 10, '先科无线蓝牙吸顶音响天花嵌入式喇叭');
INSERT INTO `tb_more` VALUES (5, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.9.5af911d9jkaHHk&scm=1007.12493.92624.100200300000001&id=530702814734&pvid=013b63cf-8d23-4cf2-9fbd-095ca87c3880', 'https://img.alicdn.com/bao/uploaded/i2/2870364787/TB2a4QXnVXXXXajXFXXXXXXXXXX_!!2870364787.jpg_200x200q90.jpg_.webp', 10, '2021年新茶西湖龙井茶叶碎茶片碎茶心散装500g绿茶春茶茶农直销');
INSERT INTO `tb_more` VALUES (6, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.19.5af911d9jkaHHk&scm=1007.12493.92624.100200300000001&id=520487973627&pvid=013b63cf-8d23-4cf2-9fbd-095ca87c3880', 'https://img.alicdn.com/bao/uploaded/i4/487474977/TB2bWOxaeLyQeBjy1XaXXcexFXa_!!487474977.jpg_200x200q90.jpg_.webp', 10, '乐器电子琴吉他音乐无线转发器成品FM调频发射器高保真无线话筒');
INSERT INTO `tb_more` VALUES (7, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.21.5af911d9jkaHHk&scm=1007.12493.92624.100200300000001&id=544035849679&pvid=013b63cf-8d23-4cf2-9fbd-095ca87c3880', 'https://img.alicdn.com/bao/uploaded/i4/2841721271/TB2xReob3JkpuFjSszcXXXfsFXa_!!2841721271.jpg_200x200q90.jpg_.webp', 10, '蓝牙音箱通用无线低音炮店铺用小音响专用商用服装店双喇叭大音量');
INSERT INTO `tb_more` VALUES (8, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.23.5af911d9jkaHHk&scm=1007.12493.92624.100200300000001&id=554816508029&pvid=013b63cf-8d23-4cf2-9fbd-095ca87c3880', 'https://img.alicdn.com/bao/uploaded/i3/929512761/O1CN01Qe5WiX1WGaBcv26sd_!!929512761.jpg_200x200q90.jpg_.webp', 10, '不锈钢鞋架多层简易鞋架子收纳神器鞋柜子组装家用好看经济型鞋架');
INSERT INTO `tb_more` VALUES (9, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.25.5af911d9jkaHHk&scm=1007.12493.92624.100200300000001&id=546538168994&pvid=013b63cf-8d23-4cf2-9fbd-095ca87c3880', 'https://img.alicdn.com/bao/uploaded/i2/2730937165/TB25fYwhlNkpuFjy0FaXXbRCVXa_!!2730937165.jpg_200x200q90.jpg_.webp', 10, '卫生间置物架浴室厕所收纳整理架多层长方形物品架塑料置物架落地');
INSERT INTO `tb_more` VALUES (10, 'https://srd.simba.taobao.com/rd?spm=a21bo.2017.201876.27.5af911d9jkaHHk&w=mmp4ptest&f=http%3A%2F%2Fre.taobao.com%2Faction_ecpm_home%3Fkeyword%3D%25D0%25AC%25BC%25DC%26catid%3D50006533%26refpid%3D430628_1007%26crtid%3D1632829849%26itemid%3D608017504036%26adgrid%3D1942271067%26elemtid%3D1%26clk1info%3D1393533153%2C56%2CXQ1AfWOHNCbFzDZMTdI%252BwsCldnuzdKw2KMcDi0mZEaY3KOy5AdFAfg%253D%253D%26sbid%3D%3B%3B%2C%3B38295%2C41331%2C260257%2C3286081%26qtype%3D1%26tagvalue%3D50006533_0_100%26isf%3D0%26templateid%3D100&k=85dde844b820e934&pvid=46dd5c0b7b7fe7006047016e077dcb56&p=430628_1007&scm=1007.12493.92624.100200300000007', 'https://img.alicdn.com/bao/uploaded/i1/30035341/O1CN01CJuo521pKE32ifKzX_!!0-saturn_solar.jpg_200x200q90.jpg_.webp', 10, '鞋架不锈钢家用大号容量鞋架阳台置物架多层');
INSERT INTO `tb_more` VALUES (11, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.29.5af911d9jkaHHk&scm=1007.12493.92624.100200300000001&id=547413262219&pvid=013b63cf-8d23-4cf2-9fbd-095ca87c3880', 'https://img.alicdn.com/bao/uploaded/i4/176161480/TB2OlR9jgxlpuFjSszbXXcSVpXa_!!176161480.jpg_200x200q90.jpg_.webp', 10, '奥迪双钻 雷速登遥控车 215系列头文字D(AD86) 探险者 天马215810');
INSERT INTO `tb_more` VALUES (12, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.39.5af911d9jkaHHk&scm=1007.12493.92624.100200300000004&id=549211730911&pvid=013b63cf-8d23-4cf2-9fbd-095ca87c3880', 'https://img.alicdn.com/bao/uploaded/i3/2985122148/TB2JMTQmCBjpuFjy1XdXXaooVXa_!!2985122148.jpg_200x200q90.jpg_.webp', 10, '美式精铜黑色浴室置物架卫生间卫浴置物架转角架双层一体三角篮');
INSERT INTO `tb_more` VALUES (13, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.33.5af911d9jkaHHk&scm=1007.12493.92624.100200300000004&id=588443535498&pvid=013b63cf-8d23-4cf2-9fbd-095ca87c3880', 'https://img.alicdn.com/bao/uploaded/i4/692623791/TB2eq8OsthvOuFjSZFBXXcZgFXa_!!692623791.jpg_200x200q90.jpg_.webp', 10, '关爱多G9000定位监听 超低辐射卡通 男女学生可爱 儿童监护手机');
INSERT INTO `tb_more` VALUES (14, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.35.5af911d9jkaHHk&scm=1007.12493.92624.100200300000004&id=40712282089&pvid=013b63cf-8d23-4cf2-9fbd-095ca87c3880', 'https://img.alicdn.com/bao/uploaded/i1/1040450854/TB1hWI0FVXXXXaPXXXXXXXXXXXX_!!0-item_pic.jpg_200x200q90.jpg_.webp', 10, 'TP-LINK无线AP控制器 TL-AC100 监控AP 管理吸顶式 面板式AP');
INSERT INTO `tb_more` VALUES (15, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.41.5af911d9jkaHHk&scm=1007.12493.92624.100200300000004&id=562073402855&pvid=013b63cf-8d23-4cf2-9fbd-095ca87c3880', 'https://img.alicdn.com/bao/uploaded/i1/789566842/TB2aFO5lsnI8KJjSspeXXcwIpXa_!!789566842.jpg_200x200q90.jpg_.webp', 10, '创意无线蓝牙音箱便携式迷你外放插卡重低音炮 可插U盘小音响户外');
INSERT INTO `tb_more` VALUES (16, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.43.5af911d9jkaHHk&scm=1007.12493.92624.100200300000004&id=540393105600&pvid=013b63cf-8d23-4cf2-9fbd-095ca87c3880', 'https://img.alicdn.com/bao/uploaded/i4/101538258/TB2vxXYXOgSXeFjy0FcXXahAXXa_!!101538258.png_200x200q90.jpg_.webp', 10, 'AOC E2270SWN5 E2280SWN 21.5英寸LED背光显示器M2470SWD2也有货');
INSERT INTO `tb_more` VALUES (17, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.49.5af911d9jkaHHk&scm=1007.12493.92624.100200300000001&id=567459100869&pvid=013b63cf-8d23-4cf2-9fbd-095ca87c3880', 'https://img.alicdn.com/bao/uploaded/i4/848624870/TB2TBvEdlyWBuNkSmFPXXXguVXa_!!848624870.jpg_200x200q90.jpg_.webp', 10, '不锈钢洗脸盆架子落地家用多功能卫生间浴室置物架收纳架多层支架');
INSERT INTO `tb_more` VALUES (18, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.51.5af911d9jkaHHk&scm=1007.12493.92624.100200300000001&id=536880266237&pvid=013b63cf-8d23-4cf2-9fbd-095ca87c3880', 'https://img.alicdn.com/bao/uploaded/i1/2305942103/O1CN01W93ALe1RPDaNi9OxJ_!!2305942103.jpg_200x200q90.jpg_.webp', 10, 'rc遥控越野汽车专业成人高速漂移四驱赛车电动儿童玩具车模型男孩');
INSERT INTO `tb_more` VALUES (19, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.59.5af911d9jkaHHk&scm=1007.12493.92624.100200300000004&id=540231548481&pvid=013b63cf-8d23-4cf2-9fbd-095ca87c3880', 'https://img.alicdn.com/bao/uploaded/i2/91682440/TB2vU.wXOGO.eBjSZFjXXcU9FXa_!!91682440.jpg_200x200q90.jpg_.webp', 10, 'TP-Link路由插座');
INSERT INTO `tb_more` VALUES (33, 'https://click.mz.simba.taobao.com/necpm?spm=a21bo.2017.201874-sales.21&eadt=85&p=&s=195297456&k=578&e=aukNlMO0WwT%2BV0S2YXwY5Twb3a%2FSgU4xZmUgcs99qN%2BG42vFfH5gQMAXrhDc9GGtVqh2%2FghiNPSqC4243c8WenCzZsi24QErF2wpTIixMXhQDkC1Q2VSCVsdg7ovtEvyFl0k5oaUMvnq%2FzUgJ9nDUaEqtIrxmDLfVGdhl%2BrOz0FgiZD2q%2FPQ%2FWXu3XF%2FxGZNoJgtC6QdsRLEbEqCIRYCGdUoppdaoSBAle75BSAzs1eSeWgmGniRyQgr%2Fsm3sj9ne9GrzR5tnBwtIDOg28LVtDwSggDCjOdAynftAD8p%2BYmcNvHNW6QnCGHWA%2BRMIFOd31urJs6hGYJh%2BaL19qfisD7ii9OLbbE6M3sCrhUt608XQ2P9zEYl6eGlmOETysABBiXkrxwaUQCLKkOvAfmovYdxzYlRlEJC8zYPT3xLH2wQ%2B%2BGcLuUfpfQvX%2FRVHcAT80wGks4OwOdZTxrF7O%2FKmOaknlO%2Br19%2BFzHb3RGI%2FLkL%2BLmCloY5mtZlnCezBceiyOeoCgFCjwtDE6JDa9z8%2F%2FqIcg5EOu1U9Fo%2BMRFrO%2FpzNZhjLynMs3M6U%2BprxRsX', 'https://gma.alicdn.com/bao/uploaded/i2/501630077/O1CN01r7cB1l1CRJ9BCcJ0y_!!0-saturn_solar.jpg_200x200.jpg_.webp', 10, '先科同轴吸顶喇叭蓝牙吊顶装音响功放套装');
INSERT INTO `tb_more` VALUES (20, 'https://srd.simba.taobao.com/rd?spm=a21bo.2017.201876.57.5af911d9jkaHHk&w=mmp4ptest&f=http%3A%2F%2Fre.taobao.com%2Faction_ecpm_home%3Fkeyword%3D%25D0%25AC%25BC%25DC%26catid%3D50006533%26refpid%3D430628_1007%26crtid%3D1625127851%26itemid%3D606376260368%26adgrid%3D1941613825%26elemtid%3D1%26clk1info%3D1393533153%2C56%2CKfKszhI7gP%252FFzDZMTdI%252BwsCldnuzdKw2dLmtJElYN8A3KOy5AdFAfg%253D%253D%26sbid%3D%3B%3B%2C%3B38295%2C41331%2C260257%2C3286081%26qtype%3D1%26tagvalue%3D50006533_0_100%26isf%3D0%26templateid%3D100&k=85dde844b820e934&pvid=46dd5c0b7b7fe7006047016e077dcb56&p=430628_1007&scm=1007.12493.92624.100200300000007', 'https://img.alicdn.com/bao/uploaded/i2/30035341/O1CN0125qz191pKDxZIToMJ_!!0-saturn_solar.jpg_200x200q90.jpg_.webp', 10, '不锈钢鞋架多层置物架配万向轮加粗可定制');
INSERT INTO `tb_more` VALUES (21, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.145.5af911d9jkaHHk&scm=1007.12493.92624.100200300000004&id=557180306480&pvid=013b63cf-8d23-4cf2-9fbd-095ca87c3880', 'https://img.alicdn.com/bao/uploaded/i1/739957826/TB2I8GLXqigSKJjSsppXXabnpXa_!!739957826.jpg_200x200q90.jpg_.webp', 10, '竹制简易浴缸架伸缩防滑浴室多功能浴缸置物架卫生间spa泡澡架子');
INSERT INTO `tb_more` VALUES (22, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.153.5af911d9jkaHHk&scm=1007.12493.92624.100200300000004&id=559694216001&pvid=013b63cf-8d23-4cf2-9fbd-095ca87c3880', 'https://img.alicdn.com/bao/uploaded/i3/153186991/TB2ZBrFcn1z01JjSZFCXXXY.XXa_!!153186991.jpg_200x200q90.jpg_.webp', 10, 'NIU WAN/纽万电信跑车卡通迷你超小汽车天冀儿童男女学生赛车手机');
INSERT INTO `tb_more` VALUES (23, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.161.5af911d9jkaHHk&scm=1007.12493.92624.100200300000004&id=552142840994&pvid=013b63cf-8d23-4cf2-9fbd-095ca87c3880', 'https://img.alicdn.com/bao/uploaded/i1/1660146318/TB2XjW_bxAlyKJjSZFyXXbm_XXa_!!1660146318.jpg_200x200q90.jpg_.webp', 10, '浴室置物架落地式厕所卫生间铁艺多层架子卧室厨房阳台收纳储物架');
INSERT INTO `tb_more` VALUES (24, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.1.4d2711d9YT0irk&scm=1007.12493.92624.100200300000005&id=560139303331&pvid=606b668a-4a32-4586-bad7-ae433e240ddf', 'https://img.alicdn.com/bao/uploaded/i4/TB1LjVsi4uaVKJjSZFjYXIjmpXa_M2.SS2_200x200q90.jpg_.webp', 10, 'EOH原创设计-绿野仙踪稻草墨绿拼色长袖polo裙t宽松oversize');
INSERT INTO `tb_more` VALUES (25, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.3.4d2711d9YT0irk&scm=1007.12493.92624.100200300000005&id=552984986151&pvid=606b668a-4a32-4586-bad7-ae433e240ddf', 'https://img.alicdn.com/bao/uploaded/i1/669690800/TB2x8AxsR8lpuFjSspaXXXJKpXa_!!669690800.jpg_200x200q90.jpg_.webp', 10, '智能创意插座USB立式插座插排线板 多功能电源接线板拖线板可旋转');
INSERT INTO `tb_more` VALUES (26, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.5.4d2711d9YT0irk&scm=1007.12493.92624.100200300000005&id=560496947699&pvid=606b668a-4a32-4586-bad7-ae433e240ddf', 'https://img.alicdn.com/bao/uploaded/i2/437041113/TB2hYkHlPihSKJjy0FiXXcuiFXa_!!437041113.jpg_200x200q90.jpg_.webp', 10, '清仓雪铁龙C5原正厂1234567款DVD导航系统不拆CD带倒车影像无损安');
INSERT INTO `tb_more` VALUES (27, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.35.5af911d9C626yU&scm=1007.12493.92624.100200300000004&id=569201823659&pvid=6cb021a4-024c-4d8d-9dbe-b6255978c6f0', 'https://img.alicdn.com/bao/uploaded/i3/381121725/TB2KC7ojutTMeFjSZFOXXaTiVXa_!!381121725.jpg_200x200q90.jpg_.webp', 10, '欧式全铜仿古置物架卫生间置物');
INSERT INTO `tb_more` VALUES (28, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.35.5af911d9C626yU&scm=1007.12493.92624.100200300000004&id=569201823659&pvid=6cb021a4-024c-4d8d-9dbe-b6255978c6f0', 'https://img.alicdn.com/bao/uploaded/i4/629983065/TB22pXFpN1YBuNjy1zcXXbNcXXa_!!629983065.jpg_200x200q90.jpg_.webp', 10, '德国小钢炮迷你重低音炮家用闹钟电脑蓝牙音箱插卡手机无线小');
INSERT INTO `tb_more` VALUES (29, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.37.5af911d9C626yU&scm=1007.12493.92624.100200300000001&id=554895480598&pvid=6cb021a4-024c-4d8d-9dbe-b6255978c6f0', 'https://img.alicdn.com/bao/uploaded/i1/3007936718/TB2aHnkAHBnpuFjSZFGXXX51pXa_!!3007936718.jpg_200x200q90.jpg_.webp', 10, '鞋架简易家用现代经济型防尘多层铁艺省空间宿舍门口多功能置');
INSERT INTO `tb_more` VALUES (30, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.39.5af911d9C626yU&scm=1007.12493.92624.100200300000001&id=567459100869&pvid=6cb021a4-024c-4d8d-9dbe-b6255978c6f0', 'https://img.alicdn.com/bao/uploaded/i4/848624870/TB2TBvEdlyWBuNkSmFPXXXguVXa_!!848624870.jpg_200x200q90.jpg_.webp', 10, '不锈钢洗脸盆架子落地家用多功能卫生间浴室置物架收纳架多层');
INSERT INTO `tb_more` VALUES (34, 'https://click.mz.simba.taobao.com/necpm?spm=a21bo.2017.201874-sales.28&eadt=85&p=&s=195297456&k=578&e=SY2cCAxlE27%2BV0S2YXwY5Twb3a%2FSgU4xZmUgcs99qN%2BG42vFfH5gQMAXrhDc9GGtVqh2%2FghiNPQ2Zru2gwjgaGIjBUp6%2FCZZF2wpTIixMXhgXdEoL91MSlsdg7ovtEvyFl0k5oaUMvnq%2FzUgJ9nDUaEqtIrxmDLfVGdhl%2BrOz0FgiZD2q%2FPQ%2FWXu3XF%2FxGZNoJgtC6QdsRKPhu0O0mugIfUUXO8LSiSN1NJ2AUxHIgSdUptB3groUePOE2XjezjwjiE9xbX%2FHlTc82MGZ9AB9w1lFoP7V3T7NUrkvYDo2iad7OmelA5O6jwCv5icH3Xs1WCIyjNt%2BdPNkzjrfJWIamulL75HuIQwnEQ5TlGLx5%2ByrIGRDINDdJ5tBrxqF5zLyNSj8Rfcl%2FZgz3Irqo6aw7cddfQmsGslsDgYNu79OnwzDlpX2PfF1dXUqwIpgyuIHKIroaune8tyK51TrX7Cb%2BMaaJ6b9J94L5WzUWBq56qVX3XvSlzsJFjArf1WXDEe7WOfCxm%2Ft25blypb%2F3hU7c25RDzuRkSTR0Z7hWNjaMnXQDZe%2Fg1OyDkxqVtv5UY%2B', 'https://gma.alicdn.com/bao/uploaded/i4/46820645/O1CN0147BTLy1GdS3pKyzRu_!!0-saturn_solar.jpg_200x200.jpg_.webp', 10, '实木餐边柜漂亮的不像实力派');
INSERT INTO `tb_more` VALUES (32, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.113.5af911d9C626yU&scm=1007.12493.92624.100200300000004&id=556597499096&pvid=6cb021a4-024c-4d8d-9dbe-b6255978c6f0', 'https://img.alicdn.com/bao/uploaded/i1/393203597/TB258lEXbH9F1JjSZFBXXc9ZFXa_!!393203597.jpg_200x200q90.jpg_.webp', 10, '304不锈钢浴室玻璃置物架壁挂 卫生间化妆品架毛巾架 单层镜');
INSERT INTO `tb_more` VALUES (35, 'https://click.mz.simba.taobao.com/necpm?spm=a21bo.2017.201874-sales.1&eadt=85&p=&s=195297456&k=578&e=uF3QHT8qZBD%2BV0S2YXwY5Twb3a%2FSgU4xZmUgcs99qN%2BG42vFfH5gQMAXrhDc9GGtVqh2%2FghiNPTLdgCXN%2BJTvUhcdWxqX5zdF2wpTIixMXjxWRKVmI3HBlsdg7ovtEvyFl0k5oaUMvnq%2FzUgJ9nDUaEqtIrxmDLfVGdhl%2BrOz0FgiZD2q%2FPQ%2FWXu3XF%2FxGZNoJgtC6QdsRLOcoz8wbgYBNkKrtj77vykNuv6hljAlJ7i4VvYQTPzfaBB1Ta%2Fdk0lkGtJixlADHMzVxgaBmxO5rUiJmUmB8rtkVEb6%2F2osoLAAM6OWyzCjdCJHbA83KzX0vDVg%2FsB7cTKGyiNdfjAyym5vfVNAVwBDxcAqSR7w8bt3jL6KGi2l%2Bui5mvUKalVn5j1ssPwmmmLKkOvAfmovfvdXYpmsEtBjuOuHtJvxXvHrBargEMKqGDA%2FrPRl6Afmj46QOqrMVRZTxrF7O%2FKmOaknlO%2Br19%2BFzHb3RGI%2FLkAeAlIjNs%2BsouFAB8bCROhy4huH21PTgaHEmzOJagwpXVTCJCvKv2f9Fo%2BMRFrO%2FoPd97j%2FRKl89pCB3x%2B4Ay8', 'https://gma.alicdn.com/bao/uploaded/i2/129747393/O1CN01Jn3BYT24U2m2x4CJV_!!0-saturn_solar.jpg_200x200.jpg_.webp', 10, '美的官方洗碗机全自动家用变频热风烘干消毒');
INSERT INTO `tb_more` VALUES (36, 'https://click.mz.simba.taobao.com/necpm?spm=a21bo.2017.201874-sales.42&eadt=85&p=&s=195297456&k=578&e=J3Ak7a11UO3%2BV0S2YXwY5Twb3a%2FSgU4xZmUgcs99qN%2BG42vFfH5gQMAXrhDc9GGtVqh2%2FghiNPTjbQyPdC9TdmUQp%2BT8ddw1F2wpTIixMXhgXdEoL91MSlsdg7ovtEvyFl0k5oaUMvnq%2FzUgJ9nDUaEqtIrxmDLfVGdhl%2BrOz0FgiZD2q%2FPQ%2FWXu3XF%2FxGZNoJgtC6QdsRKPhu0O0mugIfUUXO8LSiSN1NJ2AUxHIgSW2Mkb1JfuB1yi%2BcIFvfZkjiE9xbX%2FHlSv4z7UXMrI%2BdNxUxw1BIcS9k6%2BDvRR7RDfN6A%2BuDKJBfzdl1rAMK3ZWQgfSrOGQ38RySl6fCzsbTTMvtLdOpUluRBQKdIQP2T5KiizWp7gWtHLWnknGmjFo%2FLGEw6bvza03OOFuoXHPtVgqBoA5A%2FMT6r0vByX20cWBh6RU7jq26w%2F%2BGfCCqGcWkA8hzGRy6R4QWQaYKX6ao3HcO18WCbITLKiZnJE5qDLv4usnSs8nKgIBVTvy47Cqui2W3pmxGBN2Q7aFL%2F23Vc3cY6QJIzBTf%2BPRIsUOWK%2B6yjmo2RbdzkxqVtv5UY%2B', 'https://gma.alicdn.com/bao/uploaded/i1/1092740126/O1CN01uaYHot1CnkV7HV1hw_!!0-saturn_solar.jpg_200x200.jpg_.webp', 10, '轻奢鞋柜家用门口储物柜大容量阳台收纳门厅');
INSERT INTO `tb_more` VALUES (37, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.231.5af911d9Y6gaOM&id=527552318495&scm=1007.12493.125018.0&pvid=242ee5eb-c7b3-40c6-bfc0-7e0ab6716a12', 'https://img.alicdn.com/bao/uploaded/i3/2423854796/TB20CQQlFXXXXaJXpXXXXXXXXXX_!!2423854796.jpg_200x200q90.jpg_.webp', 10, '大号浴室置物架脸盆架卫生间置物架厨房落地塑料架子收纳层架包邮');
INSERT INTO `tb_more` VALUES (38, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.233.5af911d9Y6gaOM&id=36176898497&scm=1007.12493.125018.0&pvid=242ee5eb-c7b3-40c6-bfc0-7e0ab6716a12', 'https://img.alicdn.com/bao/uploaded/i3/TB1CB0tIFXXXXbxXXXXXXXXXXXX_!!0-item_pic.jpg_200x200q90.jpg_.webp', 10, '高山春茶安溪铁观音袋泡茶 清香型茶包茶叶精选300元茶末');
INSERT INTO `tb_more` VALUES (39, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.235.5af911d9Y6gaOM&id=557105220417&scm=1007.12493.125018.0&pvid=242ee5eb-c7b3-40c6-bfc0-7e0ab6716a12', 'https://img.alicdn.com/bao/uploaded/i3/54790063/TB2QWm8XBrkJKJjSsphXXagMpXa_!!54790063.jpg_200x200q90.jpg_.webp', 10, '可爱仓鼠抱枕办公室腰靠椅子护腰枕大号靠垫龙猫汽车抱枕靠枕');
INSERT INTO `tb_more` VALUES (40, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.237.5af911d9Y6gaOM&id=535543128431&scm=1007.12493.125018.0&pvid=242ee5eb-c7b3-40c6-bfc0-7e0ab6716a12', 'https://img.alicdn.com/bao/uploaded/i4/TB1EK04KVXXXXcBXVXXXXXXXXXX_!!0-item_pic.jpg_200x200q90.jpg_.webp', 10, 'ThinkGeek原厂游戏周边 辐射4 糖衣炮弹 陶瓷饭碗 Fallout 4 现');
INSERT INTO `tb_more` VALUES (41, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.239.5af911d9Y6gaOM&id=527569226947&scm=1007.12493.125018.0&pvid=242ee5eb-c7b3-40c6-bfc0-7e0ab6716a12', 'https://img.alicdn.com/bao/uploaded/i3/674228897/TB2DXeJdAfb_uJkSnb4XXXCrXXa_!!674228897.jpg_200x200q90.jpg_.webp', 10, '8寸专业落地音箱家庭影院实木音箱三分频hifi发烧客厅豪华音');
INSERT INTO `tb_more` VALUES (42, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.229.5af911d9Y6gaOM&id=562883991036&scm=1007.12493.125018.0&pvid=242ee5eb-c7b3-40c6-bfc0-7e0ab6716a12', 'https://img.alicdn.com/bao/uploaded/i2/673017172/TB2mhrkib_I8KJjy1XaXXbsxpXa_!!673017172.jpg_200x200q90.jpg_.webp', 10, '三叶代工京商15级甲醇发动机FW06发动机配件DIY 离合器电');
INSERT INTO `tb_more` VALUES (43, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.227.5af911d9Y6gaOM&id=526976910717&scm=1007.12493.125018.0&pvid=242ee5eb-c7b3-40c6-bfc0-7e0ab6716a12', 'https://img.alicdn.com/bao/uploaded/i4/TB1cFeFKVXXXXbdXFXXXXXXXXXX_!!0-item_pic.jpg_200x200q90.jpg_.webp', 10, 'Bioworld原厂游戏周边 辐射4 避难所小子 狗牌 项链 现货');
INSERT INTO `tb_more` VALUES (44, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.225.5af911d9Y6gaOM&id=523025540566&scm=1007.12493.125018.0&pvid=242ee5eb-c7b3-40c6-bfc0-7e0ab6716a12', 'https://img.alicdn.com/bao/uploaded/i2/TB1POmxKXXXXXcYXFXXXXXXXXXX_!!0-item_pic.jpg_200x200q90.jpg_.webp', 10, 'Rovan baja 5S 4WD 四驱baja 4WD 5B 36cc 汽油引擎');
INSERT INTO `tb_more` VALUES (45, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.223.5af911d9Y6gaOM&id=554235776025&scm=1007.12493.125018.0&pvid=242ee5eb-c7b3-40c6-bfc0-7e0ab6716a12', 'https://img.alicdn.com/bao/uploaded/i3/26638456/TB2VwlDzbBnpuFjSZFGXXX51pXa_!!26638456.png_200x200q90.jpg_.webp', 10, '全新出口家用蓝牙5.1音箱家庭影院落地有源影响8寸重低音');
INSERT INTO `tb_more` VALUES (46, 'https://item.taobao.com/item.htm?spm=a21bo.2017.201876.193.5af911d9Y6gaOM&id=528845042837&scm=1007.12493.125018.0&pvid=242ee5eb-c7b3-40c6-bfc0-7e0ab6716a12', 'https://img.alicdn.com/bao/uploaded/i1/790781918/TB2ItD2lFXXXXcHXpXXXXXXXXXX_!!790781918.jpg_200x200q90.jpg_.webp', 10, '欧式陶瓷肥皂盒沥水创意卫生间酒店餐厅高档肥皂瓷皂托皂碟香');

-- ----------------------------
-- Table structure for tb_pinpai
-- ----------------------------
DROP TABLE IF EXISTS `tb_pinpai`;
CREATE TABLE `tb_pinpai`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `link` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `src` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `pno` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_pinpai
-- ----------------------------
INSERT INTO `tb_pinpai` VALUES (1, 'https://click.mz.simba.taobao.com/ecpm?spm=a21bo.2017.201863-2.1&e=m5YYBjJTvmoPO53EdXrfSxsQmLP5zomMPblxNXWEeH6yiyu1dLwzchzdXCtxmrIHMrw6a8on3Sh6rGKtMBt8C8R92%2BP%2FC62ktbR9sxq9q4gLhIFrJfzXOaNG8jCmDUM3osA%2FzwvXE3vdYTezJY0BUM7uNdI%2BGliQDYIE7mIxWVCf52u0Wo2aihdYPIfQ1Kt8cJo5PXG3jOspy5Ty%2FzuepcjBnCkEgb%2FUIHQ1Q3mCgLDGuFWikUMZEy4X3QvNV9EVi0C%2B7uZYghBzq8VI1dAn%2Bar1grT0PCEGah8az%2BvGCIxvbbbUjaFNbTB8bT3y6GMqeW1Bx4joHC3WiAdkU%2FpzZlgoKw0Z0tJBtjsyn%2BPxuAZSQ5N%2FI5FJHnaxSqN%2FaOAEwe895rq%2FPGBpgNEHjF2KefUlmmDW4dk4S%2BwR4jJpUVKALw84WZQKvmNdax%2B552T6C%2BJnn66pD0x%2Fom2EDj%2FtEnw%2Bidu9QHsT&u=https%3A%2F%2Falimarket.tmall.com%2Fmarkets%2Falimama%2Fmingdian&k=481', 'https://aecpm.alicdn.com/simba/img/TB1X6uHLVXXXXcCXVXXSutbFXXX.jpg', 1);
INSERT INTO `tb_pinpai` VALUES (2, 'https://click.mz.simba.taobao.com/ecpm?spm=a21bo.2017.201863-2.2&e=5VRMKhtWCksPO53EdXrfSxsQmLP5zomMXA0tl7SIEqNz%2BVEAaqxh1s4Sp3dOufwpMrw6a8on3Sh6rGKtMBt8C8R92%2BP%2FC62ktbR9sxq9q4gLhIFrJfzXOYpTlQpIl3uunp%2F4r6Rp1gLOOm6kc3XawUkTqos8EFefjSTyh0PaD6Cf52u0Wo2aihdYPIfQ1Kt8cJo5PXG3jOspy5Ty%2FzuepcjBnCkEgb%2FUIHQ1Q3mCgLDGuFWikUMZEy4X3QvNV9EVi0C%2B7uZYghBzq8VI1dAn%2BRQM1nvrjsfPah8az%2BvGCIxvbbbUjaFNbTB8bT3y6GMqeW1Bx4joHC3WiAdkU%2FpzZlgoKw0Z0tJBtjsyn%2BPxuAZSQ5N%2FI5FJHnaxSqN%2FaOAEwe895rq%2FPGBpgNEHjF2KefUlmmDW4dk4S%2BwR4jJpUVKALw84WZQKvmNdax%2B552T6C%2BJnn66pD0x%2Fom2EDj%2FtEnw%2Bidu9QHsT&u=https%3A%2F%2Falimarket.tmall.com%2Fmarkets%2Falimama%2Fmingdian&k=481', 'https://aecpm.alicdn.com/simba/img/TB13xKuLVXXXXcHapXXSutbFXXX.jpg', 2);

-- ----------------------------
-- Table structure for tb_push
-- ----------------------------
DROP TABLE IF EXISTS `tb_push`;
CREATE TABLE `tb_push`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `link` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 14 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_push
-- ----------------------------
INSERT INTO `tb_push` VALUES (1, '新款连衣裙', 'https://s.taobao.com/search?spm=a21bo.2017.201856-fline.1.5af911d9wFmsEZ&q=%E8%BF%9E%E8%A1%A3%E8%A3%99&tab=all&pvid=d0f2ec2810bcec0d5a16d5283ce59f66&style=grid&acm=lb-zebra-634493-8609611.1003.4.8190775&source=tbsy&scm=1003.4.lb-zebra-634493-8609611.OTHER_15917279910541_8190775&refpid=420460_1006');
INSERT INTO `tb_push` VALUES (2, '四件套', 'http://s.taobao.com/search?spm=a21bo.21814703.201856-fline.2.5af911d9kfDgEJ&q=%E5%9B%9B%E4%BB%B6%E5%A5%97&refpid=420461_1006&source=tbsy&style=grid&tab=all&pvid=d0f2ec2810bcec0d5a16d5283ce59f67');
INSERT INTO `tb_push` VALUES (3, '潮流T恤', 'http://s.taobao.com/search?spm=a21bo.21814703.201856-fline.3.5af911d9kfDgEJ&q=T%E6%81%A4&refpid=420462_1006&source=tbsy&style=grid&tab=all&pvid=d0f2ec2810bcec0d5a16d5283ce59f67');
INSERT INTO `tb_push` VALUES (4, '时尚女鞋', 'https://s.taobao.com/search?spm=a21bo.21814703.201856-fline.4.5af911d9kfDgEJ&q=%E5%A5%B3%E9%9E%8B&refpid=420466_1006&source=tbsy&style=grid&tab=all&pvid=d0f2ec2810bcec0d5a16d5283ce59f68');
INSERT INTO `tb_push` VALUES (5, '短裤', 'http://s.taobao.com/search?spm=a21bo.21814703.201856-fline.5.5af911d9kfDgEJ&q=%E7%9F%AD%E8%A3%A4&refpid=430145_1006&source=tbsy&style=grid&tab=all&pvid=d0f2ec2810bcec0d5a16d5283ce59f69');
INSERT INTO `tb_push` VALUES (6, '半身裙', 'http://s.taobao.com/search?spm=a21bo.21814703.201856-fline.5.5af911d9kfDgEJ&q=%E7%9F%AD%E8%A3%A4&refpid=430145_1006&source=tbsy&style=grid&tab=all&pvid=d0f2ec2810bcec0d5a16d5283ce59f69');
INSERT INTO `tb_push` VALUES (7, '男士外套', 'http://s.taobao.com/search?spm=a21bo.21814703.201856-fline.6.5af911d9kfDgEJ&q=%E5%8D%8A%E8%BA%AB%E8%A3%99&refpid=430146_1006&source=tbsy&style=grid&tab=all&pvid=d0f2ec2810bcec0d5a16d5283ce59f70');
INSERT INTO `tb_push` VALUES (8, '墙纸', 'http://s.taobao.com/search?spm=a21bo.21814703.201856-fline.7.5af911d9kfDgEJ&q=%E7%94%B7%E5%A3%AB%E5%A4%96%E5%A5%97&refpid=430147_1006&source=tbsy&style=grid&tab=all&pvid=d0f2ec2810bcec0d5a16d5283ce59f70');
INSERT INTO `tb_push` VALUES (9, '行车记录仪', 'https://s.taobao.com/search?spm=a21bo.21814703.201856-fline.8.5af911d9kfDgEJ&q=%E5%A2%99%E7%BA%B8&refpid=430148_1006&source=tbsy&style=grid&tab=all&pvid=d0f2ec2810bcec0d5a16d5283ce59f70');
INSERT INTO `tb_push` VALUES (10, '新款男鞋', 'https://s.taobao.com/search?spm=a21bo.21814703.201856-fline.8.5af911d9kfDgEJ&q=%E5%A2%99%E7%BA%B8&refpid=430148_1006&source=tbsy&style=grid&tab=all&pvid=d0f2ec2810bcec0d5a16d5283ce59f70');
INSERT INTO `tb_push` VALUES (11, '耳机', 'http://s.taobao.com/search?spm=a21bo.21814703.201856-fline.9.5af911d9kfDgEJ&q=%E8%A1%8C%E8%BD%A6%E8%AE%B0%E5%BD%95%E4%BB%AA&refpid=420467_1006&source=tbsy&style=grid&tab=all&pvid=d0f2ec2810bcec0d5a16d5283ce59f69');
INSERT INTO `tb_push` VALUES (12, '时尚女包', 'http://s.taobao.com/search?spm=a21bo.21814703.201856-fline.10.5af911d9kfDgEJ&q=%E7%94%B7%E9%9E%8B&refpid=430144_1006&source=tbsy&style=grid&tab=all&pvid=d0f2ec2810bcec0d5a16d5283ce59f69');
INSERT INTO `tb_push` VALUES (13, '沙发', 'http://s.taobao.com/search?spm=a21bo.21814703.201856-fline.11.5af911d9kfDgEJ&q=%E8%80%B3%E6%9C%BA&refpid=420463_1006&source=tbsy&style=grid&tab=all&pvid=d0f2ec2810bcec0d5a16d5283ce59f67');

-- ----------------------------
-- Table structure for tb_seprve
-- ----------------------------
DROP TABLE IF EXISTS `tb_seprve`;
CREATE TABLE `tb_seprve`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `link` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `pno` int(11) NULL DEFAULT NULL,
  `sale_quota` bigint(255) NULL DEFAULT NULL COMMENT '销售额度',
  `type_no` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '类型编号',
  `parcle` bit(1) NULL DEFAULT NULL COMMENT '是否包邮',
  `site` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '发货地址',
  `src` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '图片地址',
  `pic_no` int(11) NULL DEFAULT NULL COMMENT '图片展示编号',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_seprve
-- ----------------------------
INSERT INTO `tb_seprve` VALUES (1, '口红', '/1', 1, 222, '1', b'1', 'z-j-o', 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/755579902/O1CN01G56RnG2N1ATmPoG6J_!!0-item_pic.jpg_180x180.jpg_.webp', 11);
INSERT INTO `tb_seprve` VALUES (2, '口罩', '/2', 1, 223, '1', b'1', 'z-j-s', 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/3351172141/O1CN01DL7X021Rgcdy7GWon_!!0-item_pic.jpg_180x180.jpg_.webp', 1);

-- ----------------------------
-- Table structure for tb_swipers
-- ----------------------------
DROP TABLE IF EXISTS `tb_swipers`;
CREATE TABLE `tb_swipers`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `link` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `src` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `pno` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 20 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_swipers
-- ----------------------------
INSERT INTO `tb_swipers` VALUES (1, 'https://hzyyh.tmall.com/?spm=a21bo.21814703.201863-2.d1.5af911d9ugOpD3&scene=taobao_shop&lyg=10410.lyg_hcjh_210259_0.53608.0.lygSuper%3B180315.lyg_flowplatform_-1_94.154141.70194&lygClk=1&impid=225091f8-3dbf-4a75-bf52-797c1ed58f8b', 'https://img.alicdn.com/tps/i4/https://img.alicdn.com/imgextra/i4/6000000006417/O1CN01hXaZmk1xH2DOsRMrn_!!6000000006417-0-octopus.jpg_240x240q90.jpg', 1);
INSERT INTO `tb_swipers` VALUES (2, 'https://suofeiya.tmall.com/?spm=a21bo.21814703.201863-2.d2.5af911d9ugOpD3&lyg=10410.lyg_hcjh_210259_0.53605.0.lygSuper%3B191384.lyg_flowplatform_-1_94.154142.70195&lygClk=1&impid=225091f8-3dbf-4a75-bf52-797c1ed58f8b', 'https://img.alicdn.com/tps/i4/https://img.alicdn.com/imgextra/i1/6000000000477/O1CN019fACEa1FOVaEE7tVf_!!6000000000477-0-octopus.jpg_240x240q90.jpg', 2);
INSERT INTO `tb_swipers` VALUES (3, 'https://bbkgrsy.tmall.com/?spm=a21bo.21814703.201863-3.d1.5af911d9ugOpD3&lyg=10410.lyg_hcjh_210259_0.62751.0.lygSuper%3B209906.lyg_flowplatform_-1_94.165399.81183&lygClk=1&impid=225091f8-3dbf-4a75-bf52-797c1ed58f8b', 'https://img.alicdn.com/tps/i4/https://img.alicdn.com/imgextra/i2/6000000002459/O1CN015pvl4u1U2GajYI7ju_!!6000000002459-0-octopus.jpg_240x240q90.jpg', NULL);
INSERT INTO `tb_swipers` VALUES (4, 'https://hprt.tmall.com/?spm=a21bo.21814703.201863-3.d2.5af911d9ugOpD3&lyg=10410.lyg_hcjh_210259_0.53602.0.lygSuper%3B194017.lyg_flowplatform_-1_94.154134.70187&lygClk=1&impid=225091f8-3dbf-4a75-bf52-797c1ed58f8b', 'https://img.alicdn.com/tps/i4/https://img.alicdn.com/imgextra/i2/6000000004138/O1CN01ueNRlg1gRFaF14cQz_!!6000000004138-0-octopus.jpg_240x240q90.jpg', NULL);
INSERT INTO `tb_swipers` VALUES (5, 'https://xiaotiancai.tmall.com/?spm=a21bo.21814703.201863-4.d1.5af911d9ugOpD3&lyg=10410.lyg_hcjh_210259_0.52653.0.lygSuper%3B195914.lyg_flowplatform_-1_94.154143.70196&lygClk=1&impid=225091f8-3dbf-4a75-bf52-797c1ed58f8b', 'https://img.alicdn.com/tps/i4/https://img.alicdn.com/imgextra/i4/6000000004065/O1CN01DU2dBE1ftofslqyRM_!!6000000004065-0-octopus.jpg_240x240q90.jpg', NULL);
INSERT INTO `tb_swipers` VALUES (6, 'https://fulfil.tmall.com/?spm=a21bo.21814703.201863-4.d2.5af911d9ugOpD3&lyg=10410.lyg_hcjh_210259_0.62749.0.lygSuper%3B211322.lyg_flowplatform_-1_94.165397.81181&lygClk=1&impid=225091f8-3dbf-4a75-bf52-797c1ed58f8b', 'https://img.alicdn.com/tps/i4/https://img.alicdn.com/imgextra/i2/6000000007681/O1CN01CTl2J726bwqc6V7bo_!!6000000007681-0-octopus.jpg_240x240q90.jpg', NULL);
INSERT INTO `tb_swipers` VALUES (7, 'https://runbaiyan.tmall.com/index.htm?spm=a21bo.21814703.201863-5.d1.5af911d9ugOpD3&lyg=10410.lyg_hcjh_210259_0.53601.0.lygSuper%3B195634.lyg_flowplatform_-1_94.154132.70185&lygClk=1&impid=225091f8-3dbf-4a75-bf52-797c1ed58f8b', 'https://img.alicdn.com/tps/i4/https://img.alicdn.com/imgextra/i4/6000000005596/O1CN01ufFYhy1rD12ws9PUZ_!!6000000005596-0-octopus.jpg_240x240q90.jpg', NULL);
INSERT INTO `tb_swipers` VALUES (8, 'https://miaokelanduo.tmall.com/?spm=a21bo.21814703.201863-5.d2.5af911d9ugOpD3&lyg=10410.lyg_hcjh_210259_0.61513.0.lygSuper%3B200104.lyg_flowplatform_-1_94.165398.81182&lygClk=1&impid=225091f8-3dbf-4a75-bf52-797c1ed58f8b', 'https://img.alicdn.com/tps/i4/https://img.alicdn.com/imgextra/i3/6000000004754/O1CN01JpmuOl1kzNZ74wJ0i_!!6000000004754-0-octopus.jpg_240x240q90.jpg', NULL);
INSERT INTO `tb_swipers` VALUES (9, 'https://click.mz.simba.taobao.com/ecpm?spm=a21bo.2017.201863-2.1&e=m5YYBjJTvmoPO53EdXrfSxsQmLP5zomMPblxNXWEeH6yiyu1dLwzchzdXCtxmrIHMrw6a8on3Sh6rGKtMBt8C8R92%2BP%2FC62ktbR9sxq9q4gLhIFrJfzXOaNG8jCmDUM3osA%2FzwvXE3vdYTezJY0BUM7uNdI%2BGliQDYIE7mIxWVCf52u0Wo2aihdYPIfQ1Kt8cJo5PXG3jOspy5Ty%2FzuepcjBnCkEgb%2FUIHQ1Q3mCgLDGuFWikUMZEy4X3QvNV9EVi0C%2B7uZYghBzq8VI1dAn%2Bar1grT0PCEGah8az%2BvGCIxvbbbUjaFNbTB8bT3y6GMqeW1Bx4joHC3WiAdkU%2FpzZlgoKw0Z0tJBtjsyn%2BPxuAZSQ5N%2FI5FJHnaxSqN%2FaOAEwe895rq%2FPGBpgNEHjF2KefUlmmDW4dk4S%2BwR4jJpUVKALw84WZQKvmNdax%2B552T6C%2BJnn66pD0x%2Fom2EDj%2FtEnw%2Bidu9QHsT&u=https%3A%2F%2Falimarket.tmall.com%2Fmarkets%2Falimama%2Fmingdian&k=481', 'https://aecpm.alicdn.com/simba/img/TB1X6uHLVXXXXcCXVXXSutbFXXX.jpg', 1);
INSERT INTO `tb_swipers` VALUES (10, 'https://click.mz.simba.taobao.com/ecpm?spm=a21bo.2017.201863-2.2&e=5VRMKhtWCksPO53EdXrfSxsQmLP5zomMXA0tl7SIEqNz%2BVEAaqxh1s4Sp3dOufwpMrw6a8on3Sh6rGKtMBt8C8R92%2BP%2FC62ktbR9sxq9q4gLhIFrJfzXOYpTlQpIl3uunp%2F4r6Rp1gLOOm6kc3XawUkTqos8EFefjSTyh0PaD6Cf52u0Wo2aihdYPIfQ1Kt8cJo5PXG3jOspy5Ty%2FzuepcjBnCkEgb%2FUIHQ1Q3mCgLDGuFWikUMZEy4X3QvNV9EVi0C%2B7uZYghBzq8VI1dAn%2BRQM1nvrjsfPah8az%2BvGCIxvbbbUjaFNbTB8bT3y6GMqeW1Bx4joHC3WiAdkU%2FpzZlgoKw0Z0tJBtjsyn%2BPxuAZSQ5N%2FI5FJHnaxSqN%2FaOAEwe895rq%2FPGBpgNEHjF2KefUlmmDW4dk4S%2BwR4jJpUVKALw84WZQKvmNdax%2B552T6C%2BJnn66pD0x%2Fom2EDj%2FtEnw%2Bidu9QHsT&u=https%3A%2F%2Falimarket.tmall.com%2Fmarkets%2Falimama%2Fmingdian&k=481', 'https://aecpm.alicdn.com/simba/img/TB13xKuLVXXXXcHapXXSutbFXXX.jpg', 2);

-- ----------------------------
-- Table structure for type_push
-- ----------------------------
DROP TABLE IF EXISTS `type_push`;
CREATE TABLE `type_push`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `link` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `img` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of type_push
-- ----------------------------
INSERT INTO `type_push` VALUES (1, ' 热卖女装', 'https://huodong.taobao.com/wow/a/act/tao/tmc/31116/4250/wupr?spm=a21bo.21814703.jianianhua.1.5af911d9CoawQ4&wh_pid=industry-235405&disableNav=YES&status_bar_transparent=true', 'https://img.alicdn.com/imgextra/i1/O1CN019t011c1RXv7W3W5XK_!!6000000002122-2-tps-234-92.png');
INSERT INTO `type_push` VALUES (2, '生活百货', 'https://huodong.taobao.com/wow/a/act/tao/tmc/31116/4250/wupr?spm=a21bo.21814703.jianianhua.2.5af911d9CoawQ4&wh_pid=industry-235324&disableNav=YES&status_bar_transparent=true', 'https://img.alicdn.com/imgextra/i2/O1CN01hTJ9901aw2WFtsRVg_!!6000000003393-2-tps-234-92.png');
INSERT INTO `type_push` VALUES (3, '品文教乐器', 'https://huodong.taobao.com/wow/a/act/tao/tmc/31116/4250/wupr?spm=a21bo.21814703.jianianhua.3.5af911d9CoawQ4&wh_pid=industry-235912&disableNav=YES&status_bar_transparent=true', 'https://img.alicdn.com/imgextra/i4/O1CN01o8RCoz1orN6QIY8Qo_!!6000000005278-2-tps-234-92.png');
INSERT INTO `type_push` VALUES (4, '运动户外', 'https://huodong.taobao.com/wow/a/act/tao/tmc/31116/4250/wupr?spm=a21bo.21814703.jianianhua.3.5af911d9CoawQ4&wh_pid=industry-235912&disableNav=YES&status_bar_transparent=true', 'https://img.alicdn.com/imgextra/i1/O1CN01nvEMti1SWpnU9I3vC_!!6000000002255-2-tps-234-92.png');
INSERT INTO `type_push` VALUES (5, '潮流男装', 'https://huodong.taobao.com/wow/a/act/tao/tmc/31116/4250/wupr?spm=a21bo.21814703.jianianhua.5.5af911d9CoawQ4&wh_pid=industry-235290&disableNav=YES&status_bar_transparent=true', 'https://img.alicdn.com/imgextra/i1/O1CN01tjdb571SU5Q3vWZld_!!6000000002249-2-tps-234-92.png');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_pwd` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '1', '123456', '123456', '123456');
INSERT INTO `user` VALUES (2, '2', '1258812720', '1258812720', 'l19951027');

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `tel` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `nickname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES (1, '1', '15985070989', '1258812720@qq.com', '0852-00000', '贵州省遵义市凤岗县', '刘海斌');
INSERT INTO `user_info` VALUES (2, '2', '18845571349', '501354416@qq.com', '0852-1213312', '不知道', '保护动物去');

SET FOREIGN_KEY_CHECKS = 1;
