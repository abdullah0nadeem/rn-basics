import database from "./database";

const notesService = {
  async getNotes(): Promise<Note[] | { error: unknown }> {
    const response = await database.list("notes");

    if ("error" in response) {
      return { error: response.error };
    }

    return response as Note[];
  },

  async addNote(text: string): Promise<Note | { error: unknown }> {
    if (!text) {
      return { error: "Note text cannot be empty" };
    }

    const response = await database.create("notes", { text: text });

    if ("error" in response) {
      return { error: response.error };
    }

    return response as Note;
  },

  async updateNote(
    id: string,
    noteText: string
  ): Promise<Note | { error: unknown }> {
    const response = await database.update("notes", id, { text: noteText });

    if ("error" in response) {
      return { error: response.error };
    }

    return response as Note;
  },

  async deleteNote(
    id: string
  ): Promise<{ success: true } | { error: unknown }> {
    const response = await database.delete("notes", id);

    if ("error" in response) {
      return { error: response.error };
    }

    return { success: true };
  },
};

export default notesService;
