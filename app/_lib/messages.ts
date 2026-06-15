// Copyright © Todd Agriscience, Inc. All rights reserved.

/**
 * Minimal stand-in for next-intl's `useTranslations`. Resolves dot-separated
 * paths (and numeric array indices, e.g. `list.0`) against a plain message
 * object, scoped to a root key. Just enough to render the static legal pages
 * without pulling in next-intl / locale routing.
 */
export function makeT(
  messages: unknown,
  rootKey: string
): (path: string) => string {
  const root = (messages as Record<string, unknown>)[rootKey];
  return (path: string): string => {
    const value = path.split('.').reduce<unknown>((acc, key) => {
      if (acc == null) return undefined;
      return (acc as Record<string, unknown>)[key];
    }, root);
    if (typeof value !== 'string') {
      throw new Error(`Missing translation for "${rootKey}.${path}"`);
    }
    return value;
  };
}
