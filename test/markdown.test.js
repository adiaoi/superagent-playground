import test from 'node:test';
import assert from 'node:assert/strict';
import { renderInline, renderDocument } from '../src/markdown.js';

test('双波浪号渲染为删除线', () => {
  assert.equal(renderInline('~~作废~~'), '<del>作废</del>');
});

test('单个波浪号不是删除线', () => {
  assert.equal(renderInline('增长 10~20%'), '增长 10~20%');
});

test('粗体与斜体', () => {
  assert.equal(renderInline('**重点**和*提示*'), '<strong>重点</strong>和<em>提示</em>');
});

test('整篇渲染保留空行', () => {
  const html = renderDocument('第一行\n\n第三行');
  assert.equal(html.split('\n').length, 3);
});
