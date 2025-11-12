import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const AllItems = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>item</Text>
        <Text style={styles.headingText}>quantity</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.itemContainer,
              { backgroundColor: item.stock < 20 ? '#ffcccc' : '#d7f68fff' },
            ]}
          >
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>
              {item.stock}
              {item.unit}
            </Text>
          </View>
        )}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
};

export default AllItems;

const styles = StyleSheet.create({
  container: {},
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headingText: {
    fontSize: 16,
    fontWeight: '500',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  },
  itemText: {
    fontSize: 14,
  },
});
