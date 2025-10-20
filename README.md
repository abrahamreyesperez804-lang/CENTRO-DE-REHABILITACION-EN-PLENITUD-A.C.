# 🏥 EN PLENITUD - Centro de Rehabilitación A.C.

## 📱 Aplicación Móvil para Centro de Rehabilitación

Una aplicación móvil desarrollada en React Native/Expo para el centro de rehabilitación "EN PLENITUD", con navegación de pestañas para facilitar el acceso a información del centro.

## 🎯 Características Principales

### 7 Pestañas de Navegación:
- **🏠 Inicio** - Bienvenida e información general del centro
- **🛠️ Servicios** - Servicios de rehabilitación integral ofrecidos
- **💆 Terapias** - Programas de terapia especializada
- **👥 Equipo** - Equipo profesional de especialistas
- **🗣️ Testimonios** - Historias de transformación y esperanza
- **🖼️ Galería** - Imágenes de instalaciones y actividades
- **✉️ Contacto** - Información de contacto y ubicación

## 🚀 Tecnologías Utilizadas

- **React Native** - Framework móvil multiplataforma
- **Expo** - Plataforma de desarrollo y despliegue
- **React Navigation** - Navegación con pestañas (Bottom Tabs)
- **React Native Safe Area Context** - Manejo seguro de áreas de la pantalla
- **React Native Screens** - Optimización de rendimiento en navegación

## 📞 Contacto del Centro

**Ubicación:** 📍 Privada Piedad Perez Ortiz #4, Colonia Ejidal, Mariano Escobedo, Orizaba, Ver.

## 📋 Requisitos del Sistema

- Node.js 16+
- npm o yarn
- Expo CLI (opcional, se puede usar npx)
- Para pruebas móviles: Expo Go app en dispositivo iOS/Android

## 🛠️ Instalación de Dependencias

### Paso 1: Clonar el repositorio
```bash
git clone https://github.com/abrahamreyesperez804-lang/CENTRO-DE-REHABILITACION-EN-PLENITUD-A.C..git
cd CENTRO-DE-REHABILITACION-EN-PLENITUD-A.C.
```

### Paso 2: Instalar dependencias de Node
```bash
npm install
```

### Paso 3: Instalar dependencias de React Navigation
```bash
npm install @react-navigation/native @react-navigation/bottom-tabs
```

### Paso 4: Instalar dependencias nativas con Expo
Para proyectos Expo, se recomienda usar `expo install` para las dependencias nativas:
```bash
npx expo install react-native-screens react-native-safe-area-context
```

**Nota:** Si ya tienes estas dependencias instaladas desde versiones anteriores, puedes omitir los pasos 3 y 4.

## 🚀 Ejecutar la Aplicación

### Modo desarrollo
```bash
npx expo start
```

### Opciones de ejecución:
- **Android:** Presiona `a` en la terminal o ejecuta `npm run android`
- **iOS:** Presiona `i` en la terminal o ejecuta `npm run ios` (solo en macOS)
- **Web:** Presiona `w` en la terminal o ejecuta `npm run web`
- **Dispositivo móvil:** Escanea el código QR con la app Expo Go

## 📱 Probar en Dispositivo Móvil

1. Instala la app **Expo Go** desde:
   - [App Store (iOS)](https://apps.apple.com/app/expo-go/id982107779)
   - [Google Play (Android)](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. Ejecuta `npx expo start` en tu computadora

3. Escanea el código QR que aparece en la terminal:
   - **iOS:** Usa la cámara nativa del iPhone
   - **Android:** Usa el escáner integrado en Expo Go

## 🏗️ Estructura del Proyecto

```
CENTRO-DE-REHABILITACION-EN-PLENITUD-A.C./
├── App.js                      # Componente principal con NavigationContainer
├── navigation/
│   └── TabNavigator.js         # Configuración de navegación de pestañas
├── screens/
│   ├── HomeScreen.js           # Pantalla de Inicio
│   ├── ServiciosScreen.js      # Pantalla de Servicios
│   ├── TerapiasScreen.js       # Pantalla de Terapias
│   ├── EquipoScreen.js         # Pantalla de Equipo
│   ├── TestimoniosScreen.js    # Pantalla de Testimonios
│   ├── GaleriaScreen.js        # Pantalla de Galería
│   └── ContactoScreen.js       # Pantalla de Contacto
├── package.json                # Dependencias del proyecto
└── README.md                   # Este archivo

## 📦 Dependencias Principales

Las siguientes dependencias están incluidas en el proyecto:

- `expo` - Framework de desarrollo
- `react` - Biblioteca principal
- `react-native` - Framework móvil
- `@react-navigation/native` - Core de React Navigation
- `@react-navigation/bottom-tabs` - Navegación con pestañas
- `react-native-screens` - Rendimiento optimizado
- `react-native-safe-area-context` - Manejo de áreas seguras

## 🔧 Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo Expo
- `npm run android` - Ejecuta en emulador/dispositivo Android
- `npm run ios` - Ejecuta en simulador/dispositivo iOS
- `npm run web` - Ejecuta en navegador web

## 💡 Notas Importantes

- Las pantallas actuales son placeholders básicos y pueden ser expandidas con contenido real
- Los iconos de las pestañas usan emojis para evitar dependencias adicionales
- La aplicación es compatible con iOS, Android y Web
- Para producción, considera agregar iconos personalizados y contenido específico

## 🌐 Despliegue

La aplicación puede ser desplegada en:
- **Expo:** Usando `expo publish`
- **Web:** En servicios como Netlify o Vercel
- **App Stores:** Construyendo binarios con EAS Build
