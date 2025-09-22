import AddNoteModal from "@/components/AddNoteModal";
import NoteList from "@/components/NoteList";
import { Note } from "@/interfaces/Note";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const initalNotes: Note[] = [
  { id: "1", text: "Notes one" },
  { id: "2", text: "Notes two" },
  { id: "3", text: "Notes three" },
];

const NotesScreen = () => {
  const [notes, setNotes] = useState(initalNotes);
  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState("");

  //Add new note
  const addNote = () => {
    if (newNote.trim() === "") return;

    setNotes((prevNotes) => [
      ...prevNotes,
      { id: Date.now.toString(), text: newNote },
    ]);

    setNewNote("");
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Note List */}
      <NoteList notes={notes} />

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
});

export default NotesScreen;
