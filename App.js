import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Linking, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// TUS 20 INTERNOS REALES
const INTERNOS_DATA = [
  { id: 'P-001', nombre: 'Gustavo Marcelo Páez', ingreso: '06/Nov/2024' },
  { id: 'P-002', nombre: 'Carlos Ernesto Marroquín Flores', ingreso: '18/Feb/2025' },
  { id: 'P-003', nombre: 'Oscar Flores Pérez', ingreso: '22/Mar/2025' },
  { id: 'P-004', nombre: 'Guillermo Alonso Robles', ingreso: '01/Abr/2025' },
  { id: 'P-005', nombre: 'Genaro Cid Reyes', ingreso: '18/Abr/2025' },
  { id: 'P-006', nombre: 'Albino Aguilar Jiménez', ingreso: '20/Abr/2025' },
  { id: 'P-007', nombre: 'Armando Rivera Huerta', ingreso: '19/May/2025' },
  { id: 'P-008', nombre: 'Gerardo Bernal Martínez', ingreso: '06/Jun/2025' },
  { id: 'P-009', nombre: 'Ivan Ortiz Jiménez', ingreso: '06/Jun/2025' },
  { id: 'P-010', nombre: 'Yahir De Jesús Martínez Vázquez', ingreso: '02/Jul/2025' },
  { id: 'P-011', nombre: 'Jesús Everardo Song Contreras', ingreso: '10/Jul/2025' },
  { id: 'P-012', nombre: 'Manuel Martínez Beristain', ingreso: '27/Jul/2025' },
  { id: 'P-013', nombre: 'Luis Manuel De la Cruz Ventura', ingreso: '12/Ago/2025' },
  { id: 'P-014', nombre: 'Isai Carrera Pérez', ingreso: '14/Ago/2025' },
  { id: 'P-015', nombre: 'Luis Enrique Lozada Muñoz', ingreso: '19/Ago/2025' },
  { id: 'P-016', nombre: 'Gabriel Yahir Olivares Herrera', ingreso: '20/Ago/2025' },
  { id: 'P-017', nombre: 'Luis Rodrigo López Martínez', ingreso: '02/Sep/2025' },
  { id: 'P-018', nombre: 'Esteban Herrera Vázquez', ingreso: '20/Sep/2025' },
  { id: 'P-019', nombre: 'Juan Temoxtle Méndez', ingreso: '22/Sep/2025' },
  { id: 'P-020', nombre: 'Alberto Hernández Salazar', ingreso: '05/Oct/2025' }
];

// =============================================
// PANTALLA DE INICIO
// =============================================
function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* LOGO PROFESIONAL MEJORADO */}
      <View style={styles.logoContainer}>
        <View style={styles.professionalLogo}>
          <View style={styles.logoIconContainer}>
            <Text style={styles.logoIcon}>EP</Text>
          </View>
          <View style={styles.logoTextContainer}>
            <Text style={styles.logoMainTitle}>EN PLENITUD</Text>
            <Text style={styles.logoSubtitle}>CENTRO DE REHABILITACIÓN A.C.</Text>
            <Text style={styles.logoTagline}>Restauración y Vida en Plenitud</Text>
          </View>
        </View>
      </View>

      <View style={styles.quoteCard}>
        <Text style={styles.quote}>"Lo que evades te controla... lo que enfrentas te libera"</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>CONTACTO INMEDIATO</Text>
        
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('tel:2721384183')}>
          <Text style={styles.buttonText}>📞 Llamar: 272-138-4183</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('tel:2285125647')}>
          <Text style={styles.buttonText}>📞 Llamar: 228-512-5647</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.whatsappButton} onPress={() => Linking.openURL('https://wa.me/522721384183')}>
          <Text style={styles.buttonText}>💬 WhatsApp: 272-138-4183</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>UBICACIÓN</Text>
        <Text style={styles.address}>Privada Piedad Perez Ortiz #4, Colonia Ejidal</Text>
        <Text style={styles.address}>Mariano Escobedo, Orizaba, Ver.</Text>
        <Text style={styles.motto}>"El dolor es temporal, la transformación es para siempre"</Text>
      </View>
    </ScrollView>
  );
}

