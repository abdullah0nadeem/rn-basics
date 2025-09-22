import AddNoteModal from "@/components/AddNoteModal";
import NoteList from "@/components/NoteList";
import notesService from "@/services/notes";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const NotesScreen = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    setIsLoading(true);
    setError(null);

    const response = await notesService.getNotes();

    if ("error" in response) {
      setError(response.error);
    } else {
      setNotes(response);
    }

    setIsLoading(false);
  };

  //Add new note
  const addNote = async () => {
    if (newNote.trim() === "") return;

    const response = await notesService.addNote(newNote);

    if ("error" in response) {
      Alert.alert("Error:", `${response.error}`);
    } else {
      setNotes([response, ...notes]);
    }

    setNewNote("");
    setModalVisible(false);
  };

  // Edit Note
  const editNote = async (id: string, newText: string) => {
    if (!newText.trim()) {
      Alert.alert("Error", "Note text cannot be empty");
      return;
    }

    const response = await notesService.updateNote(id, newText);

    if ("error" in response) {
      Alert.alert("Error:", `${response.error}`);
    } else {
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === id ? { ...note, text: response.text } : note
        )
      );
    }
  };

  // Delete Note
  const deleteNote = async (id: string) => {
    Alert.alert("Delete Note", "Are you sure you want to delete note?", [
      { text: "Canel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          const response = await notesService.deleteNote(id);
          if ("error" in response) {
            Alert.alert("Error:", `${response.error}`);
          } else {
            setNotes(notes.filter((note) => note.id !== id));
          }
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : (
        <>
          {error && <Text style={styles.errorText}>{error as string}</Text>}
          <NoteList notes={notes} onEdit={editNote} onDelete={deleteNote} />
        </>
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+ Add Note</Text>
      </TouchableOpacity>

      {/* Modal */}
      <AddNoteModal
        isVisible={modalVisible}
        setIsVisible={setModalVisible}
        newNote={newNote}
        setNewNote={setNewNote}
        addNewNote={addNote}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 16,
  },
});

export default NotesScreen;
