/** 把一行 Markdown 渲染成 HTML。 */
export function renderInline(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/~~(.+?)~~/g, '<del>$1</del>')
    .replace(/~(.+?)~/g, '<del>$1</del>');
}

/** 按行渲染整篇文档，空行转为空段落。 */
export function renderDocument(text) {
  return text
    .split('\n')
    .map((line) => (line.trim() === '' ? '<p class="blank"></p>' : `<p>${renderInline(line)}</p>`))
    .join('\n');
}
