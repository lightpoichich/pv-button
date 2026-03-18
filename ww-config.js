export default {
  editor: {
    label: { en: 'PV Button' },
    icon: 'cursor-click',
    customSettingsPropertiesOrder: [
      'label',
      'severity',
      'variant',
      'rounded',
      'disabled',
    ],
  },
  triggerEvents: [],
  properties: {
    label: {
      label: { en: 'Label' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'Button',
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'The button text label',
      },
      /* wwEditor:end */
    },
    severity: {
      label: { en: 'Severity' },
      type: 'TextSelect',
      section: 'settings',
      options: {
        options: [
          { value: 'primary', label: { en: 'Primary' } },
          { value: 'secondary', label: { en: 'Secondary' } },
          { value: 'success', label: { en: 'Success' } },
          { value: 'danger', label: { en: 'Danger' } },
          { value: 'warning', label: { en: 'Warning' } },
          { value: 'info', label: { en: 'Info' } },
          { value: 'contrast', label: { en: 'Contrast' } },
        ],
      },
      defaultValue: 'primary',
      bindable: true,
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip:
          'Button severity: primary | secondary | success | danger | warning | info | contrast',
      },
      /* wwEditor:end */
    },
    variant: {
      label: { en: 'Variant' },
      type: 'TextSelect',
      section: 'settings',
      options: {
        options: [
          { value: 'filled', label: { en: 'Filled' } },
          { value: 'outlined', label: { en: 'Outlined' } },
          { value: 'text', label: { en: 'Text' } },
        ],
      },
      defaultValue: 'filled',
      bindable: true,
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Button variant: filled | outlined | text',
      },
      /* wwEditor:end */
    },
    rounded: {
      label: { en: 'Rounded' },
      type: 'OnOff',
      section: 'settings',
      defaultValue: false,
      bindable: true,
      /* wwEditor:start */
      bindingValidation: {
        type: 'boolean',
        tooltip: 'A boolean for pill-shaped corners: true | false',
      },
      /* wwEditor:end */
    },
    disabled: {
      label: { en: 'Disabled' },
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      defaultValue: false,
      /* wwEditor:start */
      bindingValidation: {
        type: 'boolean',
        tooltip: 'A boolean to disable the button: true | false',
      },
      /* wwEditor:end */
    },
  },
};
