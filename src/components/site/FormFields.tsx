import { cn } from "@/lib/utils";

const base =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/25";

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-navy">
      {children}
    </label>
  );
}

function Error({ message }: { message?: string | undefined }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs font-medium text-destructive">{message}</p>;
}

export function Field({
  name,
  label,
  type = "text",
  placeholder,
  error,
}: {
  name: string;
  label: string;
  type?: string | undefined;
  placeholder?: string | undefined;
  error?: string | undefined;
}) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={!!error}
        className={cn(base, error && "border-destructive")}
      />
      <Error message={error} />
    </div>
  );
}

export function SelectField({
  name,
  label,
  options,
  error,
}: {
  name: string;
  label: string;
  options: string[];
  error?: string | undefined;
}) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <select id={name} name={name} defaultValue="" aria-invalid={!!error} className={cn(base, error && "border-destructive")}>
        <option value="" disabled>
          -- Chọn --
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <Error message={error} />
    </div>
  );
}

export function TextareaField({
  name,
  label,
  placeholder,
  error,
  rows = 4,
}: {
  name: string;
  label: string;
  placeholder?: string | undefined;
  error?: string | undefined;
  rows?: number | undefined;
}) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        placeholder={placeholder}
        aria-invalid={!!error}
        className={cn(base, "resize-y", error && "border-destructive")}
      />
      <Error message={error} />
    </div>
  );
}