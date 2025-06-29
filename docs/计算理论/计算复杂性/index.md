---
title: "计算复杂性"
slug: "01 06 《数据结构与算法设计》复习笔记/计算理论/计算复杂性"
date: "2025-01-06T11:26:30+08:00"
lastmod: "2025-01-06T11:26:30+08:00"
hidden: false
description: "计算复杂性：时间复杂性、P类和NP类问题、NP完全问题"
draft: false
math: true
license:
author: "Ri-Nai"
categories: ["学习笔记"]
tags: ["数据结构与算法设计", "计算机科学", "计算理论"]
---

# 计算复杂性
## 时间复杂性
### 度量复杂性
#### 时间复杂度
令 $M$ 是一个在所有输入上都停机的确定型图灵机。$M$ 的**运行时间**或者**时间复杂度**是一个函数 $f: \mathbb{N} \to \mathbb{N}$。  
其中 $\mathbb{N}$ 是非负整数集合，$f(n)$ 是 $M$ 在所有长度为 $n$ 的输入上运行时所经过的**最大步数**。  
若 $f(n)$ 是 $M$ 的运行时间，则称 $M$ 在时间 $f(n)$ 内运行，$M$ 是 $f(n)$ 时间图灵机。
通常使用 $n$ 表示输入的长度。
#### 大 $O$ 和小 $o$ 记法
因为算法精确运行时间通常是一个复杂的表达式，所以一般只估计它的趋势和级别。  
通过 **渐近分析** ， 只考虑算法的时间的表达式的最高次项，忽略低次项和常数系数，可以试图了解算法在长输入上的运行时间。

1. **大 $O$ 记法**：  
   令 $f(n)$ 和 $g(n)$ 是定义在非负整数集合上的函数。  
   $f(n)=O(g(n))$ 当且仅当存在一个常数 $c>0$ 和一个整数 $n_0 \ge 0$，使得对于所有的 $n \ge n_0$，有 $f(n) \le cg(n)$。
2. **小 $o$ 记法**：  
   $f(n)=o(g(n))$ 当且仅当对于所有的常数 $c>0$，存在一个整数 $n_0 \ge 0$，使得对于所有的 $n \ge n_0$，有 $f(n) < cg(n)$。  
   或 $\lim_{n \to \infty} \frac{f(n)}{g(n)} = 0$。
   $$f(n) \neq o(f(n))$$

#### 时间复杂性类
$$\mathrm{TIME}(f(n)) = \{L \  | \  \text{ 存在确定性 } O(f(n)) \text{ 时间图灵机判定 } L \ \}$$

### P 类
$\mathrm{P}$ 类是单带确定 $\mathrm{TM}$ 在所有可以在多项式时间内判定的问题的集合。
$$\mathrm{P} = \bigcup_{k \in \mathbb{N}} \mathrm{TIME}(n^k)$$

#### 重要性
1. 对于 **所有** 与单带确定 $\mathrm{TM}$ **等价的** 模型，$\mathrm{P}$ 类是相同的。
   - 无论你使用的是单带图灵机、多带图灵机，还是其他等价的计算模型，只要一个问题在某个模型上可以在多项式时间内判定（属于 P 类问题），那么在其他模型上也可以在多项式时间内判定。
2. $\mathrm{P}$ 类大致对应于计算机上 $实际可解$ 的问题。

### NP 类
$\mathrm{NP}$ 类是单带非确定 $\mathrm{TM}$ 在所有可以在多项式时间内判定的问题的集合。
$$\mathrm{NP} = \bigcup_{k \in \mathbb{N}} NTIME(n^k)$$
其中 $NTIME(f(n))$ 是非确定性图灵机在时间 $f(n)$ 内可以接受的语言的集合。
$$NTIME(f(n)) = \{L \  | \  \text{ 存在非确定性 } O(f(n)) \text{ 时间图灵机判定 } L \ \}$$
> 非确定性图灵机中猜测的步骤不算做时间复杂度。
> 例如选取一个子集 / 一个路径 / 一个排列等。

$\mathrm{NP}$ 类中的问题是可以在多项式时间内**验证**的问题。

$$\mathrm{P} \subseteq \mathrm{NP}$$
$\mathrm{P} = \mathrm{NP} ?$ 是一个重要的未解问题。


#### 验证机
$$A = \{ w \ | \ \text{存在一个证明字符串 } c \text{ 使得 } M \text{ 在输入 } \langle w, c \rangle \text{ 上接受} \}$$
称 $M$ 是 $A$ 的**验证机**。

判断一个问题是否属于 $\mathrm{NP}$ 类，可以通过构造 $\mathrm{NTM}$ 或者验证机来判断。

#### $\mathrm{CLIQUE} \in \mathrm{NP}$

![CLIQUE1](/imgs/CLIQUE1.png)
![CLIQUE2](/imgs/CLIQUE2.png)

#### $\mathrm{HP} \in \mathrm{NP}$
![HP](/imgs/HP.png)

#### 

#### coNP 类
$$\mathrm{coNP} = \{L \ | \ \overline{L} \in \mathrm{NP} \}$$
$\mathrm{NP} =? \mathrm{coNP}$ 是一个重要的未解问题。
$$\mathrm{P} \subseteq \mathrm{NP} \cap \mathrm{coNP}$$

### NP 完全问题
$\mathrm{NP}$ 中某些问题的复杂性与整个 $\mathrm{NP}$ 类的复杂性相关联，即：  
若这些问题中的任一个找到 $\mathrm{P}$ 时间算法，则 $\mathrm{P} = \mathrm{NP}$。  
这些问题称为 $\mathrm{NP}$ 完全问题。

#### $\mathrm{SAT}$ 问题
$$\mathrm{SAT} = \{ \phi \ | \ \phi \text{ 是一个可满足的布尔公式} \}$$

#### 理论意义
1. 研究 $\mathrm{P}$ 和 $\mathrm{NP}$ 之间的关系可以只关注于一个问题的算法。
2. 由此可以说明一个问题目前还没有找到 $\mathrm{P}$ 时间算法。


### 多项式时间归约
类似于[问题的规约](../可计算性/#规约)，多项式时间规约定义了问题求解的有效性传递。

若存在多项式时间图灵机 $\mathrm{M}$ 使得在任意输入 $w$ 上， $\mathrm{M}$ 停机时，带子上显示的字符串为 $f(w)$ ，则称函数 $f: \Sigma^* \to \Sigma^*$ 为**多项式时间可计算函数**。

称 $A$ 可**多项式时间映射规约**到 $B$，记作 $A \le_p B$，若
$$\exists f:\Sigma^* \to \Sigma^*  \text{ 使得 } \forall w \in \Sigma^*, \quad w \in A \Leftrightarrow f(w) \in B$$
函数 $f$ 称为 $A$ 到 $B$ 的**多项式时间归约**。

即 $f$ 将 $A$ 的实例编码在多项式时间内转换为 $B$ 的实例编码。

#### P 类问题的多项式时间归约
若 $A \le_p B$ 且 $B \in \mathrm{P}$，则 $A \in \mathrm{P}$。
若 $A \le_p B$ 且 $B \in \mathrm{NPC}$，则 $A \in \mathrm{NPC}$。
