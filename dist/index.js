(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // node_modules/.pnpm/@finsweet+ts-utils@0.40.0/node_modules/@finsweet/ts-utils/dist/webflow/getPublishDate.js
  var getPublishDate = (page = document) => {
    const publishDatePrefix = "Last Published:";
    for (const node of page.childNodes) {
      if (node.nodeType === Node.COMMENT_NODE && node.textContent?.includes(publishDatePrefix)) {
        const publishDateValue = node.textContent.trim().split(publishDatePrefix)[1];
        if (publishDateValue)
          return new Date(publishDateValue);
      }
    }
  };

  // src/utils/greet.js
  var greetUser = (name) => {
    const publishDate = getPublishDate();
    console.log(`Hello ${name}!`);
    console.log(
      `This site was last published on ${publishDate ? publishDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit"
      }) : "unknown"}.`
    );
  };

  // src/utils/helloWorld.js
  var helloworld = () => {
    console.log("Hello, World!");
  };

  // src/utils/byeworld.js
  var byworld = () => {
    console.log("Goodby, World!");
  };

  // src/index.js
  window.Webflow ||= [];
  window.Webflow.push(() => {
    const name = "John Doe";
    greetUser(name);
    helloworld();
    byworld();
  });
})();
//# sourceMappingURL=index.js.map
