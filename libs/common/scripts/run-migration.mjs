import { execSync } from 'child_process';

const args = process.argv.slice(2);

// Verifica que el argumento --lib esté presente
if (args.length < 2 || args[0] !== '--lib') {
  console.error("❌ Debes indicar la librería usando: npm run migration:run -- --lib nombre-de-la-lib");
  process.exit(1);
}

const libName = args[1];  // Obtiene el valor de la librería
const dataSourcePath = `libs/${libName}/database/data-source.ts`;

console.log(`🚀 Ejecutando migraciones en ${libName}...`);

try {
  execSync(`ts-node -r tsconfig-paths/register node_modules/typeorm/cli.js migration:run -d ${dataSourcePath}`, { stdio: 'inherit' });
  console.log('✅ Migraciones ejecutadas correctamente.');
} catch (error) {
  console.error('❌ Error al ejecutar las migraciones:', error.message);
  process.exit(1);
}
