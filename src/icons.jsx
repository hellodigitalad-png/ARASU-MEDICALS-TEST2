import React from "react";

const Icon = ({ children, size = 20, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
    {children}
  </svg>
);

export const CrossIcon = (p) => <Icon {...p}><path d="M12 2v20M2 12h20" /></Icon>;
export const PillIcon = (p) => <Icon {...p}><rect x="4" y="10" width="16" height="7" rx="3.5" transform="rotate(-45 12 12)"/><path d="M8.5 8.5l7 7"/></Icon>;
export const BottleIcon = (p) => <Icon {...p}><path d="M9 3h6M10 3v3.5L7 11v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8l-3-4.5V3"/></Icon>;
export const UsersIcon = (p) => <Icon {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></Icon>;
export const StoreIcon = (p) => <Icon {...p}><path d="M3 9l1-5h16l1 5M3 9a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0M4 9v10a1 1 0 0 0 1 1h4v-6h6v6h4a1 1 0 0 0 1-1V9"/></Icon>;
export const PhoneIcon = (p) => <Icon {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.31 1.85.53 2.81.66A2 2 0 0 1 22 16.92z"/></Icon>;
export const ShieldIcon = (p) => <Icon {...p}><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></Icon>;
export const MedalIcon = (p) => <Icon {...p}><circle cx="12" cy="8" r="6"/><path d="M9 13.5L7 22l5-3 5 3-2-8.5"/></Icon>;
export const DoctorIcon = (p) => <Icon {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/></Icon>;
export const DeliveryIcon = (p) => <Icon {...p}><rect x="1" y="7" width="14" height="10" rx="1"/><path d="M15 10h4l3 3v4h-7z"/><circle cx="6" cy="19" r="1.6"/><circle cx="17.5" cy="19" r="1.6"/></Icon>;
export const TagIcon = (p) => <Icon {...p}><path d="M20.59 13.41L11 3.83A2 2 0 0 0 9.59 3.24L4 3v5.59a2 2 0 0 0 .59 1.41l9.58 9.58a2 2 0 0 0 2.83 0l3.59-3.58a2 2 0 0 0 0-2.59z"/><circle cx="8" cy="8" r="1.2"/></Icon>;
export const HeadsetIcon = (p) => <Icon {...p}><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></Icon>;
export const MailIcon = (p) => <Icon {...p}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></Icon>;
export const PinIcon = (p) => <Icon {...p}><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></Icon>;
export const ArrowIcon = (p) => <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6"/></Icon>;
export const FacebookIcon = (p) => <Icon {...p}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></Icon>;
export const InstagramIcon = (p) => <Icon {...p}><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></Icon>;
export const TwitterIcon = (p) => <Icon {...p}><path d="M22 5.9c-.8.35-1.6.6-2.5.7a4.3 4.3 0 0 0 1.9-2.4c-.8.5-1.8.9-2.8 1.1a4.3 4.3 0 0 0-7.3 3.9A12.2 12.2 0 0 1 2.7 4.6a4.3 4.3 0 0 0 1.3 5.7c-.7 0-1.4-.2-2-.5v.1a4.3 4.3 0 0 0 3.4 4.2c-.6.2-1.4.2-2 .1a4.3 4.3 0 0 0 4 3A8.6 8.6 0 0 1 1 19a12.2 12.2 0 0 0 6.6 1.9c7.9 0 12.2-6.6 12.2-12.2v-.5c.8-.6 1.6-1.4 2.2-2.3z"/></Icon>;
export const LinkedinIcon = (p) => <Icon {...p}><rect x="2" y="2" width="20" height="20" rx="3"/><path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 13v4"/></Icon>;
export const WhatsappIcon = (p) => <Icon {...p}><path d="M20.5 3.5A10 10 0 0 0 3.6 15.4L2 22l6.8-1.6A10 10 0 1 0 20.5 3.5z"/><path d="M8.4 8.3c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5.2.5.7 1.7.7 1.9.1.1.1.3 0 .4-.1.2-.1.3-.3.5l-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.6-.7c.2-.3.4-.2.6-.1l1.7.8c.2.1.3.2.4.3.1.2.1.9-.2 1.5-.3.6-1.5 1.3-2.1 1.3-.6 0-1.3.1-4-1.1-3.3-1.5-5.3-4.8-5.5-5-.1-.2-1-1.4-1-2.6 0-1.3.7-1.9.9-2.1z"/></Icon>;
export const CheckIcon = (p) => <Icon {...p}><path d="M20 6L9 17l-5-5"/></Icon>;
export const StarIcon = ({ filled = true, ...p }) => <Icon {...p} fill={filled ? "currentColor" : "none"}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></Icon>;
export const ClockIcon = (p) => <Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></Icon>;
export const ChevronDownIcon = (p) => <Icon {...p}><path d="M6 9l6 6 6-6"/></Icon>;
export const MenuIcon = (p) => <Icon {...p}><path d="M3 6h18M3 12h18M3 18h18"/></Icon>;
export const CloseIcon = (p) => <Icon {...p}><path d="M18 6L6 18M6 6l12 12"/></Icon>;
export const SearchIcon = (p) => <Icon {...p}><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></Icon>;
export const FlaskIcon = (p) => <Icon {...p}><path d="M9 2h6M10 2v6.5l5.5 9A2 2 0 0 1 13.7 21h-3.4a2 2 0 0 1-1.8-3.5l5.5-9V2"/></Icon>;
export const StethoscopeIcon = (p) => <Icon {...p}><path d="M4 3v6a5 5 0 0 0 10 0V3"/><path d="M9 15a5 5 0 0 0 10 0v-2"/><circle cx="19" cy="9" r="1.6"/></Icon>;
export const CalendarIcon = (p) => <Icon {...p}><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></Icon>;
export const HeartIcon = (p) => <Icon {...p}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></Icon>;
