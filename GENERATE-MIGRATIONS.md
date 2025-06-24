# 📦 Migrations in the app-project

This file documents how to generate, apply, and revert migrations in the context of the `module` module within the monorepo.

## 📁 Structure

Migrations are located at:
`libs/app-project/database/src/migrations`

---

## 🚧 1. Create a *schema* migration
Use `schema` for database structure
```bash
npm run app-project:migration:create -- libs/app-project/database/src/migrations/schema/nameMigrations
```

## 🚧 2. Create a *seed* migration
Use `seed` for data insert, delete or update data
```bash
npm run app-project:migration:create -- libs/app-project/database/src/migrations/seed/nameMigrations
```

## 🚧 3. Create a *views* migration
Use `views` for view management
```bash
npm run app-project:migration:create -- libs/app-project/database/src/migrations/views/nameMigrations
```

## 🚀 Migrations execute
```bash
npm run app-project:migration:run
```