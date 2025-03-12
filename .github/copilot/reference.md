# Viken Oppmerking Website Reference

## Project Overview
- Company: Viken Oppmerking
- Industry: Road marking
- Purpose: Showcase services, previous work, and materials, letting customers contact me
- Structure: Multi-page website (home, services, projects, materials, contact)
- NO BACKEND, just React on the frontend

## Design Guidelines
- Primary color: Bright orange (#FF7A00)
- Secondary color: Dark gray (#333333)
- Accent colors: White (#FFFFFF), Light gray (#F5F5F5)
- Style: Modern, clean, professional
- Font family: 'Roboto', sans-serif (or similar sans-serif)
- Responsive design for all devices

## Page Structure
1. **Home Page**
   - Hero section with company name and tagline
   - Brief introduction
   - Featured projects
   - Call to action

2. **Services Page**
   - React components of road marking services
   - Service descriptions
   - Equipment used

3. **Projects Page**
   - Gallery of completed projects
   - Case studies
   - Before/after comparisons

4. **Materials Page**
   - Types of materials used
   - Benefits and durability
   - Environmental considerations

5. **Contact Page**
   - Contact form (using netlify´s api)
   - Business hours
   - Map location
   - Phone and email

## Component Guidelines
- Use CSS Grid and Flexbox for layouts
- Image optimization for fast loading
- Animations: Subtle and purposeful
- Interactive elements: Hover effects, smooth transitions

## Data to fill the website

Viken Oppmerking (Brzozowski)
Org nr 926773305
Adresse: Brendsrudveien 22 1383 Asker
telefon: 99232486
e-mail: vikenoppmerking@gmail.com

Hovedtekst


Norsk: 
Vår bedrift utfører omfattende oppmerking av parkeringsplasser, adkomstveier, lagerlokaler, haller og andre bygninger, dette inkluderer både maling av horisontale linjer og vertikal merking. I tillegg tilbyr vi rengjøring og vask av underlaget før merking etter oppdragsgiverens ønske.

Vi utfører oppmerking av standard parkeringsplasser og spesielle applikasjoner, gangoverganger, parkeringsplasser for funksjonshemmede, parkeringsplasser for elektriske kjøretøy, motorsykler, sykler, piler, informasjonsskilt, soner og parkeringsnivåer, gule og svarte advarselstriper på terskler, stolper og kanter, områder som er stengt for trafikk, nummerering av plasser, montering av fartshumper og trafikkspeil osv. 

Vi bruker de beste kvalitetsmalingene og materialene for å sikre at hvert prosjekt blir fullført til høyeste standard og alle merkene er motstandsdyktige mot alle ytre påvirkninger. Dette gjør at de vil være lesbare og tydelige i mange år. Ved å velge våre tjenester, får du trygghet for profesjonelt utført oppdrag. Hvert oppdrag blir behandlet individuelt, og vi velger passende metoder for applikasjon av linjer tilpasset underlaget, forholdene i bygningen og kundens individuelle preferanser.

For å få mer detaljert informasjon, kan du kontakte oss via e-post eller telefon. Vi svarer gjerne på alle spørsmål og hjelper deg med å velge den beste løsningen.




Engelsk: 
Our company carries out extensive marking of parking spaces, access roads, storage facilities, halls, and other buildings, which includes both painting of horizontal lines and vertical markings. In addition, we offer cleaning and washing of the surface before marking according to the client's wishes.

We perform marking of standard parking spaces and special applications, pedestrian crossings, parking spaces for disabled persons, parking spaces for electric vehicles, motorcycles, bicycles, arrows, information signs, zones and parking levels, yellow and black warning stripes on thresholds, poles, and edges, areas closed to traffic, numbering of spaces, installation of speed bumps and traffic mirrors, etc.

We use the best quality paints and materials to ensure that each project is completed to the highest standard and all markings are resistant to all external influences. This ensures that they will be readable and clear for many years. By choosing our services, you will have confidence in a professionally executed job. Each task is treated individually, and we choose appropriate methods for the application of lines tailored to the surface, the conditions in the building, and the client's individual preferences.

For more detailed information, you can contact us via email or phone. We are happy to answer any questions and help you choose the best solution.

(Tekstene er til redigering)

Våre tjenester

Oppmerking av parkeringsplasser 
Horisontal og vertikal oppmerking av garasjer, parkeringsplasser, haller, adkomstveier osv.	
Rengjøring og vask av garasjeflater 
Rydding og rengjøring av garasjeflater, sammen med oppmerking
Montering av veispeil, fartshumper og stolper 
Vi monterer veispeil, fartshumper og stolper. 

# Tech Stack

## Frontend
- React.js (Vite)
- React Router for multi-page navigation
- Tailwind CSS for styling
- Lucide React for icons
- React Helmet for SEO
- Framer Motion for subtle animations (optional)

## Component Structure
- Modular component architecture
- Separate files for reusable components
- Organized by feature/page
- Custom hooks for shared logic

## Form Handling
- Netlify Forms API for contact form submission
- React Hook Form for form validation

## Image Handling
- Lazy loading for optimized performance
- WebP format for better compression
- Responsive images with srcset

## Deployment
- Netlify for hosting and form handling
- GitHub for version control

## Build Tools
- npm for package management
- ESLint and Prettier for code quality
- Responsive design testing with viewport tools

# IMPORTANT

## Do not use typescript, but rather jsx

## Do not use the tailwind.config as it is outdated for tailwindcss 4.0 which is the current version
- Rather set everything up in the index.css as it is correct. 

## Make space for images as i will import them later

## Make some type of layout file, so that the footer stays at the bottom, and navbar at the top. 