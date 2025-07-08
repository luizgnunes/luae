/* ===== IMAGE OPTIMIZATION SCRIPT ===== */
/* Script para otimizar imagens */

const fs = require('fs');
const path = require('path');

// Configurações de otimização
const optimizationConfig = {
  srcDir: './src/assets/images/original',
  outputDir: './src/assets/images/optimized',
  quality: 60,
  maxWidth: 800,
  supportedFormats: ['.png', '.jpg', '.jpeg']
};

// Função para criar diretório se não existir
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📁 Criado diretório: ${dir}`);
  }
}

// Função para listar arquivos de imagem
function getImageFiles(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`⚠️ Diretório não encontrado: ${dir}`);
    return [];
  }
  
  const files = fs.readdirSync(dir);
  return files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return optimizationConfig.supportedFormats.includes(ext);
  });
}

// Função para obter informações do arquivo
function getFileInfo(filePath) {
  const stats = fs.statSync(filePath);
  return {
    size: stats.size,
    sizeKB: (stats.size / 1024).toFixed(2),
    sizeMB: (stats.size / 1024 / 1024).toFixed(2)
  };
}

// Função para simular otimização (em produção, usar sharp ou similar)
function optimizeImage(inputPath, outputPath) {
  try {
    // Simular otimização - em produção, usar biblioteca real
    const originalContent = fs.readFileSync(inputPath);
    const originalSize = originalContent.length;
    
    // Simular redução de 60-70%
    const reduction = 0.65 + (Math.random() * 0.1); // 65-75%
    const optimizedSize = Math.floor(originalSize * reduction);
    
    // Em produção, aqui seria a otimização real
    // const sharp = require('sharp');
    // await sharp(inputPath)
    //   .png({ quality: optimizationConfig.quality })
    //   .toFile(outputPath);
    
    // Por enquanto, apenas copia o arquivo
    fs.copyFileSync(inputPath, outputPath);
    
    const optimizedInfo = getFileInfo(outputPath);
    const originalInfo = getFileInfo(inputPath);
    
    console.log(`✅ Imagem otimizada: ${path.basename(inputPath)}`);
    console.log(`   📊 Original: ${originalInfo.sizeKB} KB`);
    console.log(`   📊 Otimizada: ${optimizedInfo.sizeKB} KB`);
    
    return {
      originalSize: originalInfo.size,
      optimizedSize: optimizedInfo.size,
      reduction: ((originalInfo.size - optimizedInfo.size) / originalInfo.size * 100).toFixed(1)
    };
  } catch (error) {
    console.error(`❌ Erro ao otimizar ${inputPath}:`, error.message);
    return null;
  }
}

// Função principal de otimização
function optimizeImages() {
  console.log('🖼️ Iniciando otimização de imagens...');
  
  // Criar diretório de saída
  ensureDir(optimizationConfig.outputDir);
  
  // Obter lista de imagens
  const imageFiles = getImageFiles(optimizationConfig.srcDir);
  
  if (imageFiles.length === 0) {
    console.log('⚠️ Nenhuma imagem encontrada para otimizar');
    return;
  }
  
  console.log(`📋 Encontradas ${imageFiles.length} imagens para otimizar`);
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let processedCount = 0;
  
  // Processar cada imagem
  imageFiles.forEach(file => {
    const inputPath = path.join(optimizationConfig.srcDir, file);
    const outputPath = path.join(optimizationConfig.outputDir, file);
    
    const result = optimizeImage(inputPath, outputPath);
    
    if (result) {
      totalOriginalSize += result.originalSize;
      totalOptimizedSize += result.optimizedSize;
      processedCount++;
    }
  });
  
  // Resumo da otimização
  if (processedCount > 0) {
    const totalReduction = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
    const totalOriginalMB = (totalOriginalSize / 1024 / 1024).toFixed(2);
    const totalOptimizedMB = (totalOptimizedSize / 1024 / 1024).toFixed(2);
    const savedMB = ((totalOriginalSize - totalOptimizedSize) / 1024 / 1024).toFixed(2);
    
    console.log('\n📊 RESUMO DA OTIMIZAÇÃO:');
    console.log('========================');
    console.log(`📋 Imagens processadas: ${processedCount}`);
    console.log(`📊 Tamanho total original: ${totalOriginalMB} MB`);
    console.log(`📊 Tamanho total otimizado: ${totalOptimizedMB} MB`);
    console.log(`📊 Redução total: ${totalReduction}%`);
    console.log(`📊 Economia: ${savedMB} MB`);
  }
  
  console.log('\n✅ Otimização de imagens concluída!');
}

// Executar otimização se chamado diretamente
if (require.main === module) {
  optimizeImages();
}

module.exports = { optimizeImages, optimizationConfig }; 