export default {
  // '*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx,json,jsonc,css,html}': [
  //   'biome check --write --no-errors-on-unmatched',
  // ],
  //
  '*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx,json,jsonc,css,html,vue}': [
    'prettier --write',
  ],
  // eslint检查
  '*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx,vue}': ['eslint --fix'],
  '**/*.ts?(x)': () => 'tsgo -p tsconfig.json --noEmit',
  '**/*.md': 'markdownlint --fix',
}
