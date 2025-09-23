import database from "./databaseService";

const notesService = {
  async getNotes(userId: string): Promise<Note[] | { error: unknown }> {
    const response = await database.list(`notes_${userId}`);

    if ("error" in response) {
      return { error: response.error };
    }

    return response as Note[];
  },

  async addNote(
    userId: string,
    text: string
  ): Promise<Note | { error: unknown }> {
    if (!text) {
      return { error: "Note text cannot be empty" };
    }

    const response = await database.create(`notes_${userId}`, { text });

    if ("error" in response) {
      return { error: response.error };
    }

    return response as Note;
  },

  async updateNote(
    userId: string,
    id: string,
    noteText: string
  ): Promise<Note | { error: unknown }> {
    const response = await database.update(`notes_${userId}`, id, {
      text: noteText,
    });

    if ("error" in response) {
      return { error: response.error };
    }

    return response as Note;
  },

  async deleteNote(
    userId: string,
    id: string
  ): Promise<{ success: true } | { error: unknown }> {
    const response = await database.delete(`notes_${userId}`, id);

    if ("error" in response) {
      return { error: response.error };
    }

    return { success: true };
  },
};

export default notesService;
