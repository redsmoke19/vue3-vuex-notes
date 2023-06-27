<script setup>
import { getStringLength, getTrimString } from '@/common/helpers/utils';
import TagsList from '../Tags/TagsList.vue';
import { ref, nextTick } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
  notes: {
    type: Array,
    required: true,
  }
});
const store = useStore();
const editingItem = ref(null);
const newNote = ref(null);
const errorInput = ref(false);
const input = ref(null);

const onRemove = (note) => {
  store.commit("setRemoveNote", note);
};

const getEdited = (note) => {
  editingItem.value = note;
  newNote.value = editingItem.value.name;

  nextTick(() => {
    input.value[0].focus();
  })
};

const getAcceptChanges = (note) => {
  if (!getStringLength(newNote.value)) {
    errorInput.value = true;
    nextTick(() => {
      input.value[0].focus();
    });
    return;
  }

  errorInput.value = false;

  newNote.value = getTrimString(newNote.value);
  store.commit("setEditNote", {
    note,
    newNote: newNote.value
  });

  editingItem.value = null;
  newNote.value = null;
};
</script>

<template>
  <ul class="notes" v-if="props.notes && props.notes.length > 0">
    <li
      class="notes__item"
      :class="{ 'is-error': note === editingItem ? errorInput : '' }"
      v-for="(note, idx) in props.notes"
      :key="idx"
    >
      <button @click="onRemove(note)" class="notes__remove" type="button">
        &#10005;
      </button>
      <div class="notes__wrapper">
        <div class="notes__inner" v-if="editingItem === note">
          <input
            v-model="newNote"
            type="text"
            class="notes__input"
            ref="input"
            @keydown.enter="getAcceptChanges(note)"
          />
          <button @click="getAcceptChanges(note)" class="notes__accept">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="256"
              height="256"
              viewBox="0 0 256 256"
            >
              <g
                style="
                  stroke: none;
                  stroke-width: 0;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: none;
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
              >
                <circle
                  cx="45"
                  cy="45"
                  r="45"
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 10;
                    fill: rgb(44, 116, 221);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform="  matrix(1 0 0 1 0 0) "
                />
                <path
                  d="M 38.478 66 c -0.013 0 -0.026 0 -0.039 0 c -1.733 -0.012 -3.377 -0.771 -4.508 -2.085 L 20.453 48.263 c -2.162 -2.511 -1.879 -6.299 0.632 -8.462 c 2.51 -2.163 6.299 -1.879 8.462 0.632 l 8.991 10.441 l 21.967 -24.848 c 2.194 -2.485 5.988 -2.716 8.469 -0.521 c 2.483 2.195 2.717 5.986 0.521 8.469 l -26.522 30 C 41.834 65.263 40.197 66 38.478 66 z"
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 10;
                    fill: rgb(255, 255, 255);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform=" matrix(1 0 0 1 0 0) "
                  stroke-linecap="round"
                />
              </g>
            </svg>
          </button>
        </div>
        <div v-else class="notes__inner">
          <span class="notes__text">
            {{ note.name }}
          </span>

          <button
            @click="getEdited(note)"
            :disabled="errorInput"
            class="notes__edit"
            type="button"
          >
            <svg
              fill="#000000"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 306.637 306.637"
            >
              <path
                d="M12.809,238.52L0,306.637l68.118-12.809l184.277-184.277l-55.309-55.309L12.809,238.52z M60.79,279.943l-41.992,7.896
			l7.896-41.992L197.086,75.455l34.096,34.096L60.79,279.943z"
              />
              <path
                d="M251.329,0l-41.507,41.507l55.308,55.308l41.507-41.507L251.329,0z M231.035,41.507l20.294-20.294l34.095,34.095
			L265.13,75.602L231.035,41.507z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="notes__tags" v-if="note.tags && note.tags.length > 0">
        <tags-list class="is-note" :items="note.tags" />
      </div>
    </li>
  </ul>
  <p class="notes__additive" v-else>Добавьте вашу первую заметку</p>
</template>

<style scoped lang="scss">
.notes {
  padding: 40px 0;
  max-width: 600px;
  margin: 0 auto;

  &__item {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 18px 20px 18px 40px;
    margin-bottom: 20px;
    border-radius: 14px;
    background-color: #ffffff;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);
    border: 1px solid transparent;

    &:focus-within {
      border: 1px solid lightblue;
    }

    &.is-error {
      border: 1px solid #f65828;
    }

    &:hover {
      box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);

      .notes__edit {
        opacity: 1;
        pointer-events: all;

        &:hover {
          opacity: 0.5;
        }
      }
    }
  }

  &__wrapper {
    display: flex;
    align-items: center;
    width: 100%;
  }

  &__inner {
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: space-between;
  }

  &__tags {
    margin: 10px 0 0 0;
  }

  &__input {
    padding: 0;
    margin: 0;
    border-radius: 10px;
    border: none;
    font-family: inherit;
    line-height: inherit;
  }

  &__remove,
  &__edit,
  &__accept {
    padding: 0;
    background-color: transparent;
    border: none;
    margin: 0 10px 0 0;
    cursor: pointer;
    transition: opacity ease-out 0.2s;
    position: absolute;

    svg {
      height: 20px;
      width: 20px;
    }

    &:hover {
      opacity: 0.5;
    }
  }

  &__remove {
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  &__edit {
    opacity: 0;
    pointer-events: none;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  &__accept {
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  &__additive {
    font-size: 22px;
    line-height: 26px;
    padding: 40px 0 0;
    max-width: 600px;
    margin: 0 auto;
    color: rgba(#212121, 0.7);
  }
}
</style>