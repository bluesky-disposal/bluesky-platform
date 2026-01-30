const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Blue Sky Disposal setup...\n');

const requiredFiles = [
  'app/layout.tsx',
  'app/page.tsx',
  'components/header.tsx',
  'components/footer.tsx',
  'components/auth-modal.tsx',
  'contexts/auth-context.tsx',
  'app/cart/page.tsx',
  'app/account/page.tsx',
];

const requiredDirs = [
  'components/ui',
  'components/home',
  'app/services',
  'public/images',
];

let allGood = true;

// Check files
console.log('📄 Checking required files:');
requiredFiles.forEach(file => {
  const exists = fs.existsSync(path.join(process.cwd(), file));
  console.log(`  ${exists ? '✅' : '❌'} ${file}`);
  if (!exists) allGood = false;
});

console.log('\n📁 Checking required directories:');
requiredDirs.forEach(dir => {
  const exists = fs.existsSync(path.join(process.cwd(), dir));
  console.log(`  ${exists ? '✅' : '❌'} ${dir}`);
  if (!exists) allGood = false;
});

console.log('\n' + (allGood ? '✅ All checks passed!' : '⚠️  Some files are missing. Please review.'));
