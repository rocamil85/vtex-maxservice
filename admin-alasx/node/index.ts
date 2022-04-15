import { Service } from '@vtex/api'

export default new Service({
  graphql: {
    resolvers: {
      Query: {
        alasx: () => `Service number: ${Math.random()}`,
      },
    },
  },
})