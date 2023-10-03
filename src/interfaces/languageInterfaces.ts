// Supported languages
export const languages = ['en', 'fi', 'sv'] as const;

export type Language = (typeof languages)[number];
