export const required = (v: string | null) => !!v || 'Field is required'

export const blogValidationRules = {
  title: [(v: string | null) => !!v || 'Title is required'],
  text: [(v: string | null) => !!v || 'Content is required'],
  author: [(v: string | null) => !!v || 'Author is required']
}
