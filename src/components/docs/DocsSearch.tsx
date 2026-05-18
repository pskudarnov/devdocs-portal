import { Search, Filter, Layers, ListFilter, ChevronDown } from "lucide-react";
import { docCategories, docDifficulties } from "@/data/docs";

type Props = {
  query: string;
  category: string;
  difficulty: string;
  sort: string;
  hasActiveFilters: boolean;
  onReset: () => void;
  setQuery: (v: string) => void;
  setCategory: (v: string) => void;
  setDifficulty: (v: string) => void;
  setSort: (v: string) => void;
};

function SelectWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-on-surface-variant" />
    </div>
  );
}

export function DocsSearch(props: Props) {
  return (
    <div className="grid gap-4 bg-surface-container-highest/40 p-4 backdrop-blur-md md:grid-cols-4 md:p-5">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="search-input"
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant"
        >
          <Search className="h-3 w-3" />
          Search
        </label>

        <input
          id="search-input"
          value={props.query}
          onChange={(e) => props.setQuery(e.target.value)}
          aria-label="Search docs by keyword"
          className="w-full rounded-lg border border-outline-variant/35 bg-surface-container px-4 py-2.5 text-sm text-on-surface transition-[border-color,background-color,box-shadow] duration-200 ease-out focus:border-primary/60 focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-primary),transparent_80%)] motion-reduce:transition-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="category-select"
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant"
        >
          <Filter className="h-3 w-3" />
          Category
        </label>

        <SelectWrapper>
          <select
            id="category-select"
            value={props.category}
            onChange={(e) => props.setCategory(e.target.value)}
            className="w-full appearance-none rounded-lg border border-outline-variant/35 bg-surface-container px-4 py-2.5 pr-10 text-sm text-on-surface transition-[border-color,background-color,box-shadow] duration-200 ease-out focus:border-primary/60 focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-primary),transparent_80%)] motion-reduce:transition-none"
          >
            <option value="all">All Categories</option>
            {docCategories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </SelectWrapper>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="difficulty-select"
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant"
        >
          <Layers className="h-3 w-3" />
          Difficulty
        </label>

        <SelectWrapper>
          <select
            id="difficulty-select"
            value={props.difficulty}
            onChange={(e) => props.setDifficulty(e.target.value)}
            className="w-full appearance-none rounded-lg border border-outline-variant/35 bg-surface-container px-4 py-2.5 pr-10 text-sm text-on-surface transition-[border-color,background-color,box-shadow] duration-200 ease-out focus:border-primary/60 focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-primary),transparent_80%)] motion-reduce:transition-none"
          >
            <option value="all">All Levels</option>
            {docDifficulties.map((difficulty) => (
              <option key={difficulty}>{difficulty}</option>
            ))}
          </select>
        </SelectWrapper>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="sort-select"
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant"
        >
          <ListFilter className="h-3 w-3" />
          Sort
        </label>

        <SelectWrapper>
          <select
            id="sort-select"
            value={props.sort}
            onChange={(e) => props.setSort(e.target.value)}
            className="w-full appearance-none rounded-lg border border-outline-variant/35 bg-surface-container px-4 py-2.5 pr-10 text-sm text-on-surface transition-[border-color,background-color,box-shadow] duration-200 ease-out focus:border-primary/60 focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-primary),transparent_80%)] motion-reduce:transition-none"
          >
            <option value="popular">Popular First</option>
            <option value="updated">Recently Updated</option>
            <option value="az">Alphabetical (A-Z)</option>
          </select>
        </SelectWrapper>
      </div>

      {props.hasActiveFilters ? (
        <div className="md:col-span-4">
          <button
            type="button"
            onClick={props.onReset}
            className="rounded-lg border border-outline-variant/35 bg-surface-container px-4 py-2 text-sm font-semibold text-on-surface transition-[border-color,background-color,transform] duration-200 ease-out hover:border-primary/50 hover:bg-surface-variant active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100"
          >
            Reset filters
          </button>
        </div>
      ) : null}
    </div>
  );
}
