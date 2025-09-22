import React from "react";
import { FlatList, View } from "react-native";
import EmptyNotes from "./EmptyNotes";
import NoteItem from "./NoteItem";

interface NoteListProps {
  notes: Note[];
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
}

const NoteList = ({ notes, onEdit, onDelete }: NoteListProps) => {
  return (
    <View>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <NoteItem note={item} onEdit={onEdit} onDelete={onDelete} />
        )}
        ListEmptyComponent={<EmptyNotes />}
      />
    </View>
  );
};

export default NoteList;
