var portal = require('/lib/xp/portal');

var processedHtml = portal.processHtml({
  value: '<a href="content://123" target="">Content</a>' +
         '<a href="media://inline/123" target="">Inline</a>' +
         '<a href="media://download/123" target="">Download</a>'
});
