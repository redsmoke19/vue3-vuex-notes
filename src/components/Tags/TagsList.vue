<script setup>
defineEmits("onTagClick");
const props = defineProps({
  items: {
    type: Array,
    required: true,
  }
})
</script>

<template>
  <div class="tags">
    <ul class="tags__list">
      <li class="tags__item" v-for="item in props.items" :key="item.name">
        <button
          type="button"
          class="tags__name"
          :class="{ 'is-active': item.isActive }"
          @click="$emit('onTagClick', item)"
        >
          {{ item.name ?? item }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.tags {
  $root: &;

  &.is-note {
    #{$root}__list {
      margin: 0;
      padding: 0;
      line-height: 1.2;
    }

    #{$root}__item {
      &:not(:last-child) {
        margin: 0 10px 0 0;
      }
    }

    #{$root}__name {
      padding: 0;
      border: none;
      cursor: default;
      font-size: 14px;
      line-height: 1.2;
    }
  }

  &__list {
    padding: 10px 0;
    display: flex;
    justify-content: center;
    margin: 0 0 30px 0;
  }

  &__item {
    display: flex;
    &:not(:last-child) {
      margin: 0 15px 0 0;
    }
  }

  &__name {
    padding: 8px 22px;
    background-color: #fff;
    border-radius: 22px;
    user-select: none;
    cursor: pointer;
    color: #444ce0;
    transition: all ease-out 0.3s;

    &.is-active {
      color: #ffffff;
      background-color: #444ce0;
    }

    &:before {
      content: "#";
    }

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
