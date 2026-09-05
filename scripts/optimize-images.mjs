import sharp from 'sharp';
import { mkdirSync, existsSync } from 'fs';
import path from 'path';

const ROOT = 'C:/Users/DELL/Downloads/ICM_AEG';
const OUT = path.join(ROOT, 'website/public/images');
const PHOTOS = path.join(ROOT, 'Productphotos');
const LOGO_SRC = 'E:/USB_contents/pc/AEG/AEG Logo.png';
const LOGO_TRIMMED = path.join(ROOT, 'website/public/logo/aeg-logo.png');
mkdirSync(OUT, { recursive: true });
mkdirSync(path.join(ROOT, 'website/public/logo'), { recursive: true });

const SOURCES = [
  // ProGénix — sérum contour des yeux (concept)
  { src: `${PHOTOS}/progenix/Generated Image August 23, 2026 - 10_52PM.jpg`, out: 'progenix-1' },
  { src: `${PHOTOS}/progenix/Generated Image August 23, 2026 - 10_54PM.jpg`, out: 'progenix-2' },
  { src: `${PHOTOS}/progenix/Generated Image August 23, 2026 - 11_04PM.jpg`, out: 'progenix-3' },
  // JCB — Brume parfumée
  { src: `${PHOTOS}/JCB_fragrance/Generated Image August 29, 2026 - 1_22PM.jpg`, out: 'jcb-brume-1' },
  { src: `${PHOTOS}/JCB_fragrance/Generated Image August 29, 2026 - 1_30PM.jpg`, out: 'jcb-brume-2' },
  { src: `${PHOTOS}/JCB_fragrance/Generated Image August 29, 2026 - 2_04PM.jpg`, out: 'jcb-brume-3' },
  // JCB — Crème corps
  { src: `${PHOTOS}/JCB_bodycream/Body_cream_Shot.jpg`, out: 'jcb-creme-1' },
  { src: `${PHOTOS}/JCB_bodycream/Body_cream_Shot-7.jpg`, out: 'jcb-creme-2' },
  { src: `${PHOTOS}/JCB_bodycream/Body_cream_Shot-10.jpg`, out: 'jcb-creme-3' },
  // Souplesse — shampoing
  { src: `${PHOTOS}/Souplesse_shampoo/Image1_cleaned.jpg`, out: 'souplesse-1' },
  { src: `${PHOTOS}/Souplesse_shampoo/Image2_cleaned.jpg`, out: 'souplesse-2' },
  { src: `${PHOTOS}/Souplesse_shampoo/Image4_cleaned.jpg`, out: 'souplesse-3' },
  { src: `${PHOTOS}/Souplesse_shampoo/Image5_cleaned.jpg`, out: 'souplesse-4' },
  // Souplesse — design graphique
  { src: `${PHOTOS}/Souplesse_shampoo_design/Design.jpg`, out: 'souplesse-design' },
];

for (const { src, out } of SOURCES) {
  if (!existsSync(src)) { console.error('MISSING:', src); continue; }
  await sharp(src).resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80 }).toFile(`${OUT}/${out}-full.webp`);
  await sharp(src).resize({ width: 900, height: 900, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 76 }).toFile(`${OUT}/${out}-thumb.webp`);
  console.log('ok', out);
}

// OG image 1200x630 depuis l'affiche design Souplesse
await sharp(SOURCES.find(s => s.out === 'souplesse-design').src)
  .resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 84 })
  .toFile(path.join(ROOT, 'website/public/og.jpg'));
console.log('ok og.jpg');

// ---- Logo : recadrage des marges ----
if (existsSync(LOGO_SRC)) {
  const trimmed = await sharp(LOGO_SRC).trim({ threshold: 25 }).png().toBuffer();
  const meta = await sharp(trimmed).metadata();
  await sharp(trimmed).resize({ width: 800, withoutEnlargement: true }).png().toFile(LOGO_TRIMMED);
  console.log('logo trimmed:', meta.width, 'x', meta.height, '→ ratio', (meta.width / meta.height).toFixed(3));

  // favicon + apple icon : carré serré sur le bloc texte
  const side = Math.min(meta.width, Math.ceil(meta.height * 1.35));
  const square = await sharp(trimmed)
    .extract({ left: Math.floor((meta.width - side) / 2), top: 0, width: side, height: Math.min(side, meta.height) })
    .png().toBuffer();
  await sharp(square).resize(64, 64, { fit: 'contain', background: '#f1efe7' }).png().toFile(path.join(ROOT, 'website/app/icon.png'));
  await sharp(square).resize(180, 180, { fit: 'contain', background: '#f1efe7' }).png().toFile(path.join(ROOT, 'website/app/apple-icon.png'));
  console.log('ok logo + icons');
} else {
  console.error('LOGO MISSING:', LOGO_SRC);
}
