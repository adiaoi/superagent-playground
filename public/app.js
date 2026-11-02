import { renderDocument } from '../src/markdown.js';

const input = document.getElementById('input');
const preview = document.getElementById('preview');
const save = document.getElementById('save');

const draw = () => { preview.innerHTML = renderDocument(input.value); };
input.addEventListener('input', draw);
save.addEventListener('click', () => { localStorage.setItem('draft', input.value); });
draw();
