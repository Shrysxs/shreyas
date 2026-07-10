export type Project = {
  /** Stable unique identifier (used as list key/anchor). */
  id: string;
  title: string;
  /** One-line tagline. */
  tagline: string;
  /**
   * Project period for display and sorting.
   * Use "MM.YYYY" format. Omit `end` for ongoing projects.
   */
  period: {
    /** Start date (e.g., "05.2025"). */
    start: string;
    /** End date; leave undefined for "Present". */
    end?: string;
  };
  /** Public URL / Live link. */
  link: string;
  /** Optional GitHub / Repository link. */
  repo?: string;
  /** Tags/technologies for chips or filtering. */
  skills: string[];
  /** Long rich description; Markdown and line breaks supported (expanded detail view). */
  description?: string;
  /** Tightened 1-2 line version for the compact list view. */
  shortDescription: string;
  /** Logo image URL (absolute or path under /public). */
  logo?: string;
  /** Whether the project card is expanded by default in the UI. */
  isExpanded?: boolean;
};
