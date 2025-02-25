import { execSync } from 'child_process';

const args = process.argv.slice(2);
if (args.length < 2 || args[0] !== "--lib") {
  console.error("❌ Debes indicar la librería usando: npm run migration:create -- --lib nombre-de-la-lib NombreDeLaMigracion");
  process.exit(1);
}

const libName = args[1];
const migrationName = args[2];

if (!migrationName) {
  console.error("❌ Debes proporcionar un nombre para la migración.");
  process.exit(1);
}

const migrationPath = `libs/${libName}/database/src/migrations`;

console.log(`📌 Creando migración en ${migrationPath}...`);

try {
  execSync(`typeorm migration:create ${migrationPath}/${migrationName}`, { stdio: "inherit" });
  console.log("✅ Migración creada correctamente.");
} catch (error) {
  console.error("❌ Error al crear la migración:", error.message);
  process.exit(1);
}
