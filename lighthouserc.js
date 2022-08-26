module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      staticDistDir: "./dist",
      url: [
        "/"
      ]
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};