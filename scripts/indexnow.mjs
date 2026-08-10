import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const HOST = 'www.carereceptionistai.com';

const keyFile = readdirSync('public').find((f) => /^[a-f0-9]{32}\.txt$/i.test(f));
if (!keyFile) {
  console.warn('[indexnow] no key file in public/ — skipping');
  process.exit(0);
}
const key = keyFile.replace(/\.txt$/, '');

const sitemapPath = join('dist', 'sitemap-0.xml');
if (!existsSync(sitemapPath)) {
  console.warn('[indexnow] sitemap-0.xml not found — skipping');
  process.exit(0);
}

const xml = readFileSync(sitemapPath, 'utf8');
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urls.length) {
  console.warn('[indexnow] no URLs in sitemap — skipping');
  process.exit(0);
}

const payload = {
  host: HOST,
  key,
  keyLocation: `https://${HOST}/${key}.txt`,
  urlList: urls,
};

try {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(15000),
  });
  console.log(`[indexnow] ${res.status} — ${urls.length} URLs submitted for ${HOST}`);
} catch (err) {
  console.warn(`[indexnow] submit failed (non-fatal): ${err.message}`);
}
