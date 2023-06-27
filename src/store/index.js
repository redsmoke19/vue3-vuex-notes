import { getTrimString } from "@/common/helpers/utils"
import { createStore } from "vuex"

export const store = createStore({
  state: {
    notes: [],
    tags: ["Home", "Travel", "Works"]
  },

  mutations: {
    setLocalNotes(state, payload) {
      state.notes = payload;
    },
    setNotes(state, payload) {
      state.notes.unshift(payload)
    },
    setRemoveNote(state, note) {
      state.notes = state.notes.filter((item) => item !== note);
    },
    setEditNote: (state, payload) => {
      state.notes.map((item) => {
        if (item === payload.note) {
          item.name = payload.newNote;
        }
      });
    }
  },

  actions: {
    setLocalNotes: (context, payload) => {
      context.commit("setLocalNotes", payload)
    },
    setNotes: (context, payload) => {
      const newNote = {
        name: getTrimString(payload.noteText),
        tags: payload.tags
      }

      context.commit("setNotes", newNote)
    },
  },

  getters: {
    getNotes: (state) => state.notes,
    getTags: (state) => state.tags
  }
})
