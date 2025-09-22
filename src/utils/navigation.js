import navigations from '@/data/navigations.json';

// Function to get localized navigation items for a specific locale
export function getLocalizedNavigationItems(locale) {
    const href = `/${locale}`;
    return Object.entries(navigations).map(([key, value]) => ({
        key,
        // ...value,
        href: `${href}/${value[locale]?.slug || key}`,
        label: value[locale]?.label
    }));
}

// Function to get localized href for a specific page
export function getLocalizedHref(pageKey, locale) {
    return `/${locale}/${navigations[pageKey]?.[locale]?.slug || pageKey}`;
}

// Function to get the canonical page key from a localized slug
export function getPageKeyFromSlug(slug, locale) {
    for (const [pageKey, pageData] of Object.entries(navigations)) {
        if (pageData[locale]?.slug === slug) {
            return pageKey;
        }
    }
    return null;
}
