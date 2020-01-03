# wwwid-org Hugo Theme

This theme is optimized for PWAMP approach.

## Persyaratan
1. Struktur folder `content`
```
.
├── _index.md
├── offline.md
├── pages
└── posts
```
2. Isi file `_index.md`
```
---
title: 'Homepage'
outputs:
- html
- css
---
```

Harus ada `outputs` yang berisi `html` dan `css`. Ini digunakan untuk menggenerate inline css untuk tag `<style amp-custom>`

3. Isi file `offline.md`
```
---
title: "You are offline"
url: "offline.html"
type: "offline"
---
```

## Mulai

1. Pindah ke folder `theme`
2. Jalankan `git submodule add https://github.com/imsus/wwwid-org`
3. Update file konfigurasi `config.{toml/yaml/json}` dengan menambahkan `theme: www-id`
4. Jalankan `hugo`