import type { ImageMetadata } from 'astro';

const all = import.meta.glob<{ default: ImageMetadata }>('/src/assets/**/*.{webp,png,jpg,svg}', { eager: true });

function pick(folder: string, name: string): ImageMetadata {
  const hit = Object.entries(all).find(([p]) => p.startsWith(`/src/assets/${folder}/${name}.`));
  if (!hit) throw new Error(`Missing image: ${folder}/${name}`);
  return hit[1].default;
}

export const photo = (name: string) => pick('photos', name);
export const shot = (name: string) => pick('shots', name);
export const logo = (name: string) => pick('logos', name);
