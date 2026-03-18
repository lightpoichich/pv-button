<template>
  <div class="pv-button">
    <div class="pv-button__inner" :style="cssVars">
      <PvButton
        :label="props.content?.label || 'Button'"
        :severity="props.content?.severity || 'primary'"
        :outlined="props.content?.variant === 'outlined'"
        :text="props.content?.variant === 'text'"
        :rounded="props.content?.rounded"
        :disabled="props.content?.disabled"
        unstyled
        :pt="passthrough"
      />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { installPrimeVue } from '../shared/install-primevue.js';
import Button from 'primevue/button';

export default {
  components: {
    PvButton: Button,
  },
  props: {
    uid: { type: String, required: true },
    content: { type: Object, required: true },
    wwElementState: { type: Object, default: () => ({}) },
    /* wwEditor:start */
    wwEditorState: { type: Object, required: true },
    /* wwEditor:end */
  },
  setup(props) {
    installPrimeVue();

    const passthrough = {
      root: { class: 'pv-button__root' },
      label: { class: 'pv-button__label' },
    };

    const severityColors = {
      primary: {
        bg: 'var(--pv-primary, #3B82F6)',
        hover: 'var(--pv-primary-hover, #1e40af)',
        text: 'var(--pv-primary-contrast, #ffffff)',
      },
      secondary: {
        bg: 'var(--pv-neutral, #64748b)',
        hover: '#475569',
        text: '#ffffff',
      },
      success: {
        bg: 'var(--pv-success, #22C55E)',
        hover: '#16a34a',
        text: '#ffffff',
      },
      danger: {
        bg: 'var(--pv-danger, #EF4444)',
        hover: '#dc2626',
        text: '#ffffff',
      },
      warning: {
        bg: 'var(--pv-warning, #F59E0B)',
        hover: '#d97706',
        text: '#000000',
      },
      info: {
        bg: 'var(--pv-primary, #3B82F6)',
        hover: 'var(--pv-primary-hover, #1e40af)',
        text: '#ffffff',
      },
      contrast: {
        bg: 'var(--pv-text, #0f172a)',
        hover: '#334155',
        text: 'var(--pv-surface, #f8fafc)',
      },
    };

    const cssVars = computed(() => {
      const severity = props.content?.severity || 'primary';
      const variant = props.content?.variant || 'filled';
      const rounded = props.content?.rounded;
      const colors = severityColors[severity] || severityColors.primary;

      const vars = {};

      if (variant === 'outlined') {
        vars['--btn-bg'] = 'transparent';
        vars['--btn-text'] = colors.bg;
        vars['--btn-hover'] = colors.bg;
        vars['--btn-hover-text'] = colors.text;
        vars['--btn-border'] = '1px solid ' + colors.bg;
      } else if (variant === 'text') {
        vars['--btn-bg'] = 'transparent';
        vars['--btn-text'] = colors.bg;
        vars['--btn-hover'] = 'var(--pv-primary-light, #dbeafe)';
        vars['--btn-hover-text'] = colors.bg;
        vars['--btn-border'] = 'none';
      } else {
        // filled
        vars['--btn-bg'] = colors.bg;
        vars['--btn-text'] = colors.text;
        vars['--btn-hover'] = colors.hover;
        vars['--btn-hover-text'] = colors.text;
        vars['--btn-border'] = 'none';
      }

      vars['--btn-radius'] = rounded
        ? 'var(--pv-radius-full, 9999px)'
        : 'var(--pv-radius, 8px)';

      return vars;
    });

    return { props, passthrough, cssVars };
  },
};
</script>

<style scoped lang="scss">
@import '../shared/styles/base';
@import '../shared/styles/tokens';

.pv-button {
  &__inner {
    display: inline-flex;
  }

  &__root {
    @include pv-btn-base;
    background-color: var(--btn-bg);
    color: var(--btn-text);
    border: var(--btn-border, none);
    border-radius: var(--btn-radius);

    &:hover:not(:disabled) {
      background-color: var(--btn-hover);
      color: var(--btn-hover-text);
    }

    &:focus-visible {
      @include pv-focus-ring;
    }
  }

  &__label {
    // Inherit from root
  }
}
</style>
