# 🎨 Guía de Diseño & Sistema de Diseño

## 📌 Descripción del Proyecto
Sitio web corporativo moderno y responsivo para **INACONS**, empresa constructora con más de 15 años de experiencia en el sector.  
El diseño refleja profesionalismo, confianza y solidez, transmitiendo la calidad de la empresa en **obras civiles, infraestructura, paisajismo, electromecánica, minería y consultoría**.

---

## 🚀 Principios de Diseño y UX
- **Mobile First**: El diseño comienza en dispositivos móviles y escala progresivamente hacia tablets y desktop.  
- **Consistencia**: Mantener un estilo unificado en colores, tipografía y componentes.  
- **Accesibilidad**: Cumplimiento con WCAG AA (contrastes, ARIA labels, navegación por teclado).  
- **Interfaz Moderna**: Limpia, con espacios bien definidos y jerarquía clara.  
- **Interacciones Fluidas**: Transiciones y animaciones suaves para mejorar la experiencia.  

---

## 🎨 Paleta de Colores

| Rol                | HEX      | Uso principal |
|--------------------|----------|---------------|
| **Primario**       | `#14172D` | Base de la identidad, fondos principales oscuros, encabezados y pie de página |
| **Primario Claro** | `#252A4A` | Fondos secundarios, tarjetas (cards) y contenedores jerárquicos |
| **Secundario**     | `#1B5278` | Botones primarios (CTAs), enlaces importantes, elementos interactivos |
| **Acento Cálido**  | `#D9822B` | Notificaciones, badges, íconos destacados, botones secundarios |
| **Fondo Claro**    | `#F8F9FA` | Fondo general, neutro y sofisticado |
| **Blanco Puro**    | `#FFFFFF` | Texto sobre fondos oscuros, fondos de modales y menús flotantes |
| **Texto Principal**| `#343A40` | Texto base y títulos en fondos claros |
| **Texto Secundario**| `#6C757D` | Metadatos, subtítulos, placeholders, leyendas |

---

## ✍️ Tipografía
- **Fuente principal:** `Inter` (Sans-serif).  
- **Jerarquía:**  
  - **H1:** 32px / Bold  
  - **H2:** 24px / Semibold  
  - **H3:** 18px / Medium  
  - **Texto Base:** 16px / Regular  
  - **Texto Secundario:** 14px / Regular  

> Escalado responsivo usando `clamp()` en móviles y tablets.  

---

## 📐 Espaciado & Grid
- **Metodología:** Mobile First.  
- **Unidad base:** `8px`.  
- **Grid System:** 12 columnas.  
- **Breakpoints:**  
  - Desktop: ≥ 1024px  
  - Tablet: 768px – 1023px  
  - Móvil: ≤ 767px  

---

## 🧩 Componentes UI

### 🔘 Botones
- **Estilo general:** Rectangulares, sin bordes redondeados (`border-radius: 0`).  
- **Primario:** Fondo `#1B5278`, texto blanco.  
- **Secundario:** Fondo `#14172D`, texto blanco.  
- **Acento:** Fondo `#D9822B`, texto blanco (resaltar CTAs clave).  
- **Hover:** +10% luminosidad.  
- **Deshabilitado:** Fondo gris claro `#F5F5F5`, texto gris `#6C757D`.  
- **Tamaños:**  
  - Grande: 48px altura, padding 16px 32px.  
  - Mediano: 40px altura, padding 12px 24px.  
  - Pequeño: 32px altura, padding 8px 16px.  

---

### 📝 Inputs y Formularios
- **Borde:** `1px solid #1B5278`.  
- **Focus:** Outline acento `#D9822B`.  
- **Placeholder:** Texto secundario `#6C757D`.  
- **Error state:** Borde rojo + mensaje auxiliar.  
- **Accesibilidad:** ARIA-label obligatorio en todos los inputs.  

---

### 🗂️ Tarjetas (Cards)
- Fondo: `#FFFFFF`.  
- Bordes: `1px solid #F0F0F0`.  
- Sombra: `rgba(0,0,0,0.05)`.  
- Bordes rectos (no redondeados).  
- Padding interno: `16px – 24px` según jerarquía.  

---

### 📑 Header & Navegación
- **Desktop:** Menú horizontal con logo alineado a la izquierda.  
- **Tablet/Móvil:** Menú hamburguesa con overlay animado.  
- **Comportamiento dinámico:**  
  - Desaparece al hacer scroll hacia abajo (>50px).  
  - Reaparece al hacer scroll hacia arriba.  
  - Duración de animación: 200–300ms.  

---

### 📌 Top-bar
- **Visible solo en tablet/desktop**.  
- Extremo izquierdo: icono + correo + teléfono.  
- Extremo derecho: iconos de Facebook y LinkedIn.  
- **En móviles:** Oculto para no saturar espacio.  

---

### 🦶 Footer
El **footer** refuerza la identidad y funciona como bloque de cierre informativo.  

**Estructura:**  
1. **Columna 1 (Identidad):** Logo + breve descripción de la empresa.  
2. **Columna 2 (Navegación rápida):** Enlaces principales (Inicio, Servicios, Proyectos, Contacto).  
3. **Columna 3 (Contacto):** Dirección, teléfono, email.  
4. **Columna 4 (Redes Sociales):** Íconos de Facebook y LinkedIn.  

**Estilos:**  
- Fondo: `#14172D` (primario).  
- Texto: blanco `#FFFFFF`.  
- Enlaces hover: color acento `#D9822B`.  
- Separador superior fino `#252A4A`.  

---

### 🖼️ Iconografía
- Librería: **Lucide** o **Material Icons**.  
- Grosor uniforme (2px).  
- Color: Primario `#14172D`.  
- Íconos destacados pueden usar acento `#D9822B`.  

---

## ⚡ Interacciones
- Transiciones de `0.2s`.  
- Feedback visual inmediato (loading, validación, estados hover/focus).  
- Botón “Volver arriba” fijo, aparece tras 400px de scroll.  

---

## 📑 Buenas Prácticas
- **Consistencia visual** en todos los módulos.  
- **Componentes reutilizables** sobre estilos aislados.  
- **Documentación continua** al añadir variaciones.  
- **Accesibilidad** como estándar (labels, contraste, navegación por teclado).  

---
