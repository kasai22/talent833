"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getYear = () => new Date().getFullYear();
/** No year in the prerendered shell (Cache Components forbids `new Date()` there); the browser fills it in. */
const getServerYear = () => null;

/** The current year, rendered in the browser so it is never stale in a cached page. */
export function CurrentYear() {
  const year = useSyncExternalStore(subscribe, getYear, getServerYear);
  return <span className="inline-block min-w-[4ch] tabular-nums">{year}</span>;
}
