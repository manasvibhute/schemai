import { create } from "zustand";

export const useSchemaStore = create((set) => ({
  schema: { tables: [], relations: [] },

  setSchema: (schema) => set({ schema }),

  updateTable: (tableId, data) =>
    set((state) => ({
      schema: {
        ...state.schema,
        tables: state.schema.tables.map((t) =>
          t.id === tableId ? { ...t, ...data } : t
        ),
      },
    })),
}));
