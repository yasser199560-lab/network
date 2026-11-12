import './globals.css';

export const metadata = {
  title: 'NetOps Field Guide | Cisco IOS & Junos',
  description: 'A Cisco IOS field guide for subnetting, VLANs, EtherChannel, routing, ACLs, and NAT, plus a dedicated Juniper Junos switch command page.',
  icons: { icon: '/netops-mark.svg' },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
