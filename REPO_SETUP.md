# GitHub setup

Repositorio previsto: `Yamil1701/mora-web`  
Visibilidad: **Private**  
Branch por defecto: `main`

## 1. Crear el repositorio en GitHub

Crear un repositorio privado llamado `mora-web`.

Para evitar conflictos con este baseline local, crearlo **vacío**:
- sin README automático;
- sin `.gitignore` automático;
- sin licencia automática.

## 2. Vincular este baseline local

Desde la carpeta `mora-web`:

```bash
git remote add origin https://github.com/Yamil1701/mora-web.git
git push -u origin main
```

Si usás SSH:

```bash
git remote add origin git@github.com:Yamil1701/mora-web.git
git push -u origin main
```

## 3. Verificar

```bash
git status
git log --oneline -1
git remote -v
```

La rama `main` debe quedar limpia antes de iniciar Work.

## 4. Branch de Work

No crearla hasta que el prompt definitivo esté preparado.

Nombre recomendado:

```text
feat/prototype-01-home
```

El trabajo del agente debe terminar en esa branch y llegar a PR; no trabajar directamente sobre `main`.
