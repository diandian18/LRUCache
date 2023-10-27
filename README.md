# LRUCache

LRU缓存数据结构

## 目标

- 可设置值，如果超过数量限制，就删除第一位
- 每次get的值，该值移到最后一位
- 顺便实现一个以LRU方式存储到localStorage的类，并提供数据的增删改查

## 使用

```typescript
// LRUCache类基本用法
const lruCache: LRUCache<T, D> = new LRUCache(length, data);
```

```typescript
// LRULocalStorage类用法
import { LRULocalStorage } from './LRUCache';

/**
 * 根据路由中的id，将
 */
class EventLocalStorage<D> extends LRULocalStorage<string, D> {
  getDataKey() {
    const id = getIdFromRoute();
    return id;
  }
}

const STORE_KEY = 'accessTokens';
const MAX_LENGTH = 20;
const eventLs = new EventLocalStorage<Token>(STORE_KEY, MAX_LENGTH);

eventLs.get();
eventLs.set({
  accessToken,
  refreshToken,
  expiration,
});

/**
 * 保存的数据格式如下:
 * {
 *   data: [[{dataKey}, {dataValue}], ...],
 *   length: {lruLength}
 * }
 */
```
