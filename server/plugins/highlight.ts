export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("content:file:beforeParse", (file) => {
    if (file._id.endsWith(".md")) {
      file.body = file.body.replace(
        /==([^=]+)==/gs,
        `<span class="highlight">$1</span>`
      );
    }
  });
});
