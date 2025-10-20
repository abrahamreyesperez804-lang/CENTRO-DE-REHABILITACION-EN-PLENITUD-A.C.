import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import ServiciosScreen from '../screens/ServiciosScreen';
import TerapiasScreen from '../screens/TerapiasScreen';
import EquipoScreen from '../screens/EquipoScreen';
import TestimoniosScreen from '../screens/TestimoniosScreen';
import GaleriaScreen from '../screens/GaleriaScreen';
import ContactoScreen from '../screens/ContactoScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let emoji;
          
          switch (route.name) {
            case 'Inicio':
              emoji = '🏠';
              break;
            case 'Servicios':
              emoji = '🛠️';
              break;
            case 'Terapias':
              emoji = '💆';
              break;
            case 'Equipo':
              emoji = '👥';
              break;
            case 'Testimonios':
              emoji = '🗣️';
              break;
            case 'Galería':
              emoji = '🖼️';
              break;
            case 'Contacto':
              emoji = '✉️';
              break;
            default:
              emoji = '❓';
          }
          
          return <Text style={{ fontSize: 20 }}>{emoji}</Text>;
        },
        tabBarActiveTintColor: '#1e40af',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
        headerStyle: {
          backgroundColor: '#1e40af',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen 
        name="Inicio" 
        component={HomeScreen}
        options={{ title: 'Inicio' }}
      />
      <Tab.Screen 
        name="Servicios" 
        component={ServiciosScreen}
        options={{ title: 'Servicios' }}
      />
      <Tab.Screen 
        name="Terapias" 
        component={TerapiasScreen}
        options={{ title: 'Terapias' }}
      />
      <Tab.Screen 
        name="Equipo" 
        component={EquipoScreen}
        options={{ title: 'Equipo' }}
      />
      <Tab.Screen 
        name="Testimonios" 
        component={TestimoniosScreen}
        options={{ title: 'Testimonios' }}
      />
      <Tab.Screen 
        name="Galería" 
        component={GaleriaScreen}
        options={{ title: 'Galería' }}
      />
      <Tab.Screen 
        name="Contacto" 
        component={ContactoScreen}
        options={{ title: 'Contacto' }}
      />
    </Tab.Navigator>
  );
}
