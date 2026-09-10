# Промпты для генерации фирменной графики в стиле «Просто Холст»

Стиль-референс: `assets/img/canvas-photo.webp` (исходник — IMG_9977).
Генерировать квадратом 1:1, минимум 1024×1024. Фон — тёплый крем ≈ #F2EDE6.
После генерации скинуть файлы Павлу — он сам сведёт фон, конвертирует в WebP и вставит на сайт.

## Общий стиль (добавлять в конец каждого промпта)

```
bold black ink illustration in tattoo flash / linocut style, textured off-white
canvas paper background (#F2EDE6), heavy black outlines, hatching and stipple
shading, no gray gradients, dashed stitch border line inset like canvas stitching,
skate streetwear tattoo aesthetic, hand-lettered "ПРОСТО ХОЛСТ" on a small wooden
plaque, square 1:1, no watermark
```

Для Midjourney добавить: `--no grayscale photo, color, gradient --style raw`

## 1. Натяжка вручную (слот «Натяжка вручную»)

```
two tattooed arms with striped sleeves stretching raw canvas over a wooden
stretcher bar frame using canvas pliers, staple gun in the other hand, staples
flying, flame tattoo on forearm, thick-soled sneakers visible below,
```

## 2. Круглые до 150 см (слот «Круглые до 150 см»)

```
a big round tondo canvas hanging on a wall, a compass drawing the circle around
it, skateboard leaning against the wall below, crescent moon and flame motifs,
sleeping opossum curled on top of the round frame,
```

## 3. Упаковка к отправке (слот «Упаковка к отправке»)

```
a cardboard shipping box packed with a canvas, packing tape with "ПРОСТО ХОЛСТ"
hand lettering, a skateboard deck sticking out of the box, sleeping opossum lying
on the closed lid, kraft paper and staples around,
```

## Если генератор хорошо пишет кириллицу (Flux, Recraft)

Леттеринг «ПРОСТО ХОЛСТ» можно просить прямо на плашке/скотче — выходит живее.
Если кириллица ломается — убрать `hand-lettered "ПРОСТО ХОЛСТ"` из промпта,
надпись добавить потом в редакторе.
