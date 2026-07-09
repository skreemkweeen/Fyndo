export default {
  logo: <span>Fyndo Developer Portal</span>,
  project: {
    link: "https://github.com/fyndo/fyndo",
  },
  docsRepositoryBase: "https://github.com/fyndo/fyndo/tree/main/apps/docs",
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Fyndo Docs",
    };
  },
};
