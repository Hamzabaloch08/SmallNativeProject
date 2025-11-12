import { useState } from 'react';
import AllItems from './AllItems';
import AddItemScreen from './AddItemScreen';
import { Pressable, StyleSheet, Text, View } from 'react-native';

let data = [
  { id: 1, name: 'Wheat', stock: 5, unit: 'kg' },
  { id: 2, name: 'Rice', stock: 15, unit: 'kg' },
  { id: 3, name: 'Basmati Rice', stock: 25, unit: 'kg' },
  { id: 4, name: 'Pulse', stock: 50, unit: 'kg' },
  { id: 5, name: 'Corn', stock: 19, unit: 'kg' },
];

const HomeScreen = () => {
  const [view, setView] = useState(0);

  return (
    <View style={styles.container}>
      {/* Top Buttons */}
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, view === 0 && styles.activeButton]}
          onPress={() => setView(0)}
        >
          <Text style={[styles.btnText, view === 0 && styles.activeBtnText]}>
            All Items
          </Text>
        </Pressable>

        <Pressable
          style={[styles.button, view === 1 && styles.activeButton]}
          onPress={() => setView(1)}
        >
          <Text style={[styles.btnText, view === 1 && styles.activeBtnText]}>
            Low Stock
          </Text>
        </Pressable>

        <Pressable
          style={[styles.button, view === 2 && styles.activeButton]}
          onPress={() => setView(2)}
        >
          <Text style={[styles.btnText, view === 2 && styles.activeBtnText]}>
            Add Item
          </Text>
        </Pressable>
      </View>

      {/* Content Views */}
      {view === 0 && <AllItems data={data} />}
      {view === 1 && <AllItems data={data.filter(item => item.stock < 20)} />}
      {view === 2 && <AddItemScreen />}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
  buttonContainer: {
    gap: 10,
    flexDirection: 'row',
    marginBottom: 15,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 3.5,
    borderRadius: 50,
    borderWidth: 0.8,
    borderColor: 'green',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  activeButton: {
    backgroundColor: 'green',
  },
  btnText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'green',
    textTransform: 'capitalize',
  },
  activeBtnText: {
    color: 'white',
  },
});