// =============================================
// PANTALLA DE MÉTODO EN PLENITUD
// =============================================
function MetodoPlenitudScreen() {
  const pilares = [
    {
      title: "1. COACHING TRANSFORMACIONAL CON PNL",
      description: "Reprogramación de patrones mentales mediante Programación Neurolingüística para crear nuevos caminos neuronales.",
      image: "🧠"
    },
    {
      title: "2. PSICOLOGÍA INDIVIDUAL Y GRUPAL", 
      description: "Atención psicológica personalizada y terapia grupal para el desarrollo emocional.",
      image: "👥"
    },
    {
      title: "3. PROGRAMA 12 PASOS AA",
      description: "Método probado de Alcohólicos Anónimos adaptado a todas las adicciones.",
      image: "🔄"
    },
    {
      title: "4. ENTRENAMIENTO FÍSICO INTEGRAL",
      description: "Entrenamiento funcional, terapia de rehabilitación y programa de acondicionamiento.",
      image: "💪"
    },
    {
      title: "5. DESARROLLO ESPIRITUAL",
      description: "Recuperando la conexión con nuestro Poder Superior, porque Dios transforma y sana integralmente.",
      image: "✨"
    },
    {
      title: "6. DESINTOXICACIÓN IÓNICA", 
      description: "Tecnología de punta para desintoxicación celular mediante baños iónicos.",
      image: "🌊"
    },
    {
      title: "7. ATENCIÓN MÉDICA PSICOLÓGICA",
      description: "Equipo multidisciplinario de médicos y psicólogos para una atención integral de salud mental y física.",
      image: "🏥"
    },
    {
      title: "8. REFLEXIÓN AUDIOVISUAL",
      description: "Terapia mediante cine, documentales y material audiovisual seleccionado.",
      image: "🎬"
    },
    {
      title: "9. CONSEJERÍA EN ADICCIONES",
      description: "Acompañamiento personalizado por consejeros certificados en adicciones.",
      image: "🤝"
    }
  ];

  const conceptos = [
    {
      concepto: "1. El rol de víctima",
      descripcion: "Dejas de culparte por tu pasado y eliges sanar desde la responsabilidad.",
      icono: "🎭"
    },
    {
      concepto: "2. Vivir desde la responsabilidad", 
      descripcion: "Te haces cargo de tus decisiones, tus emociones y tu destino.",
      icono: "🎯"
    },
    {
      concepto: "3. Salir de la zona de confort",
      descripcion: "Eliges el crecimiento, aunque duela o incomode.",
      icono: "🚀"
    },
    {
      concepto: "4. Amor propio",
      descripcion: "Aprendes a valorarte, cuidarte y no conformarte con lo que te daña.",
      icono: "💖"
    },
    {
      concepto: "5. Perdón y culpas",
      descripcion: "Sanas heridas soltando el resentimiento y el autojuicio.",
      icono: "🕊️"
    },
    {
      concepto: "6. Diálogo interno",
      descripcion: "Transformas tu manera de hablarte y te conviertes en tu mejor aliado.",
      icono: "🗣️"
    },
    {
      concepto: "7. Dios lo es todo",
      descripcion: "Reconectas con lo divino como fuente de propósito, paz y dirección.",
      icono: "🙏"
    },
    {
      concepto: "8. ¿Qué quiero para mi vida y qué no?",
      descripcion: "Definirlo te da claridad y enfoque.",
      icono: "🎯"
    },
    {
      concepto: "9. Decisiones inteligentes",
      descripcion: "Cada decisión puede acercarte o alejarte de tu mejor versión.",
      icono: "⚖️"
    },
    {
      concepto: "10. Visualización consciente",
      descripcion: "Proyectas en tu mente la vida que deseas y la atraes con intención.",
      icono: "🔮"
    },
    {
      concepto: "11. Plan de vida",
      descripcion: "Trazas tu camino con propósito, dirección y metas claras.",
      icono: "🗺️"
    },
    {
      concepto: "12. 35,000 decisiones diarias",
      descripcion: "Descubres el poder de tus elecciones cotidianas.",
      icono: "🔄"
    },
    {
      concepto: "13. Soy suficiente",
      descripcion: "No necesitas demostrar nada a nadie. Tu valor ya está en ti.",
      icono: "💎"
    },
    {
      concepto: "14. Tu historia no ha terminado",
      descripcion: "Cada día es una nueva oportunidad para comenzar.",
      icono: "📖"
    },
    {
      concepto: "15. Límites saludables",
      descripcion: "Pones un alto al abuso, a la dependencia y al autosabotaje.",
      icono: "🚧"
    },
    {
      concepto: "16. Curiosidad en vez de juicio",
      descripcion: "Cambias el '¿por qué me pasa esto?' por '¿para qué estoy viviendo esto?'",
      icono: "🤔"
    },
    {
      concepto: "17. Aceptación radical",
      descripcion: "Lo que no aceptas, te sigue dominando.",
      icono: "🔄"
    },
    {
      concepto: "18. Disciplina emocional",
      descripcion: "Actúas desde lo que te conviene, no desde lo que sientes.",
      icono: "🧠"
    },
    {
      concepto: "19. ¿Qué estás evadiendo?",
      descripcion: "Lo que evitas, te controla. Lo que enfrentas, te libera.",
      icono: "🔍"
    },
    {
      concepto: "20. ¿Qué tal si sí...?",
      descripcion: "¿Y si sí puedes cambiar? ¿Y si sí eres suficiente? ¿Y si esta vez sí funciona?",
      icono: "🌟"
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>🏛️ LOS 9 PILARES DE TRANSFORMACIÓN</Text>
      
      {pilares.map((pilar, index) => (
        <View key={index} style={styles.pilarCard}>
          <Text style={styles.pilarIcon}>{pilar.image}</Text>
          <Text style={styles.pilarTitle}>{pilar.title}</Text>
          <Text style={styles.pilarDescription}>{pilar.description}</Text>
        </View>
      ))}

      <View style={styles.separator}>
        <View style={styles.separatorLine}></View>
        <Text style={styles.separatorText}>+</Text>
        <View style={styles.separatorLine}></View>
      </View>

      <Text style={styles.screenTitle}>🌟 20 CONCEPTOS TRANSFORMADORES</Text>
      <Text style={styles.conceptosSubtitle}>Principios fundamentales para tu crecimiento personal</Text>
      
      {conceptos.map((item, index) => (
        <View key={index} style={styles.conceptoCard}>
          <View style={styles.conceptoHeader}>
            <Text style={styles.conceptoIcono}>{item.icono}</Text>
            <View style={styles.conceptoInfo}>
              <Text style={styles.conceptoTitulo}>{item.concepto}</Text>
              <Text style={styles.conceptoDescripcion}>{item.descripcion}</Text>
            </View>
          </View>
        </View>
      ))}

      <View style={styles.metodoFinalCard}>
        <Text style={styles.metodoFinalTitle}>EL MÉTODO EN PLENITUD</Text>
        <Text style={styles.metodoFinalText}>
          La combinación perfecta entre estructura terapéutica (9 Pilares) y transformación mental (20 Conceptos) para una recuperación integral y duradera.
        </Text>
        <Text style={styles.metodoFinalMotto}>
          "Transformamos vidas desde el interior hacia el exterior"
        </Text>
      </View>
    </ScrollView>
  );
}

// =============================================
// PANTALLA: INTERNAMIENTO RESIDENCIAL
// =============================================
function InternamientoScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>🏠 INTERNAMIENTO RESIDENCIAL</Text>
      
      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Nuestro Espacio Residencial</Text>
        <Text style={styles.sectionText}>
          Ofrecemos un internamiento residencial digno en instalaciones diseñadas específicamente para la recuperación y transformación integral de la persona y su familia.
        </Text>
      </View>

      <View style={styles.featureCard}>
        <Text style={styles.featureIcon}>🛏️</Text>
        <View style={styles.featureInfo}>
          <Text style={styles.featureTitle}>Habitaciones Privadas</Text>
          <Text style={styles.featureDesc}>Espacios cómodos, seguros y acogedores para descanso y recuperación personal.</Text>
        </View>
      </View>

      <View style={styles.featureCard}>
        <Text style={styles.featureIcon}>🍽️</Text>
        <View style={styles.featureInfo}>
          <Text style={styles.featureTitle}>Alimentación Completa</Text>
          <Text style={styles.featureDesc}>Tres comidas diarias balanceadas, diseñadas por nutricionistas para fortalecer tu recuperación.</Text>
        </View>
      </View>

      <View style={styles.featureCard}>
        <Text style={styles.featureIcon}>🎯</Text>
        <View style={styles.featureInfo}>
          <Text style={styles.featureTitle}>Plan de Vida</Text>
          <Text style={styles.featureDesc}>Desarrollo de un proyecto de vida estructurado con metas claras y objetivos alcanzables.</Text>
        </View>
      </View>

      <View style={styles.featureCard}>
        <Text style={styles.featureIcon}>💼</Text>
        <View style={styles.featureInfo}>
          <Text style={styles.featureTitle}>Coaching Empresarial</Text>
          <Text style={styles.featureDesc}>Preparación para reinserción laboral y desarrollo de habilidades emprendedoras.</Text>
        </View>
      </View>

      <View style={styles.featureCard}>
        <Text style={styles.featureIcon}>👨‍👩‍👧‍👦</Text>
        <View style={styles.featureInfo}>
          <Text style={styles.featureTitle}>Asesoría Familiar</Text>
          <Text style={styles.featureDesc}>La familia también necesita sanar. Ofrecemos terapia familiar, talleres y acompañamiento para reconstruir relaciones saludables.</Text>
        </View>
      </View>

      <View style={styles.featureCard}>
        <Text style={styles.featureIcon}>👥</Text>
        <View style={styles.featureInfo}>
          <Text style={styles.featureTitle}>Espacios Comunes</Text>
          <Text style={styles.featureDesc}>Áreas de convivencia, meditación y desarrollo comunitario para integración social.</Text>
        </View>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Beneficios del Internamiento</Text>
        <Text style={styles.sectionText}>
          • Ambiente controlado y libre de tentaciones{"\n"}
          • Acompañamiento profesional 24/7{"\n"}
          • Programa estructurado de actividades{"\n"}
          • Enfoque integral: físico, mental y espiritual{"\n"}
          • Terapia familiar incluida{"\n"}
          • Talleres para familiares{"\n"}
          • Seguimiento personalizado{"\n"}
          • Reinserción gradual y acompañada
        </Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Sanación Familiar</Text>
        <Text style={styles.sectionText}>
          Creemos que la recuperación es un proceso familiar. Por eso incluimos:
          {"\n\n"}• Terapia familiar semanal
          {"\n"}• Talleres educativos para entender la adicción
          {"\n"}• Grupos de apoyo para familiares
          {"\n"}• Acompañamiento en el proceso de reinserción
          {"\n\n"}"Cuando una familia sana, la recuperación es más sólida y duradera"
        </Text>
      </View>
    </ScrollView>
  );
}

