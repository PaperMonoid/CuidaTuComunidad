# CuidaTuComunidad
**Año 2025**. El gobierno federal de México ha lanzado la iniciativa "Cuida Tu Comunidad" (CTC), con el propósito de fomentar la colaboración ciudadana en tareas comunitarias. A través de esta plataforma, los ciudadanos pueden otorgar "likes" a tareas que consideren de relevancia para su comunidad.

![screenshot](images/screenshot.png)

## Instrucciones de Uso

### Pre-requisitos
- Tener instalado `npm` y `docker`.

### Instalación y Configuración

1. **Instalar Dependencias del Proyecto React**:
   ```bash
   cd react
   npm install
   ```

2. **Construir el Proyecto con Webpack**:
   ```bash
   npm run build
   ```

3. **Copiar los Archivos a la Carpeta de Laravel**:
   ```bash
   cd ..
   cp -r react/dist laravel/dist
   ```

4. **Uso con Docker**:
   Simplemente ejecuta el siguiente comando para iniciar el proyecto:
   ```bash
   docker-compose up
   ```

Una vez ejecutado el proyecto mediante Docker, podrás acceder a la plataforma a través de tu navegador en `localhost`.

## Notas Adicionales
- Actualmente, la plataforma se encuentra en una etapa de desarrollo centrada en el frontend, algunas funcionalidades como agregar tareas no están implementadas.
- No se implentó un backend.
- Agradecemos tu comprensión y estamos trabajando para incluir estas funcionalidades próximamente.
