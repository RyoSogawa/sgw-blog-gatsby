/* eslint-disable @typescript-eslint/no-var-requires */
// cf. https://zenn.dev/ryo_kawamata/articles/gatsby-ts-2020
'use strict'

require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
})

require('./src/__generated__/gatsby-types')

const {
  createPages,
  onCreateNode,
  createSchemaCustomization,
} = require('./src/lib/gatsby-node')

exports.createPages = createPages
exports.onCreateNode = onCreateNode
exports.createSchemaCustomization = createSchemaCustomization
