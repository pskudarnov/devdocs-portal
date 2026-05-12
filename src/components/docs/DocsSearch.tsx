import { Search, Filter, Layers, ListFilter } from "lucide-react";

type Props = {
  query: string;
  category: string;
  difficulty: string;
  sort: string;
  setQuery: (v: string) => void;
  setCategory: (v: string) => void;
  setDifficulty: (v: string) => void;
  setSort: (v: string) => void;
};

export function DocsSearch(props: Props) {
  return (
    <div className="grid gap-6 p-6 md:grid-cols-4 bg-surface-container-highest/30 backdrop-blur-md">
      <div className="flex flex-col gap-2">
        <label htmlFor="search-input" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
          <Search className="h-3 w-3" />
          Search
        </label>
        <input
          id="search-input"
          value={props.query}
          onChange={(e) => props.setQuery(e.target.value)}
          placeholder="Keyword search..."
          className="w-full rounded-xl border border-outline-variant/30 bg-surface-container px-4 py-2.5 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all outline-none"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="category-select" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
          <Filter className="h-3 w-3" />
          Category
        </label>
        <select
          id="category-select"
          value={props.category}
          onChange={(e) => props.setCategory(e.target.value)}
          className="w-full rounded-xl border border-outline-variant/30 bg-surface-container px-4 py-2.5 text-sm text-on-surface appearance-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all outline-none"
        >
          <option value="all">All Categories</option>
          <option>Getting Started</option>
          <option>API</option>
          <option>Components</option>
          <option>Guides</option>
          <option>Deployment</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="difficulty-select" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
          <Layers className="h-3 w-3" />
          Difficulty
        </label>
        <select
          id="difficulty-select"
          value={props.difficulty}
          onChange={(e) => props.setDifficulty(e.target.value)}
          className="w-full rounded-xl border border-outline-variant/30 bg-surface-container px-4 py-2.5 text-sm text-on-surface appearance-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all outline-none"
        >
          <option value="all">All Levels</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="sort-select" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
          <ListFilter className="h-3 w-3" />
          Sort
        </label>
        <select
          id="sort-select"
          value={props.sort}
          onChange={(e) => props.setSort(e.target.value)}
          className="w-full rounded-xl border border-outline-variant/30 bg-surface-container px-4 py-2.5 text-sm text-on-surface appearance-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all outline-none"
        >
          <option value="popular">Popular First</option>
          <option value="updated">Recently Updated</option>
          <option value="az">Alphabetical (A-Z)</option>
        </select>
      </div>
    </div>
  );
}
