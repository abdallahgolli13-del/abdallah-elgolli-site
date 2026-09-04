import sharp from 'sharp';
import { mkdirSync, copyFileSync, existsSync } from 'fs';
import path from 'path';

const ROOT = 'C:/Users/DELL/Downloads/ICM_AEG';
const OUT = path.join(ROOT, 'website/public/images');
const LOGO_SRC = 'E:/USB_contents/pc/AEG/AEG Logo.png';
mkdirSync(OUT, { recursive: true });
mkdirSync(path.join(ROOT, 'website/public/logo'), { recursive: true });

const SOURCES = [
  // ProGénix — concept skincare (ordre carrousel IG)
  { src: `${ROOT}/Images/Progenix/final_images/4b78b86c-eec0-4c36-a71b-f3aa7e1b5069.jpeg`, out: 'progenix-1' },
  { src: `${ROOT}/Images/Progenix/final_images/Generated Image August 23, 2026 - 10_54PM.jpg`, out: 'progenix-2' },
  { src: `${ROOT}/Images/Progenix/final_images/Generated Image August 23, 2026 - 11_04PM.jpg`, out: 'progenix-3' },
  { src: `${ROOT}/Images/Progenix/final_images/Generated Image August 23, 2026 - 10_52PM.jpg`, out: 'progenix-4' },
  // JCB Brume (09-01) — ordre carrousel : beam, silk, glow
  { src: `${ROOT}/09-01-2026_images/Image1_not_ai_flagged.jpg`, out: 'jcb-brume-1' },
  { src: `${ROOT}/09-01-2026_images/Image3_not_ai_flagged.jpg`, out: 'jcb-brume-2' },
  { src: `${ROOT}/09-01-2026_images/Image2_not_ai_flagged.jpg`, out: 'jcb-brume-3' },
  // JCB Crème (08-31) — ordre : jewel, bloom, morning
  { src: `${ROOT}/08-31-2026_images/Image1_not_ai_flagged.jpg`, out: 'jcb-creme-1' },
  { src: `${ROOT}/08-31-2026_images/Image2_not_ai_flagged.jpg`, out: 'jcb-creme-2' },
  { src: `${ROOT}/08-31-2026_images/Image3_not_ai_flagged.jpg`, out: 'jcb-creme-3' },
];

for (const { src, out } of SOURCES) {
  if (!existsSync(src)) { console.error('MISSING:', src); continue; }
  await sharp(src).resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80 }).toFile(`${OUT}/${out}-full.webp`);
  await sharp(src).resize({ width: 900, height: 900, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 76 }).toFile(`${OUT}/${out}-thumb.webp`);
  console.log('ok', out);
}

// OG image 1200x630 depuis le visuel ProGénix bloom
await sharp(SOURCES[0].src).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 })
  .toFile(path.join(ROOT, 'website/public/og.jpg'));
console.log('ok og.jpg');

// Logo
if (existsSync(LOGO_SRC)) {
  await sharp(LOGO_SRC).resize({ width: 800, withoutEnlargement: true }).png()
    .toFile(path.join(ROOT, 'website/public/logo/aeg-logo.png'));
  // échantillonner la couleur de fond du coin du logo
  const { data } = await sharp(LOGO_SRC).raw().toBuffer({ resolveWithObject: true });
  const px = (x, y) => { const i = (y * data.info.width + x) * data.info.channels; return '#' + [0,1,2].map(k => data[i+k].toString(16).padStart(2,'0')).join(''); };
  console.log('logo bg:', px(10, 10), px(20, data.info.height - 20));
  // icônes dérivées du logo
  await sharp(LOGO_SRC).resize(64, 64, { fit: 'contain', background: '#F2EFE7' }).png().toFile(path.join(ROOT, 'website/app/icon.png'));
  await sharp(LOGO_SRC).resize(180, 180, { fit: 'contain', background: '#F2EFE7' }).png().toFile(path.join(ROOT, 'website/app/apple-icon.png'));
  console.log('ok icons + logo');
} else {
  console.error('LOGO MISSING:', LOGO_SRC);
}
