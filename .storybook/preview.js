
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#fff'
      },
      {
        name: 'light',
        value: '#F4F6F8'
      },
      {
        name: 'dark',
        value: '#121721'
      }
    ]
  }
}