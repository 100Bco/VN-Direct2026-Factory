# VN Direct 2026 — Website Nhà Máy

Trang con của VN Direct 2026, hướng tới các nhà máy Việt Nam ngành VLXD & nội thất. Tham gia chương trình **Build Better Series** đón đoàn 5 buyers chiến lược từ Texas tháng 5–6/2026.

## Stack

- **Next.js 15** (App Router, React 19, TypeScript)
- **Tailwind CSS v4** (`@theme` tokens, không cần `tailwind.config`)
- **lucide-react** icon set
- Hero background video: tái sử dụng Wistia ID `9hbymhvynw` của site mẹ

## Quick start

```bash
npm install
npm run dev    # http://localhost:3000
npm run build
npm run start
```

## Cấu trúc

```
src/
  app/
    layout.tsx     # <html lang="vi">, metadata, viewport
    page.tsx       # Lắp ráp 9 section
    globals.css    # @theme tokens + @layer components
  components/
    Nav.tsx        Hero.tsx       Problem.tsx
    Opportunity.tsx Buyers.tsx    Program.tsx
    Benefits.tsx   Criteria.tsx   About.tsx
    Footer.tsx     Section.tsx
public/
  fonts/   # UTM-Classizism-Antiqua.ttf (cần copy từ repo VN-Direct-v2)
  logos/   # 100b.svg + buyer photos (cần thu thập, xem ASSET CHECKLIST)
```

## Brand & content reference

- `BRAND_GUIDELINES_FACTORY.md` — quy chuẩn visual cho site nhà máy
- `BRAND_GUIDELINES (1).md` — design system 100B (site mẹ)
- `CONTENT_DRAFT.md` — toàn bộ copy text tiếng Việt

## Assets cần bổ sung trước launch

- [ ] `public/fonts/UTM-Classizism-Antiqua.ttf` (copy từ site mẹ)
- [ ] `public/logos/100b.svg`
- [ ] Photos 5 buyers (400×400, currently fallback initials avatar)

## CTA

Tất cả CTA trỏ tới `mailto:global@100b.co` với pre-fill subject `VN Direct 2026 - Đăng ký nhà máy`.
