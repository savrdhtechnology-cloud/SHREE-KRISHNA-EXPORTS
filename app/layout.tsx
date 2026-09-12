import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { company } from '@/data/company';

const display = Cormorant_Garamond({ subsets:['latin'], variable:'--font-display', weight:['500','600','700'], display:'swap' });
const body = Inter({ subsets:['latin'], variable:'--font-body', display:'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sbricemill.com'),
  title: { default:'Shree Krishna Exports | Premium Indian Rice Since 1998', template:'%s | Shree Krishna Exports' },
  description:'Manufacturer and exporter of premium Indian Basmati, Non-Basmati and pesticide-free rice from Karnal, Haryana since 1998.',
  keywords:['Basmati rice exporter','Indian rice exporter','1121 Basmati rice','Karnal rice mill','Non-Basmati rice exporter'],
  alternates:{ canonical:'/' },
  openGraph:{ title:'Shree Krishna Exports | Premium Indian Rice Since 1998', description:'Premium Basmati & Non-Basmati rice from Karnal, India to global markets.', url:'https://www.sbricemill.com/', siteName:'Shree Krishna Exports', type:'website' },
  twitter:{ card:'summary_large_image', title:'Shree Krishna Exports', description:'Premium Indian Rice Since 1998' }
};

const organization = { '@context':'https://schema.org','@type':'Organization', name:company.name, alternateName:company.shortName, foundingDate:company.since, url:company.website, email:company.email, telephone:company.phone, address:{'@type':'PostalAddress',streetAddress:'Village Bairsal, Smana Bahu Road, Tehsil Nilokheri',postalCode:'132117',addressLocality:'Karnal',addressRegion:'Haryana',addressCountry:'IN'} };

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={display.variable}><body className={`${body.className} bg-white antialiased`}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organization)}}/><Header/><main>{children}</main><Footer/></body></html>}