// =============================================
// PANTALLA DE QUIÉNES SOMOS
// =============================================
function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>QUIÉNES SOMOS</Text>
      
      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Nuestra Esencia</Text>
        <Text style={styles.sectionText}>
          En Restauración y Vida en Plenitud A.C. somos un centro especializado en la atención integral de personas que enfrentan problemas de adicciones. Nuestro propósito es ofrecer un espacio seguro, humano y profesional donde cada individuo pueda sanar, transformarse y redescubrir el sentido de su vida.
        </Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Nuestra Filosofía</Text>
        <Text style={styles.sectionText}>
          Creemos firmemente que toda persona merece una segunda oportunidad y que la recuperación es posible cuando se trabaja desde el corazón, con acompañamiento adecuado y un enfoque integral.
        </Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Nuestra Familia</Text>
        <Text style={styles.sectionText}>
          Más que un centro de rehabilitación, somos una familia comprometida con la esperanza, la dignidad y el renacimiento de quienes han decidido dejar atrás la oscuridad de las adicciones.
        </Text>
      </View>

      <View style={styles.missionVisionCard}>
        <Text style={styles.sectionTitle}>Misión</Text>
        <Text style={styles.sectionText}>
          Facilitar la restauración integral de personas afectadas por adicciones, brindando programas terapéuticos personalizados que promuevan su sanación física, emocional y espiritual.
        </Text>

        <View style={styles.divider}></View>

        <Text style={styles.sectionTitle}>Visión</Text>
        <Text style={styles.sectionText}>
          Ser un referente en la rehabilitación de adicciones, reconocido por transformar vidas a través de un enfoque holístico que integra la restauración personal y la búsqueda de una existencia en plenitud.
        </Text>
      </View>
    </ScrollView>
  );
}

