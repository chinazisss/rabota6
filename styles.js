import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f0f4f8', marginTop: 40 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 8, backgroundColor: '#fff' },
  button: { backgroundColor: '#007bff', padding: 12, borderRadius: 8, alignItems: 'center', marginBottom: 20 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  noteItem: { backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 10, elevation: 2 },
  noteTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  noteText: { fontSize: 14, color: '#444', marginBottom: 10 },
  deleteText: { color: '#ff4444', fontWeight: 'bold', textAlign: 'right' }
});