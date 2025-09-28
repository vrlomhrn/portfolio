import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generatePDF() {
  try {
    console.log('Starting PDF generation...');

    // Launch browser
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Read the HTML file
    const htmlPath = path.join(__dirname, 'public/documents/Virlo_Mahrian_Shaffari_CV.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');

    // Set content and wait for it to load
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

    // Generate PDF
    const pdfPath = path.join(__dirname, 'public/documents/Virlo_Mahrian_Shaffari_CV.pdf');

    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px'
      }
    });

    await browser.close();

    console.log('✅ PDF generated successfully!');
    console.log('📄 Location:', pdfPath);
    console.log('🌐 Web access: http://localhost:5174/documents/Virlo_Mahrian_Shaffari_CV.pdf');

  } catch (error) {
    console.error('❌ Error generating PDF:', error);
  }
}

generatePDF();