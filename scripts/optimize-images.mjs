import sharp from 'sharp';
import { mkdirSync, existsSync } from 'fs';
import path from 'path';

const ROOT = 'C:/Users/DELL/Downloads/ICM_AEG';
const OUT = path.join(ROOT, 'website/public/images');
mkdirSync(OUT, { recursive: true });

const PHOTOPHOTOS = path.join(ROOT, 'Productphotos');

const SOURCES = [
  // ProGénix
  { src: `${PHOTOPHOTOS}/progenix/Generated Image August 23, 2026 - 10_52PM.jpg`, out: 'progenix-1' },
  { src: `${PHOTOPHOTOS}/progenix/Generated Image August 23, 2026 - 10_54PM.jpg`, out: 'progenix-2' },
  { src: `${PHOTOPHOTOS}/progenix/Generated Image August 23, 2026 - 11_04PM.jpg`, out: 'progenix-3' },
  // JCB Brume
  { src: `${PHOTOPHOTOS}/JCB_fragrance/Generated Image August 29, 2026 - 1_22PM.jpg`, out: 'jcb-brume-1' },
  { src: `${PHOTOPHOTOS}/JCB_fragrance/Generated Image August 29, 2026 - 1_30PM.jpg`, out: 'jcb-brume-2' },
  { src: `${PHOTOPHOTOS}/JCB_fragrance/Generated Image August 29, 2026 - 2_04PM.jpg`, out: 'jcb-brume-3' },
  // JCB Crème
  { src: `${PHOTOPHOTOS}/JCB_bodycream/Body_cream_Shot-10.jpg`, out: 'jcb-creme-1' },
  { src: `${PHOTOPHOTOS}/JCB_bodycream/Body_cream_Shot-7.jpg`, out: 'jcb-creme-2' },
  { src: `${PHOTOPHOTOS}/JCB_bodycream/Body_cream_Shot.jpg`, out: 'jcb-creme-3' },
  // Souplesse
  { src: `${PHOTOPHOTOS}/Souplesse_shampoo/Image1_cleaned.jpg`, out: 'souplesse-1' },
  { src: `${PHOTOPHOTOS}/Souplesse_shampoo/Image2_cleaned.jpg`, out: 'souplesse-2' },
  { src: `${PHOTOPHOTOS}/Souplesse_shampoo/Image4_cleaned.jpg`, out: 'souplesse-3' },
  { src: `${PHOTOPHOTOS}/Souplesse_shampoo/Image5_cleaned.jpg`, out: 'souplesse-4' },
];

for (const { src, out } of SOURCES) {
  if (!existsSync(src)) { console.error('MISSING:', src); continue; }
  await sharp(src).resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80 }).toFile(`${OUT}/${out}-full.webp`);
  await sharp(src).resize({ width: 900, height: 900, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 76 }).toFile(`${OUT}/${out}-thumb.webp`);
  console.log('Processed:', out);
}
