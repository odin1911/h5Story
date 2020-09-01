# 定时器实现

## 笔记

### 链表

链表用于存储所有的定时器，每个定时器都含有interval 和 elapse 两个时间参数，elapse表示当前被tickTimer了多少次。当elapse 和interval相等时，表示定时器到期。

- 添加定时器就是在链表的末尾新增一个节点，时间复杂度是 O(1)。
- 删除一个定时器的话，我们需要遍历链表找到对应的定时器，时间复杂度是O(n)。
- 超时检查，每次PerTickBookkeeping需要对链表所有定时器进行 elapse++，因此可以看出PerTickBookkeeping的时间复杂度是O(N)。

### 排序双向链表

- 将interval变为绝对时间，那么我们只需要比较当前时间和interval时间是否相等，减少了对每个定时器的操作。
- 将定时器进行排序，每次PerTickBookkeeping都只需要判断第一个定时器，时间复杂度为O(1)。
- 为了维持链表顺序，每次新增定时器需要进行链表排序时间复杂度为 O(N)。
- 删除定时器时，由于会持有自己节点的引用，所以不需要查找其在链表中所在的位置，所以时间复杂度为O(1)，双向链表的好处。

### 时间轮算法

linux内核中的定时器实现方式

> 不需要排序
>
> 将定时器散列到不同链表中
>
> 时间轮的数据结构是数组 + 链表。

- 新增和删除一个任务，时间复杂度都是O(1)。
- PerTickBookkeeping每次转动一格，时间复杂度也是O(1)。

### 最小堆

- 插入时间复杂度是O(lgN)。
- 删除时间复杂度是O(lgN)，做了延迟删除操作后，时间复杂度为O(1)。
- PerTickBookkeeping只处理堆顶定时器，时间复杂度O(1)。

## 参考

[https://cloud.tencent.com/developer/article/1553274](基于Linux内核的时间轮算法设计实现)

[https://cloud.tencent.com/developer/article/1553256](一文完全理解定时器实现技术)
