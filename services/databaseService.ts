import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDocs,
  QueryDocumentSnapshot,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebaseConfig";

interface FirestoreDocument {
  id: string;
  [key: string]: any;
}

const databaseService = {
  async list(
    collectionName: string
  ): Promise<FirestoreDocument[] | { error: unknown }> {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      return querySnapshot.docs.map(
        (doc: QueryDocumentSnapshot<DocumentData>) => ({
          id: doc.id,
          ...doc.data(),
        })
      );
    } catch (error) {
      console.error(`Error fetching documents:`, error);
      return { error };
    }
  },
  async create<T extends object>(
    collectionName: string,
    data: T
  ): Promise<FirestoreDocument | { error: unknown }> {
    try {
      const docRef = await addDoc(collection(db, collectionName), data);
      return { id: docRef.id, ...data };
    } catch (error) {
      console.error(`Error creating document:`, error);
      return { error };
    }
  },
  async update<T extends object>(
    collectionName: string,
    id: string,
    data: T
  ): Promise<FirestoreDocument | { error: unknown }> {
    try {
      await updateDoc(doc(db, collectionName, id), data);
      return { id: id, ...data };
    } catch (error) {
      console.error(`Error updating document:`, error);
      return { error };
    }
  },
  async delete(
    collectionName: string,
    id: string
  ): Promise<{ success: true } | { error: unknown }> {
    try {
      await deleteDoc(doc(db, collectionName, id));
      return { success: true };
    } catch (error) {
      console.error(`Error deleting document: ${error}`);
      return { error };
    }
  },
};

export default databaseService;
