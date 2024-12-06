In React Native, when working with FlatList, a common mistake is forgetting to provide a unique `key` prop for each item in the `data` array. This can lead to unexpected behavior, such as incorrect rendering or performance issues.  If the `keyExtractor` function is not properly implemented or missing, React Native may reuse existing components, leading to visual glitches or data inconsistencies. For example:

```javascript
<FlatList
  data={[{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]}
  renderItem={({ item }) => <Text>{item.name}</Text>}
/>
```

This is incorrect because it doesn't provide unique keys.  The correct implementation would be:

```javascript
<FlatList
  data={[{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]}
  renderItem={({ item }) => <Text>{item.name}</Text>}
  keyExtractor={(item) => item.id}
/>
```