The solution involves correctly implementing the `keyExtractor` prop in the FlatList component.  This prop should be a function that returns a unique key for each item in your data array.  The key must be unique within the entire list.  Here's the corrected code:

```javascript
<FlatList
  data={[{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]}
  renderItem={({ item }) => <Text>{item.name}</Text>}
  keyExtractor={(item) => item.id} // Correct implementation
/>
```

If your data doesn't have a unique `id` field, you can generate one using a library like `uuid` or create one based on the index, but be cautious of issues that may arise from reordering your data.

**Important:** Always ensure each item in your `data` array has a unique key to avoid issues with React Native's FlatList rendering.