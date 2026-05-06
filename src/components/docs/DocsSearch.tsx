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
    <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 md:grid-cols-4">
      <label className="text-sm">
        Search
        <input
          aria-label="Search docs"
          value={props.query}
          onChange={(e) => props.setQuery(e.target.value)}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        />
      </label>
      <label className="text-sm">
        Category
        <select
          aria-label="Category filter"
          value={props.category}
          onChange={(e) => props.setCategory(e.target.value)}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        >
          <option value="all">All</option>
          <option>Getting Started</option>
          <option>API</option>
          <option>Components</option>
          <option>Guides</option>
          <option>Deployment</option>
        </select>
      </label>
      <label className="text-sm">
        Difficulty
        <select
          aria-label="Difficulty filter"
          value={props.difficulty}
          onChange={(e) => props.setDifficulty(e.target.value)}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        >
          <option value="all">All</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
      </label>
      <label className="text-sm">
        Sort
        <select
          aria-label="Sort docs"
          value={props.sort}
          onChange={(e) => props.setSort(e.target.value)}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        >
          <option value="popular">Popular</option>
          <option value="updated">Recently updated</option>
          <option value="az">A-Z</option>
        </select>
      </label>
    </div>
  );
}
