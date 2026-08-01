import { useState } from "react";
import type { Resource } from "../types/Resource";
 
const CATEGORY_STYLES: Record<string, { bar: string; badge: string; text: string }> = {
  Documentation: { bar: "bg-[#C97B84]", badge: "bg-[#F6E2E4]", text: "text-[#8A3F49]" },
  GitHub: { bar: "bg-[#6B3A63]", badge: "bg-[#EAE0E8]", text: "text-[#5A2E53]" },
  YouTube: { bar: "bg-[#CBA135]", badge: "bg-[#FBF0D6]", text: "text-[#8A6A1C]" },
  Other: { bar: "bg-[#9C6B7A]", badge: "bg-[#F0E4E8]", text: "text-[#6B4552]" },
};
 
const getCategoryStyle = (category: string) =>
  CATEGORY_STYLES[category] ?? CATEGORY_STYLES.Other;
 
function Intern() {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [link, setLink] = useState<string>("");
 
  const [resources, setResources] = useState<Resource[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
 
  const handleAddResource = () => {
    if (
      title.trim() === "" ||
      category.trim() === "" ||
      date.trim() === "" ||
      description.trim() === "" ||
      link.trim() === ""
    ) {
      alert("Please fill all fields.");
      return;
    }
 
    if (editId !== null) {
      const updatedResources = resources.map((resource) =>
        resource.id === editId
          ? { ...resource, title, category, date, description, link }
          : resource
      );
 
      setResources(updatedResources);
      setEditId(null);
    } else {
      const newResource: Resource = {
        id: Date.now(),
        title,
        category,
        date,
        description,
        link,
      };
 
      setResources([...resources, newResource]);
    }
 
    setTitle("");
    setCategory("");
    setDate("");
    setDescription("");
    setLink("");
  };
 
  const handleDelete = (id: number) => {
    const updatedResources = resources.filter((resource) => resource.id !== id);
    setResources(updatedResources);
  };
 
  const handleEdit = (resource: Resource) => {
    setTitle(resource.title);
    setCategory(resource.category);
    setDate(resource.date);
    setDescription(resource.description);
    setLink(resource.link);
    setEditId(resource.id);
  };
 
  return (
    <div className="max-w-3xl mx-auto">
      {/* Outer frame — gilded edge around a deep plum panel */}
      <div className="rounded-[28px] p-[1.5px] bg-gradient-to-br from-[#D4AF6A] via-[#8A5A6E] to-[#4A2545] shadow-2xl">
        <div className="rounded-[27px] bg-gradient-to-b from-[#FBF3E7] to-[#F3E2E9] px-8 py-10">
 
          {/* Header — wax seal emblem */}
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#E8C87A] to-[#B4872F] shadow-lg ring-1 ring-[#8A6A1C]/40">
              <span className="text-2xl">🔖</span>
            </div>
            <h1 className="font-serif text-6xl font-light tracking-wide text-[#3B1C32]">
              Intern Vault
            </h1>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#8A5A6E]">
              Track every resource · never lose a learning link
            </p>
          </div>
 
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-[#D4AF6A]/50 to-transparent" />
 
          {/* Form card */}
          <div className="rounded-2xl bg-[#FBF3E7] p-6 shadow-inner">
            <h2 className="font-serif text-xl font-light text-[#3B1C32]">
              {editId !== null ? "Edit resource" : "New resource entry"}
            </h2>
            <p className="mb-5 mt-1 text-sm text-[#7A5A66]">
              Add a link worth remembering to your vault.
            </p>
 
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Enter title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-lg border border-[#E3D5C4] bg-white px-4 py-2.5 text-[#3B1C32] placeholder:text-[#B3A08F] outline-none transition focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/30"
              />
 
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-lg border border-[#E3D5C4] bg-white px-4 py-2.5 text-[#3B1C32] outline-none transition focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/30"
              >
                <option value="">Select category</option>
                <option value="Documentation">Documentation</option>
                <option value="GitHub">GitHub</option>
                <option value="YouTube">YouTube</option>
                <option value="Other">Other</option>
              </select>
 
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-lg border border-[#E3D5C4] bg-white px-4 py-2.5 text-[#3B1C32] outline-none transition focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/30"
              />
 
              <textarea
                placeholder="Enter description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="w-full resize-none rounded-lg border border-[#E3D5C4] bg-white px-4 py-2.5 text-[#3B1C32] placeholder:text-[#B3A08F] outline-none transition focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/30"
              />
 
              <input
                type="text"
                placeholder="Enter link..."
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="w-full rounded-lg border border-[#E3D5C4] bg-white px-4 py-2.5 text-[#3B1C32] placeholder:text-[#B3A08F] outline-none transition focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/30"
              />
 
              <button
                type="button"
                onClick={handleAddResource}
                className="w-full rounded-lg bg-gradient-to-r from-[#C9A227] to-[#B8556F] px-5 py-3 text-sm font-light uppercase tracking-wider text-[#FBF3E7] shadow-md transition hover:brightness-105 active:scale-[0.99]"
              >
                {editId !== null ? "Update resource" : "Add to vault"}
              </button>
            </form>
          </div>
 
          {/* Ledger list */}
          <div className="mt-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-serif text-lg font-light text-[#3B1C32]">
                Your ledger
              </h2>
              <span className="text-xs uppercase tracking-[0.2em] text-[#8A5A6E]">
                {resources.length} {resources.length === 1 ? "entry" : "entries"}
              </span>
            </div>
 
            {resources.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-[#8A5A6E]/40 bg-white/50 px-6 py-10 text-center">
                <p className="font-serif text-lg text-[#3B1C32]">Your vault is empty.</p>
                <p className="mt-1 text-sm text-[#8A5A6E]">
                  Add your first resource above to start your collection.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {resources.map((resource, index) => {
                  const style = getCategoryStyle(resource.category);
                  return (
                    <div
                      key={resource.id}
                      className="flex overflow-hidden rounded-xl bg-[#FBF3E7] shadow-lg"
                    >
                      <div className={`w-1.5 shrink-0 ${style.bar}`} />
                      <div className="flex-1 p-5">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <span className="text-xs font-light tracking-wide text-[#B3A08F]">
                              No. {String(index + 1).padStart(3, "0")}
                            </span>
                            <h3 className="font-serif text-lg font-light text-[#3B1C32]">
                              {resource.title}
                            </h3>
                          </div>
                          <span
                            className={`shrink-0 rounded-full px-3 py-1 text-xs font-light ${style.badge} ${style.text}`}
                          >
                            {resource.category}
                          </span>
                        </div>
 
                        <p className="mt-1 text-xs text-[#9C7F8A]">📅 {resource.date}</p>
                        <p className="mt-2 text-sm leading-relaxed text-[#5C4450]">
                          {resource.description}
                        </p>
 
                        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                          <a
                            href={resource.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-light text-[#B8556F] underline decoration-[#B8556F]/40 underline-offset-4 transition hover:text-[#8A3F49]"
                          >
                            Open resource ↗
                          </a>
 
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEdit(resource)}
                              className="rounded-lg border border-[#CBA135]/50 bg-[#FBF0D6] px-3 py-1.5 text-xs font-light text-[#8A6A1C] transition hover:bg-[#F6E2A6]"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(resource.id)}
                              className="rounded-lg border border-[#B8556F]/40 bg-[#F6E2E4] px-3 py-1.5 text-xs font-light text-[#8A3F49] transition hover:bg-[#EFC9CD]"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Intern;