import { execSync } from 'child_process';

const args = process.argv.slice(2);
if (args.length < 2 || args[0] !== "--lib") {
  console.error("❌ Debes indicar la librería usando: npm run migration:revert -- --lib nombre-de-la-lib");
  process.exit(1);
}

const libName = args[1];
const dataSourcePath = `libs/${libName}/database/data-source.ts`;

console.log(`🔄 Revirtiendo última migración en ${libName}...`);

try {
  execSync(`typeorm migration:revert -d ${dataSourcePath}`, { stdio: "inherit" });
  console.log("✅ Migración revertida correctamente.");
} catch (error) {
  console.error("❌ Error al revertir la migración:", error.message);
  process.exit(1);
}