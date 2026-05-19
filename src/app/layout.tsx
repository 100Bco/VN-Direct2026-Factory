import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vietnam Direct — Thư Mời Nhà Máy | 100B Beyond Borders',
  description:
    'Build Better Series 30/05 – 06/06/2026. Đón đoàn 5 buyers chiến lược từ Texas đến trực tiếp các nhà máy VLXD & nội thất Việt Nam. Combined pipeline $500M+. Đăng ký vòng tuyển chọn 10–13 nhà máy.',
  icons: {
    icon: '/logos/Favicon%20100B.png',
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    title: 'Vietnam Direct — Thư Mời Nhà Máy',
    description:
      '7 ngày. 10–13 nhà máy được tuyển chọn. Hợp tác thực chất. Combined pipeline $500M+.',
    siteName: '100B Beyond Borders',
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
