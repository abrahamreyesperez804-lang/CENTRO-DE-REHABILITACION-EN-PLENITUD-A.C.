# Copilot Instructions for EN PLENITUD - Centro de Rehabilitación

## Project Overview
This is a React Native/Expo mobile application for "EN PLENITUD", a rehabilitation center in Orizaba, Veracruz, Mexico. The app provides information about the center, its methodology, facilities, testimonials, and a secure family access area.

## Technology Stack
- **Framework**: React Native with Expo (~50.0.0)
- **Navigation**: React Navigation v6 (Bottom Tabs + Native Stack)
- **Runtime**: Node.js with React 18.2.0
- **Platform**: Cross-platform (iOS, Android, Web)
- **Icons**: Expo Vector Icons (Ionicons)
- **Storage**: AsyncStorage for local data persistence

## Coding Standards

### JavaScript/React Native Conventions
- Use **functional components** with React Hooks (useState, useEffect, etc.)
- Follow ES6+ syntax (arrow functions, destructuring, template literals)
- Use **camelCase** for variables and functions
- Use **PascalCase** for component names
- Keep components focused and single-responsibility
- Extract reusable styles into StyleSheet objects

### Component Structure
- Place screen components in the main App.js or create separate screen files if needed
- Keep navigation setup clear and organized
- Use ScrollView for scrollable content
- Implement TouchableOpacity for interactive elements
- Use Ionicons for consistent iconography

### Styling Guidelines
- Use StyleSheet.create() for all styles
- Define styles at the bottom of each component file
- Use consistent spacing and padding (multiples of 4 or 8)
- Maintain the current color scheme:
  - Primary Blue: #1e40af, #2563eb, #3b82f6
  - Success Green: #22c55e, #10b981
  - Text Gray: #4b5563, #6b7280
  - Background: #f0f8ff, white
- Ensure responsive design that works on mobile and web

### Data Handling
- Store sensitive information (like family credentials) securely
- Use constants (CONST_CASE) for fixed data like INTERNOS_DATA
- Handle async operations properly with try-catch blocks
- Validate user inputs before processing

### Phone Numbers and Contact Information
- Format phone numbers consistently: XXX-XXX-XXXX
- Primary contact: 272-138-4183
- Secondary contact: 228-512-5647
- WhatsApp: Use proper wa.me links with country code +52

### Language and Content
- All user-facing content must be in **Spanish**
- Maintain respectful and professional tone
- Keep motivational quotes and messaging aligned with recovery and transformation themes
- Be culturally sensitive to Mexican context

## Development Workflow

### Running the Application
```bash
# Install dependencies
npm install

# Start development server
npm start
# or
npx expo start

# Run on specific platform
npm run android  # Android
npm run ios      # iOS
npm run web      # Web browser
```

### Testing
- Test on multiple screen sizes (mobile and tablet)
- Verify web compatibility
- Test phone call and WhatsApp links on actual devices
- Validate family login functionality
- Ensure all navigation flows work correctly

### Building
- Use Expo's build service for production builds
- Test thoroughly before publishing updates
- Maintain version numbers in package.json

## Project-Specific Guidelines

### Authentication
- Family area uses simple credential check (username: "familia", password: "plenitud2024")
- No complex authentication system is implemented
- Keep login process simple and accessible

### Content Sections
1. **Inicio (Home)**: Contact information and quick access
2. **Método En Plenitud**: 9 pillars and 20 transformational concepts
3. **Internamiento (Internment)**: Residential program information
4. **Quiénes Somos (About Us)**: Mission, vision, and philosophy
5. **Instalaciones (Facilities)**: Center areas and spaces
6. **Testimonios (Testimonials)**: Recovery stories
7. **Área Familias (Family Area)**: Secure access for families to view resident information

### Data Privacy
- The INTERNOS_DATA contains real resident information
- Handle this data with care and respect privacy
- Do not expose sensitive data in logs or error messages
- Ensure family area remains properly secured

### Icons and Emojis
- Consistently use appropriate emojis for visual appeal
- Match icons to their contextual meaning:
  - 🏥 Medical/Center
  - 💬 WhatsApp/Communication
  - 📞 Phone calls
  - 📍 Location
  - 🧠 Mental health
  - 💪 Physical fitness
  - ✨ Spiritual development

## Best Practices for This Repository

### When Adding Features
- Maintain the existing navigation structure
- Follow the established styling patterns
- Keep the UI simple and accessible
- Test on both mobile and web platforms
- Ensure new features work offline when possible

### When Fixing Bugs
- Verify the issue on the specific platform (iOS/Android/Web)
- Consider cross-platform compatibility
- Test thoroughly after fixes
- Don't break existing functionality

### When Refactoring
- Maintain backward compatibility
- Keep the app performant
- Don't over-engineer solutions
- Preserve the current user experience

### Documentation
- Update README.md when adding significant features
- Document complex logic with inline comments
- Keep package.json dependencies up to date
- Note any platform-specific considerations

## Common Tasks

### Adding a New Screen
1. Create the screen component function
2. Add navigation configuration in Tab or Stack navigator
3. Implement appropriate styling
4. Add icon from Ionicons
5. Test navigation flow

### Updating Contact Information
- Update constants at the top of App.js
- Verify phone number formatting
- Test links on mobile devices
- Update both App.js and index.html if needed

### Modifying Resident Data
- Update INTERNOS_DATA array in App.js
- Maintain the object structure: {id, nombre, ingreso}
- Keep ID format: P-XXX (where XXX is a number)
- Use proper date format: DD/MMM/YYYY

## Important Notes
- This app serves a sensitive purpose (rehabilitation center)
- Maintain professionalism and respect in all changes
- Consider the emotional state of users (families seeking help)
- Ensure all contact methods work reliably
- Keep the app accessible and easy to use for all age groups
