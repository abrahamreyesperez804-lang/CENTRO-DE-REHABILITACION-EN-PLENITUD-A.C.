import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ContactoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>✉️ Contacto</Text>
      <Text style={styles.description}>
        Información de contacto y ubicación
      </Text>
      <Text style={styles.subtitle}>
        Pantalla con datos de contacto del centro
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: '#4b5563',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
