---
title: "可计算性"
slug: "01 06 《数据结构与算法设计》复习笔记/计算理论/可计算性"
date: "2025-01-06T11:26:30+08:00"
lastmod: "2025-01-06T11:26:30+08:00"
hidden: false
description: "可计算性：可判定性问题、对角化方法、规约、不可判定性"
draft: false
math: true
license:
author: "Ri-Nai"
categories: ["学习笔记"]
tags: ["数据结构与算法设计", "计算机科学", "计算理论"]
---

# 可计算性
## 可判定性
**可判定性问题**是指是否存在一个算法，能够判定一个给定的问题的实例是否属于问题的解集。如果存在这样的算法，那么这个问题就是**可判定的**。否则，这个问题就是**不可判定的**。
我们使用**图灵机**来描述可判定性问题。
如果一个语言可以被图灵机判定，那么这个语言是**可判定的**。否则，这个语言是**不可判定的**。

### 与正则语言相关的可判定性问题
1. $A_{\mathrm{DFA}} = \{ \langle B, w \rangle \ |\  B \text{ 是一个 DFA，且 } B \text{ 接受字符串 } w \}$
    判定 $A_{\mathrm{DFA}}$ 即判断 $w$ 是否是 $B$ 的一个接受字符串。
    是**可判定的**。

2. $A_{\mathrm{NFA}} = \{ \langle B, w \rangle \ |\  B \text{ 是一个 NFA，且 } B \text{ 接受字符串 } w \}$
    判定 $A_{\mathrm{NFA}}$ 即判断 $w$ 是否是 $B$ 的一个接受字符串。
    是**可判定的**。
3. $A_{\mathrm{REX}} = \{ \langle R, w \rangle \ |\  R \text{ 是一个正则表达式，且 } R \text{ 接受字符串 } w \}$
    判定 $A_{\mathrm{REX}}$ 即判断 $w$ 是否是 $R$ 的一个接受字符串。
    是**可判定的**。
4. $E_{\mathrm{DFA}} = \{ \langle B \rangle \ |\  B \text{ 是一个 DFA，且 } L(B) = \varnothing \}$
    判定 $E_{\mathrm{DFA}}$ 即判断 $L(B) = \varnothing$。
    是**可判定的**。
5. $EQ_{\mathrm{DFA}} = \{ \langle B_1, B_2 \rangle \ |\  B_1 \text{ 和 } B_2 \text{ 是 DFA，且 } L(B_1) = L(B_2) \}$
    判定 $EQ_{\mathrm{DFA}}$ 即判断 $L(B_1) = L(B_2)$， 即 $L(B_1) \oplus L(B_2) = \varnothing$。
    是**可判定的**。



### 对角化方法
如果存在函数 $f : A \to B$，且 $f$ 是一对一映射又是满映射，则称集合 $A$ 和 $B$ 有相同规模。

如果一个集合A 是有限的或者与 $\mathbb{N}$ 有相同的规模，则称 $A$ 是可数的
如：
有理数集 $\mathbb{Q}$ 是可数的，因为可以通过一一对应的方式将有理数映射到 $\mathbb{N}$。
实数集 $\mathbb{R}$ 是不可数的，因为实数集比有理数集大。

#### 存在不能被任何图灵机识别的语言
1. 所有图灵机构成的集合是可数的
   - 对任意的字母表 $\Sigma$ ，其上所有串 $\Sigma^*$ 的集合是可数的
2. 所有语言构成的集合是不可数的
   - 对任意的字母表 $\Sigma$ ，其上所有语言 $\mathcal{P}(\Sigma^*)$ 的集合是不可数的

### 规约
$P \le_m Q$ 表示 $P$ 可规约到 $Q$。
若 $P$ 是**不可判定的**，则 $Q$ 也是**不可判定的**。
若 $Q$ 是**可判定的**，则 $P$ 也是**可判定的**。
$P$ 是 $Q$ 的一个特例，$Q$ 是 $P$ 的一个一般化。

### 与图灵机相关的不可判定性问题
#### $A_{\mathrm{TM}}$
$A_{\mathrm{TM}} = \{ \langle M, w \rangle \ |\  M \text{ 是一个图灵机，且 } M \text{ 接受字符串 } w \}$
判定 $A_{\mathrm{TM}}$ 即判断 $w$ 是否是 $M$ 的一个接受字符串。
是**不可判定的**。

##### 可识别
使用如下算法可以识别 $A_{\mathrm{TM}}$：
1. 令 $U$ 是一个图灵机，对于任意输入 $\langle M, w \rangle$，$U$ 模拟 $M$ 运行 $w$。
2. 若 $M$ 接受 $w$，则 $U$ 接受 $\langle M, w \rangle$。
3. 若 $M$ 拒绝 $w$，则 $U$ 拒绝 $\langle M, w \rangle$。

如果 $M$ 在 $w$ 上循环，则 $U$ 也会在 $\langle M, w \rangle$ 上循环，这就是为什么 $A_{\mathrm{TM}}$ 是不可判定的。
##### 不可判定
![ATM不可判定](/imgs/ATM不可判定.png)


#### $HALT_{\mathrm{TM}}$
$HALT_{\mathrm{TM}} = \{ \langle M, w \rangle \ |\  M \text{ 是一个图灵机，且 } M \text{ 在输入 } w \text{ 上停机} \}$
可识别，但是**不可判定的**。
$A_{\mathrm{TM}}$ 可以规约到 $HALT_{\mathrm{TM}}$。
所以 $HALT_{\mathrm{TM}}$ 是不可判定的。
即 $A_{\mathrm{TM}} \le_m HALT_{\mathrm{TM}}$。


#### $E_{\mathrm{TM}}$
$E_{\mathrm{TM}} = \{ \langle M \rangle \ |\  M \text{ 是一个图灵机，且 } L(M) = \varnothing \}$
是**不可判定的**。  
$A_{\mathrm{TM}}$ 可以规约到 $E_{\mathrm{TM}}$。

### 补图灵可识别
对任意不可判定的语言 $A$，它和它的补集 $\overline{A}$ 至少有一个不是图灵可识别的。

如果一个语言是一个图灵可识别的语言的补集，那么这个语言是**补图灵可识别的**。

－个语言是可判定的，当且仅当它既是图灵可识别的，也是补图灵可识别的。

$\overline{A_{\mathrm{TM}}}$ 不是图灵可识别的。

可知：图灵可识别的补运算不封闭。