// =============================================
// PANTALLA DE INSTALACIONES
// =============================================
function InstalacionesScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>NUESTRAS INSTALACIONES</Text>
      
      <View style={styles.installationCard}>
        <Text style={styles.installationTitle}>Áreas de Terapia</Text>
        <Text style={styles.installationDesc}>Espacios diseñados para la sanación y el crecimiento personal con ambiente tranquilo y profesional.</Text>
      </View>

      <View style={styles.installationCard}>
        <Text style={styles.installationTitle}>Áreas Deportivas</Text>
        <Text style={styles.installationDesc}>Canchas de fútbol, alberca, áreas verdes de descanso, área de cardio y área de pesas.</Text>
      </View>

      <View style={styles.installationCard}>
        <Text style={styles.installationTitle}>Habitaciones</Text>
        <Text style={styles.installationDesc}>Espacios cómodos, seguros y acogedores para el descanso y recuperación.</Text>
      </View>

      <View style={styles.installationCard}>
        <Text style={styles.installationTitle}>Áreas Comunes</Text>
        <Text style={styles.installationDesc}>Espacios para convivencia, meditación y desarrollo comunitario.</Text>
      </View>
    </ScrollView>
  );
}

// =============================================
// PANTALLA DE TESTIMONIOS
// =============================================
function TestimoniosScreen() {
  const testimonios = [
    {
      nombre: "Carlos M.",
      edad: "34 años",
      tiempoSobrio: "1 año 3 meses",
      testimonio: "Llegué a En Plenitud sin esperanza, hoy tengo mi familia de vuelta y un propósito de vida. El programa de 9 pilares cambió todo para mí.",
      imagen: "🙏"
    },
    {
      nombre: "Ana R.",
      edad: "28 años", 
      tiempoSobrio: "8 meses",
      testimonio: "Los grupos de terapia y el coaching transformacional me ayudaron a entender las raíces de mi adicción. Hoy soy libre y feliz.",
      imagen: "✨"
    },
    {
      nombre: "Miguel T.",
      edad: "45 años",
      tiempoSobrio: "2 años",
      testimonio: "Después de 3 centros de rehabilitación, En Plenitud fue el único que realmente funcionó. El enfoque integral hace la diferencia.",
      imagen: "💪"
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>TESTIMONIOS DE TRANSFORMACIÓN</Text>
      <Text style={styles.testimoniosSubtitle}>Historias reales de recuperación y esperanza</Text>
      
      {testimonios.map((testimonio, index) => (
        <View key={index} style={styles.testimonioCard}>
          <View style={styles.testimonioHeader}>
            <Text style={styles.testimonioImagen}>{testimonio.imagen}</Text>
            <View style={styles.testimonioInfo}>
              <Text style={styles.testimonioNombre}>{testimonio.nombre}</Text>
              <Text style={styles.testimonioEdad}>{testimonio.edad} • {testimonio.tiempoSobrio} sobrio</Text>
            </View>
          </View>
          <Text style={styles.testimonioTexto}>"{testimonio.testimonio}"</Text>
        </View>
      ))}
    </ScrollView>
  );
}

// =============================================
// SISTEMA MEJORADO DE FAMILIAS
// =============================================

// Pantalla de LOGIN PARA FAMILIAS
function LoginFamiliasScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);

  const handleLogin = () => {
    if (isBlocked) {
      setError('Demasiados intentos. Espere 5 minutos.');
      return;
    }

    if (usuario === 'familia' && contrasena === 'plenitud2024') {
      setError('');
      setLoginAttempts(0);
      navigation.navigate('ListaInternos');
    } else {
      const newAttempts = loginAttempts + 1;
      setLoginAttempts(newAttempts);
      
      if (newAttempts >= 3) {
        setIsBlocked(true);
        setTimeout(() => setIsBlocked(false), 300000); // 5 minutos
        setError('Demasiados intentos. Cuenta bloqueada por 5 minutos.');
      } else {
        setError(`Usuario o contraseña incorrectos. Intentos: ${newAttempts}/3`);
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>👨‍👩‍👧‍👦 ÁREA PARA FAMILIAS</Text>
      <Text style={styles.loginSubtitle}>Acceso exclusivo para familiares de internos</Text>
      
      <View style={styles.loginCard}>
        <Text style={styles.loginTitle}>Iniciar Sesión</Text>
        
        <Text style={styles.loginLabel}>Usuario:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu usuario"
          placeholderTextColor="#666"
          value={usuario}
          onChangeText={setUsuario}
          selectionColor="#1e40af"
        />
        
        <Text style={styles.loginLabel}>Contraseña:</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Ingresa tu contraseña"
            placeholderTextColor="#666"
            secureTextEntry={!mostrarPassword}
            value={contrasena}
            onChangeText={setContrasena}
            selectionColor="#1e40af"
          />
          <TouchableOpacity 
            style={styles.eyeButton}
            onPress={() => setMostrarPassword(!mostrarPassword)}
          >
            <Ionicons 
              name={mostrarPassword ? "eye-off" : "eye"} 
              size={24} 
              color="#666" 
            />
          </TouchableOpacity>
        </View>
        
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Acceder al Área Familiar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// Pantalla de LISTA DE INTERNOS
function ListaInternosScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>👨‍👩‍👧‍👦 TUS FAMILIARES EN EL CENTRO</Text>
      <Text style={styles.loginSubtitle}>Selecciona un familiar para ver su información</Text>
      
      {INTERNOS_DATA.map((interno, index) => (
        <TouchableOpacity 
          key={interno.id}
          style={styles.internoCard}
          onPress={() => navigation.navigate('AccesoSpecifico', { interno })}
        >
          <View style={styles.internoInfo}>
            <Text style={styles.internoNombre}>{interno.nombre}</Text>
            <Text style={styles.internoIngreso}>Ingreso: {interno.ingreso}</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#1e40af" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

// Pantalla de ACCESO ESPECÍFICO POR PACIENTE
function AccesoSpecificoScreen({ route, navigation }) {
  const { interno } = route.params;
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  const handleAcceso = () => {
    // Contraseña temporal: "paciente" + ID (ej: "paciente001")
    const contrasenaCorrecta = `paciente${interno.id.split('-')[1]}`;
    
    if (contrasena === contrasenaCorrecta) {
      setError('');
      navigation.navigate('InfoPaciente', { interno });
    } else {
      setError('Contraseña incorrecta para este paciente');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>🔒 ACCESO A INFORMACIÓN</Text>
      
      <View style={styles.loginCard}>
        <Text style={styles.loginTitle}>Acceso a: {interno.nombre}</Text>
        <Text style={styles.loginSubtitle}>Ingresa la contraseña específica para este familiar</Text>
        
        <Text style={styles.loginLabel}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          placeholder="Contraseña del paciente"
          placeholderTextColor="#666"
          secureTextEntry
          value={contrasena}
          onChangeText={setContrasena}
          selectionColor="#1e40af"
        />
        
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        
        <TouchableOpacity style={styles.loginButton} onPress={handleAcceso}>
          <Text style={styles.loginButtonText}>Ver Información</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// Pantalla de INFORMACIÓN DEL PACIENTE
function InfoPacienteScreen({ route }) {
  const { interno } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>📋 INFORMACIÓN DE {interno.nombre.split(' ')[0].toUpperCase()}</Text>
      
      <View style={styles.familiaWelcomeCard}>
        <Text style={styles.familiaWelcomeTitle}>{interno.nombre}</Text>
        <Text style={styles.familiaWelcomeText}>Ingreso: {interno.ingreso}</Text>
      </View>

      <View style={styles.familiaCard}>
        <Text style={styles.familiaCardTitle}>📊 Progreso Médico</Text>
        <Text style={styles.familiaCardText}>
          • Estado de salud: Estable{"\n"}
          • Avance en tratamiento: 65%{"\n"}
          • Próxima evaluación: Próxima semana{"\n"}
          • Medicación: Controlada
        </Text>
      </View>

      <View style={styles.familiaCard}>
        <Text style={styles.familiaCardTitle}>🧠 Reportes Psicológicos</Text>
        <Text style={styles.familiaCardText}>
          • Asistencia a terapia: 100%{"\n"}
          • Participación: Activa{"\n"}
          • Progreso emocional: Notable{"\n"}
          • Próxima sesión: Mañana
        </Text>
      </View>

      <View style={styles.familiaCard}>
        <Text style={styles.familiaCardTitle}>🖼️ Galería de Progreso</Text>
        <Text style={styles.familiaCardText}>
          • Fotos disponibles: 12{"\n"}
          • Última actualización: Ayer{"\n"}
          • Estado ánimo: Positivo
        </Text>
      </View>

      <View style={styles.familiaCard}>
        <Text style={styles.familiaCardTitle}>📞 Contacto del Terapeuta</Text>
        <Text style={styles.familiaCardText}>
          • Psicólogo: Lic. Ana Martínez{"\n"}
          • Teléfono: 272-123-4567{"\n"}
          • Email: terapeuta@enplenitud.com{"\n"}
          • Horario: Lunes a Viernes 9am-6pm
        </Text>
      </View>
    </ScrollView>
  );
}

// Stack Navigator para Familias MEJORADO
function FamiliasStack() {
  return (
    <Stack.Navigator 
      screenOptions={{ 
        headerShown: true,
        headerStyle: {
          backgroundColor: '#1e40af',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }}
    >
      <Stack.Screen 
        name="LoginFamilias" 
        component={LoginFamiliasScreen}
        options={{ title: 'Área para Familias' }}
      />
      <Stack.Screen 
        name="ListaInternos" 
        component={ListaInternosScreen}
        options={{ title: 'Familiares Internos' }}
      />
      <Stack.Screen 
        name="AccesoSpecifico" 
        component={AccesoSpecificoScreen}
        options={{ title: 'Acceso Específico' }}
      />
      <Stack.Screen 
        name="InfoPaciente" 
        component={InfoPacienteScreen}
        options={{ title: 'Información del Paciente' }}
      />
    </Stack.Navigator>
  );
}

// App Principal con Pestañas
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            if (route.name === 'Inicio') iconName = 'home';
            else if (route.name === 'Método En Plenitud') iconName = 'layers';
            else if (route.name === 'Internamiento') iconName = 'bed';
            else if (route.name === 'Quiénes Somos') iconName = 'people';
            else if (route.name === 'Instalaciones') iconName = 'business';
            else if (route.name === 'Testimonios') iconName = 'heart';
            else if (route.name === 'Área Familias') iconName = 'lock-closed';
            
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#1e40af',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Método En Plenitud" component={MetodoPlenitudScreen} />
        <Tab.Screen name="Internamiento" component={InternamientoScreen} />
        <Tab.Screen name="Quiénes Somos" component={AboutScreen} />
        <Tab.Screen name="Instalaciones" component={InstalacionesScreen} />
        <Tab.Screen name="Testimonios" component={TestimoniosScreen} />
        <Tab.Screen name="Área Familias" component={FamiliasStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// ESTILOS COMPLETOS MEJORADOS
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f0f8ff' 
  },
  screenTitle: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    margin: 20, 
    color: '#1e40af' 
  },
  
  // LOGO PROFESIONAL MEJORADO
  logoContainer: { 
    alignItems: 'center', 
    paddingTop: 30,
    paddingBottom: 20,
  },
  professionalLogo: {
    backgroundColor: '#1e40af',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    minWidth: 280,
    marginHorizontal: 20,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  logoIconContainer: {
    marginRight: 15,
  },
  logoIcon: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 15,
    borderRadius: 50,
    width: 60,
    height: 60,
    textAlign: 'center',
    lineHeight: 30,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  logoTextContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logoMainTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 4,
  },
  logoSubtitle: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    opacity: 0.9,
    marginBottom: 4,
    fontWeight: '600',
  },
  logoTagline: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  
  // CARDS
  card: { 
    backgroundColor: 'white', 
    margin: 15, 
    padding: 20, 
    borderRadius: 10, 
    elevation: 3 
  },
  quoteCard: { 
    backgroundColor: '#3b82f6', 
    margin: 15, 
    padding: 20, 
    borderRadius: 10 
  },
  quote: { 
    fontSize: 18, 
    color: 'white', 
    fontWeight: 'bold', 
    textAlign: 'center', 
    lineHeight: 26 
  },
  cardTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#1e40af', 
    marginBottom: 15, 
    textAlign: 'center' 
  },
  
  // BOTONES
  button: { 
    backgroundColor: '#2563eb', 
    padding: 15, 
    borderRadius: 8, 
    alignItems: 'center', 
    marginBottom: 10 
  },
  whatsappButton: { 
    backgroundColor: '#22c55e', 
    padding: 15, 
    borderRadius: 8, 
    alignItems: 'center', 
    marginBottom: 10 
  },
  buttonText: { 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
  
  // TEXTOS
  address: { 
    fontSize: 16, 
    color: '#4b5563', 
    textAlign: 'center', 
    marginBottom: 5 
  },
  motto: { 
    fontSize: 14, 
    color: '#6b7280', 
    fontStyle: 'italic', 
    textAlign: 'center',
    marginTop: 10 
  },
  
  // MÉTODO EN PLENITUD
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 20,
  },
  separatorLine: {
    flex: 1,
    height: 2,
    backgroundColor: '#cbd5e1',
  },
  separatorText: {
    marginHorizontal: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e40af',
  },
  metodoFinalCard: {
    backgroundColor: '#1e40af',
    margin: 20,
    padding: 25,
    borderRadius: 15,
    elevation: 5,
  },
  metodoFinalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 15,
  },
  metodoFinalText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 15,
  },
  metodoFinalMotto: {
    fontSize: 14,
    color: '#dbeafe',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  
  // PILARES
  pilarCard: { 
    backgroundColor: 'white', 
    margin: 10, 
    padding: 15, 
    borderRadius: 10, 
    elevation: 3 
  },
  pilarIcon: { 
    fontSize: 40, 
    textAlign: 'center', 
    marginBottom: 10 
  },
  pilarTitle: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#1e40af', 
    marginBottom: 8 
  },
  pilarDescription: { 
    fontSize: 14, 
    color: '#666', 
    lineHeight: 20 
  },
  
  // QUIÉNES SOMOS
  infoCard: { 
    backgroundColor: 'white', 
    margin: 10, 
    padding: 20, 
    borderRadius: 10 
  },
  sectionTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#1e40af', 
    marginBottom: 10 
  },
  sectionText: { 
    fontSize: 16, 
    color: '#666', 
    lineHeight: 24 
  },
  missionVisionCard: {
    backgroundColor: 'white',
    margin: 10,
    padding: 25,
    borderRadius: 10,
    elevation: 3,
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 15,
  },
  
  // INSTALACIONES
  installationCard: {
    backgroundColor: 'white',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  installationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 10,
  },
  installationDesc: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },

  // TESTIMONIOS
  testimoniosSubtitle: {
    fontSize: 16,
    color: '#4b5563',
    textAlign: 'center',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  testimonioCard: {
    backgroundColor: 'white',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  testimonioHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  testimonioImagen: {
    fontSize: 30,
    marginRight: 15,
  },
  testimonioInfo: {
    flex: 1,
  },
  testimonioNombre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e40af',
  },
  testimonioEdad: {
    fontSize: 14,
    color: '#6b7280',
  },
  testimonioTexto: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    fontStyle: 'italic',
  },

  // CONCEPTOS
  conceptosSubtitle: {
    fontSize: 16,
    color: '#4b5563',
    textAlign: 'center',
    marginBottom: 20,
    marginHorizontal: 15,
  },
  conceptoCard: {
    backgroundColor: 'white',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  conceptoHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  conceptoIcono: {
    fontSize: 24,
    marginRight: 15,
  },
  conceptoInfo: {
    flex: 1,
  },
  conceptoTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 5,
  },
  conceptoDescripcion: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },

  // LOGIN FAMILIAS - MEJORADO
  loginSubtitle: {
    fontSize: 16,
    color: '#4b5563',
    textAlign: 'center',
    marginBottom: 20,
    marginHorizontal: 15,
  },
  loginCard: {
    backgroundColor: 'white',
    margin: 15,
    padding: 25,
    borderRadius: 10,
    elevation: 3,
  },
  loginTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e40af',
    textAlign: 'center',
    marginBottom: 20,
  },
  loginLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    padding: 12,
    fontSize: 16,
  },
  eyeButton: {
    padding: 12,
  },
  errorText: {
    color: '#dc2626',
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#1e40af',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // AREA FAMILIAS
  internoCard: {
    backgroundColor: 'white',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  internoInfo: {
    flex: 1,
  },
  internoNombre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 5,
  },
  internoIngreso: {
    fontSize: 14,
    color: '#666',
  },
  familiaWelcomeCard: {
    backgroundColor: '#dbeafe',
    margin: 15,
    padding: 25,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#1e40af',
  },
  familiaWelcomeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 10,
    textAlign: 'center',
  },
  familiaWelcomeText: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 22,
    textAlign: 'center',
  },
  familiaCard: {
    backgroundColor: 'white',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    elevation: 2,
  },
  familiaCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 10,
  },
  familiaCardText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },

  // NUEVOS ESTILOS PARA INTERNAMIENTO
  featureCard: {
    backgroundColor: 'white',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureIcon: {
    fontSize: 30,
    marginRight: 15,
  },
  featureInfo: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 5,
  },
  featureDesc: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});