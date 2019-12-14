<template>
  <button
    class="cell"
    :class="{
      open: cell.is_open,
      flagged: cell.is_flagged,
    }"
    @click="handleOpenClick"
    @click.right.prevent="handleToggleFlagClick"
  >
    <span v-if="cell.is_open">{{ cell.bombs_around ? cell.bombs_around : '' }}</span>
    <img v-if="cell.has_bomb" src="@/assets/img/bomb.svg" />
    <img v-if="cell.is_flagged" src="@/assets/img/flag.svg" />
  </button>
</template>

<script lang="ts">
/* eslint-disable no-unused-expressions */
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'Cell',
  props: {
    cell: Object,
  },
  methods: {
    ...mapActions({
      openCell: 'mines/openCell',
      toggleFlagCell: 'mines/toggleFlagCell',
    }),
    handleOpenClick() {
      const {
        is_open,
        col, row,
        is_flagged,
      } = this.cell;

      if (is_open || is_flagged) {
        return null;
      }

      const cell_position = {
        col,
        row,
      };

      this.openCell(cell_position);

      return null;
    },

    handleToggleFlagClick() {
      const { is_open, col, row } = this.cell;
      if (is_open) {
        return null;
      }

      const cell_position = {
        col,
        row,
      };

      this.toggleFlagCell(cell_position);

      return null;
    },
  },
});
</script>

<style scoped lang="scss">
.cell {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border: 3px inset #ccc;
  background-color: #f5f5f5;
  cursor: pointer;
  transition:
    background-color 0.25s ease,
    color 0.25s ease;
  user-select: none;
  color: transparent;
  font-weight: bold;
  outline: none;

  & img {
    width: 12px;
    height: 12px;
  }

  &:hover {
    background-color: #e5e5e5;
  }

  &:active {
    background-color: #c2c2c2;
  }

  &.open {
    background-color: #fefefe;
    border: 1px solid #ccc;
    color: black;

  }

  &.flagged {
  }
}
</style>